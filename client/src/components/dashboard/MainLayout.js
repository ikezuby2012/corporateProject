import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderDash from "./HeaderDash";

//icons
import {
    AccountCircle, AssignmentReturn, Store, Poll, Payment, Dashboard
} from "@material-ui/icons";

const MainLayout = (props) => {
    const { user } = useSelector((state) => state.user);
    console.log(user);

    return (
        <section className="dashboard">
            <div className="dashboard-container">
                <nav className="dashboard-side_bar">
                    <h1 style={{ color: "white", fontSize: "17px", marginTop: "25px" }} className="header-logo">
                        latitude
                    </h1>

                    {user.role === "admin" && <>
                        <ul className="dashboard-sideNav">
                            <li className="dashboard-sideNav-item dashboard-sideNav-item--active">
                                <NavLink className="dashboard-sideNav-link" activeClassName="" to="/dashboard">
                                    <span><Store className="dashboard-sideNav-logo" /></span>
                                    <span>manage organization</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/wallet">
                                    <span><Dashboard className="dashboard-sideNav-logo" /></span>
                                    <span>stats</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/members">
                                    <span><Poll className="dashboard-sideNav-logo" /></span>
                                    <span>manage members</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/billing">
                                    <span><Payment className="dashboard-sideNav-logo" /></span>
                                    <span>manage transactions</span>
                                </NavLink>
                            </li>
                        </ul>
                    </>}

                    {user.role === "user" && <>
                        <ul className="dashboard-sideNav">
                            <li className="dashboard-sideNav-item dashboard-sideNav-item--active">
                                <NavLink className="dashboard-sideNav-link" activeClassName="" to="/dashboard-home">
                                    <span><Store className="dashboard-sideNav-logo" /></span>
                                    <span>dashboard</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/member/org">
                                    <span><Dashboard className="dashboard-sideNav-logo" /></span>
                                    <span>organization</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/members">
                                    <span><Poll className="dashboard-sideNav-logo" /></span>
                                    <span>members</span>
                                </NavLink>
                            </li>

                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/billing">
                                    <span><Payment className="dashboard-sideNav-logo" /></span>
                                    <span>pay bills</span>
                                </NavLink>
                            </li>
                        </ul>
                    </>}

                    <footer>
                        <ul>
                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="/dashboard/profile">
                                    <span><AccountCircle className="dashboard-sideNav-logo" /></span>
                                    <span>profile</span>
                                </NavLink>
                            </li>
                        </ul>

                        <ul>
                            <li className="dashboard-sideNav-item">
                                <NavLink className="dashboard-sideNav-link" to="#">
                                    <span><AssignmentReturn className="dashboard-sideNav-logo" /></span>
                                    <span>logout</span>
                                </NavLink>
                            </li>
                        </ul>
                    </footer>

                </nav>
                <div className="dashboard-content">
                    {/* header component */}
                    <HeaderDash username={props.username} />
                    <>
                        {props.children}
                    </>
                </div>
            </div>
        </section>
    );
}

export default MainLayout;