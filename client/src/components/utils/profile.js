import React from 'react';

const Profile = (props) => {
    return (
        <div className="user-view__content">
            <div className="user-view__form-container">
                <h2 className="heading-secondary ma-bt-md">
                    Your account settings
                </h2>
                <form action="" className="form form-user-data">
                    <div className="form__group">
                        <label htmlFor="name" className="form__label">Name</label>
                        <input type="text" id="name" className="form__input" name="name" required />
                    </div>
                    <div className="form__group ma-bt-md">
                        <label htmlFor="email" className="form__label">Email address</label>
                        <input type="email" id="email"
                            className="form__input"
                            name="email"
                            required
                        />
                    </div>
                    <div className="form__group right">
                        <button className="btn btn--small btn--gold">save setting</button>
                    </div>
                </form>
                <div className="line" />
                <div className="user-view__form-container">
                    <h2 className="heading-secondary ma-bt-md">Password change</h2>
                    <form action="" className="form form-user-password">
                        <div className="form__group">
                            <label htmlFor="password-current" className="form__label">current password</label>
                            <input type="password"
                                id="password-current"
                                className="form__input"
                                placeholder="••••••••"
                                required
                                minlength="8"
                            />
                        </div>
                        <div className="form__group">
                            <label htmlFor="password" className="form__label">New password</label>
                            <input type="password" id="password" className="form__input" placeholder="••••••••" minlength="8" />
                        </div>
                        <div className="form__group ma-bt-lg">
                            <label htmlFor="password-confirm" className="form__label">Confirm password</label>
                            <input type="password" id="password-confirm" className="form__input" placeholder="••••••••" minlength="8" required />
                        </div>

                        <div className="form__group right">
                            <button className="btn btn--small btn--gold btn--save">Save password</button>
                        </div>

                    </form>
                </div>
            </div>
            <div className="user-view__children">
                {props.children}
            </div>
        </div>
    );
}

export default Profile;
