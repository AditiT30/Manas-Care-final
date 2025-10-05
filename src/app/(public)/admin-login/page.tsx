'use client';

import { useState } from 'react';
import { MapPin, Check, Eye, EyeOff } from 'lucide-react';
import AdminLoginButton from "../../../../components/Login/admin-login-button";

export default function MindfulCampusPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [activeTab, setActiveTab] = useState('login');

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
            {/* Left Side - Brand and Benefits */}
            <div className="lg:w-1/2 bg-gradient-to-br from-[#009379] to-teal-900 text-white p-6 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-white rounded-full"></div>
                    <div className="absolute top-1/2 -left-20 w-60 h-60 bg-white rounded-full"></div>
                </div>

                {/* Logo */}
                <div className="flex items-center mb-8 lg:mb-12 relative z-10">
                    <MapPin className="w-8 h-8 mr-3" />
                    <h1 className="text-2xl lg:text-3xl font-bold">MindfulCampus</h1>
                </div>

                {/* Main Content */}
                <div className="relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
                        Your Campus Mental Wellness Partner
                    </h2>

                    <p className="text-lg lg:text-xl mb-8 lg:mb-12 opacity-90 leading-relaxed">
                        Manage and support the wellbeing of your student community with powerful admin tools.
                    </p>

                    {/* Benefits */}
                    <div className=" bg-opacity-20 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
                        <div className="flex items-center mb-4">
                            <MapPin className="w-6 h-6 mr-2" />
                            <h3 className="text-xl font-semibold">Admin Benefits</h3>
                        </div>

                        <div className="space-y-3">
                            {[
                                'Access real-time student wellness insights & analytics',
                                'Manage Counsellor availability and bookings',
                                'Monitor engagement and track student usage through the Admin Dashboard'
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center">
                                    <Check className="w-5 h-5 mr-3 text-teal-200 flex-shrink-0" />
                                    <span className="text-sm lg:text-base">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full">
                    {/* Welcome Header */}
                    <div className="mb-8">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                            Welcome, Admin
                        </h2>
                        <p className="text-gray-600 text-sm lg:text-base">
                            Start managing student wellness today. Access powerful tools to support your campus community.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex mb-8 border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('login')}
                            className={`pb-3 px-1 mr-8 text-sm font-medium border-b-2 transition-colors ${
                                activeTab === 'login'
                                    ? 'border-teal-500 text-teal-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Log In
                        </button>
                        <button
                            onClick={() => setActiveTab('signup')}
                            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
                                activeTab === 'signup'
                                    ? 'border-teal-500 text-teal-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">
                        {/* Email/Username */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email or Username
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="your.name@university.edu"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                                />
                                <span className="ml-2 text-sm text-gray-700">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                                Forgot password?
                            </a>
                        </div>

                        {/* Login Button */}
                       <AdminLoginButton></AdminLoginButton>
                    </form>

                    {/* Social Login */}
                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-50 text-gray-500">or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                            {/* Google */}
                            <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                            </button>

                            {/* Apple */}
                            <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13.498 3.725c.84-.933 1.391-2.237 1.239-3.544-1.198.048-2.645.798-3.505 1.802-.766.897-1.438 2.331-1.257 3.703 1.33.103 2.688-.678 3.523-1.961zm.997 1.707c-1.951-.115-3.616 1.11-4.55 1.11-.933 0-2.378-1.084-3.908-1.053-2.009.032-3.861 1.168-4.893 2.966-2.088 3.62-.535 8.98 1.501 11.92 1.002 1.44 2.196 3.058 3.765 3.001 1.538-.061 2.121-.994 3.98-.994 1.859 0 2.411.994 4.054.961 1.676-.032 2.67-1.466 3.671-2.907 1.159-1.665 1.635-3.279 1.664-3.361-.036-.016-3.194-1.225-3.226-4.86-.032-3.043 2.488-4.502 2.601-4.565-1.419-2.077-3.628-2.318-4.409-2.374l-.25.056z"/>
                                </svg>
                            </button>

                            {/* Microsoft */}
                            <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <div className="flex items-center justify-center text-xs text-gray-500 mb-3">
                            <div className="w-4 h-4 mr-1">🔒</div>
                            Your data is encrypted and securely stored
                        </div>
                        <div className="flex justify-center space-x-6 text-xs">
                            <a href="#" className="text-teal-600 hover:text-teal-700">Privacy Policy</a>
                            <a href="#" className="text-teal-600 hover:text-teal-700">Terms of Use</a>
                            <a href="#" className="text-teal-600 hover:text-teal-700">Help Center</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}