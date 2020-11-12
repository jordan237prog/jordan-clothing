import React from 'react'
import './MenuItem.style.scss'

function MenuItem  ({title, imageUrl }) {
    return (
        <div 
            className="menu-item" 
        >
        
            <div 
                style ={{ 
                    backgroundImage: `url('${imageUrl}')`
                }}
                className="background-image"
            />
            <div className="content">
                <h1 className="title">{ title.toUpperCase() }</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
};

export default MenuItem