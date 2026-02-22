import Mycomplaint from "./Mycomplaint";
import Dashboard from "./Dashboard";

const Complaintdata2 = () => {

    let id = 1;
    const data = [
        { id: id++, des: "Internet Problem", pri: "Low", status: "Pending", date: "2/20/2026" },
        { id: id++, des: "Watch Lost", pri: "High", status: "Solved", date: "2/2/2026" },
        { id: id++, des: "No Book Shop", pri: "Medium", status: "Pending", date: "2/3/2026" },
        { id: id++, des: "Bike Issue", pri: "High", status: "Pending", date: "2/8/2026" },
        { id: id++, des: "Charger Stolen", pri: "Medium", status: "Solved", date: "2/18/2026" },
        { id: id++, des: "Classroom Projector Not Working", pri: "High", status: "In Progress", date: "2/10/2026" },
        { id: id++, des: "Water Cooler Leakage", pri: "Medium", status: "Pending", date: "2/12/2026" },
        { id: id++, des: "Library AC Issue", pri: "Low", status: "Solved", date: "2/5/2026" },
        { id: id++, des: "Hostel Electricity Fluctuation", pri: "High", status: "In Progress", date: "2/14/2026" },
        { id: id++, des: "Parking Area Lights Not Working", pri: "Medium", status: "Pending", date: "2/16/2026" },
        { id: id++, des: "Cafeteria Food Quality Issue", pri: "Low", status: "Solved", date: "2/7/2026" },
        { id: id++, des: "Broken Classroom Chairs", pri: "Medium", status: "In Progress", date: "2/9/2026" },
        { id: id++, des: "Lost Student ID Card", pri: "High", status: "Pending", date: "2/11/2026" },
        { id: id++, des: "Bus Timing Delay", pri: "Low", status: "Solved", date: "2/4/2026" },
        { id: id++, des: "Lab Computer Not Booting", pri: "High", status: "In Progress", date: "2/19/2026" }
    ];
    return (
        <>
            <Mycomplaint data={data} />            
        </>
    );
}

export default Complaintdata2
