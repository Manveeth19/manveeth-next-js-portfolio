// components/sections/ExperienceSection.tsx
"use client";

import React from 'react';
import FadeIn from '@/components/shared/FadeIn';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { bioData } from '@/constants/bioData';

const ExperienceSection: React.FC = () => {
    const textGray800 = "text-gray-800 dark:text-gray-100";
    const textGray600 = "text-gray-600 dark:text-gray-400";

    return (
        <section id="experience" className="py-20 md:py-32 bg-white border-t border-gray-200 dark:bg-gray-950 dark:border-gray-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* STYLIZED SECTION HEADER */}
                <FadeIn delay={0}>
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 relative inline-block ${textGray800}`}>
                            Professional Experience
                            <span className="block absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded-full"></span>
                        </h2>
                        <p className="text-xl text-gray-500 mt-6 dark:text-gray-400">
                            My journey in professional software development
                        </p>
                    </div>
                </FadeIn>

                {/* EXPERIENCE TIMELINE */}
                <div className="space-y-8">
                    {bioData.experience.map((exp, index) => (
                        <FadeIn key={index} delay={100 + index * 100}>
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">

                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                    <div>
                                        <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${textGray800}`}>
                                            {exp.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                            <BriefcaseIcon className="w-5 h-5" />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Meta info */}
                                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                                    <div className={`flex items-center gap-2 ${textGray600}`}>
                                        <CalendarIcon className="w-4 h-4" />
                                        <span>{exp.duration}</span>
                                    </div>
                                    <div className={`flex items-center gap-2 ${textGray600}`}>
                                        <MapPinIcon className="w-4 h-4" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                {/* Responsibilities */}
                                <div>
                                    <h4 className={`text-lg font-bold mb-3 ${textGray800}`}>Key Responsibilities & Achievements:</h4>
                                    <ul className={`space-y-2 ${textGray600}`}>
                                        {exp.responsibilities.map((responsibility, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">•</span>
                                                <span className="leading-relaxed">{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
