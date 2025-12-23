import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const BlogItem = ({title, description, category, image, id}) => {
    return (
        <div className='max-w-[350px] sm:max-w-[330px] bg-[#121316] border border-[#322c24] hover:shadow-[-7px_7px_0px_#9e7a3d] cursor-pointer rounded-md transition duration-300'>
            <Link href={`/blog/${id}`}>
            <Image src={image} alt='' width={400} height={400} className='border-b border-black'/>
            </Link>
            <p className='ml-5 mt-5 px-3 py-1 inline-block bg-[#9e7a3d] text-white text-sm rounded-full'>{category}</p>
            <div className="p5">
                <h5 className='ml-5 mt-5 mb-3 text-lg font-bold tracking-tight text-[#e8c78e]'>{title}</h5>
                <p className='ml-5 mb-3 text-[#8e8271] text-sm tracking-tight' dangerouslySetInnerHTML={{__html:description.slice(0, 120)}}></p>
                <Link href={`/blog/${id}`} className='inline-flex items-center py-2 px-2 font-semibold text-center ml-3 text-[#e8c78e] border-b border-transparent hover:border hover:border-[#e8c78e] transition duration-300 rounded-full'>
                    Read More <Image src={assets.arrow} alt='' className='inline-block ml-2 color-[#e8c78e]' width={12}/>
                </Link>
            </div>




        </div>



    )











}

export default BlogItem;