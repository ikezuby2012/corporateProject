import React from 'react';

import MainLayout from '../../components/dashboard/MainLayout';

import {
    BrandingWatermark, CallToAction, Euro
} from "@material-ui/icons";

const DashboardMemOrgProfile = () => {
    return (
        <MainLayout>
            <div className="dashOrgProfile">
                <div className="dashOrgProfile-box">
                    <figure className="dashOrgProfile-shape">
                        <div className="dashOrgProfile-imagebox" />
                    </figure>
                    <div className="dashOrgProfile-flexbox">
                        <div className="dashOrgProfile-imagebox-1" />

                        <div className="inner">
                            <span>grace of God</span>
                            <div className="inner-div">
                                <span>grace of God</span>
                                <span>
                                </span>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="dashOrgProfile-box-1">
                    <ul className="dashOrgProfile-table">
                        <li className="dashOrgProfile-list">
                            registration ID:
                            <div className="dashOrgProfile-div">
                                <span>63737882929</span>
                            </div>
                        </li>
                        <li className="dashOrgProfile-list">
                            email:
                            <div className="dashOrgProfile-div">
                                <span></span>
                            </div>
                        </li>
                        <li className="dashOrgProfile-list">
                            subscription name:
                            <div className="dashOrgProfile-div">
                                <span></span>
                            </div>
                        </li>
                        <li className="dashOrgProfile-list">
                            Time zone:
                            <div className="dashOrgProfile-div">
                                <span>[GMT +1.00]Nigeria, west africa</span>
                            </div>
                        </li>
                        <li className="dashOrgProfile-list">
                            language:
                            <div className="dashOrgProfile-div">
                                <span>English</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
}

export default DashboardMemOrgProfile;