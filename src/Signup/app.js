import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Lottie from "lottie-react";
import { AuthContext } from "../context/AuthContext"
import animate from "../../Animations/zpunet icon.json"

export function Input({ type, placeholder, value, onChange }) {
    return (
        <input
            className="bg-[#13294b] text-white w-full outline-none rounded-xl p-2"
            type={type}
            required
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

function Signup() {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { signup } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username && email && password && confirmPassword) {
            signup(username, email, password)
            navigate('/')
        }
    }

    return (
        <div className="border-2 border-black w-full bg-blue-700  ">
            <form
                onSubmit={handleSubmit}
                className="flex justify-center min-w-3/4 min-h-138  bg-white items-center text-black px-4"
            >

                <div

                    className="  flex flex-col md:flex-row items-center justify-center gap-6"
                >

                    {/* LEFT: Lottie Animation */}
                    <div className="w-1/2  flex justify-center">
                        <Lottie
                            animationData={animate}
                            loop={true}
                            className="w-64 md:w-80"
                        />
                    </div>

                    {/* RIGHT: Form */}
                    <div className="w-1/2  flex flex-col items-center gap-4">
                        <h1 className="text-xl md:text-2xl font-semibold">Sign up</h1>
                        <p className="text-md">Create your account</p>

                        <Input type="text" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
                        <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Input type="Password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                        <button
                            className=" bg-gradient-to-r from-teal-500 to-cyan-500 px-4 w-full font-semibold py-2 cursor-pointer rounded-2xl"
                            type="submit"
                        >
                            Sign up
                        </button>

                        <p>
                            Already have an account?{" "}
                            <span
                                onClick={() => navigate("/login")}
                                className="text-[#3279bd] cursor-pointer underline"
                            >
                                Login
                            </span>
                        </p>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Signup
