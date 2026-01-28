import { AllIcon, AssignIcon, HistoryIcon, HomeIcon, LogoutIcon, ManageIcon, User } from "./icons"
import Navitem from "./Navitem"


const AdminNav = ({ slide }) => {
    return (
        <>
            <div className="max-sm:p-5 " >
                <Navitem to='/dashboard' label='Dashboard' icons={<HomeIcon />} showLabel={!slide} />
                <Navitem to='/allcomplaint' label='All Complaint' icons={<AllIcon />} showLabel={!slide} />
                <Navitem to='/assigncomplaint' label='Assign Comp' icons={<AssignIcon />} showLabel={!slide} />
                <Navitem to='/manageuser' label='Manage User' icons={<ManageIcon />} showLabel={!slide} />
                <Navitem to='/history' label='History' icons={<HistoryIcon />} showLabel={!slide} />
                <Navitem to='/logout' label='Logout' icons={<LogoutIcon />} showLabel={!slide} />
            </div>            
        </>
    )
}

export default AdminNav