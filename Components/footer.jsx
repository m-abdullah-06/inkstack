import Image from "next/image";
import { assets } from "@/Assets/assets";
import React from "react";

const Footer = () => {

    return (

        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
            <Image src={assets.logo_light} alt='' width={160} />
            <p className='text-white text-sm'>© 2024 InkStack. All rights reserved.</p>
            <div className='flex'>
                <Image src={assets.facebook_icon} alt='' width={50} className='mx-2 cursor-pointer'/>
                <Image src={assets.twitter_icon} alt='' width={50} className='mx-2 cursor-pointer'/>
                <Image src={assets.googleplus_icon} alt='' width={50} className='mx-2 cursor-pointer'/>
            </div>


        </div>


    )





}

export default Footer