import "../styles/Dashboard.css";

function Dashboard() {

    const logout = () => {

        localStorage.removeItem("token");

        window.location.href = "/";
    };

    return (

        <div className="dashboard-container">

            <div className="dashboard-card">

                <h1>Dashboard</h1>

                <p>
                    Welcome to Smart Task & Interview Tracker
                </p>

                <button onClick={logout}>
                    Logout
                </button>

            </div>

        </div>
    );
}

export default Dashboard;