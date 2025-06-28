import React from 'react';
import Products from "./Products";
import classes from "./ProductConteiner.module.css";

const ProductConteiner = ({posts}) => {
    return (
        <div>
            <h1>
                Каталог пердежа
            </h1>

            <div className={classes.productBlock}>
            {posts.map((post, index) => (
                <Products  number={index + 1} post={post} key={post.id}/>
            ))}
            </div>
        </div>
    );
};

export default ProductConteiner;