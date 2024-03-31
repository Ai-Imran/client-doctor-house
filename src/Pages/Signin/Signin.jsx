import { Link } from 'react-router-dom';
import img from '../../assets/Frame.png'
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const Signin = () => {
    const [show, setShow] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="lg:flex">
            <div className='bg-[#07332F]  lg:gap-8 lg:p-8 lg:w-1/2 lg:min-h-screen'>
                <img className='' src={img} alt="" />
            </div>
            <div className=' lg:w-3/4 py-3 bg-[#4b4b4b]'>
                <form className=' border border-lime-500 py-4 lg:py-10 lg:w-1/2 mx-3 lg:mx-auto lg:px-8 rounded-md px-3 lg:mt-[100px]' onSubmit={handleSubmit}>
                    <label className='text-white' htmlFor="name">Name</label>
                    <input className='block mb-2 w-full bordr-0 outline-none rounded-md p-2 py-2' type="text" placeholder='Your Name' />

                    <label className='text-white' htmlFor="email">Email</label>
                    <input className='block mb-2 w-full bordr-0 outline-none rounded-md p-2 py-2' type="email" placeholder='Enter Email' />
                   <div className='relative'>
                   <label className='text-white' htmlFor="password">Password</label>
                    <input className='block mb-2 w-full bordr-0 outline-none rounded-md p-2 py-2'
                     type={ show ? "text" : "password"}
                      placeholder='Create a password' />
                    <span onClick={()=>setShow(!show)} className='absolute cursor-pointer top-8 right-3'>
                        {
                            show ? <VisibilityOffIcon/> : <RemoveRedEyeIcon/>
                        }
                    </span>
                   </div>
                    <button className="btn hover:bg-[#30336b] w-full mt-2 outline-none border-0 text-white font-bold bg-[#130f40] mb-5">Sign In</button>
                    <span className="text-gray-300  m-2">Already have Account</span>
                    <Link to={'/login'}><span className="text-white hover:text-purple-400 font-bold text-center">Login</span></Link>
                </form>
            </div>
        </div>
    );
};

export default Signin;