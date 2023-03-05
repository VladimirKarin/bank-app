import { useContext } from 'react';
import ContextData from '../ContextData';
import './UserProfile.css';
function UserProfile() {
    const { usersFirstName, usersLastName, usersBalance } =
        useContext(ContextData);

    return (
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
                        <button className="transfer-btn">transfer</button>
                        <button className="withdraw-btn">withdraw </button>
                    </div>
                </div>
                <button className="delete-btn">delete</button>
            </div>
        </div>
    );
}

export default UserProfile;
