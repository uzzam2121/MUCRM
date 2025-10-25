import { FormControl, Input, InputAdornment, } from "@mui/material";
import { CFormSelect } from "@coreui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/action/user";
import validator from "email-validator";
import { PiEyeSlashThin, PiEyeThin } from "react-icons/pi";
import { pakistanCities } from "../../constant";
import toast from "react-hot-toast";

const Signup = () => {
  const PasswordButtonInitialStyle = {
    opacity: 0,
  };

  /////////////////////////////////// VARIABLES /////////////////////////////////
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching } = useSelector((state) => state.user);

  /////////////////////////////////// STATES /////////////////////////////////////
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    email: "",
    city: "",
    password: "",
  });
  const [inputError, setInputError] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordButton, setShowPasswordButton] = useState(PasswordButtonInitialStyle);

  //////////////////////////////////////// USE EFFECTS ////////////////////////////////

  /////////////////////////////////// FUNCTIONS //////////////////////////////////
  const handleChange = (field, value) => {
    const { firstName, lastName, username, email, phone, password } = userData;

    if (firstName.length > 3) setInputError((pre) => ({ ...pre, firstName: "" }));
    if (lastName.length < 3) setInputError((pre) => ({ ...pre, lastName: "" }));
    if (username.length < 3) setInputError((pre) => ({ ...pre, username: "" }));
    if (validator.validate(email)) setInputError((pre) => ({ ...pre, email: "" }));
    if (phone.length >= 10) setInputError((pre) => ({ ...pre, phone: "" }));
    if (password.length > 6) setInputError((pre) => ({ ...pre, password: "" }));

    setUserData((pre) => ({ ...pre, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) { return; }

    dispatch(register(userData, navigate))
      .then(() => {
        toast.success("Account Created Successfully. Please Login");
      })
  };

  const validateForm = () => {
    const { firstName, lastName, username, email, phone, password } = userData;

    if (!firstName) {
      toast.error('First Name is required')
      return false;
    }
    if (firstName.length < 3) {
      toast.error('First Name should be atleast of 3 characters')
      return false;
    }
    if (!lastName) {
      toast.error('Last Name is required')
      return false;
    }
    if (lastName.length < 3) {
      toast.error('Last Name should be atleast of 3 characters')
      return false;
    }
    if (!username) {
      toast.error('Username is required')
      return false;
    }
    if (username.length < 3) {
      toast.error('Username should be atleast of 3 characters')
      return false;
    }
    if (email && !validator.validate(email)) {
      toast.error('Make sure to provide a valid email')
      return false;
    }
    if (!phone) {
      toast.error('Phone Number is required')
      return false;
    }
    if (phone.length < 0) {
      toast.error('Please provide a valid phone number')
      return false;
    }
    if (!password) {
      toast.error('Password is required')
      return false;
    }
    if (password.length < 6) {
      toast.error('Password must be of atleast 6 characters')
      return false;
    }
    return true;
  }

  const handleToggleVisibility = (e) => {
    e.preventDefault();
    setShowPassword((pre) => !pre);
  };

  const changeBackgroundColor = () => {
    setShowPasswordButton({ ...showPasswordButton, opacity: 1, });
  };


  ////////////////////////////////////////////////////////// RENDER //////////////////////////////////////////////////////
  return (
    <div className="font-primary w-full h-full bg-black">
      <div className="pb-10">
        <div className="flex flex-col items-center pt-8 gap-2">
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
            <p className="text-xl text-slate-500 tracking-wide flex justify-center pt-6">
              Create New Account
            </p>
            <p className="flex justify-center pt-2 font-Mulish text-slate-500 text-xs">
              Sign up for your new account today!
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[12px] w-auto pl-[2rem] pt-[1rem] ">
              <div className="flex flex-col gap-6">
                {/* firstname */}
                <Input
                  type="text"
                  value={userData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  placeholder="First Name"
                  variant="standard"
                  className="w-[20rem] h-[40px] px-[8px]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
                {/* lastname */}
                <Input
                  type="text"
                  value={userData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  placeholder="Last Name"
                  variant="standard"
                  className="w-[20rem] h-[40px] px-[8px]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
                {/* username */}
                <Input
                  type="text"
                  value={userData.username}
                  onChange={(e) => handleChange("username", e.target.value)}
                  placeholder="Username"
                  variant="standard"
                  className="w-[20rem] h-[40px] px-[8px]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
                {/* city */}
                <Input
                  type="text"
                  value={userData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  placeholder="City"
                  variant="standard"
                  className="w-[20rem] h-[40px] px-[8px]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
                {/* phone */}
                <Input
                  type="number"
                  value={userData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Phone"
                  variant="standard"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="w-[20rem] h-[40px] px-[8px]"
                />
                {/* email */}
                <Input
                  type="email"
                  value={userData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Email"
                  variant="standard"
                  className="w-[20rem] h-[40px] px-[8px]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={userData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
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

              <button
                type="submit"
                className={`w-[20rem]  hover:bg-[#45b8e2] mt-4 p-[6px] rounded-lg transition-all text-white font-medium tracking-wider ${isFetching ? "bg-[#17a2b8]  cursor-not-allowed" : "bg-[#20aee3]"}`}
                variant="contained">
                {isFetching ? "Submitting..." : "Sign Up"}
              </button>

              <p className="font-Mulish font-light text-slate-500 pl-10">
                Already have an account?
                <Link to="/auth/login" className="text-sky-400 hover:text-sky-600">
                  {" "}
                  Login
                </Link>
              </p>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
