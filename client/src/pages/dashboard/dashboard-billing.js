import React, { useState } from 'react';
import { Link } from "react-router-dom";

import MainLayout from '../../components/dashboard/MainLayout';
import Popup from '../../components/utils/Popup';

import {
    Build, CameraRear, CallToAction, FeaturedPlayList
} from "@material-ui/icons";

const DashboardBilling = () => {

    return (
        <MainLayout>
            <div className="dashboardbilling">
                <div className="dashboardbilling-hdText">
                    <Build className="dashboardbilling-icon" />
                    <span>payment options &gt; </span>
                </div>
                <nav className="dashboardbilling-nav">
                    <ul className="dashboardbilling-lists">
                        <li className="dashboardbilling-list">
                            <Link className="dashboardbilling-link">
                                <div className="dashboardbilling-div">
                                    <CameraRear className="dashboardbilling-list-icon" />
                                    apply for loan
                                </div>
                            </Link>
                        </li>

                        <li className="dashboardbilling-list">
                            <Link className="dashboardbilling-link">
                                <div className="dashboardbilling-div">
                                    <span>
                                        <CallToAction className="dashboardbilling-list-icon" />
                                    </span>
                                    borrow fund
                                </div>
                            </Link>
                        </li>

                        <li className="dashboardbilling-list">
                            <Link className="dashboardbilling-link" to={"/dashboard/billing/plans/:id"}>
                                <div className="dashboardbilling-div">
                                    <span>
                                        <FeaturedPlayList className="dashboardbilling-list-icon" />
                                    </span>
                                    pay for monthly plan
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </MainLayout>
    );
}

export default DashboardBilling;