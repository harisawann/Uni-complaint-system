import { useEffect, useState } from "react"
import { AboutIcon, ComplaintIcon, HelpIcon, HomeIcon, LogoutIcon, SubmitIcon, User } from "./icons"
import Navitem from "./NavItem"


const StdNav = ({ slide }) => {

    return (
        <>
            <div className="max-sm:p-5 " >
                <Navitem to='/dashboard' label="Dashboard" icons={<HomeIcon />} showLabel={!slide} />
                <Navitem to='/complaint' label="Submit Comp" icons={<SubmitIcon />} showLabel={!slide} />
                <Navitem to='/mycomplaint' label="My Complaint" icons={<ComplaintIcon />} showLabel={!slide} />
                <Navitem to='/about' label='About US' icons={<AboutIcon />} showLabel={!slide} />
                <Navitem to='/help' label='Help' icons={<HelpIcon />} showLabel={!slide} />
                <Navitem to='/logout' label="Logout" icons={<LogoutIcon />} showLabel={!slide} />                
            </div>            
        </>
    )
}

export default StdNav