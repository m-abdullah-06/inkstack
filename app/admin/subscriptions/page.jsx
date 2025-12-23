'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import SubsTableItem from "@/Components/Admin components/SubsTableItem";
import { toast } from "react-toastify";

const Page = () => {
    const [emails, setEmails] = useState([]);
    
    const fetchEmails = async () => {
        try {
            const response = await axios.get('/api/email');
            setEmails(response.data.emails);
        } catch (error) {
            console.error('Fetch emails error:', error);
            toast.error("Failed to fetch subscriptions");
        }
    }
    
    const deleteEmails = async (id) => {
        console.log('Deleting email with ID:', id); // Debug log
        
        if (!id) {
            toast.error("Invalid email ID");
            return;
        }
        
        try {
            const response = await axios.delete(`/api/email?id=${id}`);  // Fixed: parentheses around backticks
            if(response.data.success){
                toast.success(response.data.msg);
                fetchEmails(); // Refresh the list after deletion
            }
            else{
                toast.error("Failed to delete subscription");
            }
        } catch (error) {
            console.error('Delete error:', error);
            toast.error("Failed to delete subscription");
        }
    }
    
    useEffect(() => {
        fetchEmails();
    }, []);
    
    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 pl-16 bg-[#121316]'>
            <h1 className='text-xl font-bold text-[#9e7a3d]'>All Subscriptions</h1>
            <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-[#9e7a3d] scrollbar-hide'>
                <table className='w-full text-sm text-[#9e7a3d]'>
                    <thead className='text-sm text-left text-[#9e7a3d] uppercase bg-[#121316]'>
                        <tr>
                            <th className='p-2 border-b border-black' scope="col">Email</th>
                            <th className='p-2 border-b border-black hidden sm:block' scope="col">Subscribed On</th>
                            <th className='p-2 border-b border-black' scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emails.map((item, index) => {
                            return <SubsTableItem 
                                key={item._id || index}
                                id={item._id}
                                email={item.email} 
                                date={item.subscribedAt} 
                                deleteEmails={deleteEmails} 
                            />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Page;