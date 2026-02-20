import { AssignIcon, HomeIcon, LogoutIcon, ReportIcon, ResponseIcon } from "./icons"
import Navitem from "./Navitem"

const FacultyNav = ({slide}) => {
    return (
        <>
            <div className="max-sm:p-5 " >
                <Navitem to='/faculty/dashboard' label='Dashboard' icons={<HomeIcon />} showLabel={!slide} />
                <Navitem to='/faculty/assigned' label='Assigned Comp' icons={<AssignIcon />} showLabel={!slide} />
                <Navitem to='/faculty/response' label='Response' icons={<ResponseIcon />} showLabel={!slide} />
                <Navitem to='/faculty/report' label='Reports' icons={<ReportIcon />} showLabel={!slide} />
                <Navitem to='/faculty/logout' label='Logout' icons={<LogoutIcon />} showLabel={!slide} />
            </div>            
        </>
    )
}

export default FacultyNav