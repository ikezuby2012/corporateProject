import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainLayout from '../../components/dashboard/MainLayout';

//icons
import { Group, DoubleArrow, Speed, SwapHoriz } from "@material-ui/icons";

const DashboardMemOrganization = () => {

    const { user } = useSelector((state) => state.user);
    const { data } = useSelector((state) => state.org);
    let dataItem;

    console.log(user.name_organization);
    if (user.name_organization) {
        dataItem = (
            <>
                <div className="dashboardHome-innerFlex">
                    <div className="dashboardHome-align">
                        <span className="mr-5">
                            <Group className="dashboardHome-icon" />
                        </span>
                        <h4>{user.name_organization.name.split(" ")[0]}</h4>
                    </div>
                    <span className="dashboardHome-innerFlex_span">Created on {user.name_organization.created_at.split("T")[0]}</span>
                </div>

                <div className="dashboardHome-innerFlex">
                    <div className="dashboardHome-align">
                        <span className="mr-5">
                            <Speed className="dashboardHome-icon" />
                        </span>
                        <h4>status</h4>
                    </div>
                    <span className={`dashboardHome-innerFlex_active`}>active</span>
                </div>

                <div className="dashboardHome-innerFlex">
                    <div className="dashboardHome-align">
                        <span className="mr-5">
                            <SwapHoriz className="dashboardHome-icon" />
                        </span>
                        <h4>transactions today</h4>
                    </div>
                    <span className="dashboardHome-innerFlex_span">0</span>
                </div>

                <Link to={`/dashboard/org/profile/${user.name_organization._id}`} className="dashboardHome-align dashboardHome-setting_btn">
                    <span className="mr-5">
                        <DoubleArrow className="dashboardHome-setting_icon" />
                    </span>
                    <h4 className="dashboardHome-setting_text">profile</h4>
                </Link>
            </>
        )
    }

    return (
        <MainLayout>
            <div className="dashboardHome">
                <div className="dashboardHome-inner dashboardOrg">
                    {dataItem}
                </div>
            </div>
        </MainLayout>
    );
}

export default DashboardMemOrganization;