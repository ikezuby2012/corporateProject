import React from 'react';

//icons
import {
    Search, Notifications, Face, Settings
} from "@material-ui/icons";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const HeaderDash = ({ username }) => {
    return (
        <header className="dashboard-header">
            <h2  className="dashboard-header-hdText">
                dashboard
            </h2>

            <form action="#" className={"dashboard-header-form"}>
                {/* <button className={"dashboard-header-form_button"}>
                    <Search className={"dashboard-header-form_icon"} />
                </button>
                <input type="search" className={"dashboard-header-form_input"} placeholder={"search"} /> */}
            </form>
            <div className={"dashboard-header-notification"}>
                <Notifications className={"dashboard-header-notification_icon"} />
                <span className={"dashboard-header-notification-circle"}></span>
            </div>
            <div className="dashboard-header-userBox">
                <span>
                    <Face className="dashboard-header-userBox_avaticon" />
                </span>
                <span className="dashboard-header-userBox_text">{username}</span>
                <span>
                    <KeyboardArrowDownIcon className="dashboard-header-userBox_icon" />
                </span>
            </div>
            <div className="dashboard-header-setting dashboard-header-notification">
                <span>
                    <Settings className={"dashboard-header-notification_icon"} />
                </span>
            </div>
        </header>
    );
}

export default HeaderDash;
