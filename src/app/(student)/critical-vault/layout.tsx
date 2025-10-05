'use client';

import React, { useState } from 'react';
import { Heart, Music, FileText, Settings, Menu, X , User} from 'lucide-react';
import "@/app/globals.css";
import Link from "next/link";
import {ButtonLink} from "../../../../components/link-button";


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <html lang="en">
        <body className="min-h-screen bg-[#E5F4F2]">
        {/* Header */}
        <header className="bg-[#009379] text-white px-4 py-3 md:px-6">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="md:hidden p-2 hover:bg-teal-600 rounded-lg transition-colors"
                    >
                        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-[#009379] font-bold text-sm">MV</span>
                        </div>
                        <h1 className="text-xl font-semibold">MindVault</h1>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="">
                    <ul className="hidden md:flex items-center space-x-6">
                        <Link href="/"  ><ButtonLink ><li className="lg:text-2xl md:text-xl text-amber-50">Home</li></ButtonLink></Link>
                        <Link href="/resources"><ButtonLink><li className=" lg:text-2xl md:text-xl text-amber-50">Resources</li></ButtonLink></Link>
                        <Link href="#FAQs"><ButtonLink><li className="lg:text-2xl md:text-xl text-amber-50">FAQs</li></ButtonLink></Link>
                        <ButtonLink><li className=" lg:text-2xl md:text-xl text-amber-50">Contact Us</li></ButtonLink>
                        <Link href="/critical-vault"><ButtonLink><li className="lg:text-2xl md:text-xl text-amber-50">Vault</li></ButtonLink></Link>
                    </ul>
                </div>
                {/*<nav className="hidden md:flex items-center space-x-6">*/}
                {/*    <a href="#" className="hover:text-teal-200 transition-colors">Home</a>*/}
                {/*    <a href="#" className="hover:text-teal-200 transition-colors">Dashboard</a>*/}
                {/*    <a href="#" className="text-teal-200 font-medium">My Vault</a>*/}
                {/*    <a href="#" className="hover:text-teal-200 transition-colors">Community</a>*/}
                {/*    <a href="#" className="hover:text-teal-200 transition-colors">Resources</a>*/}
                {/*</nav>*/}

                <button className="bg-white text-teal-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        <User/>
                </button>
            </div>
        </header>

        <div className="flex max-w-7xl mx-auto">
            {/* Sidebar */}
            <aside className={`
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0 fixed md:static top-0 left-0 z-40
            w-64 h-full md:h-auto bg-white border-r border-gray-200
            transition-transform duration-300 ease-in-out
            md:transition-none
          `}>
                <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-6">Your Vault</h2>

                    <nav className="space-y-2">
                        <a href="#" className="flex items-center space-x-3 px-3 py-2 bg-teal-50 text-teal-700 rounded-lg">
                            <Heart size={20} />
                            <span>Affirmations</span>
                        </a>

                        <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                            <Music size={20} />
                            <span>Healing Songs</span>
                        </a>

                        <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                            <FileText size={20} />
                            <span>Self-Notes</span>
                        </a>

                        <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                            <Settings size={20} />
                            <span>Vault Settings</span>
                        </a>
                    </nav>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Page content gets injected here */}
            <main className="flex-1 p-6 md:p-8">
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}
