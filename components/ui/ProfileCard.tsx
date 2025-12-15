// components/ui/ProfileCard.tsx
"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ProfileCardProps {
    name: string;
    title: string;
    handle: string;
    status: string;
    contactText: string;
    avatarUrl: string; // URL for the large avatar image
    miniAvatarUrl: string; // URL for the mini avatar image
    showUserInfo: boolean;
    enableTilt: boolean;
    enableMobileTilt: boolean;
    onContactClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    title,
    handle,
    status,
    contactText,
    avatarUrl,
    miniAvatarUrl,
    showUserInfo,
    enableTilt,
    enableMobileTilt,
    onContactClick,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    // --- Tilt/Mouse Tracking Logic ---
    const handlePointerMove = useCallback((event: PointerEvent | MouseEvent | TouchEvent) => {
        if (!cardRef.current || !enableTilt) return;

        const rect = cardRef.current.getBoundingClientRect();
        let clientX, clientY;

        if ('touches' in event) {
            if (!enableMobileTilt) return;
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        } else {
            clientX = event.clientX;
            clientY = event.clientY;
        }

        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const pointerFromLeft = x / rect.width;
        const pointerFromTop = y / rect.height;

        // Rotation values: max rotation is -5deg to 5deg
        const rotateY = (0.5 - pointerFromTop) * 10; 
        const rotateX = (pointerFromLeft - 0.5) * 10; 

        if (cardRef.current) {
            // Apply CSS variables
            const currentCard = cardRef.current;
            currentCard.style.setProperty('--pointer-x', `${(pointerFromLeft * 100).toFixed(2)}%`);
            currentCard.style.setProperty('--pointer-y', `${(pointerFromTop * 100).toFixed(2)}%`);
            currentCard.style.setProperty('--pointer-from-left', pointerFromLeft.toFixed(2));
            currentCard.style.setProperty('--pointer-from-top', pointerFromTop.toFixed(2));
            currentCard.style.setProperty('--rotate-x', `${rotateX.toFixed(2)}deg`);
            currentCard.style.setProperty('--rotate-y', `${rotateY.toFixed(2)}deg`);
            currentCard.style.setProperty('--pointer-from-center', (Math.abs(pointerFromLeft - 0.5) + Math.abs(pointerFromTop - 0.5)).toFixed(2));
        }
    }, [enableTilt, enableMobileTilt]);

    // --- Event Listeners ---
    useEffect(() => {
        const currentRef = cardRef.current;
        if (!currentRef || !enableTilt) return;

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        currentRef.addEventListener('pointermove', handlePointerMove as EventListener);
        currentRef.addEventListener('mouseenter', handleMouseEnter);
        currentRef.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            currentRef.removeEventListener('pointermove', handlePointerMove as EventListener);
            currentRef.removeEventListener('mouseenter', handleMouseEnter);
            currentRef.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [handlePointerMove, enableTilt]);


    return (
        <div ref={cardRef} className={`pc-card-wrapper ${isHovering ? 'active' : ''}`}>
            <div className="pc-behind"></div>
            <div className="pc-card-shell">
                <div className="pc-card">
                    {/* 1. Behind Glow/Shine Layers */}
                    <div className="pc-inside"></div>
                    <div className="pc-shine"></div>
                    <div className="pc-glare"></div>
                    
                    {/* 2. Content Layers (Avatar and Text) */}
                    <div className="pc-avatar-content">
                        <div className="avatar">
                            {/* Large Image (Avatar) */}
                            <Image 
                                src={avatarUrl} 
                                alt={`${name} Avatar`} 
                                width={500} 
                                height={500} 
                                style={{ objectFit: 'cover' }}
                                priority={true}
                            />
                        </div>
                    </div>
                    
                    <div className="pc-content">
                        <div className="pc-details">
                            <h3>{name}</h3>
                            <p>{title}</p>
                        </div>
                    </div>

                    {/* 3. User Info Bar (Bottom) */}
                    {showUserInfo && (
                        <div className="pc-user-info">
                            <div className="pc-user-details">
                                <div className="pc-mini-avatar">
                                    {/* Mini Avatar Image */}
                                    <Image 
                                        src={miniAvatarUrl} 
                                        alt={`${name} Mini Avatar`} 
                                        width={48} 
                                        height={48} 
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="pc-user-text">
                                    <span className="pc-handle">{handle}</span>
                                    <span className="pc-status">{status}</span>
                                </div>
                            </div>
                            <button className="pc-contact-btn" onClick={onContactClick}>
                                {contactText}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;