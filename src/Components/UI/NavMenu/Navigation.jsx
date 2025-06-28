import React from 'react';
import classes from './Navigation.module.css'
import NavButton from "../Button/NavButton";

const Navigation = () => {

        // Обработчик для кнопки меню
        document.getElementById('menuToggle').addEventListener('click', function (e) {
            e.stopPropagation();
            const dropdown = document.getElementById('dropdownMenu');
            dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
        });

// Закрытие меню при клике вне его
        document.addEventListener('click', function (e) {
            if (!e.target.closest('#menuItem')) {
                document.getElementById('dropdownMenu').style.display = 'none';
            }
        });

// Обработчики для пунктов меню
        ['menuOption1', 'menuOption2', 'menuOption3'].forEach(id => {
            document.getElementById(id).addEventListener('click', function () {
                alert(this.textContent.trim() + ' выбран');
                document.getElementById('dropdownMenu').style.display = 'none';
            });
        });



    return (
        <div>
            <nav id="mainNav" className={classes.main}>
                <ul id="navList" className={classes.navigation}>
                    <li id="menuItem">
                        <NavButton id="menuToggle">Каталог</NavButton>
                        <ul id="dropdownMenu">
                            <li>
                                <NavButton id="menuOption1">Сладкий</NavButton>
                                <NavButton id="menuOption2">Кисло-сладкий</NavButton>
                                <NavButton id="menuOption3">Тухлый</NavButton>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>

    );
};

export default Navigation;