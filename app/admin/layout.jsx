'use client';

import Sidebar from "@/Components/Admin components/sidebar";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

export default function Layout({ children }) {
    const [authorImage, setAuthorImage] = useState(null);

    useEffect(() => {
        // Load initial image from localStorage
        const saved = localStorage.getItem('authorImage');
        if (saved) setAuthorImage(saved);

        // Listen for image changes
        const handleImageChange = () => {
            const saved = localStorage.getItem('authorImage');
            if (saved) setAuthorImage(saved);
        };

        window.addEventListener('authorImageChanged', handleImageChange);
        return () => window.removeEventListener('authorImageChanged', handleImageChange);
    }, []);

return (
    <>
        <div className='flex'>
            <ToastContainer theme="dark" />
         <Sidebar   />
         <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black'>
                <h3 className='font-medium'>Admin Panel</h3>
                <Image src={authorImage || assets.profile_icon} width={40} height={40} alt="" className='rounded-full'/>

            </div>
            {children}
         </div>
        </div>

    </>
)

}