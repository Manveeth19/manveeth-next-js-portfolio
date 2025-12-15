// components/sections/ProfileCardWrapper.tsx
"use client";

import React from 'react';
import ProfileCard from '@/components/ui/ProfileCard';

// Define the necessary data props needed from the Server Component
interface ProfileCardWrapperProps {
    name: string;
    title: string;
    handle: string;
    status: string;
    contactText: string;
    avatarUrl: string;
    miniAvatarUrl: string;
    showUserInfo: boolean;
    enableTilt: boolean;
    enableMobileTilt: boolean;
}

const ProfileCardWrapper: React.FC<ProfileCardWrapperProps> = (props) => {

    // DEFINE THE FUNCTION HERE, INSIDE THE CLIENT COMPONENT
    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <ProfileCard 
            {...props} 
            onContactClick={handleContactClick} // Pass the client-defined function
        />
    );
};

export default ProfileCardWrapper;