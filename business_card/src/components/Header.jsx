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
                                
                                <li class="menu__item"><a href="/" class="links">Главная страница</a></li>
                                <li class="menu__item"><a href="/portfolio" class="links">Портфолио</a></li>
                                <li class="menu__item"><a href="/about" class="links">О себе</a></li>
                                <li class="menu__item"><a href="/contacts" class="links">Контакты</a></li>
                                <li class="menu__item"><a href="/services" class="links">Услуги</a></li>
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