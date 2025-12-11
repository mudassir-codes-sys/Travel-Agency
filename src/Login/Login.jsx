import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Lottie from "lottie-react";
import { AuthContext } from "../context/AuthContext"
import animate from "../../Animations/zpunet icon.json"
import { Input } from "../Signup/Signup"

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggingIn, setLoggingIn] = useState(false)
    const [error, setError] = useState(false)
    const { login } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoggingIn(true);
        setError(false);
        try {
            await login(email, password);
            navigate("/");
        } catch (err) {
            setError(true);
            console.log(err.message);
        }
        setLoggingIn(false);
    };

    return (
        <div className="md:min-h-138 min-h-178 w-full bg-linear-to-br from-[#0F172A] to-[#102A43] flex justify-center items-center px-20 relative overflow-hidden" >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none"></div>
            <form
                onSubmit={handleSubmit}
                className="relative z-10 flex flex-col md:flex-row justify-center md:justify-between backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl md:h-auto min-w-88 md:w-8/12 items-center text-white  p-6 md:mb-0 mb-20 md:py-5  gap-6 "
            >

                <div className="w-full md:w-1/2 flex justify-center">
                    <Lottie animationData={animate} loop={true} className="w-35 md:w-60" />
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-3 md:items-center text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
                        Login
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base">Login to your account</p>

                    <Input type="text" placeholder="Email" value={email} className="" onChange={(e) => setEmail(e.target.value)} />
                    <Input type="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button
                        disabled={loggingIn}
                        className="cursor-pointer md:w-9/12 bg-linear-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 rounded-2xl py-2 font-semibold text-black"
                        type="submit"
                    >
                        Login
                    </button>

                    {error && <p className="text-red-400">Email or password is incorrect</p>}

                    <p>
                        Don't have an account?{" "}
                        <span
                            onClick={() => navigate("/signup")}
                            className="text-cyan-400 cursor-pointer hover:underline"
                        >
                            Sign up
                        </span>
                    </p>
                </div>
            </form >
        </div >
    )
}

export default Login
