const UserDetails = ()=> {
    return <div className="user-details-container">
        <div>
            Name of organization/person:
            <input type="text" name="transaction-name" id="transaction" placeholder="Enter name of company/person" />
            <br />
            Type of transaction:
            <input type="checkbox" name="transaction-type" id="transaction-type" />
            <label htmlFor="transaction-type">Credit</label>
            <label htmlFor="transaction-type">Dedit</label>
            <br />
            Amount: 
            <input type="number" name="amount" id="transaction-amout" placeholder="Enter amount in Rs." />
            <br />
            <button>Save details</button>
        </div>
        User Details
    </div>
}

export default UserDetails;