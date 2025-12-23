import React from "react";

const subscriptiontableitem = ({email, date, deleteEmails, id}) => {
     const formatDate = (dateValue) => {
        if (!dateValue) return "No Date";
        
        try {
            const emailDate = new Date(dateValue);
            // Check if date is valid
            if (isNaN(emailDate.getTime())) {
                return "Invalid Date";
            }
            return emailDate.toDateString();
        } catch (error) {
            return "Invalid Date";
        }
    };
    return (

        <tr className='bg-[#121316] border-b text-left'>

            <th scope='row' className='px-6 py-4 font-medium text-[#9e7a3d] whitespace-nowrap'>
                {email?email:"No Email"}
            </th>
            <td className='px-6 py-4 text-sm text-[#c4b7a5] hidden sm:block'>{formatDate(date)}</td>
            <td className='px-6 py-4 text-sm text-[#9e7a3d] cursor-pointer' onClick={()=>deleteEmails(id)} >x</td>
        </tr>


    )

}

export default subscriptiontableitem;