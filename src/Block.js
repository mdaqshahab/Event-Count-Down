import React from 'react';
import logo from './image.jpg';
import './Block.css'

function Block() {
    return (
        <div >
            <img src={logo} className='image' />
            <div class="container">
                <h2>Adiba Reyaz</h2>
            </div>
        </div> 
    );
}

export default Block;