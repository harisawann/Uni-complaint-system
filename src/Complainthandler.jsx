import Dashboard from "./Dashboard";

const Complainthandler = ({ complaints }) => {
    return <>
        <Dashboard complaints={complaints} />
    </>;
};

export default Complainthandler;