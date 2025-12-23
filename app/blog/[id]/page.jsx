"use client";
import React, { useEffect,useState } from "react";
import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Footer from "@/Components/footer";
import Link from "next/link";
import axios from "axios";


const page = ({ params: paramsPromise }) => {
    
    const [data,setData] = useState(null);

    const fetchBlogData = async () => {
        // Params is now a Promise, so await it
        const params = await paramsPromise;
        
        // Fetch from database
        try {
            const response = await axios.get(`/api/Blog?id=${params.id}`);
            setData(response.data.blog);
        } catch (error) {
            console.error("Error fetching blog:", error);
        }
    }

    
        useEffect(() => {
            fetchBlogData();
        }, [paramsPromise]);
    
    return (data?<>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
               <Link href="/"><Image src={assets.logo} width={180} alt="" className='w-130px sm:w-auto' /></Link>

                <Link href="/admin">
                                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000] cursor-pointer'>Get Started <Image src={assets.arrow} alt=''/></button></Link>

            </div>
            <div className='text-center my-24'>
                <h1 className='text-3xl md:text-5xl font-bold max-w-[700px] mx-auto'>{data.title}</h1>
                <Image src={data.author_img} alt='' width={60} height={60} className='mt-10 mx-auto border border-black rounded-full'/>
                <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
            </div>
           
            
        </div>
         <div className='mx-5 max-w-[800] md:mx-auto mt-[-70px] mb-10'>
            <Image src={data.image} alt='' width={1280} height={720} className='border border-black shadow-[-7px_7px_0px_#000]'/>
            <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
            
            <div className='post-content' dangerouslySetInnerHTML={{__html:data.description}}></div>
            <div className='my-24'>
                <p className='text-black font-semibold my-4'>Share this article on:</p>
                <div className='flex'>
                    <Image src={assets.facebook_icon} alt='' width={50} height={50} className='cursor-pointer'/>
                    <Image src={assets.twitter_icon} alt='' width={50} height={50} className='cursor-pointer'/>
                    <Image src={assets.googleplus_icon} alt='' width={50} height={50} className='cursor-pointer'/>
                </div>
            </div>
        </div>
        <Footer />
        
        </>:<></>
    )
}
export default page;