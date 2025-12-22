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
                <button onClick={()=>setMenu('All')} className={menu === 'All' ? 'bg-black text-white px-4 py-2 rounded' : 'bg-gray-100 text-black px-4 py-2 rounded'}>All</button>
                <button onClick={()=>setMenu('Technology')} className={menu === 'Technology' ? 'bg-black text-white px-4 py-2 rounded' : 'bg-gray-100 text-black px-4 py-2 rounded'}>Technology</button>
                <button onClick={()=>setMenu('Startup')} className={menu === 'Startup' ? 'bg-black text-white px-4 py-2 rounded' : 'bg-gray-100 text-black px-4 py-2 rounded'}>Startup</button>
                <button onClick={()=>setMenu('Lifestyle')} className={menu === 'Lifestyle' ? 'bg-black text-white px-4 py-2 rounded' : 'bg-gray-100 text-black px-4 py-2 rounded'}>Lifestyle</button>
                <button onClick={()=>setMenu('Nature')} className={menu === 'Nature' ? 'bg-black text-white px-4 py-2 rounded' : 'bg-gray-100 text-black px-4 py-2 rounded'}>Nature</button>
                <button onClick={()=>setMenu('Music')} className={menu === 'Music' ? 'bg-black text-white px-4 py-2 rounded' : 'bg-gray-100 text-black px-4 py-2 rounded'}>Music</button>
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