"use client"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link';

const Navbar = () => {

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
                        {/* {user ? ( */}
                        {/* <li>
                            <Link href="/profile" className="hover:underline">
                                Profile
                            </Link>
                        </li> */}
                        {/* ) : ( */}
                        <li>
                            <LoginLink>
                                <button className="btn">Login</button>
                            </LoginLink>
                        </li>
                        {/* )} */}
                    </ul>
                </nav>
            </div>
        </div >
    );
};

export default Navbar;
