"use client";

import { useState } from "react";
import { useContext } from "react";
import { Context } from "/context/Context";
import Colors from "/constants/colors";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

const SignForm = ({}) => {
  const [captcha, setCaptcha] = useState(false);

  const { setUser } = useContext(Context);
  const [errors, setErrors] = useState([]);
  const router = useRouter();
  const { textClr } = useContext(Context);
  const [signForm, setSignForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const onCapChange = (value) => {
    if (value) {
      setCaptcha(true);
    }
    else {
      setCaptcha(false);
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: signForm.username,
          password: signForm.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, handle success scenario here (e.g., redirect)
        console.log("Login successful!");
      } else {
        // Login failed, set the errors state to display error messages
        setErrors([data.error]);
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrors(["Something went wrong during login"]);
    }
  };

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-trueblue font-extrabold text-5xl">
        <span>CREATE NEW ACCOUNT</span>
      </h1>
      <h1 className="text-trueblue font-extrabold text-2xl">
        <span>Connects to MongoDB Atlas for user storage</span>
      </h1>
      {errors.length > 0 && (
        <div className="text-red-500">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <form className="flex flex-col gap-2" onSubmit={handleLogin}>
        <label className="">
          <span className="">Username</span>
          <input
            name="username"
            value={signForm.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="form_input"
          />
        </label>
        <label className="">
          <span className="">Password</span>
          <input
            name="password"
            type="password"
            value={signForm.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="form_input"
          />
        </label>
        <div className="w-full flex justify-around">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onCapChange}
          />
          <button
            id="signin-submit"
            type="submit"
            style={{ color: Colors[textClr] }}
            className="mt-2 px-5 py-1.5 bg-accentColorB hover:bg-truebluedark rounded-lg"
            disabled={!captcha}
          >
            SUBMIT
          </button>
          <p className="mt-2 px-5 py-1.5 text-gray-500 cursor-pointer">
            CANCEL
          </p>
        </div>
      </form>
    </section>
  );
};

export default SignForm;
