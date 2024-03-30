import { Link } from 'react-router-dom';
import img from '../../assets/Frame.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Login = () => {
    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='flex'>
            <div className='bg-[#07332F] gap-8 p-8 w-1/2 min-h-screen'>
                <img src={img} alt="" />
            </div>
            <div className="bg-[#4b4b4b] pt-[40px]  p-10 w-1/2">
               <div className='border mt-24 w-3/4 px-8 py-10 rounded-md border-lime-500'>
               <form className=' w-full' onSubmit={handleSubmit} >
                   <div className=''>
                   <label className='text-white' htmlFor="email">User Name or Email address : </label>
                    <input className='block my-2 p-2 rounded-md w-full outline-none border-0' type="text" name='email' id='email' placeholder='user name or email'/>
                   </div>
                   <div>
                   <label className='text-white relative' htmlFor="password">Enter Password : </label> 
                    <input className='block mt-2 p-2  rounded-md w-full outline-none border-0'
                     type={show ? "text" : "password"} 
                     name='password' id='password' placeholder='Your password'/>
                     <span onClick={()=>setShow(!show)} className='absolute cursor-pointer ml-[350px] top-[295px]'>{ show ?  <VisibilityOffIcon/> : <RemoveRedEyeIcon /> }</span>
                  
                    
                    <a className='text-white hover:underline hover:text-red-400' href="#">Forget Password</a>
                   </div>
             <button className="btn w-full mt-4 hover:bg-[#30336b] outline-none border-0 text-white font-bold bg-[#130f40] mb-8">Log in</button>
                 <div className='text-gray-300'> I have no Account
                 <Link to={'/signup'}><span className="text-white hover:text-purple-400 font-bold">  Create Account</span></Link>
                 <div className='text-purple-500 inline-block space-x-4 ml-2 mx-auto text-center'>
                    <GoogleIcon className='hover:text-white cursor-pointer '/>
                    <FacebookIcon className='hover:text-white cursor-pointer'/>
                    <TwitterIcon className='hover:text-white cursor-pointer'/>
                </div>
                 </div>
                </form>
                <div className="divider w-full text-white divider-secondary">Or</div>
                <div className='text-purple-500 space-x-6 mx-auto text-center'>
                    <GoogleIcon className='text-3xl'/>
                    <FacebookIcon/>
                    <TwitterIcon/>
                </div>
               </div>
                
            </div>
            
        </div>
    );
};

export default Login;