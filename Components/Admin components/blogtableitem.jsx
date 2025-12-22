'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import axios from 'axios';

const BlogItemTable = ({author, deleteBlog, id}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('/api/Blog');
                setBlogs(response.data.blogs || []);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <>
            {blogs.map((blog) => (
                <tr key={blog._id} className='border-b border-gray-300 hover:bg-gray-100'>
                    <th scope="row" className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                        <Image src={blog.author_img || assets.profile_icon} alt="" width={40} height={40} className='rounded-full'/>
                        <p>{author?author:"No Author"}</p>
                    </th>
                    <td className='px-6 py-4 text-sm text-gray-900'>{blog.title || "No Title"}</td>
                    <td className='px-6 py-4 text-sm text-gray-900'>{new Date(blog.date).toLocaleDateString()}</td>
                    <td className='px-6 py-4 text-sm text-gray-900 cursor-pointer' onClick={() => deleteBlog(blog._id)}>x</td>
                </tr>
            ))}
        </>
    )
};

export default BlogItemTable;