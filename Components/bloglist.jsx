import { blog_data } from "@/Assets/assets";
import React, { useState } from 'react';
import BlogItem from "./blogitem";

const BlogList = () => {
    const [menu,setMenu] = useState('All');
    
    
    
    
    
    return (
        <div>
            <div className='flex justify-center gap-6 my-10'>
                <button onClick={()=>setMenu('All')} className={menu === 'All' ? 'bg-black text-white px-4 py-2 rounded' : 'bg-gray-100 text-black px-4 py-2 rounded'}>All</button>
                <button onClick={()=>setMenu('Technology')} className={menu === 'Technology' ? 'bg-black text-white px-4 py-2 rounded' : 'bg-gray-100 text-black px-4 py-2 rounded'}>Technology</button>
                <button onClick={()=>setMenu('Startup')} className={menu === 'Startup' ? 'bg-black text-white px-4 py-2 rounded' : 'bg-gray-100 text-black px-4 py-2 rounded'}>Startup</button>
                <button onClick={()=>setMenu('Lifestyle')} className={menu === 'Lifestyle' ? 'bg-black text-white px-4 py-2 rounded' : 'bg-gray-100 text-black px-4 py-2 rounded'}>Lifestyle</button>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blog_data.filter(item => menu === 'All' || item.category === menu).map((item, index) =>{
                    return <BlogItem key={index} image={item.image} title={item.title} description={item.description} category={item.category} />
                })}
                
            </div>

        </div>



    )



}

export default BlogList;