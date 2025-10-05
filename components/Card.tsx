import { ReactNode } from 'react';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
}

export default function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
    return (
        <div className={`bg-gradient-to-r from-[#009379] to-green-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full ${className}`}>
            <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-teal-600">
                    {icon}
                </div>
            </div>

            <h3 className="text-xl font-semibold text-black mb-4 duration-500 hover:text-2xl">
                {title}
            </h3>

            <p className="text-black leading-relaxed">
                {description}
            </p>
        </div>
    );
}
























// import React from 'react';
//
// const Card = () => {
//     return (
//         <div
//             className="container grid grid-rows-4 items-center justify-center gap-7 p-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             <div
//                 className="card1 grid h-80 w-100 items-center justify-center rounded-xl bg-gradient-to-r from-[#009379] to-green-200 p-4 font-['Poppins']">
//                 <h1 className="grid justify-center text-2xl font-bold duration-500 hover:text-4xl">Hello</h1>
//                 <p className="grid justify-center text-xl font-bold duration-500 hover:text-2xl">Card 1 Details</p>
//                 <div className="buttons m-2 flex flex-row space-x-3">
//                     <button
//                         className="h-10 w-20 rounded-xl  bg-[#E5F4F2] font-['Poppins'] font-bold duration-1000 ease-in-out hover:bg-gradient-to-l focus:ring-2">Love
//                     </button>
//                     <button
//                         className="hover: h-10 w-20 rounded-xl  bg-[#E5F4F2] font-['AlbertSans'] font-bold duration-500 ease-in-out hover:bg-gradient-to-l focus:ring-2">Like
//                     </button>
//                 </div>
//             </div>
//         </div>
//                 );
//                 };
//                 export default Card;
// /*


