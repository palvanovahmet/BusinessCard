function Header() {
    return (
        <header>
            <div class="wrapper">
                <div class="header__container">
                    <div class="header__logo">
                        <img src="/assets/beats.png" width="40" height="40"/>
                        <div class="header__line">

                        </div>
                        <span class="header__brand__name">Ivanov</span>
                    </div>

                    <div class="header__links">
                        <nav class="menu">
                            <ul class="menu__items">
                                <li class="menu__list" ><a href="/" class="links">Главная страница</a></li>
                                <li class="menu__list" ><a href="portfolio" class="links">Портфолио</a></li>
                                <li class="menu__list" ><a href="about" class="links">Обо мне</a></li>
                                <li class="menu__list" ><a href="service" class="links">Услуги</a></li>
                                <li class="menu__list" ><a href="contacts" class="links">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;