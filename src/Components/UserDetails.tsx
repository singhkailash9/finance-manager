import React from "react";
import "../style/user-details.css"

const UserDetails = () => {

    const handleUserDetails = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("User details submitted");
    }

    const handleDelete = () => {
        console.log("Deleted");
    }

    return <div className="user-details-container">
        <form className="user-details-manager" onSubmit={handleUserDetails}>
            Transaction Name:
            <input type="text" name="transaction-name" id="transaction" placeholder="Name of Business/Person" />

            Amount:
            <input type="number" name="amount" id="transaction-amout" placeholder="Enter amount in Rs." />

            <label htmlFor="transaction-type">Type:</label>
            <select id="transaction-type" name="transaction-type">
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
            </select>

            <button type="submit" id="user-details-button">Save details</button>
        </form>
        <div className="user-data-container">
            <table id="user-data-table">
                <thead>
                    <tr className="finance-table-heading">
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="finance-table-data">
                        <td>Electricity Bill</td>
                        <td>900</td>
                        <td>Debit</td>
                        <td>March 2024</td>
                        <td><button onClick={handleDelete}>Delete</button></td>
                    </tr>
                    <tr className="finance-table-data">
                        <td>Scholarship claim</td>
                        <td>7300</td>
                        <td>Credit</td>
                        <td>January 2024</td>
                        <td><button onClick={handleDelete}>Delete</button></td>
                    </tr>
                    <tr className="finance-table-data">
                        <td>Stocks Investment</td>
                        <td>2000</td>
                        <td>Debit</td>
                        <td>Feb 2024</td>
                        <td><button onClick={handleDelete}>Delete</button></td>
                    </tr>
                    <tr className="finance-table-data">
                        <td>Mobile recharge</td>
                        <td>500</td>
                        <td>Dedit</td>
                        <td>March 2024</td>
                        <td><button onClick={handleDelete}>Delete</button></td>
                    </tr>
                    <tr className="finance-table-data">
                        <td>Internship</td>
                        <td>2000</td>
                        <td>Credit</td>
                        <td>March 2024</td>
                        <td><button onClick={handleDelete}>Delete</button></td>
                    </tr>
                    <tr className="finance-table-data">
                        <td>Online course</td>
                        <td>1000</td>
                        <td>Credit</td>
                        <td>March 2024</td>
                        <td><button onClick={handleDelete}>Delete</button></td>
                    </tr>
                    <tr className="finance-table-data">
                        <td>Gym subscription</td>
                        <td>500</td>
                        <td>Credit</td>
                        <td>March 2024</td>
                        <td><button onClick={handleDelete}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}

export default UserDetails;