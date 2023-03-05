import { useContext } from 'react';
import ContextData from '../ContextData';
import './TotalCount.css';
function TotalCount() {
    const { totalUsersCount, totalMoneyCount } = useContext(ContextData);
    return (
        <div className="total">
            <div className="total-users">Total Users: {totalUsersCount} </div>
            <div className="total-money">Total Money: {totalMoneyCount} </div>
        </div>
    );
}

export default TotalCount;
