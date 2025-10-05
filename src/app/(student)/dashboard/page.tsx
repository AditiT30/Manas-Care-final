"use client";
import React, { useState } from 'react';
import {
    BookOpen,
    Calendar,
    CheckCircle,
    Clock,
    Bell,
    User,
    TrendingUp,
    Award,
    MessageSquare,
    Search,
    Menu,
    X
} from 'lucide-react';

const StudentDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Mock data
    const studentData = {
        name: "Student XYZ",
        studentId: "xyz",
        semester: "Sem 5",
        avatar: "/api/placeholder/40/40"
    };



    const upcomingAppointments = [
        {
            id: 1,
            title: "Dr. XYZ",
            dueDate: "Oct 15, 2024",
            status: "pending"
        },
    ];


    const Sidebar = () => (
        <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition duration-200 ease-in-out lg:static lg:inset-0 bg-[#009379] text-white w-64 z-30`}>
            <div className="flex items-center justify-between p-6 lg:justify-center">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                        <span className="text-teal-900 font-bold text-lg">M</span>
                    </div>
                    <span className="text-xl font-bold">Manascare</span>
                </div>
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden"
                >
                    <X size={24} />
                </button>
            </div>

            <nav className="mt-8">
                <div className="px-6 py-3 bg-teal-950">
                    <span className="text-blue-200 text-sm font-medium">Dashboard</span>
                </div>
                <a href="/critical-vault" className="flex items-center px-6 py-3 text-blue-100 hover:bg-teal-950">
                    <BookOpen size={20} className="mr-3" />
                    MindVault
                </a>
                <a href="https://manascare.web.app/cb.html" className="flex items-center px-6 py-3 text-blue-100 hover:bg-teal-950">
                    <Calendar size={20} className="mr-3" />
                    ChatBot
                </a>
                <a href="#" className="flex items-center px-6 py-3 text-blue-100 hover:bg-teal-950">
                    <TrendingUp size={20} className="mr-3" />
                    Progress
                </a>
                <a href="/resources" className="flex items-center px-6 py-3 text-blue-100 hover:bg-teal-950">
                    <User size={20} className="mr-3" />
                    Resources
                </a>
                <a href="/booking-system" className="flex items-center px-6 py-3 text-blue-100 hover:bg-teal-950">
                    <User size={20} className="mr-3" />
                    Book Counsellor
                </a>
            </nav>
        </div>
    );

    return (
        <div className="flex h-screen bg-[#E5F4F2]">
            {/* Sidebar */}
            <Sidebar />

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-gray-200">
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className="flex items-center">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden mr-4"
                            >
                                <Menu size={24} />
                            </button>
                            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div className="relative">
                                <Bell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-800" />
                                <span className="absolute -top-2 -right-2 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                  3
                </span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                    <User size={16} className="text-white" />
                                </div>
                                <div className="hidden md:block">
                                    <p className="text-sm font-medium text-gray-900">{studentData.name}</p>
                                    <p className="text-xs text-gray-500">{studentData.studentId}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Dashboard Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Welcome back, {studentData.name}!
                        </h2>
                        <p className="text-gray-600">
                            {studentData.program} • {studentData.semester}
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-8">


                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center">
                                <CheckCircle className="h-8 w-8 text-green-500" />
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-500">Daily Check-in</p>
                                    <p className="text-2xl font-semibold text-gray-900">6</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center">
                                <TrendingUp className="h-8 w-8 text-purple-500" />
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-500">Mental Health Progress</p>
                                    <p className="text-2xl font-semibold text-gray-900">55%</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Right Sidebar */}
                        <div className="space-y-8">
                            {/* Upcoming Appointments */}
                            <div className="bg-white rounded-lg shadow">
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h3>
                                </div>
                                <div className="p-6">
                                    <div className="space-y-4">
                                        {upcomingAppointments.map((appointment) => (
                                            <div key={appointment.id} className="flex items-start space-x-3">
                                                <div className={`w-3 h-3 rounded-full mt-2 ${
                                                    appointment.status === 'in-progress' ? 'bg-yellow-400' : 'bg-gray-300'
                                                }`} />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate">
                                                        {appointment.title}
                                                    </p>
                                                    <p className="text-xs text-gray-400">Due: {appointment.dueDate}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default StudentDashboard;