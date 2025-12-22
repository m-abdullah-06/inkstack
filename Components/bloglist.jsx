import { blog_data } from "@/Assets/assets";
import React from "react";
import BlogItem from "./blogitem";

const BlogList = () => {
    return (
        <div>
            <div className='flex justify-center gap-6 my-10'>
                <button className='bg-black text-white px-4 py-2 rounded'>All</button>
                <button>Technology</button>
                <button>Startup</button>
                <button>Lifestyle</button>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blog_data.map((item, index) =>{
                    return <BlogItem key={index} image={item.image} title={item.title} description={item.description} category={item.category} />
                })}
                
            </div>

        </div>



    )



}

export default BlogList;