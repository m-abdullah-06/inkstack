'use client';

import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {

const [image, setImage] = useState(false);
const [authorImage, setAuthorImage] = useState(false);
const [data, setData] = useState({
    title:"",
    description:"",
    category:"Startup",
    author:"",
    author_img:""
})

    const onChnageHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]:value}));
        console.log(data);
    }

    const handleAuthorImageChange = (e) => {
        const file = e.target.files[0];
        setAuthorImage(file);
        // Save to localStorage
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                localStorage.setItem('authorImage', event.target.result);
                window.dispatchEvent(new Event('authorImageChanged'));
            };
            reader.readAsDataURL(file);
        }
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        if(!authorImage) {
            toast.error("Please upload author image");
            return;
        }
        
        //submit data to backend
        const formData = new FormData();
        formData.append('image', image);
        formData.append('author_img', authorImage);
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);

        const response =  await axios.post('/api/Blog', formData);
        if(response.data.success){
            toast.success(response.data.msg);
            setData({title:"",description:"",category:"Startup",author:"",author_img:""});
            setImage(false);
            setAuthorImage(false);
        }else{
            toast.error("Error in creating post");
        }

    }
    return (
        <>
        <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 pl-16'>
            <p className='text-xl'>Upload Thumbnail</p>
            <label htmlFor="image">
                <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=""/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
            <p className='text-xl mt-4'>Post Title</p>
            <input name='title' onChange={onChnageHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder="Enter Post Title" required/>
            <p className='text-xl mt-4'>Author Name</p>
            <input name='author' onChange={onChnageHandler} value={data.author} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder="Enter Author Name" required/>
            <p className='text-xl mt-4'>Author Image</p>
            <label htmlFor="author_img">
                <Image className='mt-4' src={!authorImage?assets.profile_icon:URL.createObjectURL(authorImage)} width={100} height={100} alt=""/>
            </label>
            <input onChange={handleAuthorImageChange} type="file" id="author_img" hidden required/>
            <p className='text-xl mt-4'>Post Description</p>
            <textarea name='description' onChange={onChnageHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder="Enter Post Description" rows={7} required/>
            <p className='text-xl mt-4'>Post Category</p>
            <select name="category" onChange={onChnageHandler} value={data.category} className='w-full sm:w-[500px] mt-4 px-4 py-3 border'>
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="startup">Startup</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="nature">Nature</option>
                <option value="music">Music</option>
            </select><br/>
            <button type="submit" className='mt-8 w-40 h-12 bg-black text-white cursor-pointer'>Add Post</button>
        </form>

        </>)

}

export default page;