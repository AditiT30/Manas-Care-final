import React from 'react';
import { User, Heart, Brain, Shield, Activity, Users } from 'lucide-react';

// Card Component

interface ResourceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    link: string;
    linkText: string;
}

const ResourceCard = ({ icon: Icon, title, description,link, linkText }) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
            <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
                    <a
                        href={link}
                        className="text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors inline-flex items-center"
                    >
                        {linkText} →
                    </a>
                </div>
            </div>
        </div>
    );
};

// Main Page Component
export default function ResourcesPage() {
    const anxietyResources = [
        {
            icon: Brain,
            title: "Understanding Anxiety",
            description: "Learn about the different types of anxiety disorders, their symptoms, and available triggers.",
            link:"https://www.psychiatry.org/patients-families/anxiety-disorders/what-are-anxiety-disorders",
            linkText: "Learn more"
        },
        {
            icon: Activity,
            title: "Breathing Techniques",
            description: "Discover effective breathing exercises that can help manage anxiety symptoms in moments of stress.",
            link:"https://www.medicalnewstoday.com/articles/324417",
            linkText: "Try now"
        },
        {
            icon: Users,
            title: "Support Groups",
            description: "Connect with others who understand what you're going through in moderated support communities.",
            link:"https://mind-scape.in/service/anxiety-support-group/?srsltid=AfmBOopxf7HtfPazgfYLrMSWViRlb6gC4Bp4E_FTbXe2R5OvpgdbQkbu",
            linkText: "Join now"
        }
    ];

    const depressionResources = [
        {
            icon: Heart,
            title: "Depression Symptoms",
            description: "Learn to recognize the signs of depression and understand how they affect emotional well-being.",
            link:"https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007",
            linkText: "Learn more"
        },
        {
            icon: Activity,
            title: "Daily Mood Boosters",
            description: "Simple activities and habits that can help improve your mood and energy levels.",
            linkText: "Explore"
        },
        {
            icon: User,
            title: "Therapy Options",
            description: "Information about different therapy approaches and how to find effective treatment.",
            linkText: "Discover"
        }
    ];

    const addictionResources = [
        {
            icon: Shield,
            title: "Recovery Pathways",
            description: "Explore different approaches to addiction recovery and find what might work best for you.",
            link:"https://7summitpathways.com/blog/multiple-pathways-to-recovery/",
            linkText: "Explore options"
        },
        {
            icon: Users,
            title: "Support Networks",
            description: "Find local and online support groups and community resources for addiction recovery.",
            linkText: "Find support"
        },
        {
            icon: Activity,
            title: "Habit Tracking",
            description: "Tools to help you monitor your progress and celebrate milestones in your recovery journey.",
            linkText: "Start tracking"
        }
    ];

    const eatingDisorderResources = [
        {
            icon: Brain,
            title: "Understanding Eating Disorders",
            description: "Learn about different types of eating disorders, their symptoms, and potential health impacts.",
            link: "https://www.psychiatry.org/patients-families/eating-disorders/what-are-eating-disorders#:~:text=They%20can%20be%20very%20serious,disorder%2C%20pica%20and%20rumination%20disorder.",
            linkText: "Read more"
        },
        {
            icon: Heart,
            title: "Body Positivity",
            description: "Resources to help foster a healthier relationship with your body and self-image.",
            linkText: "Explore"
        },
        {
            icon: User,
            title: "Recovery Support",
            description: "Evidence-based treatment options and recovery strategies for eating disorders.",
            linkText: "Learn more"
        }
    ];

    const ptsdResources = [
        {
            icon: Brain,
            title: "PTSD Symptoms",
            description: "Learn to recognize the signs of PTSD and understand how trauma affects the mind and body.",
            link:"https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967",
            linkText: "Read more"
        },
        {
            icon: Activity,
            title: "Grounding Techniques",
            description: "Practical exercises to help manage flashbacks and stay present during difficult moments.",
            linkText: "Try now"
        },
        {
            icon: User,
            title: "Specialized Therapy",
            description: "Information about evidence-based treatments specifically designed for trauma and PTSD.",
            linkText: "Learn more"
        }
    ];

    const categories = [
        { name: "Anxiety", active: true },
        { name: "Depression", active: false },
        { name: "Addiction", active: false },
        { name: "Eating Disorders", active: false },
        { name: "PTSD", active: false }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-[#009379] to-teal-900 py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Resources
                    </h1>
                    <p className="text-teal-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Discover tools and information to support your mental wellness journey. We've curated helpful resources for various conditions.
                    </p>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex space-x-8 overflow-x-auto scrollbar-hide py-4">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    category.active
                                        ? 'bg-teal-500 text-white'
                                        : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Anxiety Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Anxiety</h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Anxiety disorders are characterized by excessive worry, fear, and nervousness. These resources can help you understand and manage anxiety symptoms.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {anxietyResources.map((resource, index) => (
                            <ResourceCard key={index} {...resource} />
                        ))}
                    </div>
                </section>

                {/* Depression Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Depression</h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Depression affects how you feel, think, and handle daily activities. These resources offer support and strategies for managing depression.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {depressionResources.map((resource, index) => (
                            <ResourceCard key={index} {...resource} />
                        ))}
                    </div>
                </section>

                {/* Addiction Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Addiction</h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Addiction is a complex condition that affects brain function and behavior. These resources provide information on recovery and support.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {addictionResources.map((resource, index) => (
                            <ResourceCard key={index} {...resource} />
                        ))}
                    </div>
                </section>

                {/* Eating Disorders Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Eating Disorders</h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Eating disorders involve extreme emotions, attitudes, and behaviors surrounding weight and food. These resources offer guidance and support.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {eatingDisorderResources.map((resource, index) => (
                            <ResourceCard key={index} {...resource} />
                        ))}
                    </div>
                </section>

                {/* PTSD Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">PTSD</h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Post-Traumatic Stress Disorder can develop after experiencing or witnessing a traumatic event. These resources provide information and coping strategies.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ptsdResources.map((resource, index) => (
                            <ResourceCard key={index} {...resource} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}