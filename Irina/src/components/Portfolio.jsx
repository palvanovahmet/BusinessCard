function Portfolio() {
    return(
        <div className="background">
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
                        <li class="menu__list"><a href="#" class="links">Главная страница</a></li>
                        <li class="menu__list"><a href="#" class="links">Обо мне</a></li>
                        <li class="menu__list"><a href="#" class="links">Услуги</a></li>
                        <li class="menu__list"><a href="#" class="links">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>

<main class="portfolio">
    <div class="wrapper">
        <div class="social__network__portfolio">
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

    <div class="main__title__portfolio">
        <h1>Портфолио</h1>
    </div>

</div>

    <div class="main__container__portfolio">
        <div class="first__column__project">
            {/* <!-- FIRST PROJECT DIV --> */}
            <div class="projects">
                <div class="project__container">

                </div>
                <p>Project Name</p>
            </div>

            {/* <!-- SECOND PROJECT DIV --> */}
            <div class="projects">
                <div class="project__container">

                </div>
                <p>Project Name</p>
            </div> 
        </div>

        <div class="second__column__project">
            {/* <!-- THIRD PROJECT DIV --> */}
            <div class="projects">
                <div class="project__container">

                </div>
                <p>Project Name</p>
            </div>

            {/* <!-- FOUR PROJECT DIV --> */}
            <div class="projects">
                <div class="project__container">

                </div>
                <p>Project Name</p>
            </div>
        </div>
    </div>
    </main>
    </div>
    ); 
}

export default Portfolio;