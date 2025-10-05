import React from 'react';
import {FiTrendingUp, FiTrendingDown} from 'react-icons/fi';
const StatCards = () => {
    return (
        <>
    <Card
        title="Daily Active Users"
        value="255"
        pillText="2.75%"
        trend="up"
        period="From Jan 1st - Aug 31st"
    />
     <Card
         title="Number of counsellor bookings"
         value="12"
         pillText="10%"
         trend="down"
         period="From Jan 1st - Aug 31st"
     />
        <Card
            title="Number of Chatbot Interactions"
            value="550"
            pillText="60.75%"
            trend="up"
            period="Previous 365 days"
        />
    </>
);
};

export default StatCards;

const Card =({
        title,
        value,
        pillText,
        trend,
        period,
}: {
    title: string;
    value: string;
    pillText: string;
    trend: "up" | "down";
    period: string;
})=>{
    return <div className="p-4 bg-[#E5F4F2] col-span-12  rounded border border-stone-300">
        <div className="flex mb-8 items-start justify-between">
            <div>
                <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
                <p className="text-3xl font-semibold">{value}</p>
            </div>

            <span
                className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${
                    trend === "up"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                }`}
            >
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />} {pillText}
        </span>
        </div>
        <p className="text-xs text-stone-500">{period}</p>
    </div>
}