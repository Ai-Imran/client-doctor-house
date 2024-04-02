import  { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/Frame.png'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Signin = () => {
    const { userSignIn } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTIN_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const axiosPublic = useAxiosPublic();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.files[0]; // Get the file from the input element

        try {
            const res = await userSignIn(email, password);
            const user = res.user;

            await updateProfile(user, {
                displayName: name,
                photoURL: photo ? photo.name : null, // Set photo URL if photo is provided
            });

            let imageURL = null; // Initialize imageURL to null

            if (photo) {
                const formData = new FormData();
                formData.append('image', photo); // Append the file to FormData

                // Make a POST request to the image hosting API
                const response = await axiosPublic.post(image_hosting_api, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log('Image uploaded successfully:', response.data);

                // Extract image URL from the response
                imageURL = response.data.data.url;
            }

            // Construct user info object to be sent to MongoDB
            const userInfo = {
                name,
                email,
                imageURL, // Use imageURL instead of photoURL
            };

            // Post user info to MongoDB
            await axiosPublic.post('/users', userInfo);

            navigate('/');
        } catch (error) {
            console.error('Error signing in:', error.message);
        }
    };

    return (
        <div className="lg:flex">
            <div className='bg-[#07332F]  lg:gap-8 lg:p-8 lg:w-1/2 lg:min-h-screen'>
                <img className='' src={img} alt="" />
            </div>
            <div className=' lg:w-3/4 py-3 bg-[#4b4b4b]'>
                <form className=' border border-lime-500 py-4 lg:py-10 lg:w-1/2 mx-3 lg:mx-auto lg:px-8 rounded-md px-3 lg:mt-[100px]' onSubmit={handleSubmit}>
                    <h2 className="text-xl font-bold text-white text-center">Create an Account</h2>
                    <label className='text-white' htmlFor="name">Name</label>
                    <input className='block mb-2 w-full bordr-0 outline-none rounded-md p-2 py-2' name='name' type="text" placeholder='Your Name' />
                    <label className='text-white' htmlFor="email">Email</label>
                    <input className='block mb-2 w-full bordr-0 outline-none rounded-md p-2 py-2' name='email' type="email" placeholder='Enter Email' />
                    <div className='relative'>
                        <label className='text-white' htmlFor="password">Password</label>
                        <input className='block mb-2 w-full bordr-0 outline-none rounded-md p-2 py-2' name='password' type={show ? "text" : "password"} placeholder='Create a password' />
                        <span onClick={() => setShow(!show)} className='absolute cursor-pointer top-8 right-3'>
                            {show ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                        </span>
                    </div>
                    <label className='text-white' htmlFor="name">Upload A image</label>
                    <input className='block mb-2 w-full bordr-0 outline-none bg-gray-400 rounded-md p-2 py-2' name='photo' type="file" placeholder='Your Name' />
                    <button className="btn hover:bg-[#30336b] w-full mt-2 outline-none border-0 text-white font-bold bg-[#130f40] mb-5">Sign In</button>
                    <span className="text-gray-300  m-2">Already have Account</span>
                    <Link to={'/login'}><span className="text-white hover:text-purple-400 font-bold text-center">Login</span></Link>
                </form>
            </div>
        </div>
    );
};

export default Signin;
