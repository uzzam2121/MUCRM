import { Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputAdornment, } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/action/user";
import { PiEyeSlashThin, PiEyeThin, PiX } from "react-icons/pi";
import toast from "react-hot-toast";

const Login = () => {
  const PasswordButtonInitialStyle = {
    opacity: 0,
  };

  /////////////////////////////////// VARIABLES /////////////////////////////////
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);

  /////////////////////////////////// STATES /////////////////////////////////////
  const [userData, setUserData] = useState({ username: "super_admin", password: "password" });
  const [inputError, setInputError] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordButton, setShowPasswordButton] = useState(PasswordButtonInitialStyle);

  /////////////////////////////////// USE EFFECTS ////////////////////////////////

  /////////////////////////////////// FUNCTIONS //////////////////////////////////
  const handleChange = (e) => {
    setUserData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = userData;

    if (!validateForm()) return;

    dispatch(login(userData, navigate));
  };

  const validateForm = () => {
    const { username, password } = userData;
    if (!username) {
      toast.error("Username is required");
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      return false;
    }
    return true;
  }

  const changeBackgroundColor = () => {
    setShowPasswordButton({
      ...showPasswordButton,
      opacity: 1,
    });
  };

  const handleToggleVisibility = (e) => {
    e.preventDefault();
    setShowPassword((pre) => !pre);
  };


  return (
    <div className="font-primary">
      <div className="w-full h-screen">
        <div className="flex flex-col items-center pt-16 gap-2">
          <div className="text-4xl font-bold text-sky-600 flex items-center gap-2">
            <span>MU CRM</span>
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-gray-500 text-sm">Customer Relationship Management</div>
        </div>
        <div className="flex justify-center pt-6 pl-0 ml-0 rounded-lg">
          <div className="w-96 h-auto shadow-xl rounded bg-white">
            <p className="text-xl text-slate-500 tracking-wide flex justify-center pt-8">
              Sign in to your account
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[10px] w-auto pl-[2rem] pt-[2rem] ">
              <div className="flex flex-col gap-8">
                <Input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-[20rem] h-[40px] px-[8px] font-primary"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    onKeyDown={changeBackgroundColor}
                    placeholder="Password"
                    variant="standard"
                    className="w-[20rem] h-[40px] px-[8px]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    startAdornment={
                      <InputAdornment>
                        <button
                          style={showPasswordButton}
                          onClick={handleToggleVisibility}
                          className="absolute right-0">
                          {showPassword ? (
                            <PiEyeSlashThin className="text-[25px] m-2 text-black" />
                          ) : (
                            <PiEyeThin className="text-[25px] m-2 text-black" />
                          )}
                        </button>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <FormGroup>
                <FormControlLabel
                  className="w-40 text-gray-400 mt-2"
                  control={<Checkbox style={{ color: "#20aee3" }} />}
                  label="Remember Me"
                />
              </FormGroup>

              <Link to="/auth/forgot_password" className="font-primary font-light flex justify-end mr-10 mb-4 text-gray-500 hover:text-gray-700 cursor-pointer">
                Forgot Password
              </Link>

              <button
                type="submit"
                className={`w-[20rem]  hover:bg-[#45b8e2] p-2 rounded-lg transition-all text-white font-medium tracking-wider ${isFetching ? "bg-[#17a2b8] cursor-not-allowed" : "bg-[#20aee3]"}`}
                variant="contained">
                {isFetching ? "Submitting..." : "Continue"}
              </button>
              <div className="font-Mulish font-light text-slate-500 flex justify-center p-2 pr-7">
                Don't have account?&nbsp;
                <Link to="/auth/register" className="text-sky-400 hover:text-sky-600">
                  {" "}
                  Sign Up
                </Link>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
