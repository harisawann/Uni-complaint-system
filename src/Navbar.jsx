import StdNav from "./StdNav";
import FacultyNav from "./FacultyNav";
import AdminNav from "./AdminNav";
import { useEffect, useState } from "react";
import { AngleLeftIcon, AngleRightIcon, User } from "./icons";

const Navbar = ({ role }) => {

    const [device, setDevice] = useState(window.innerWidth < 768)
    const [menu, setMenu] = useState(false)
    const [slide, setslide] = useState(true)

    useEffect(() => {
        const resize = () => setDevice(window.innerWidth < 768)
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menu ? 'hidden' : 'auto'
    }, [menu])




    function mobile() {
        return (
            <>
                <div>
                    <div className=" max-sm:w-full max-sm:border-2 max-sm:border-[#40916c] max-sm:bg-[#40916c] max-sm:flex max-sm:py-4 " >
                        <div className=" max-sm:text-2xl max-sm:pl-2  "
                            onClick={() => setMenu(!menu)} >
                            ☰
                        </div>
                        <nav>
                            <h1 className="max-sm:text-2xl max-sm:mx-5 max-sm:font-semibold">
                                University Complaint System
                            </h1>
                        </nav>
                    </div>

                    {menu && (
                        <div className=" max-sm:scroll-mt-0 max-sm:h-screen max-sm:top-0 max-sm:w-auto  max-sm:bg-[#b7e4c7] " >
                            <ul>
                                {role === "student" && <StdNav />}
                                {role === "faculty" && <FacultyNav />}
                                {role === "admin" && <AdminNav />}
                            </ul>
                        </div>
                    )}
                </div>
            </>
        )
    }

    function pc() {
        return (
            <>
                <nav className="lg:w-full lg:bg-[#40916c] lg:px-6  lg:flex lg:justify-between lg:items-center   ">
                    <h1 className="lg:py-5 lg:text-2xl lg:font-semibold">
                        University Complaint System
                    </h1>
                    <div className={` h-auto flex flex-col items-center mx-4 text-2xl `} >
                        <User />
                        <div className="text-sm py-0.5 " >
                            {role.toUpperCase()}
                        </div>
                    </div>
                </nav>

                <div className={` lg:border-2 lg:border-[#b7e4c7] lg:rounded-br-lg lg:rounded-tr-lg lg:bg-[#b7e4c7]  lg:min-h-screen ${slide ? "lg:w-12 lg:transition-all lg:duration-300  " : "lg:w-50 lg:transition-all lg:duration-300 "} `}>

                    <div className=" text-2xl flex justify-end p-2 "
                        onClick={() => setslide(!slide)}>
                        {slide ? <AngleRightIcon /> : <AngleLeftIcon />}
                    </div>
                    <ul>
                        {role === "student" && <StdNav slide={slide} />}
                        {role === "faculty" && <FacultyNav slide={slide} />}
                        {role === "admin" && <AdminNav slide={slide} />}
                    </ul>
                </div >
            </>
        )
    }

    return (
        <>
            {device ? mobile() : pc()}
        </>
    );
};

export default Navbar;