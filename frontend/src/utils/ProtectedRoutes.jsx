import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  return isAuthenticated ? element : <Navigate to="/auth" />;
};

export default ProtectedRoute;