import { useNavigate, useLocation } from "react-router-dom";

const Dashboard = ({ data = [] }) => {
    const location = useLocation();
    const { name } = location.state || { name: "Student" };
    const navigate = useNavigate();

    const complaintsbox =
        "bg-white shadow-xl rounded-xl h-48 w-64 m-4 flex flex-col justify-between p-6 text-center";

    const titleStyle = "text-gray-600 text-lg font-semibold";
    const complaintsnumbering = "text-5xl font-bold mt-4";

    const btn =
        "bg-blue-500 hover:bg-blue-600 transition-all ease-in-out duration-300 hover:scale-105 hover:translate-y-1 hover:translate-x-1 hover:shadow-2xl rounded-md text-xl font-semibold p-2 cursor-pointer";

    console.log(data)
    const totalComplaints = data?.length || 0;
    const solvedCount = data.filter(item => item.status === "Solved").length;
    const pendingCount = data.filter(item => item.status === "Pending").length;
    const inProgressCount = data.filter(item => item.status === "In Progress").length;

    return (
        <div>
            <h1 className="lg:text-3xl lg:font-bold lg:p-2 lg:m-4">
                Welcome, {name}!
            </h1>

            <div className="mt-5 flex justify-center items-center">
                <div className="flex flex-wrap justify-center">
                    <div className={`${complaintsbox} border-t-4 border-blue-400`}>
                        <div className={titleStyle}>Total Complaints</div>
                        <div className={`${complaintsnumbering} text-blue-600`}>
                            {totalComplaints}
                        </div>
                    </div>

                    <div className={`${complaintsbox} border-t-4 border-green-500`}>
                        <div className={titleStyle}>Solved Complaints</div>
                        <div className={`${complaintsnumbering} text-green-600`}>
                            {solvedCount}
                        </div>
                    </div>

                    <div className={`${complaintsbox} border-t-4 border-yellow-500`}>
                        <div className={titleStyle}>In Progress Complaints</div>
                        <div className={`${complaintsnumbering} text-yellow-600`}>
                            {inProgressCount}
                        </div>
                    </div>

                    <div className={`${complaintsbox} border-t-4 border-red-500`}>
                        <div className={titleStyle}>Pending Complaints</div>
                        <div className={`${complaintsnumbering} text-red-600`}>
                            {pendingCount}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex m-10 p-5 justify-around">
                <button
                    className={btn}
                    onClick={() => navigate("/student/submitcomplaint")}
                >
                    Add Complaints
                </button>
                <button
                    className={btn}
                    onClick={() => navigate("/student/mycomplaint")}
                >
                    View Complaints
                </button>
            </div>
        </div>
    );
};

export default Dashboard;