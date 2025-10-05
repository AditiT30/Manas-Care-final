'use client';

import { Heart, Music, BookOpen, Play, BarChart3, Wind , Bot , Vault ,HeartPlus,BookHeart  } from 'lucide-react';
import FeatureCard from './Card';

const features = [
    {
        id: 1,
        icon: <Bot size={28} />,
        title: "AI Chatbot",
        description: "Your 24/7 buddy for mental health support — always ready to listen, guide with quick tips, and connect you to resources or counsellors when needed."
    },
    {
        id: 2,
        icon: <Vault size={28} />,
        title: "Mind Vault",
        description: "A safe space to store your thoughts, reflections, and coping notes — always private, always accessible when you need them most."
    },
    {
        id: 3,
        icon: <HeartPlus size={28} />,
        title: "Counsellor Support",
        description: "Easily connect with professional counsellors and book sessions whenever you need — simple, private, and stress-free."
    },
    {
        id: 4,
        icon: <BookHeart size={28} />,
        title: "Curated Resources",
        description: "Explore easy-to-read articles picked for you — with tips, stories, and insights to support your mental wellbeing."
    },
    {
        id: 5,
        icon: <BarChart3 size={28} />,
        title: "Admin Dashboard",
        description: "Track anonymous trends and insights to better understand student wellbeing — no identities, just data that helps improve support."
    },
    {
        id: 6,
        icon: <Wind size={28} />,
        title: "Guided Breathing Tools",
        description: "Access calming breathing exercises alongside your saved content to quickly reduce stress and center your mind."
    }
];

export default function KeyFeaturesPage() {
    return (
        <div className="min-h-screen bg-[#E5F4F2] px-4 ">


            <div className="relative z-10">
                {/* Features Grid */}
                <section className="pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {features.map((feature) => (
                                <FeatureCard
                                    key={feature.id}
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Start Your Wellness Journey
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}