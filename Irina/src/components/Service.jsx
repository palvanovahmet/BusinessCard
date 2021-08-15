function Service() {
    return (
        <div className="background">
            <div class="line__service">

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
                        <li class="menu__list"><a href="#" class="current__link">Услуги</a></li>
                        <li class="menu__list"><a href="#" class="links">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>

<main class="service">
    <div class="social__network__service">
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

    <div class="main__container__service">
        <h1>Services</h1>

        <div class="service__container">

            {/* <!-- First row --> */}
            <div class="column">
                <div class="left__column">
                    <div class="boundaries">
                        <h2>Landing page<br/>creation</h2>
                        <p>Creating a landing-lage<br/>turnkey website from 14 days</p>
                    </div>
                </div>

                <div class="right__column">
                    <div class="boundaries">
                        <h2>Landing page<br/>creation</h2>
                        <p>Creating a landing-lage<br/>turnkey website from 14 days</p>
                    </div>
                </div>
            </div>

            {/* <!-- Second row --> */}
            <div class="column">
                <div class="left__column">
                    <div class="boundaries">
                        <h2>Landing page<br/>creation</h2>
                        <p>Creating a landing-lage<br/>turnkey website from 14 days</p>
                    </div>
                </div>

                <div class="right__column">
                    <div class="boundaries">
                        <h2>Landing page<br/>creation</h2>
                        <p>Creating a landing-lage<br/>turnkey website from 14 days</p>
                    </div>
                </div>
            </div>

            {/* <!-- Third row --> */}
            <div class="column">
                <div class="left__column">
                    <div class="boundaries">
                        <h2>Landing page<br/>creation</h2>
                        <p>Creating a landing-lage<br/>turnkey website from 14 days</p>
                    </div>
                </div>

                <div class="right__column">
                    <div class="boundaries">
                        <h2>Landing page<br/>creation</h2>
                        <p>Creating a landing-lage<br/>turnkey website from 14 days</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </main>
    </div>
    );
}

export default Service;