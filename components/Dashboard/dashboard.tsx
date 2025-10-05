import React from 'react';
import TopBar from './TopBar';
import Grid from './Grid';
const Dashboard = () => {
    return (
        <div className="bg-[#E5F4F2] rounded-lg pb-4 shadow h-[200vh] ">
            <TopBar />
            <Grid />
        </div>
    );
};

export default Dashboard;