import React from 'react';
import Dashboard from "../../../../components/Dashboard/dashboard";
import Sidebar from "../../../../components/Sidebar/Sidebar";
const Page = () => {
    return (
        <div className="grid gap-4 p-4 grid-cols-[220px_1fr]">
            <Sidebar/>
            <Dashboard/>
        </div>
    );
};

export default Page;