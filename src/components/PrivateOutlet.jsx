import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateOutlet({ children }) {
  const { user } = useAuth();

  return user ? children : <Navigate replace to="/signin" />;
}

export default PrivateOutlet;
