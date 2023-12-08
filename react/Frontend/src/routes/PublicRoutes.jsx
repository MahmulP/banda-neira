import { Navigate } from "react-router-dom";

const PublicRoutes = (props) => {
    const fakeAuth = true;

    if (!fakeAuth) return <Navigate to="/home"/>;

    return props.children;
};

export default PublicRoutes;