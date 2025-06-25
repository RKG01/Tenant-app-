"use client"
import * as React from 'react';
import Nav from "@/app/components/nav"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {createBlog} from './actions'
import {useOrganization} from '@clerk/nextjs'


export default function OrganisationLandingPage() {

      const [blogContent,setBlogContent] = React.useState("");
      const [blogTitle, setBlogTitle] = React.useState("");

      const selectedOrg = useOrganization(); 
      console.log(selectedOrg);

      const handleCreateBlog= async ()=>{
        if(!selectedOrg.organization?.id) return
          await createBlog({
            body:blogContent.trim(),
            orgId:selectedOrg.organization?.id,
            title: blogTitle.trim()

          })
      }
      console.log(blogContent);
  return (
    <main className='flex flex-col gap-4'>
        <Nav/>
        
        
        <div className='flex flex-col  gap-2' >
          <Input  placeholder='Title'  value={blogTitle}  onChange={e=>setBlogTitle(e.target.value)}/>
          <Textarea value={blogContent} placeholder='write blog...'  onChange={e=>setBlogContent(e.target.value)}/>
            <Button  onClick={handleCreateBlog}>crate blog</Button>
        </div>
    </main>
  )
}
