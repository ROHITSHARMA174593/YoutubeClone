import React, { useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { setcurrentuser } from "../../action/currentuser";


const Auth = ({ user, setauthbtn, seteditcreatechanelbtn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setcurrentuser(null));
    localStorage.clear();
    navigate("/")
    googleLogout();
  };

  return (
    <div className="Auth_container" onClick={() => setauthbtn(false)}>
      <div className="Auth_container2">
        <p className="User_Details">
          <div className="Chanel_logo_App">
            <p className="fstChar_logo_App">
              {user?.result.name ? (
                <>{user?.result.name.charAt(0).toUpperCase()}</>
              ) : (
                <>{user?.result.email.charAt(0).toUpperCase()}</>
              )}
            </p>
          </div>
          <div className="email_auth">{user?.result.email}</div>
        </p>
        <div className="btns_Auth">
          {/* Always show both buttons */}
          <Link to={`/channel/${user?.result?._id}`} className="btn_Auth">
            Your Channel
          </Link>

          <input
            type="submit"
            className="btn_Auth"
            value="Create Your Own Channel"
            onClick={() => seteditcreatechanelbtn(true)}
          />

          <div className="btn_Auth" onClick={logout}>
            <BiLogOut />
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
