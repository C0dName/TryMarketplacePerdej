import React from 'react';
import './Navigation.css'

const Navigation = () => {
    function Navigation () {
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

    }
    return (
        <div>
            <nav id="mainNav" className="main">
                <ul id="navList" className="navigation">
                    <li id="menuItem">
                        <button id="menuToggle" className="bluebox">Каталог пердежей</button>
                        <ul id="dropdownMenu">
                            <li>
                                <button id="menuOption1" className="bluebox dropdown-item">Сладкий</button>
                            </li>
                            <li>
                                <button id="menuOption2" className="bluebox dropdown-item">Кисло-сладкий</button>
                            </li>
                            <li>
                                <button id="menuOption3" className="bluebox dropdown-item">Тухлый</button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button id="boxButton" className="bluebox">Тара</button>
                    </li>
                    <li>
                        <button id="bankButton" className="bluebox">Список банков</button>
                    </li>
                </ul>
                <script src="app.js"></script>
            </nav>
        </div>
    );
};

export default Navigation;