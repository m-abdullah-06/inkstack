import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db";
import { Blog } from "@/lib/config/models/blogmodel";
import {writeFile} from "fs/promises";
import { log } from "console";
import { mkdir } from "fs/promises";
import { join } from "path";

const fs = require('fs');

let dbConnected = false;

const LoadDB = async () => {
    if (dbConnected) return;
    try {
        await ConnectDB();
        dbConnected = true;
    } catch (error) {
        console.error("DB Connection Error:", error);
        throw error;
    }
}
// API Endpoint for fetching Posts
export async function GET (request){
    try {
        await LoadDB();
        
        const blogId = request.nextUrl.searchParams.get("id");
        
        if (blogId) {
            const blog = await Blog.findById(blogId);
            return NextResponse.json({blog});
        }
        else {
            const blogs = await Blog.find({});
            return NextResponse.json({blogs});
        }
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
// API Endpoint for uploading Posts
export async function POST (request){
    try {
        await LoadDB();
        
        const formData = await request.formData();
        const timestamp = Date.now();
        const image = formData.get('image');
        const authorImage = formData.get('author_img');
        
        if (!image) {
            return NextResponse.json({error: "No image provided"}, {status: 400});
        }
        
        if (!authorImage) {
            return NextResponse.json({error: "No author image provided"}, {status: 400});
        }
        
        // Create public directory if it doesn't exist
        const publicDir = join(process.cwd(), 'public');
        await mkdir(publicDir, { recursive: true });
        
        // Save main blog image
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = join(publicDir, `${timestamp}_${image.name}`);
        await writeFile(path, buffer);
        const imageUrl = `/${timestamp}_${image.name}`;
        
        // Save author image
        const authorImageByteData = await authorImage.arrayBuffer();
        const authorBuffer = Buffer.from(authorImageByteData);
        const authorPath = join(publicDir, `author_${timestamp}_${authorImage.name}`);
        await writeFile(authorPath, authorBuffer);
        const authorImageUrl = `/author_${timestamp}_${authorImage.name}`;
        
        const blogData = {  
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            author: formData.get('author'),
            image: imageUrl,
            author_img: authorImageUrl,
        }

        const savedBlog = await Blog.create(blogData);
        console.log("Blog saved:", savedBlog);

        return NextResponse.json({success:true,msg:"Blog created successfully"});
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({error: error.message, details: error.stack}, {status: 500});
    }


}

//creating API endpoint for deleting post
export async function DELETE (request){
    try {
        await LoadDB();
        const blogId = request.nextUrl.searchParams.get("id");
        if (!blogId) {
            return NextResponse.json({error: "No blog ID provided"}, {status: 400});
        }
        const blog = await Blog.findByIdAndDelete(blogId);
        fs.unlink(`./public/${blog.image}`, ()=>{});
        return NextResponse.json({msg:"Post deleted successfully"});
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({error: error.message, details: error.stack}, {status: 500});
    }
}