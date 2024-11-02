
import { CiSearch } from 'react-icons/ci';
import { FaRegCircleUser } from 'react-icons/fa6';
import Background from '../../assets/images/pexels-2.png'
const Header = () => {
    return (
        // Header Section:
        <div className='container mx-auto'>
            {/* Navbar Start */}
            <div className='py-12'>
                <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href=''>Home</a></li>
                        <li><a href=''>Recipes</a></li>
                        <li><a href=''>About</a></li>
                        <li><a href="">Search</a></li>
                    </ul>
                    </div>
                    <a className="font-medium md:font-bold md:text-3xl ">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base">
                        <li><a href=''>Home</a></li>
                        <li><a href=''>Recipes</a></li>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div className='flex items-center justify-center gap-2 py-1 px-0 md:p-3 bg-[#150B2B0D] rounded-full'>
                        <span className='text-[#150B2BB3] md:text-xl'>
                            <CiSearch />
                        </span>
                        <input className='w-2/3 md:w-full rounded-full bg-gray-100 placeholder:text-[#150B2BB3] hover:bg-white focus:outline-none' type="search" placeholder='Search' name="search" id="" />
                    </div>
                    <a className="bg-green-400 hover:bg-green-500 p-2 rounded-full  text-2xl"><FaRegCircleUser /></a>
                </div>
                </div>
            </div>
            {/* Navbar end */}

            {/* Banner Section start */}
            <div style={{backgroundImage:`linear-gradient(0.00deg, rgba(21, 11, 43, 0.9),rgba(21, 11, 43, 0) 100%), url(${Background})`}} 
            className='bg-no-repeat bg-cover bg-center rounded-3xl'>
                <div className='text-white text-center py-32 space-y-7'>
                    <h1 className='font-bold  text-5xl'>Discover an exceptional cooking <br /></h1>
                    <h1 className='font-bold text-5xl'>class tailored for you!</h1>
                    <p className='font-normal text-xl md:w-2/3 mx-auto'>In the bustling kitchen, the chef stood with an air of confidence, his hands moving with practiced precision.
    He orchestrated a symphony of flavors</p>
                    <div className='font-semibold text-xl flex flex-col md:flex-row justify-center items-center gap-7'>
                        <button className='py-5 px-7 bg-green-400 hover:bg-green-500 rounded-full'>Explore Now</button>
                        <button className='bg-none py-5 px-7 border hover:bg-gray-200 hover:text-black border-white rounded-full'>Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;