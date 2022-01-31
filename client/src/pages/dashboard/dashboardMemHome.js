import React from 'react';
import MainLayout from '../../components/dashboard/MainLayout';

import {
    BrandingWatermark, CallToAction, Euro
} from "@material-ui/icons";

const DashboardMemHome = () => {
    return (
        <MainLayout>
            <div className="dashboardUser">
                <div className="dashboardUser-boxs">
                    <div className="dashboardUser-box">
                        <span><BrandingWatermark className="dashboardUser-icon" /></span>
                        <h2 className="dashboardUser-box-hdtext">
                            total investment
                        </h2>
                        <div className="dashboardUser-box-spans">
                            <span>value</span>
                            <span>0</span>
                        </div>
                    </div>
                </div>

                <div className="dashboardUser-activity">
                    <h2 className="dashboardUser-activity-text">
                        recent activity
                    </h2>
                    <ul>
                        <li className="dashboardUser-activity-list">no recent activity</li>
                    </ul>
                </div>
            </div>
        </MainLayout >
    );
}

export default DashboardMemHome;
