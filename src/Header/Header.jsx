import { NavLink, useLocation, useNavigate } from "react-router-dom";


export function Nav({ name, link }) {
    return (
        <NavLink
            to={link}
            className={({ isActive }) =>
                isActive
                    ? "text-white px-3 py-1 border-b-2 border-white transition-colors"
                    : "text-gray-200 hover:text-white px-3 py-1 transition-colors"
            }
        >
            {name}
        </NavLink>
    );
}


export function Button({ btn, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`px-4   py-2 rounded-lg cursor-pointer text-white bg-linear-to-r from-teal-500 to-cyan-500 hover:from-cyan-500  hover:scale-102  ${className}`}
        >
            {btn}
        </button>
    );
}



function Header() {
    const navigate = useNavigate();
    const location = useLocation()
    const showLogo = ['/', '/tours', '/blogs', '/about'].includes(location.pathname)


    return (
        <div className="p-5  flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0  bg-[#0f172a] shadow-lg  md:sticky top-0 z-50">


            {showLogo ? (
           
                <img
                    src="https://pngimg.com/uploads/plane/plane_PNG101255.png"
                    width="70"
                    alt="logo"
                    className="block"
                />
            ) : (
               
                <img
                    src="https://pngimg.com/uploads/plane/plane_PNG101255.png"
                    width="70"
                    alt="logo"
                    className="md:block hidden "
                />
            )}


 
            <nav className="flex gap-4 text-sm md:text-base">
                <Nav name="Home" link="/" />
                <Nav name="Tours" link="/tours" />
                <Nav name="Blogs" link="/blogs" />
                <Nav name="About us" link="/about" />
            </nav>


            <div className="flex gap-3">
                <Button btn="Sign Up" onClick={() => navigate("/signup")} />
                <Button btn="Login" onClick={() => navigate("/login")} />
            </div>
        </div>
    );
}

export default Header;
