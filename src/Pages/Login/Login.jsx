import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/Frame.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useContext, useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {googleUser,userlogin} = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation()

    const from = location?.state?.from?.pathName || '/';

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const newUser = { name,email,password}
       
        userlogin(email,password)
        .then(res => {
            console.log(res.user);
            navigate(from, {replace : true})
        })
        .catch(err => {
            console.log(err);
        })
       
    }
    const handleGoogle = () => {
        googleUser()
        .then(res => {
            console.log(res.user);
            navigate(from, {replace : true})
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='lg:flex'>
            <div className='bg-[#07332F]  lg:gap-8 lg:p-8 lg:w-1/2 lg:min-h-screen'>
                <img className='' src={img} alt="" />
            </div>
            <div className="bg-[#4b4b4b] pt-[40px] md:px-16  md:p-10 lg:w-1/2">
               <div className='border mt-24 lg:w-3/4 px-4 md:px-5 lg:px-8 py-10 rounded-md border-lime-500'>
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
                     <span onClick={()=>setShow(!show)} className='absolute cursor-pointer  ml-[310px] top-[295px]'>{ show ?  <VisibilityOffIcon/> : <RemoveRedEyeIcon /> }</span>
                  
                    
                    <a className='text-white hover:underline hover:text-red-400' href="#">Forget Password</a>
                   </div>
             <button className="btn w-full mt-4 hover:bg-[#30336b] outline-none border-0 text-white font-bold bg-[#130f40] mb-8">Log in</button>
                 <div className='text-gray-300'> I have no Account
                 <Link to={'/signin'}><span className="text-white hover:text-purple-400 font-bold text-center">  Create Account</span></Link>
                 {/* <div className='text-purple-500 inline-block space-x-4 ml-2 lg:ml-24 mx-auto text-center'>
                    <GoogleIcon className='hover:text-white cursor-pointer '/>
                    <FacebookIcon className='hover:text-white cursor-pointer'/>
                    <TwitterIcon className='hover:text-white cursor-pointer'/>
                </div> */}
                 </div>
                </form>
                <div className="divider w-full text-white divider-secondary">Or</div>
                <div className='text-purple-500 lg:ml-4 space-x-6 mx-auto text-center'>
                   <span onClick={handleGoogle}> <GoogleIcon className='text-3xl'/></span>
                    <FacebookIcon/>
                    <TwitterIcon/>
                </div>
               </div>
                
            </div>
            
        </div>
    );
};

export default Login;