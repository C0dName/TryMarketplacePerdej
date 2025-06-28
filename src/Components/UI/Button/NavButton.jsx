import React from 'react';
import classes from "./NavButton.module.css";

const NavButton = ({children,...props}) => {
    return (
        <button {...props} id="menuToggle" className={classes.navBtn}>
            {children}
        </button>
    );
};

export default NavButton;