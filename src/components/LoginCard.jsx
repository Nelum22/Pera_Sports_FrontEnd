import React, {useState, useRef} from "react";

const LoginCard = () => {

    
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState(null)

    return(
        <span className="flex flex-col gap-8 bg-white border-2 border-gray-700 w-3/4 sm:w-1/2 p-5 rounded-md">
            <h1 className="text-xl text-black font-semibold">LogIn</h1>
            <p className="text-gray-700 text-sm">
                Let's Play for Pera.
            </p>
            {error ? <p className="text-center text-xs text-red-600">{error}</p> : null}
            <form onSubmit={null} className="flex flex-col" action="">
                <label className="flex flex-col py-2" htmlFor="email">
                    Email
                    <input ref={emailRef} className="outline-none border border-gray-500 py-1 px-2 rounded-md" name="email" type="email" />
                </label>
    
                <label className="flex flex-col py-2" htmlFor="password">
                    Password
                    <input ref={passwordRef} className="outline-none border border-gray-500 py-1 px-2 rounded-md" type="password" name="password" />
                </label>
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