import { Navigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  const fakeAuth = false;

  if (!fakeAuth) return <Navigate to="/login" />;

  return props.children;
};

export default ProtectedRoutes;
