"use client";

import { useState } from "react";
import { useContext } from "react";
import { Context } from "/context/Context";
import Colors from "/constants/colors";
import { useRouter } from "next/navigation";

const SignForm = ({}) => {
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

const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/sign-in", {
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
                setUser({ username: data.username, id: data._id });
                console.log("data", data);
                // router.push("/admin");
            } else {
                setErrors([data.error]);
            }
        } catch (error) {
            console.log("in error");
            console.log(error);
            setErrors([error.error]);
        }
    };

    return (
        <section className="flex flex-col gap-4">
            <h1 className="text-trueblue font-extrabold text-5xl">
                <span>ADMIN LOGIN</span>
            </h1>
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
                    <button
                        id="signin-submit"
                        type="submit"
                        style={{color: Colors[textClr]}}
                        className="mt-2 px-5 py-1.5 bg-accentColorB hover:bg-truebluedark rounded-lg"
                    >
                        SUBMIT
                    </button>
                    <p
                        className="mt-2 px-5 py-1.5 text-gray-500 cursor-pointer"
                    >
                        CANCEL
                    </p>
                </div>
            </form>
        </section>
    );
};

export default SignForm;
