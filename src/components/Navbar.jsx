"use client"
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">My Blog</div>
                <nav>
                    <ul className='flex space-x-4'>
                        <li>
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;