import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkAdminOrganization, createOrganization } from "../../actions/organization";

//icons 
import { Group, Settings, Speed, SwapHoriz } from "@material-ui/icons";


import MainLayout from "../../components/dashboard/MainLayout";
import Popup from '../../components/utils/Popup';

const DashboardHome = ({ history }) => {

    const { user } = useSelector((state) => state.user);
    const { data } = useSelector((state) => state.org);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [nameMsg, setNameMsg] = useState("");
    const [numMembers, setNumMembers] = useState("");
    const [nameError, setNameError] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const mountedRef = useRef(data);
    let dataItems;


    console.log(user);
    console.log(data);
    let _Data = data ? data.data === undefined : data;
    console.log(_Data);

    if (user.role === "user") history.push("/dashboard/home");

    const handleClose = () => setShowModal(!showModal);

    useEffect(() => {
        return () => {
            dispatch(checkAdminOrganization(user.id));
        }
    }, []);

    useEffect(() => {
        const fetchData = () => {
            try {
                dispatch(checkAdminOrganization(user.id));
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    if (_Data) {
        if (Object.keys(data).length !== 0) {
            dataItems = data.map((el) => (
                <>
                    <div className="dashboardHome-innerFlex">
                        <div className="dashboardHome-align">
                            <span className="mr-5">
                                <Group className="dashboardHome-icon" />
                            </span>
                            <h4>{el.name.split(" ")[0]}</h4>
                        </div>
                        <span className="dashboardHome-innerFlex_span">Created on {el.created_at.split("T")[0]}</span>
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

                    <Link to={`/dashboard/org/setting/${el._id}`} className="dashboardHome-align dashboardHome-setting_btn">
                        <span className="mr-5">
                            <Settings className="dashboardHome-setting_icon" />
                        </span>
                        <h4 className="dashboardHome-setting_text">settings</h4>
                    </Link>
                </>
            ))
        }
    } else {
        try {
            dispatch(checkAdminOrganization(user.id));
        } catch (err) {
            console.log(err);
        }
    }




    const onNameChange = (e) => {
        setName(e.target.value);
        let namePattern = /^[a-zA-Z][a-zA-Z\s]*$/g;
        if (e.target.value !== "" && e.target.value !== null) {
            if (namePattern.test(e.target.value)) {
                e.persist();
                setName(e.target.value);
            } else {
                setNameError(true);
                setNameMsg("field should contain valid string");
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        let num_members = numMembers * 1;

        if (
            nameError === false
        ) {
            const data = {
                name,
                num_of_members: num_members,
                admin: user.id
            };

            console.log(data);
            dispatch(createOrganization(data))
                .then(() => {
                    console.log("it worked!");
                    history.push(`/dashboard`);
                    setNameMsg("success");
                })
                .catch(() => {
                    setNameMsg("something went wrong!");
                });
            setLoading(false);
            setShowModal(false);
        } else {
            setNameMsg("something went wrong!");
        }
    }

    return (
        <MainLayout>
            <div className="dashboardHome">

                {
                    showModal && <Popup >

                        <div className="popup-title">
                            <h2>create new organization</h2>
                            <button onClick={handleClose} className={"popup-button"}>&times;</button>
                        </div>

                        <form
                            className={"popup-form"}
                            noValidate
                            onSubmit={(e) => onSubmit(e)}
                        >
                            <h3>enter name of organization</h3>
                            <div className="signup-form_group">
                                <input type="text"
                                    onChange={(e) => onNameChange(e)}
                                    className="signup-form_input"
                                    placeholder="name of organization"
                                    id="name"
                                    name={"name"}
                                    required={true} />
                                <label htmlFor="name" className="signup-form_label">name</label>
                            </div>
                            <h3>number of members</h3>
                            <div className="popup-dropdown">
                                <select name="" id=""
                                    onChange={(e) => setNumMembers(e.target.value)}>
                                    <option value="15">15</option>
                                    <option value="30">30</option>
                                    <option value="50">50</option>
                                    <option value="75">75</option>
                                </select>
                            </div>

                            <button className={`${isDisabled && "signup-disabled"} signup-form_btn popup-form_btn`} type={"submit"} disabled={isDisabled}>
                                {loading ? <div className="loading-button" /> : "submit"}
                            </button>
                        </form>
                    </Popup>
                }
                <div className="dashboardHome-top">
                    <div className="dashboardHome-org">
                        <span>no organization</span>
                    </div>
                    <button className="dashboardHome-btn" onClick={() => setShowModal(true)}>
                        create new organization
                    </button>
                </div>

                {/* if there is no organization */}
                <div className="dashboardHome-box">
                    {/* if there is no organization
                     */}
                    {data.length === 0 && <h2>no organization found</h2>}

                    {/* if there is a organization */}
                    <div className="dashboardHome-inner">
                        {dataItems}
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}

export default DashboardHome;
