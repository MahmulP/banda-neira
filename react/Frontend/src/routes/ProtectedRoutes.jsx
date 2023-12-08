import { Navigate, Outlet } from "react-router-dom";

type (props) = {
    isLoggin: boolean
};

const ProtectedRoutes = ({isLoggin }) => {
    return isLoggin ? <Outlet/> : <Navigate to="/login" replace/>;
};

// const ProtectedRoutes = (props) => {
//     const fakeAuth = false;

//     if (!fakeAuth) return <Navigate to="/login"/>;

//     return props.children;
// };

export default ProtectedRoutes;