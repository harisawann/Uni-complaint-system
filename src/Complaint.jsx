import React, { useState } from "react";
import Complainthandler from "./Complainthandler";

const Complaint = () => {
    const [title, Settitle] = useState("");
    const [description, Setdescription] = useState("");
    const [priority, Setpriority] = useState("");
    const [complaints, Setcomplaints] = useState([]);

    const inputStyle =
        "w-full border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400";
    const labeltext = "block mb-1 font-medium";
    const filled = title && description && priority;

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComplaint = {
            title,
            description,
            priority,
            status: "Pending",
        };

        Setcomplaints([...complaints, newComplaint]);
        Settitle("");
        Setdescription("");
        Setpriority("");
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Submit Complaint</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className={labeltext}>Complaint Title</label>
                    <input
                        className={inputStyle}
                        type="text"
                        value={title}
                        onChange={(e) => Settitle(e.target.value)}
                        placeholder="Enter complaint title"
                    />
                </div>

                <div>
                    <label className={labeltext}>Description</label>
                    <textarea
                        className={inputStyle}
                        rows="4"
                        value={description}
                        onChange={(e) => Setdescription(e.target.value)}
                        placeholder="Explain your issue in detail"
                    />
                </div>

                <div>
                    <label className={labeltext}>Priority</label>
                    <select
                        className={inputStyle}
                        value={priority}
                        onChange={(e) => Setpriority(e.target.value)}
                    >
                        <option value="">Select Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <div>
                    <label className={labeltext}>Upload Supporting Document</label>
                    <input className="w-full" type="file" accept=".pdf,.jpg,.png" />
                </div>

                <button
                    type="submit"
                    disabled={!filled}
                    className={`w-full py-2 rounded-md text-white ${filled
                            ? "bg-blue-600 hover:bg-blue-700 cursor-pointer transition"
                            : "bg-gray-400 cursor-not-allowed transition"
                        }`}
                >
                    Submit Complaint
                </button>
            </form>

            {complaints.length > 0 && <Complainthandler complaints={complaints} />}
        </div>
    );
};

export default Complaint;