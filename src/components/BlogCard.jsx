import Link from 'next/link';
import React from 'react';

const BlogCard = ({ blog }) => {
    const { id, title, body } = blog
    return (
        <div className="card bg-white w-full h-full shadow-xl duration-500 hover:shadow-2xl">
            <div className="card-body p-4">
                <h1 className='text-xl font-bold'>No - {id}</h1>
                <Link href={`/${id}`}>  <h2 className="card-title">{title}</h2></Link>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default BlogCard;