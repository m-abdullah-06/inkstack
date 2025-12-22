import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,  // Automatically convert to lowercase
        trim: true,       // Remove whitespace
        validate: {
            validator: function(v) {
                return /^\S+@\S+\.\S+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    subscribedAt: { 
        type: Date, 
        default: Date.now 
    },
    isActive: { 
        type: Boolean, 
        default: true 
    }
}, {
    timestamps: true  // Adds createdAt and updatedAt
});

// Create index for better query performance
emailSchema.index({ email: 1 });

// Prevent duplicate model compilation in Next.js hot reload
export const Email = mongoose.models.Email || mongoose.model('Email', emailSchema);