import React, { useState } from 'react';
import { Link } from "react-router-dom";

import MainLayout from '../../components/dashboard/MainLayout';
import Popup from '../../components/utils/Popup';

//icons
import {
    Lock, CheckCircleOutline, Cancel, FeaturedPlayList, Https, Event
} from "@material-ui/icons";

const personal = [
    {
        "name": "basic",
        "price": "5,000"
    },
    {
        "name": "intermediate",
        "price": "10,000"
    },
    {
        "name": "premium",
        "price": "15,000"
    }
];

const onSubmit = (e) => {

}

const DashboardPlans = () => {
    const [showModal, setShowModal] = useState(true);

    return (
        <MainLayout>
            {showModal && <Popup>
                <div className="plan-Popup">
                    <div className="plan-Popup-hdText">
                        <div>&nbsp;</div>
                        <span>payment method</span>
                        <div className="plan-Popup-secure">
                            <Lock className="plan-Popup-secure-icon" />
                            <span>secure</span>
                        </div>
                    </div>
                    <div className="plan-Popup-box">
                        <div className='invoice'>
                            <div className="current-plan">
                                <h4>current plan</h4>
                                <h5>#5,000 monthly plan per month(excl. VAT)</h5>
                            </div>

                            <div className="current-plan">
                                <h4>next invoice</h4>
                                <h5>{new Date().toLocaleDateString()}</h5>
                            </div>
                        </div>

                        <form onSubmit={(e) => onSubmit(e)} className="plan-Popup-form">
                            <div className="form-group">
                                <FeaturedPlayList />
                                <input type="number"
                                    // onChange={this.onChange}
                                    className="form-input"
                                    placeholder="Card Number"
                                    id="number"
                                    // value={email} error={errors.email}
                                    required={true}
                                />
                            </div>
                            <div className="form-groups">
                                <div className="form-group">
                                    <Event />
                                    <input type="text"
                                        style={{ marginRight: "5px" }}
                                        // onChange={this.onChange}
                                        className="form-input form-input-1"
                                        placeholder="MM/YY"
                                        id="text"
                                        // value={email} error={errors.email}
                                        required={true}
                                    />
                                </div>
                                <div className="form-group">
                                    <Https />
                                    <input type="text"
                                        // onChange={this.onChange}
                                        className="form-input"
                                        placeholder="CVC"
                                        id="text"
                                        // value={email} error={errors.email}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="form-buttons">
                                <Link className="form-btn form-btn-1">
                                    <CheckCircleOutline className="form-icon-blue" />
                                    <span>send</span>
                                </Link>

                                <Link className="form-btn form-btn-2">
                                    <Cancel className="form-icon-red" />
                                    <span>cancel</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </Popup>}
            <div className="dashboardPlan">
                <div className="plan-cards">
                    <div className="plan-card">
                        <h1 className="plan-cardText">{personal[0].name}</h1>
                        <h5 className="plan-cardPlan">#{personal[0].price}/month</h5>
                        <div>
                            <p className="plan-text">
                                Lorem, ipsum dolor sit amet consectetur  rtlStyle weight keys dku form
                                adipisicing elit. Reiciendis commodi  distinctio!
                                market
                            </p>
                        </div>
                        <div className="plan-button">
                            <button className="plan-btn">pay now</button>
                        </div>
                    </div>

                    <div className="plan-card ">
                        <h1 className="plan-cardText">{personal[1].name}</h1>
                        <h5 className="plan-cardPlan">#{personal[1].price}/month</h5>
                        <div>
                            <p className="plan-text">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis commodi javascript feil switcher tempore distinctio!
                            </p>
                        </div>
                        <div className="plan-button">
                            <button className="plan-btn">pay now</button>
                        </div>
                    </div>

                    <div className="plan-card">
                        <h1 className="plan-cardText">{personal[2].name}</h1>
                        <h5 className="plan-cardPlan">#{personal[2].price}/month</h5>
                        <div>
                            <p className="plan-text">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis commodi javascript feil switcher tempore distinctio!
                            </p>
                        </div>
                        <div className="plan-button">
                            <button className="plan-btn" style={{ marginTop: "30px" }}>pay now</button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default DashboardPlans;
