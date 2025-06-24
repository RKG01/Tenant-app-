'use server'
import {db} from '@/db/index'
import {CreateBlogType,blogsTable} from '@/db/schema'
export const createBlog = async (payload:CreateBlogType)=>{
    const [result] =await db.insert(blogsTable).values(payload).returning({
        id:blogsTable.id
    });
    return result.id;

}
    