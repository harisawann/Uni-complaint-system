const Dashboard = () => {
    const { name } = location.state || { name: "Student" };

    const data = [
        { id: 1, des: "Internet Problem", pri: "High", status: "Pending", date: "2/20/2026" },
        { id: 2, des: "Watch Lost", pri: "High", status: "Solved", date: "2/2/2026" },
        { id: 3, des: "No Book Shop", pri: "Normal", status: "Pending", date: "2/3/2026" },
        { id: 4, des: "Bike Issue", pri: "High", status: "Pending", date: "2/8/2026" },
    ];

    return (
        <div className="lg:border-2 lg:border-black lg:h-full">
            <h1 className="lg:text-3xl lg:font-bold lg:m-4">Welcome, {name}!</h1>

            <div className="lg:grid lg:grid-cols-5 lg:gap-2 lg:pl-5 lg:pr-5 lg:py-5 ">

                <div className="lg:p-2 font-bold border-b border-black">Sr#</div>
                <div className="lg:p-2 font-bold border-b border-black">Description</div>
                <div className="lg:p-2 font-bold border-b border-black">Priority</div>
                <div className="lg:p-2 font-bold border-b border-black">Status</div>
                <div className="lg:p-2 font-bold border-b border-black">Date</div>

                {data.map(task => (
                    <>
                        <div key={`${task.id}-id`} className="lg:p-2 border-b border-gray-300">{task.id}</div>
                        <div key={`${task.id}-des`} className="lg:p-2 border-b border-gray-300">{task.des}</div>
                        <div key={`${task.id}-pri`} className="lg:p-2 border-b border-gray-300">{task.pri}</div>
                        <div key={`${task.id}-status`} className="lg:p-2 border-b border-gray-300">{task.status}</div>
                        <div key={`${task.id}-date`} className="lg:p-2 border-b border-gray-300">{task.date}</div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;