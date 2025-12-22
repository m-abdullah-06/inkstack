'use client'
import BlogList from "@/Components/bloglist";
import Footer from "@/Components/footer";
import Header from "@/Components/header";
import { ToastContainer } from "react-toastify";


export default function Home() {
  return (
    <>
    <ToastContainer theme="dark" />
    <Header/>
    <BlogList/>
    <Footer/>
    </>
  )
}
