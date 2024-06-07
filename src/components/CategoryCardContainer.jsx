import React from 'react';
import './CategoryCard.css';
import { NavLink } from 'react-router-dom';

const CategoryCard = ({ imageUrl, title, url }) => {
    return (
        <div className="category-card" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="button">
                <NavLink to={`/productos/${url}`}>
                    <button>{title}</button>
                </NavLink>
            </div>
        </div>
    );
}

const CategoryCardContainer = () => {
    return (
        <div className='contenedor'>
            <CategoryCard
                imageUrl="https://i.imgur.com/9rEBlzl.jpeg"
                title="VER MANIQUIES"
                url="maniquies"
            />
            <CategoryCard
                imageUrl="https://i.imgur.com/wjRFVyd.jpeg"
                title="VER COLGADORES"
                url="colgadores"
            />
            <CategoryCard
                imageUrl="https://i.imgur.com/BnIonxt.jpeg"
                title="VER MOSTRADORES"
                url="mostradores"
            />
            <CategoryCard
                imageUrl="https://i.imgur.com/fYWgjgV.jpeg"
                title="VER INSTALACIONES"
                url="instalaciones"
            />
        </div>
    );
}

export default CategoryCardContainer;