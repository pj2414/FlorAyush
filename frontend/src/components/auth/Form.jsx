import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const navigate= useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
    setError(""); // Clear errors when toggling
  };

  const handleToggleShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = isSignIn
      ? "http://localhost:8082/auth/login" 
      : "http://localhost:8082/auth/register"; 
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          isSignIn
            ? { email: formData.email, password: formData.password }
            : formData 
        ),
      });
  
      const data = await response.json();
  
      if (!response.ok) throw new Error(data.message || "Something went wrong");
  
      if (isSignIn) {
        // Handle login: Save the token to localStorage
        console.log(data?.token);
        localStorage.setItem("jwt", data?.token);
        localStorage.setItem("auth", "true");
        navigate("/"); // Navigate to home or dashboard
      } else {
        // Handle signup: Show success message and navigate to login
        setError(data?.message); // Display the success message from the backend
      }
    } catch (err) {
      setError(err.message);
    }
  };
  

   

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/assets/video/example.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"></div>

      {/* Form Container */}
      <div className="relative z-10 p-8 w-full max-w-md bg-black/60 rounded-lg shadow-lg">
        <h1 className="text-center text-3xl font-bold text-white mb-6">
          Flor<span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent">Ayush</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignIn && (
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              className="w-full p-4 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-website-color-700"
            />
          )}

          <input
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            className="w-full p-4 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-website-color-700"
          />

          <div className="relative">
            <input
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              type={showPass ? "text" : "password"}
              className="w-full p-4 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-website-color-700"
            />
            <div
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-gray-400 hover:text-white"
              onClick={handleToggleShowPassword}
            >
              {showPass ? <IoEyeSharp size={20} /> : <FaEyeSlash size={18} />}
            </div>
          </div>

          {error && (
            <p className="text-white font-semibold text-md text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full p-4 bg-website-color-700 text-white font-semibold rounded-lg hover:bg-website-color-800 focus:outline-none focus:ring-4 focus:ring-website-color-700/50"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="text-sm text-gray-400 hover:underline cursor-pointer text-center"
            onClick={toggleSignUp}
          >
            {isSignIn
              ? "New to FlorAyush? Sign up now."
              : "Already have an account? Sign in now."}
          </p>

          <div className="text-center mt-4">
            <Link
              to="/"
              className="inline-block p-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition"
            >
              Go Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
