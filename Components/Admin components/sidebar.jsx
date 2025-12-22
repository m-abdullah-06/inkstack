import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-200 '>
            <div className='px-2 sm:pl-14 py-3 border border-black'>
                <Image src={assets.logo} width={150} alt=""/>
            </div>
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
                <Link href='/admin/addproduct' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-7px_7px_0px_#000] cursor-pointer mb-5'>
                    <Image src={assets.add_icon} alt="" width={28} />
                    <p className='text-sm'>Add New Post</p>
                </Link>
                <Link href='/admin/bloglist' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-7px_7px_0px_#000] cursor-pointer mb-5'>
                    <Image src={assets.blog_icon} alt="" width={28} />
                    <p className='text-sm'>Blog Lists</p>
                </Link>
                <Link href='/admin/subscriptions' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-7px_7px_0px_#000] cursor-pointer mb-5'>
                    <Image src={assets.email_icon} alt="" width={28} />
                    <p className='text-sm'>Subscriptions</p>
                </Link>
            </div>


        </div>
    )   

}

export default Sidebar; 