import React from 'react';

import MainLayout from "../../components/dashboard/MainLayout";

const DashboardMembers = () => {
    return (
        <MainLayout>
            <div className="dashboardMembers">
                <ul className="dashboardMembers-table">
                    <li className="dashboardMembers_list">
                        <div className="dashboardMembers_flexhd">
                            {/* <Icon name={symbol.toLowerCase()} size={25} className="dashMarket_icon" /> */}
                            <span>kingsley</span>
                        </div>
                        <div className="dashboardMembers_list-text">
                            <span>0</span>
                        </div>
                        <div className="dashboardMembers_list-text">
                            <span>active</span>
                        </div>
                        <div className="dashboardMembers_list-text">
                            <span>akwa, anambra</span>
                        </div>
                    </li>
                </ul>
            </div>
        </MainLayout>
    );
}

export default DashboardMembers;
