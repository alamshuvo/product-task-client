import { Divider, Input } from '@nextui-org/react';
import React, { useContext } from 'react';
import { FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
    const {signIn,googleSignIn}=useContext(AuthContext)
    const [isVisible, setIsVisible] = React.useState(false);
    const navigate=useNavigate()

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleLogin = (e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.pass.value;
        signIn(email,password)
        .then(res=>{
            console.log(res.user);
           
            toast.success('User Successfully created ')
            navigate("/")
        
        })
        .then(error=>{
            console.log(error);
        })
      
        
        
       }
       const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res=>{
            console.log(res.user);
           
            toast.success('User Successfully created ')
            navigate("/")
        
        })
        .then(error=>{
            console.log(error);
        })
    }


    return (
        <div className='border-3 my-4 p-4'>

            <div className='flex justify-center items-center flex-col '>

                <div className=' w-full h-full flex gap-4 flex-col justify-center items-center   '>
                    <p className='text-3xl font-bold '>Login </p>

                    <form onSubmit={ handleLogin} action="" className='my-5 w-full flex flex-col justify-center items-center'>
                        <div className=' w-full lg:w-[50%] mb-5'>
                            <Input type="email" label="Email" placeholder="Enter your email" />
                        </div>
                        <div className='w-full lg:w-[50%] mb-5'>
                            <Input
                                label="Password"
                                variant="bordered"
                                placeholder="Enter your password"
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                        {isVisible ? (
                                            <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                type={isVisible ? "text" : "password"}
                                className=""
                            />
                        </div>
                        <div className='bg-primary p-2 text-[#fff] rounded-md'>
                            <input type="submit" className='cursor-pointer ' />
                        </div>
                    </form>
                </div>
                <Divider className="my-4" />
                <div >
                    <button className='flex gap-3 justify-center items-center' onClick={handleGoogleSignIn}>Login with Google  <FaGoogle className='text-3xl font-bold ' /></button>
            
                   
                </div>
                <Divider className="my-4" />
                <div>
                    <p className='text-2xl font-bold'>New here ? please <Link className='text-primary font-bold text-3xl' to={"/signup"}>Signup</Link> </p>

                </div>
            </div>
        </div>
    );
};

export default Login;