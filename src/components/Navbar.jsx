"use client"
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link';

const Navbar = ({ user }) => {

    // console.log('form nav', user);

    return (
        <div className="bg-gray-800 text-white p-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link href='/'>
                    <div className="text-xl font-bold">My Blogs</div>
                </Link>
                <nav>
                    <ul className='flex space-x-4 items-center'>
                        <li>
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={user ? '/profile' : '/api/auth/login'} className="hover:underline">
                                Profile
                            </Link>
                        </li>

                        {
                            user ? <>
                                <li>
                                    <LogoutLink>
                                        <button className="bg-white text-black py-2 px-4 font-semibold rounded-sm hover:bg-gray-200" >Logout</button>
                                    </LogoutLink>
                                </li>

                            </>
                                :
                                <>
                                    <li>
                                        <LoginLink>
                                            <button className="bg-white text-black py-2 px-4 font-semibold rounded-sm hover:bg-gray-200" >Login</button>
                                        </LoginLink>
                                    </li>
                                </>
                        }
                    </ul>
                </nav>
            </div>
        </div >
    );
};

export default Navbar;
