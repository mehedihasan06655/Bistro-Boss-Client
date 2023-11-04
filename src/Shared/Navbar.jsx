import { Link } from 'react-router-dom';
import '../fonts/fonts.css'
import addIcon from '../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import Swal from 'sweetalert2';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error))
        Swal.fire({
            title: 'Logout Successful',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    const navOptions = <>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/">CONTACT US</Link></li>
        <li><Link to="/">DASHBOARD</Link></li>
        <li><Link to="/menu">OUR MENU</Link></li>
        <li><Link to="/order/salad">ORDER FOOD</Link></li>
        <li><Link to="/secret">SECRET</Link></li>
        <li>
            <Link to='/'>
                <button className="btn">
                <FaShoppingCart/>
                    <div className="badge badge-secondary">+0</div>
                </button>
            </Link>
        </li>
        <li><img className='w-[62px]' src={addIcon} alt="" /></li>

        {
            user ? <>
                <button onClick={handleLogOut} className="btn">Logout</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 max-w-screen-xl mx-auto opacity-80 text-white bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className=" uppercase  text-xl cinzelFont">
                        <p className='font-bold'>BISTRO BOSS</p>
                        <p className='tracking-widest'>Restaurant</p>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;