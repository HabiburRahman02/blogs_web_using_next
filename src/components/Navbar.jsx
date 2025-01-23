"use client"
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link';

const Navbar = ({ user }) => {

    console.log('form nav', user);
    return (
        <div className="bg-gray-800 text-white p-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link href='/'>
                    <div className="text-xl font-bold">My Blogs</div>
                </Link>
                <nav>
                    <ul className='flex space-x-4'>
                        <li>
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            {
                                user ? <>
                                    <LogoutLink>
                                        <button className="hover:underline" >Logout</button>
                                    </LogoutLink>
                                </>
                                    :
                                    <>
                                        <LoginLink>
                                            <button className="hover:underline" >Login</button>
                                        </LoginLink>
                                    </>
                            }
                        </li>
                    </ul>
                </nav>
            </div>
        </div >
    );
};

export default Navbar;
