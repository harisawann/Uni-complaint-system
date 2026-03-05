const Mycomplaint = ({ data = [] }) => {

    const headings = "hidden lg:block p-2 font-bold text-lg lg:text-2xl";
    const complaints = "p-2 text-sm lg:text-lg border-b border-gray-300";

    return (
        <div className="w-full">

            {/* Table header for large screens */}
            <div className="hidden lg:grid grid-cols-5 px-5 py-3 border-b border-black">
                <div className="font-bold text-xl">Sr#</div>
                <div className="font-bold text-xl">Description</div>
                <div className="font-bold text-xl">Priority</div>
                <div className="font-bold text-xl">Status</div>
                <div className="font-bold text-xl">Date</div>
            </div>

            {/* Data */}
            {data.map(task => (
                <div
                    key={task.id}
                    className="border rounded-lg p-3 mb-3 lg:mb-0 lg:border-0 lg:rounded-none lg:grid lg:grid-cols-5 lg:px-5 lg:py-3"
                >
                    <div className={complaints}>
                        <span className="font-semibold lg:hidden">Sr#: </span>
                        {task.id}
                    </div>

                    <div className={complaints}>
                        <span className="font-semibold lg:hidden">Description: </span>
                        {task.des}
                    </div>

                    <div className={complaints}>
                        <span className="font-semibold lg:hidden">Priority: </span>
                        {task.pri}
                    </div>

                    <div
                        className={`${complaints} ${
                            task.status === "Solved"
                                ? "text-green-600"
                                : "text-red-600"
                        }`}
                    >
                        <span className="font-semibold lg:hidden">Status: </span>
                        {task.status}
                    </div>

                    <div className={complaints}>
                        <span className="font-semibold lg:hidden">Date: </span>
                        {task.date}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Mycomplaint;