const Dashboard = ({ handlecomplaint }) => {

    const headings = "lg:p-4 lg:font-bold lg:text-2xl "
    const complaints = " lg:border-b-1 lg:border-black lg:p-4 lg:text-lg lg:font-medium "

    const { name } = location.state || { name: "Student" };

    const newcomplaint = handlecomplaint

    var id = 1
    const today = new Date().toLocaleDateString();
    const data = [
        { id: id++, des: "Internet Problem", pri: "High", status: "Pending", date: "2/20/2026" },
        { id: id++, des: "Watch Lost", pri: "High", status: "Solved", date: "2/2/2026" },
        { id: id++, des: "No Book Shop", pri: "Normal", status: "Pending", date: "2/3/2026" },
        { id: id++, des: "Bike Issue", pri: "High", status: "Pending", date: "2/8/2026" },
        { id: id++, des: "Charger Stolen", pri: "High", status: "Solved", date: "2/18/2026" },
        
    ];

return (
    <div className=" lg:h-full">
        <h1 className="lg:text-3xl lg:font-bold lg:m-4">Welcome, {name}!</h1>

        <div className="lg:grid lg:grid-cols-5 lg:gap-0 lg:pl-5 lg:pr-5 lg:py-5  ">

            <div className={headings} >Sr#</div>
            <div className={headings}>Description</div>
            <div className={headings}>Priority</div>
            <div className={headings}>Status</div>
            <div className={headings}>Date</div>
            {data.map(task => (
                <>
                    <div key={`${task.id}-id`} className={complaints}>{task.id}</div>
                    <div key={`${task.id}-des`} className={complaints}>{task.des}</div>
                    <div key={`${task.id}-pri`} className={complaints}>{task.pri}</div>
                    <div key={`${task.id}-status`} className={`${complaints}${task.status == "Solved" ? "lg:text-green-600" : "lg:text-red-600"}`}>{task.status}</div>
                    <div key={`${task.id}-date`} className={complaints}>{task.date}</div>
                </>
            ))}
        </div>
    </div>
);
};

export default Dashboard;