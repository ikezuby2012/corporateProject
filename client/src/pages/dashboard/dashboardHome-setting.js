import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import { updateOrganization } from "../../actions/organization";
import { updateOrg } from "../../api";
import MainLayout from "../../components/dashboard/MainLayout";
import AuthPopup from '../../components/utils/authPopup';

let token = JSON.parse(localStorage.getItem("token"));

const DashboardHomeSetting = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [regNo, setRegNo] = useState("");
    const [orgAddress, setOrgAddress] = useState("");
    const [data, setData] = useState([]);
    const [accountName, setAccountName] = useState("");
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [nameMsg, setNameMsg] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const { id } = useParams();
    console.log(id);

    const fetchData = useCallback(async () => {
        try {
            const res = await axios.get(`${updateOrg}/${id}`, {
                headers: {
                    "Authorization": `bearer ${token}`
                }
            });
            setData(res.data);
            console.log(data);
        } catch (err) {

        }
    }, [data]);

    useEffect(() => {

        const timer = setTimeout(() => {
            fetchData();
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, [fetchData]);

    const onEmailChange = (e) => {
        setEmail(e.target.value);
        const pattern =
            /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        if (pattern.test(e.target.value)) {
            e.persist();
            setEmail(e.target.value);
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };
    const onOrgSetting = (e) => {
        e.preventDefault();
        setLoading(true);
        if (nameError === false && emailError === false) {
            const data = {
                name,
                email,
                address: orgAddress,
                reg_no: regNo,
            }
            setLoading(false);
            console.log(data);
            dispatch(updateOrganization(data, id))
                .then(() => {
                    console.log("it worked! now");
                    setShowPopup(true);
                    setNameMsg("updated successfully!");
                }).catch(() => {
                    setShowPopup(true);
                    setNameMsg("error occurred, try again later!")
                })
        } else {
            setLoading(false);
            setShowPopup(true);
            setNameMsg("error occurred, try again later!")
        }
    }

    const onAccountSetting = (e) => {
        e.preventDefault();
        setLoading(true);
        if (nameError === false && emailError === false) {
            const data = {
                account_name: accountName,
                account_number:accountNumber,
                bank_name: bankName
            }
            setLoading(false);
            console.log(data);
            dispatch(updateOrganization(data, id))
                .then(() => {
                    console.log("it worked! now");
                    setShowPopup(true);
                    setNameMsg("updated successfully!");
                }).catch(() => {
                    setShowPopup(true);
                    setNameMsg("error occurred, try again later!")
                })
        }
    }

    const handleClose = () => setShowPopup(!showPopup);

    let _data = data.data;
    console.log(_data);
    return (
        <MainLayout>
            <div className="dashboardHomeSetting">
                {showPopup && <AuthPopup content={nameMsg} handleClose={() => handleClose()} />}
                <div className="dashboardHomeSetting-box">
                    <h3>organization</h3>
                    <div className="dashboardHomeSetting-panel">
                        <form onSubmit={(e) => onOrgSetting(e)}>
                            <h3>name
                                <span style={{ color: "red" }}>*</span>
                            </h3>
                            <div className="signup-form_group">
                                <input type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    className="signup-form_input"
                                    placeholder="name"
                                    id="name"
                                    name={"name"}
                                    defaultValue={_data ? _data.name : ""}
                                    required={true} />
                                <label htmlFor="name" className="signup-form_label">name</label>
                            </div>
                            <h3>email
                                <span style={{ color: "red" }}>*</span>
                            </h3>
                            <div className="signup-form_group">
                                <input type="email"
                                    onChange={(e) => onEmailChange(e)}
                                    className="signup-form_input"
                                    placeholder="email"
                                    id="email"
                                    name={"email"}
                                    defaultValue={_data ? _data.email : ""}
                                    required={true} />
                                <label htmlFor="email" className="signup-form_label">email</label>
                            </div>
                            <h3>registration number or CAC
                                <span style={{ color: "red" }}>*</span>
                            </h3>
                            <div className="signup-form_group">
                                <input type="text"
                                    onChange={(e) => setRegNo(e.target.value)}
                                    className="signup-form_input"
                                    placeholder="registration number"
                                    id="RegNo"
                                    name={"RegNo"}
                                    defaultValue={_data ? _data.reg_no : ""}
                                    required={true} />
                                <label htmlFor="RegNo" className="signup-form_label">registration number</label>
                            </div>

                            <h3>corporate organization address
                                <span style={{ color: "red" }}>*</span>
                            </h3>
                            <div className="signup-form_group">
                                <textarea
                                    required
                                    className="signup-form_input dashboardHomeSetting_form-input-text"
                                    placeholder="address"
                                    id="address"
                                    name="address"
                                    defaultValue={_data ? _data.address : ""}
                                    // value={state.message}
                                    onChange={(e) => setOrgAddress(e.target.value)}
                                />
                            </div>
                            <button className="btn btn--small btn--gold" style={{ fontSize: "12px", marginTop: "10px" }}>
                                save changes
                            </button>
                        </form>
                    </div>
                </div>

                <div className="dashboardHomeSetting-box">
                    <h3>links</h3>
                    <div className="dashboardHomeSetting-panel">
                        <h2>share link to your members</h2>
                        <h3>localhost:3000/signup/member/{id}</h3>
                    </div>
                </div>

                <div className="dashboardHomeSetting-box">
                    <h3>account settings</h3>
                    <div className="dashboardHomeSetting-panel">
                        <form onSubmit={(e) => onAccountSetting(e)}>
                            <div className="">
                                <h3>account name
                                    <span style={{ color: "red" }}>*</span>
                                </h3>
                                <div className="signup-form_group">
                                    <input type="text"
                                        onChange={(e) => setAccountName(e.target.value)}
                                        className="signup-form_input"
                                        placeholder="account name"
                                        id="accountName"
                                        defaultValue={_data ? _data.account_name : ""}
                                        name={"name"}
                                        required={true} />
                                    <label htmlFor="accountName" className="signup-form_label">account name</label>
                                </div>
                            </div>

                            <div className="">
                                <h3>bank name
                                    <span style={{ color: "red" }}>*</span>
                                </h3>
                                <div className="signup-form_group">
                                    <input type="text"
                                        onChange={(e) => setBankName(e.target.value)}
                                        className="signup-form_input"
                                        placeholder="bank name"
                                        id="bankName"
                                        name={"name"}
                                        defaultValue={_data ? _data.bank_name : ""}
                                        required={true} />
                                    <label htmlFor="bankName" className="signup-form_label">bank name</label>
                                </div>
                            </div>

                            <div className="">
                                <h3>account number
                                    <span style={{ color: "red" }}>*</span>
                                </h3>
                                <div className="signup-form_group">
                                    <input type="number"
                                        onChange={(e) => setAccountNumber(e.target.value)}
                                        className="signup-form_input"
                                        placeholder="account number"
                                        id="number"
                                        defaultValue={_data ? _data.account_number : ""}
                                        name={"name"}
                                        required={true} />
                                    <label htmlFor="number" className="signup-form_label">account number</label>
                                </div>
                            </div>

                            <button className="btn btn--small btn--gold" style={{ fontSize: "12px" }}>
                                save changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default DashboardHomeSetting;