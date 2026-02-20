const About = () => {
    return (
        <>
            <div className="lg:relative lg:w-auto  " >
                <div className="max-sm:font-black max-sm:text-center max-sm:text-2xl max-sm:my-5 lg:font-black lg:text-5xl lg:text-center lg:my-10" >
                    About US
                </div>
                <div className="max-sm:leading-relaxed max-sm:mx-5 max-sm:my-5  lg:mx-50 lg:my-10 lg:w-auto lg:leading-relaxed lg:tracking-wide lg:text-xl " >
                    The University Complaint Management System is a web-based platform designed to handle and resolve complaints efficiently within the university. It allows students and staff to submit complaints, track their status, and receive timely updates.
                    <br />
                    The system follows a clear workflow where complaints are reviewed, assigned, investigated, verified, and closed. Each role has defined responsibilities to ensure transparency and accountability.
                </div>
            </div>
        </>
    )
}

export default About