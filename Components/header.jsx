

import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

const Header = () => {

    const [email, setEmail] = useState("");
    const onSubmitHandler = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        const response = await axios.post('/api/email', formData);
        if(response.data.success){
            toast.success("Subscription Successful");
            setEmail("");
        } else {
            toast.error("Subscription Failed");
        }
    }
    return (
        
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
                <Link href="/admin">
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 bg-[#846B44] text-[#0D0D0D] border border-solid border-[#D4AF37] shadow-[-7px_7px_0px_#D4AF37] cursor-pointer hover:bg-[#D4AF37] transition duration-300 font-bold rounded'>Get Started <Image src={assets.arrow} alt=''/></button></Link>
            </div>
            <div className='text-center my-8'>
                <h1 className='mt-20 text-3xl sm:text-5xl font-bold text-[#e8c78e]'>Turn Ideas into Impactful Stories</h1>
                <p className='mt-10 max-w-[750px] m-auto text-sm sm:text-base text-[#E8D3B0] font-semibold'>Every idea starts small-this is where it becomes a story.</p>
                <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 bg-transparent border border-[#e8c78e] shadow-[-7px_7px_0px_#e8c78e] rounded' action="">
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' className='pl-4 outline-none placeholder:text-[#A3947D]' />
                    <button type='submit' className='border-l border-gray-500 bg-[#9e7a3d] font-bold py-4 px-4 sm:px-8 active:bg-gray-600 hover:bg-[#d4af37] hover:cursor-pointer transition duration-300'>Subscribe</button>
                </form>
            </div>


        </div>
    )

}

export default Header