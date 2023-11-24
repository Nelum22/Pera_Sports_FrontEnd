import React, { useState, useRef } from "react";
import logo from '../assets/pera-logo.svg'
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import FormElement from "../FormElement/FormElement";

const LoginCard = () => {


    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState(null)

    // const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm();


    // const storedData = localStorage.getItem("logUser");

    // const userRoleClaim = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    // // const userNameClaim = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"

    // // Parse the stored data
    // const parsedData = JSON.parse(storedData);

    // // Get the access token from the parsed data
    // const accessToken = parsedData?.accessToken;

    // const token = accessToken;

    // const decodedToken = atob(token.split('.')[1]);

    // var userRole = JSON.parse(decodedToken)[userRoleClaim]
    // // var userName = JSON.parse(decodedToken)[userNameClaim]
    // console.log(userRole);
    // // console.log(userName);

    // if (userRole !== null) {
    //     if (userRole === "Admin") {
    //         console.log("User is an admin");
    //         // Redirect or perform actions for an admin
    //         navigate("/products");
    //     } else {
    //         console.log("User is not an admin");
    //         // Redirect or perform actions for non-admin users
    //         navigate("/");
    //     }
    // } else {
    //     console.log("Role claim not found or invalid token");
    // }


    const onSubmit = (data) => {
        // console.log(data);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/pera-sport/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                // console.log(response.data);
                localStorage.setItem("logUser", JSON.stringify(response.data));

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <span className="flex flex-col gap-8 bg-white border-[3px] border-yellow-500 w-3/4 sm:w-1/2 p-5 rounded-md">
            <div className="grid items-center justify-center">
                <img className="w-[40px] h-[40px] ml-[40px] rounded-full" src={logo} alt="User Avatar" />
                <h1 className="text-xl text-black font-semibold">PERA SPORT LOGIN</h1>
                <p className="ml-[40px] text-gray-700 text-sm">
                    Let's Play for Pera.
                </p>
            </div>
            {error ? <p className="text-center text-xs text-red-600">{error}</p> : null}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" action="">
                <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Username is required' }}
                    render={({ field }) => (
                        <FormElement
                            type={"text"}
                            label={"User Name"}
                            placeholder={"User Name"}
                            fieldRef={field}
                            hassError={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Password is required' }}
                    render={({ field }) => (
                        <FormElement
                            type={"text"}
                            label={"Password"}
                            placeholder={"Password"}
                            fieldRef={field}
                            hassError={errors.password?.message}
                        />
                    )}
                />
                <button className="bg-black text-white rounded-md py-2 my-2">Login</button>
                <p className="text-black text-sm text-center cursor-pointer">Forgot your password?</p>
            </form>
            {/* <span>
                <hr className="my-2"/>
                <p className="text-center text-sm">
                    Don't have an account? 
                    <span className="text-black cursor-pointer">
                        Sign Up
                    </span>
                </p>
            </span> */}
        </span>
    )
}

export default LoginCard