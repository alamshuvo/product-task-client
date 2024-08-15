import { Divider, Input } from '@nextui-org/react';
import React, { useContext } from 'react';
import { FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Signup = () => {
    const {createUser}=useContext(AuthContext)
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
 const handleSignUp = (e)=>{
  e.preventDefault()
  const form=e.target;
  const email=form.email.value;
  const password=form.pass.value;
  createUser(email,password)
//   .then(console.log("user created sucessfully"))
//   .catch(console.log("something fisshy "))
  
  
 }



    return (
        <div>
            <div className='border-3 my-4 p-4'>

                <div className='flex justify-center items-center flex-col '>

                    <div className=' w-full h-full flex gap-4 flex-col justify-center items-center   '>
                        <p className='text-3xl font-bold '>Sign Up</p>

                        <form onSubmit={handleSignUp} action="" className='my-5 w-full flex flex-col justify-center items-center'>
                            <div className=' w-full lg:w-[50%] mb-5'>
                                <Input type="email" name='email' label="Email" placeholder="Enter your email" />
                            </div>
                            <div className='w-full lg:w-[50%] mb-5'>
                                <Input
                                    label="Password"
                                    variant="bordered"
                                    name='pass'
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
                    {/* <Divider className="my-4" /> */}
                    {/* <div className='flex gap-3 justify-center items-center'>
        <p className='font-bold'>Login with Google </p>

        <FaGoogle className='text-3xl font-bold ' />
    </div> */}
                    <Divider className="my-4" />
                    <div>
                        <p className='text-2xl font-bold'>Already have an account ? please <Link className='text-primary font-bold text-3xl' to={"/login"}>Login</Link> </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;