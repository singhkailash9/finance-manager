import "../style/profile.css"

const Profile = ()=> {
    const USER = "ABC";
    return <div className="profile-container">
        <h1>Profile</h1>
        <h3>Username: {USER}</h3>
        <h3>Email: Not registered</h3>
        <button>Export my details</button>
        <button>Delete Account</button>
    </div>
}

export default Profile;
