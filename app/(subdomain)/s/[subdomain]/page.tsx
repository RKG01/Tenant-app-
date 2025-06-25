import {clerkClient} from '@clerk/nextjs/server'
import {blogsTable }  from '@/db/schema'
import {db}  from '@/db/index'
import { eq } from "drizzle-orm";
interface Params {
  subdomain: string;
}

export default async function homepage({ params } :{params:Promise<Params>}) {
    const {subdomain} = await params
    const client = await clerkClient();
    const org =  await client.organizations.getOrganization({slug:subdomain});
    const orgID = org.id

    const blogs = await db.select().from(blogsTable).where(eq(
        blogsTable.orgId,
        orgID
    ))


   return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {blogs.map((blog, index) => (
    <div
      key={index}
      className="bg-gradient-to-br from-[#1f2937] to-[#111827] text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl ring-1 ring-white/10 hover:ring-white/20 transition duration-300 ease-in-out"
    >
      <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
      <p className="text-lg font-light">{blog.body}</p>
    </div>
  ))}
</div>

  );
}
