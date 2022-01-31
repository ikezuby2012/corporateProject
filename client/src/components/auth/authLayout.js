import React from 'react';
import { Link, NavLink } from "react-router-dom";

import { StrikethroughS } from "@material-ui/icons";

const AuthLayout = (props) => {
    const year = new Date().getFullYear();
    return (
        <section className="signup">
            <div className="signup-headerTop">
                <Link className={"signup-headerTop_logoLink"} to="/">
                    <StrikethroughS className="signup-headerTop-icon" />
                    <h1 className="signup-headerTop-logo">
                        latitude
                    </h1>
                </Link>

                <div className="signup-headerTop_div">
                    <nav>
                        <ul className="signup-list">
                            <li className="signup-nav-item">
                                <NavLink className="signup-nav-link" to="#" activeClassName="signup-nav-link-active">
                                    Home
                                </NavLink>
                            </li>
                            <li className="signup-nav-item">
                                <NavLink className="signup-nav-link" to="#" activeClassName="signup-nav-link-active">
                                    resources
                                </NavLink>
                            </li>
                            <li className="signup-nav-item">
                                <NavLink className="signup-nav-link" to="#" activeClassName="signup-nav-link-active">
                                    documentation
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="signup-headerTop_div">
                    <nav>
                        <ul className="signup-list">
                            <li className="signup-nav-item"><NavLink className="signup-nav-btn" to="/login" activeClassName="signup-nav-link-active">login</NavLink></li>
                            <li className="signup-nav-item"><NavLink className="signup-nav-btn" to="/" activeClassName="signup-nav-link-active">sign up</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <main className="signup-main">
                <div className="signup-box-1">
                    <div className="signup-box-1-text">
                        <h2>
                            The World's most reliable platform for cooperate society suite.
                        </h2>
                        <h3>
                            we provide quick access to manage members data, transactions and
                            organization budget so you can focus on enjoying on what you love doing most.
                        </h3>
                    </div>
                    <div className="zedxog">
                        <p>
                            <span>brought to you by zedxog</span>
                        </p>
                    </div>
                </div>
                <div className="signup-box-2">
                    {props.children}
                </div>
            </main>

            {/* <footer className="signup-footer">
                <p>copyright cloudinvest &copy; 2019-{year}</p>
            </footer> */}
        </section>
    );
}
export default AuthLayout;