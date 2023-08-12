import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-hot-toast";

function Nav() {
  const { user, logout } = useAuth();
  const navigate = useNavigate(false);
  const location = useLocation();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  async function signOut() {
    try {
      await logout();
      toast.success("Successfully logged out");
    } catch (err) {
      toast.error(err.message || "Logout failed");
    }
  }

  function handleClick() {
    navigate(location.pathname === "/signin" ? "/signup" : "/signin");
  }

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link to="/" className="flex-center gap-2 " onClick={() => {}}>
        <img
          src="./logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Prompt
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link to="/profile">
              <span className="w-9 h-9 rounded-full bg-slate-400 flex items-center justify-center text-white font-medium">
                {user?.displayName[0].toUpperCase()}
              </span>
            </Link>
          </div>
        ) : (
          <button type="button" onClick={handleClick} className="black_btn">
            {location.pathname === "/signin" ? "Sign Up" : "Sign In"}
          </button>
        )}
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {user ? (
          <div className="flex">
            <img
              src="./menu.svg"
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button type="button" onClick={handleClick} className="outline_btn">
            {location.pathname === "/signin" ? "Sign Up" : "Sign In"}
          </button>
        )}
      </div>
    </nav>
  );
}

export default Nav;
