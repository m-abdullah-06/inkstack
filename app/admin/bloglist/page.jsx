'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import BlogItemTable from "@/Components/Admin components/blogtableitem";

const page = () => {

    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const reponse = await axios.get('/api/Blog');
        setBlogs(reponse.data.blogs);
    }
    useEffect(() => {
        fetchBlogs();
    }, []);

    const deleteBlogs = async (id) => {
        const response = await axios.delete(`/api/Blog?id=${id}`);
        toast.success(response.data.msg);
        fetchBlogs();
    }

    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 pl-16 bg-[#121316]'>
            <h1 className='text-xl font-bold text-[#9e7a3d]'>All Blogs</h1>
            <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-[#9e7a3d] scrollbar-hide'>
                <table className='w-full text-sm text-gray-700'>
                    <thead className='text-sm text-[#9e7a3d] text-left bg-[#121316] border-b border-[#9e7a3d] uppercase'>
                        <tr>
                            <th className='hidden sm:block p-2' scope="col">Author Name</th>
                            <th className='p-2' scope="col">Post Title</th>
                            <th className='p-2' scope="col">Date</th>
                            <th className='p-2' scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((item, index) => {
                                return <BlogItemTable key={index} author={item.author} title={item.title} author_img={item.author_img} date={item.date} deleteBlog={deleteBlogs} />
                        })}
                        
                    </tbody>
                    
                </table>
            </div>

        </div>)

}

export default page;