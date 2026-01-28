import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const inputstyling = " max-sm:border-2 max-sm:border-gray-400 max-sm:rounded-md max-sm:py-1 max-sm:mb-4 max-sm:px-2 lg:w-full lg:border lg:rounded-lg lg:px-3 lg:py-2 lg:mb-4"

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Student / Faculty / Admin
  const [clicked, setClicked] = useState(false); // For animation

  const formFilled = email && password && role;



  const navigate = useNavigate();

  const handlelogin = () => {
    if (role === "Student") navigate("/student/navbar");
    if (role === "Faculty") navigate("/faculty/navbar");
    if (role === "Admin") navigate("/admin/navbar");
  };



  return (
    <div className=" max-sm:flex max:sm:justify-center max-sm:items-center max-sm:min-h-screen lg:min-h-screen lg:flex lg:items-center lg:justify-center lg:bg-gray-100 ">
      <div className="max-sm:p-6 max-sm:flex max-sm:justify-center max-sm:flex-col  max-sm:border-2 max-sm:border-black max-sm:w-70 max-sm:mx-auto  max-sm:h-80 max-sm:rounded-xl  lg:w-80  lg:h-[400px] lg:border-2 lg:border-black lg:rounded-2xl lg:p-6 lg:bg-white lg:flex lg:flex-col lg:justify-center ">

        <h2 className=" max-sm:text-center max-sm:text-3xl max-sm:mb-10 max-sm:font-semibold lg:text-3xl lg:font-semibold lg:font-sans lg:text-center lg:mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputstyling}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputstyling}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className={"max-sm:w-full max-sm:border-2 max-sm:border-gray-400 max-sm:rounded-md max-sm:px-2 max-sm:py-1 max-sm:mx-auto lg:w-full lg:border lg:rounded-lg lg:px-3 lg:py-2 lg:mb-6"}
        >
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="Faculty">Faculty</option>
          <option value="Admin">Admin</option>
        </select>

        <button
          disabled={!formFilled}
          onClick={handlelogin}
          className={` max-sm:mt-10 max-sm:bg-blue-900 max-sm:px-2 max-sm:py-1 max-sm:rounded-md max-sm:text-white max-sm:text-xl  lg:w-full lg:py-2 lg:rounded-lg lg:text-white
            ${formFilled
              ? `lg:bg-blue-900 lg:hover:bg-blue-800 lg:hover:cursor-pointer`
              : 'max-sm:bg-gray-400 lg:bg-gray-400 lg:cursor-not-allowed'
            }`}
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;
