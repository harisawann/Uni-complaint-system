import Mycomplaint from "./Mycomplaint";
import Dashboard from "./Dashboard";
import Submitcomplaint from "./Submitcomplaint";
import { useState } from "react";

const Complaintdata = ({ view }) => {
    const [complaints, setComplaints] = useState([]);

    // Function to add a new complaint
    const addComplaint = (newComplaint) => {
        const today = new Date().toLocaleDateString();
        const id = complaints.length + 1 ;
        const { title, priority } = newComplaint; // get values from new complaint
        setComplaints(prev => [...prev, { id, date: today, des: title, pri: priority, status: newComplaint.status }]);
        console.log("Added complaint:", newComplaint);
    };

    // Static base complaints
    const baseData = [
        { id: 1, des: "Internet Problem", pri: "Low", status: "Pending", date: "2/20/2026" },
        { id: 2, des: "Watch Lost", pri: "High", status: "Solved", date: "2/2/2026" },
        { id: 3, des: "No Book Shop", pri: "Medium", status: "Pending", date: "2/3/2026" },
        { id: 4, des: "Bike Issue", pri: "High", status: "Pending", date: "2/8/2026" },
        { id: 5, des: "Charger Stolen", pri: "Medium", status: "Solved", date: "2/18/2026" },
    ];

    // Merge static data + newly added complaints
    const combinedData = [...baseData, ...complaints];

    if (view === "Mycomplaint") {
        return <Mycomplaint data={combinedData} />;
    }

    if (view === "Dashboard") {
        return <Dashboard data={combinedData} />;
    }

    if (view === "Submitcomplaint") {
        return <Submitcomplaint addComplaint={addComplaint} />;
    }

    return null;
};

export default Complaintdata;