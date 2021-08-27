import {Link} from 'react-router-dom';

function Header() {
    return(
            <header>
            <div class="wrapper">
                <div class="header__container">
                    <div class="logo">
                        <span>Portfolio</span>
                    </div>
        
                    <div class="header__links">
                        <nav class="menu">
    
                            <div class="burger__menu">
                                <span class="burger__line"></span>
                            </div>
    
                            <ul class="header__menu">
                                
                                <li class="menu__item"><Link to="/" class="links">Главная страница</Link></li>
                                <li class="menu__item"><Link to="/portfolio" class="links">Портфолио</Link></li>
                                <li class="menu__item"><Link to="/about" class="links">О себе</Link></li>
                                <li class="menu__item"><Link to="/contacts" class="links">Контакты</Link></li>
                                <li class="menu__item"><Link to="/services" class="links">Услуги</Link></li>
                            </ul>
    
                            <div class="burger__overlay">
    
                            </div>
    
                        </nav>
                    </div>
                </div>
            </div> 
        </header>    
    );
}

export default Header;