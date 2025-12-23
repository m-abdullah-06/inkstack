import Image from "next/image";
import { assets } from "@/Assets/assets";
import React from "react";

const Footer = () => {

    return (

        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-[#0d0d0d] py-5 items-center'>
            <Image src={assets.logo} alt='' width={160} />
            <p className='text-[#8e8271] text-sm'>© 2024 InkStack. All rights reserved.</p>
            <div className="flex gap-4">
  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/muhammad-abdullah-09390938a" className="w-10 h-10 rounded-full bg-[#322C24] flex items-center justify-center transition-all duration-300 hover:bg-[#9E7A3D] group">
    <svg className="w-5 h-5 fill-[#E8C78E] group-hover:fill-[#0A0B0E]" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  </a>

  {/* GitHub */}
  <a href="https://github.com/m-abdullah-06" className="w-10 h-10 rounded-full bg-[#322C24] flex items-center justify-center transition-all duration-300 hover:bg-[#9E7A3D] group">
    <svg className="w-5 h-5 fill-[#E8C78E] group-hover:fill-[#0A0B0E]" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  </a>

  {/* Fiverr */}
  <a href="https://www.fiverr.com/madeby_abd/create-a-professional-wordpress-website-using-elementor?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=320466029b0d49319f4e70a19fb8f694&context=recommendation&pckg_id=1&pos=2&context_alg=recently_viewed&seller_online=true&imp_id=4e2fed13-3e24-40b8-9e61-f5cbc8845445#" className="w-10 h-10 rounded-full bg-[#322C24] flex items-center justify-center transition-all duration-300 hover:bg-[#9E7A3D] group">
    <svg className="w-6 h-6 fill-[#E8C78E] group-hover:fill-[#0A0B0E]" viewBox="0 0 512 512">
      <path d="M416 160h-64v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v128h128v-96zM320 352h-96v-96H96v128h224v-32zM96 160h128v96h32V128c0-35.3-28.7-64-64-64H96v96z" />
      <circle cx="128" cy="128" r="32"/>
      <path d="M352 256h-64v96h32v-64h32v-32z"/>
    </svg>
  </a>
</div>


        </div>


    )





}

export default Footer