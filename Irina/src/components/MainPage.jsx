function MainPage() {
    return (
        <div>
            <div class="line">

            </div>
<header>
    <div class="wrapper">
        <div class="header__container">
            <div class="header__logo">
                <img src="assets/beats.png" width="40" height="40"/>
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

<main class="mainpage">
    <div class="wrapper">
        <div class="main__container">
            <div class="social__network">
                <div class="social">
                    <div class="phone">
                        <span>Phone</span>
                        <span>+79220768300</span>
                    </div>
    
                    <div class="email">
                        <span>Email</span>
                        <span>Pavlovaira18@yandex.ru</span>
                    </div>
    
                    <div class="networks">
                        <span>Social Network</span>
                        <div class="social__links">
                            <ul>
                                <li><a href="#"><img src="assets/Group.svg"/></a></li>
                                <li><a href="#"><img src="assets/Group.svg"/></a></li>
                                <li><a href="#"><img src="assets/Group.svg"/></a></li>
                                <li><a href="#"><img src="assets/Group.svg"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="profile__picture">
                <img src="assets/NicePng_shisui-png_3386490.png"/>
            </div>
            <div class="about__me__info">
                <div class="main__offer">
                    <h1>Pavlova<br/>Irina</h1>
                    <span>Web Designer</span>
                    <p>I'm Irina Pavlova, web designer<br/>with 3 years of experience</p>
                    <a href="#">Project Cost</a>
                </div>        
            </div>
        </div>
    </div>
    
</main>
 </div>
    );
}

export default MainPage;