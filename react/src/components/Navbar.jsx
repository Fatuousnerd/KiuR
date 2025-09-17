import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='w-full h-[50px] flex items-center justify-between p-[50px] fixed z-[10] '>
                <Link to={'/'} className='text-[2rem] '>Kuir</Link>
            </div>
        </>
    )
}

export default Navbar