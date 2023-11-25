import React, { useState, useRef } from "react";
import logo from '../assets/pera-logo.svg'
import { Controller, useForm } from "react-hook-form";
import FormElement from "../FormElement/FormElement";
import { signin } from "../services/authServices";
import { useNavigate } from "react-router-dom";


const LoginCard = () => {


    // const emailRef = useRef()
    // const passwordRef = useRef()
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        // console.log(data);

        const getResponse = async() => {
            try{
                const userData = await signin(data)

                const role = {
                    teamName: userData.teamName
                }
                if(userData.teamName == 'Admin')
                {
                    navigate('/dashboard', {state:data})
                }
                else if(userData.teamName == '')(
                    navigate('/login')
                )
                else{
                    navigate('/leaderboard', {state:role})
                }
            }
            catch(error){
                console.log(error)
            }
        }

        getResponse()

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
                    name="userName"
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