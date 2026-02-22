import React from "react";


const Mycomplaint = ({ data = [] }) => {
    const headings = "lg:p-4 lg:font-bold lg:text-2xl";
    const complaints = "lg:border-b-1 lg:border-black lg:p-4 lg:text-lg lg:font-medium";


    return (
        <div className="lg:h-full">

            <div className="lg:grid lg:grid-cols-5 lg:gap-0 lg:pl-5 lg:pr-5 lg:py-5">
                <div className={headings}>Sr#</div>
                <div className={headings}>Description</div>
                <div className={headings}>Priority</div>
                <div className={headings}>Status</div>
                <div className={headings}>Date</div>

                {data.map(task => (
                    <React.Fragment key={task.id}>
                        <div className={complaints}>{task.id}</div>
                        <div className={complaints}>{task.des}</div>
                        <div className={complaints}>{task.pri}</div>
                        <div className={`${complaints} ${task.status === "Solved" ? "lg:text-green-600" : "lg:text-red-600"}`}>
                            {task.status}
                        </div>
                        <div className={complaints}>{task.date}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Mycomplaint;