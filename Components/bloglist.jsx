import { blog_data } from "@/Assets/assets";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogItem from "./blogitem";

const BlogList = () => {
    const [menu,setMenu] = useState('All');

    const [blogs,setBlogs] = useState([]);
    
    const fetchBlogs = async () => {
        const response = await axios.get('/api/Blog');
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);

    }

    useEffect(() => {
        fetchBlogs();
    }, []);
    
    return (
        <div>
            <div className='flex justify-center gap-6 my-10'>
                <button onClick={()=>setMenu('All')} className={menu === 'All' ? 'bg-[#9e7a3d] text-black px-4 py-2 rounded-full cursor-pointer' : 'bg-black/40 border-2 border-[#9e7a3d]/20 text-[#a3947d] px-4 py-2 rounded-full cursor-pointer'}>All</button>
                <button onClick={()=>setMenu('Technology')} className={menu === 'Technology' ? 'bg-[#9e7a3d] text-black px-4 py-2 rounded-full cursor-pointer' : 'bg-black/40 border-2 border-[#9e7a3d]/20 text-[#a3947d] px-4 py-2 rounded-full cursor-pointer'}>Technology</button>
                <button onClick={()=>setMenu('Startup')} className={menu === 'Startup' ? 'bg-[#9e7a3d] text-black px-4 py-2 rounded-full cursor-pointer' : 'bg-black/40 border-2 border-[#9e7a3d]/20 text-[#a3947d] px-4 py-2 rounded-full cursor-pointer'}>Startup</button>
                <button onClick={()=>setMenu('Lifestyle')} className={menu === 'Lifestyle' ? 'bg-[#9e7a3d] text-black px-4 py-2 rounded-full cursor-pointer' : 'bg-black/40 border-2 border-[#9e7a3d]/20 text-[#a3947d] px-4 py-2 rounded-full cursor-pointer'}>Lifestyle</button>
                <button onClick={()=>setMenu('Nature')} className={menu === 'Nature' ? 'bg-[#9e7a3d] text-black px-4 py-2 rounded-full cursor-pointer' : 'bg-black/40 border-2 border-[#9e7a3d]/20 text-[#a3947d] px-4 py-2 rounded-full cursor-pointer'}>Nature</button>
                <button onClick={()=>setMenu('Music')} className={menu === 'Music' ? 'bg-[#9e7a3d] text-black px-4 py-2 rounded-full cursor-pointer' : 'bg-black/40 border-2 border-[#9e7a3d]/20 text-[#a3947d] px-4 py-2 rounded-full cursor-pointer'}>Music</button>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blogs.filter(item => menu === 'All' || item.category.toLowerCase() === menu.toLowerCase()).map((item, index) =>{
                    return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
                })}
                
            </div>

        </div>



    )



}

export default BlogList;