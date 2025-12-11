import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Lottie from "lottie-react"
import { AuthContext } from "../context/AuthContext"
import animate from "../../Animations/zpunet icon.json"

export function Input({ type, placeholder, value, onChange, className = "" }) {
    return (
        <input
            className={`bg-[#13294b] text-white md:w-9/12 md:h-10  w-full outline-none rounded-xl p-3 shadow-inner focus:ring-2 focus:ring-cyan-400 duration-200 placeholder-gray-300 ${className}`}
            type={type}
            required
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

function Signup() {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const { signup } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username && email && password && confirmPassword) {
            signup(username, email, password)
            navigate("/")
        }
    }

    return (
        //*Container div
        <div className="md:min-h-138 min-h-178 w-full bg-linear-to-br from-[#0F172A] to-[#102A43] flex justify-center items-center px-20 relative overflow-hidden">
            {/* Noise overlay */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none"></div>
            <form
                onSubmit={handleSubmit}
                className="relative z-10 flex flex-col md:flex-row justify-center md:justify-between backdrop-blur-xl min-w-89 mt-2  bg-white/10 border border-white/20 shadow-2xl  rounded-3xl md:h-auto  md:w-8/12 items-center text-white mb-10 md:mb-0  px-6 py-4 md:p-4   md:gap-6 "
            >
//*Lottie
                <div className="w-full md:w-1/2 flex justify-center mb-2">
                    <Lottie animationData={animate} loop={true} className="w-35 md:w-75" />
                </div>
//*

                <div className="w-full md:w-1/2 flex  flex-col gap-3.5 md:gap-3 md:items-center text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
                        Sign up
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base">Create your account</p>

                    <Input type="text" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
                    <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                    <button
                        className=" cursor-pointer md:w-9/12 bg-linear-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 rounded-2xl py-2 font-semibold text-black"
                        type="submit"
                    >
                        Sign up
                    </button>

                    <p className="text-gray-300  text-sm md:text-base">
                        Already have an account?{" "}
                        <span
                            onClick={() => navigate("/login")}
                            className="text-cyan-400 cursor-pointer hover:underline"
                        >
                            Login
                        </span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Signup
