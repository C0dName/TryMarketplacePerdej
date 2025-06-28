import React from 'react';
import classes from "./Products.module.css";

const Products = (props) => {
    return (

        <div className={classes.product}
             data-price={props.post.price}
             data-rating={props.post.rating}>
            <p>{props.number}</p>
            <p className={classes.productName}>{props.post.title}</p>
            <p className={classes.productPrice}>{props.post.title1}</p>
            <p className={classes.productRating}>{props.post.title2}</p>
            <button>Удалить</button>
        </div>

    );
};

export default Products;