import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const BlogItem = ({title, description, category, image, id}) => {
    return (
        <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000] cursor-pointer'>
            <Link href={`/blog/${id}`}>
            <Image src={image} alt='' width={400} height={400} className='border-b border-black'/>
            </Link>
            <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
            <div className="p5">
                <h5 className='ml-5 mt-5 mb-3 text-lg font-bold tracking-tight text-gray-900'>{title}</h5>
                <p className='ml-5 mb-3 text-gray-700 text-sm tracking-tight'>{description}</p>
                <Link href={`/blog/${id}`} className='inline-flex items-center py-2 font-semibold text-center ml-5'>
                    Read More <Image src={assets.arrow} alt='' className='inline-block ml-2' width={12}/>
                </Link>
            </div>




        </div>



    )











}

export default BlogItem;