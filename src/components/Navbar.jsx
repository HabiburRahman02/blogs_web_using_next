"use client"
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const { getUser, isAuthenticated } = useKindeAuth();
    const [user, setUser] = useState(null);
    console.log(user);

    useEffect(() => {
        if (isAuthenticated) {
            const userData = getUser();
            setUser(userData);
        } else {
            setUser(null);
        }
    }, [isAuthenticated]);

    return (
        <div className="bg-gray-800 text-white p-4">
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
                        {user ? (
                            <li>
                                <Link href="/profile" className="hover:underline">
                                    Profile
                                </Link>
                            </li>
                        ) : (
                            <li>
                                <Link href="/login" className="hover:underline">
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
