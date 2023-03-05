import { useContext, useState } from 'react';
import './AddUserForm.css';
import ContextData from '../ContextData';
import { v4 as uuidv4 } from 'uuid';

function AddUserForm() {
    const {
        user,
        setUser,
        usersBalance,
        setUsersBalance,
        usersFirstName,
        usersLastName,
        setUsersFirstName,
        setUsersLastName,
        setTotalUsersCount,
    } = useContext(ContextData);

    const addUser = (firstName, lastName) => {
        setUser((u) => [
            ...u,
            {
                firstName: firstName,
                lastName: lastName,
                usersBalance: 0,
                id: uuidv4(),
            },
        ]);
        setTotalUsersCount(user.length);

        return (
            <>
                <div className="main-area">
                    <div className="users-profile">
                        <h1>
                            {usersFirstName} {usersLastName}
                        </h1>
                        <div className="account-balance">
                            <p>Account Balance:</p>
                            <p>{usersBalance}</p>
                        </div>
                        <div className="transactions">
                            <div className="upper">
                                <label htmlFor="">Amount</label>
                                <input type="text" id="text" />
                            </div>
                            <div className="lower">
                                <button className="transfer-btn">
                                    transfer
                                </button>
                                <button className="withdraw-btn">
                                    withdraw{' '}
                                </button>
                            </div>
                        </div>
                        <button className="delete-btn">delete</button>
                    </div>
                </div>
            </>
        );
    };

    const firstNameHandler = (event) => {
        setUsersFirstName(event.target.value);
    };

    const lastNameHandler = (event) => {
        setUsersLastName(event.target.value);
    };

    function isInputValid(enteredName) {
        return (
            usersFirstName.length >= 3 &&
            usersLastName.length >= 3 &&
            !/\d/.test(enteredName)
        );
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (isInputValid(usersFirstName, usersLastName)) {
            addUser(usersFirstName, usersLastName);
            setUsersFirstName('');
            setUsersLastName('');
        }
    };

    return (
        <div className="add-user">
            <form action="" onSubmit={submitHandler}>
                <div className="input">
                    <label htmlFor="firstName">Users First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={usersFirstName}
                        onChange={firstNameHandler}
                    />
                    <label htmlFor="lastName">Users Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={usersLastName}
                        onChange={lastNameHandler}
                    />
                </div>
                <button type="submit" className="add-btn" onClick={addUser}>
                    Add user
                </button>
            </form>
        </div>
    );
}
export default AddUserForm;
