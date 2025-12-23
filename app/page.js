'use client'
import BlogList from "@/Components/bloglist";
import Footer from "@/Components/footer";
import Header from "@/Components/header";
import { ToastContainer } from "react-toastify";


export default function Home() {
  return (
    <div className = 'bg-[url("/images/bgimg.jpg")] bg-no-repeat bg-cover'>
    <ToastContainer theme="dark" />
    <Header/>
    <BlogList/>
    <Footer/>
    </div>
  )
}
