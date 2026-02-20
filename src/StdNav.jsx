import { useEffect, useState } from "react"
import { AboutIcon, ComplaintIcon, HelpIcon, HomeIcon, LogoutIcon, SubmitIcon, User } from "./icons"
import Navitem from "./Navitem"


const StdNav = ({ slide }) => {

    return (
        <>
            <div className={`max-sm:p-5`} >
                <Navitem  to='/student/dashboard' label="Dashboard" icons={<HomeIcon />} showLabel={!slide} />
                <Navitem to='/student/complaint' label="Submit Comp" icons={<SubmitIcon />} showLabel={!slide} />
                <Navitem  to='/student/mycomplaint' label="My Complaint" icons={<ComplaintIcon />} showLabel={!slide} />
                <Navitem to='/student/about' label='About US' icons={<AboutIcon />} showLabel={!slide} />
                <Navitem to='/student/help' label='Help' icons={<HelpIcon />} showLabel={!slide} />
                <Navitem to='/student/logout' label="Logout" icons={<LogoutIcon />} showLabel={!slide} />
            </div>
        </>
    )
}

export default StdNav


