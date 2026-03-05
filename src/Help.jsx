const Help = () => {
    return (
        <>
            <div>
                <div className="max-sm:font-black max-sm:text-center max-sm:text-2xl max-sm:my-5 lg:font-black lg:text-5xl lg:text-center lg:my-10" >
                    Help
                </div>
                {/* Section 1 */}
                <div className="mb-6 border p-4 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">How to Submit a Complaint</h2>
                    <p className="text-gray-700">
                        1. Go to the <strong>Add Complaints</strong> page. <br />
                        2. Write the problem clearly in the description box. <br />
                        3. Select the complaint priority (Low, Medium, High). <br />
                        4. Click submit. Your complaint will be saved in the system.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="mb-6 border p-4 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">How to Track Your Complaint</h2>
                    <p className="text-gray-700">
                        Open the <strong>View Complaints</strong> page.
                        You will see all your submitted complaints with their current status and date.
                    </p>
                </div>

                {/* Section 3 */}
                <div className="mb-6 border p-4 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">Complaint Status Meaning</h2>
                    <p className="text-gray-700">
                        <strong>Pending:</strong> Your complaint has been received but not solved yet. <br />
                        <strong>Solved:</strong> The issue has been resolved by the administration.
                    </p>
                </div>

                {/* Section 4 */}
                <div className="border p-4 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">Need More Help?</h2>
                    <p className="text-gray-700">
                        If your complaint is not resolved within a reasonable time,
                        contact the administration office or system administrator.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Help