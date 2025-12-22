import { ConnectDB } from '@/lib/config/db';
import { Email } from '@/lib/config/models/emailmodel';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        // Connect to DB
        await ConnectDB();
        
        // Parse form data
        const formData = await request.formData();
        const email = formData.get('email') || formData.get('Email');
        
        // Validate email
        if (!email) {
            return NextResponse.json(
                { success: false, msg: "Email is required" },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, msg: "Invalid email format" },
                { status: 400 }
            );
        }

        // Check if email already exists
        const existingEmail = await Email.findOne({ email: email.toLowerCase() });
        if (existingEmail) {
            return NextResponse.json(
                { success: false, msg: "Email already subscribed" },
                { status: 409 }
            );
        }

        // Create new email subscription
        await Email.create({ email: email.toLowerCase().trim() });
        
        return NextResponse.json(
            { success: true, msg: "Subscribed successfully" },
            { status: 201 }
        );

    } catch (error) {
        console.error('Email subscription error:', error);
        
        // Handle duplicate key error (if unique index catches it)
        if (error.code === 11000) {
            return NextResponse.json(
                { success: false, msg: "Email already subscribed" },
                { status: 409 }
            );
        }
        
        return NextResponse.json(
            { success: false, msg: "Failed to subscribe. Please try again." },
            { status: 500 }
        );
    }
}
export async function GET(request) {
    try {
        // Connect to DB
        await ConnectDB();
        const emails = await Email.find({});
        return NextResponse.json({ success: true, emails }, { status: 200 });
    } catch (error) {
        console.error('Fetch subscriptions error:', error);
        return NextResponse.json(
            { success: false, msg: "Failed to fetch subscriptions." },
            { status: 500 }
        );
    }
}

export async function DELETE(request) {
    try {
        // Connect to DB
        await ConnectDB();
        const emailId = request.nextUrl.searchParams.get("id");
        await Email.findByIdAndDelete(emailId);
        return NextResponse.json({ success: true, msg: "Subscription deleted." }, { status: 200 });
    } catch (error) {
        console.error('Delete subscription error:', error);
        return NextResponse.json(
            { success: false, msg: "Failed to delete subscription." },
            { status: 500 }
        );
    }
}