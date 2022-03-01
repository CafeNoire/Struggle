import React from 'react';
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='grid'>
                <img src='./troll.png' alt='logo' width='50px'/>
            </div>
            <div className='grid'>
                <h1>Meme Generator</h1>
            </div>
        </div>
    );
};

export default Navbar;