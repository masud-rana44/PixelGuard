import { useAuth } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function PublicOutlet() {
  const { user } = useAuth();

  return !user ? <Outlet /> : <Navigate replace to="/" />;
}

export default PublicOutlet;
