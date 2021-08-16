function Contacts() {
    return(
    <div className="background">
        
            <div class="line">

            </div>

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

    <main class="contacts">
        <div class="social__network__contacts">

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
                            <li><a href="#"><img src="/assets/Group.svg"/></a></li>
                            <li><a href="#"><img src="/assets/Group.svg"/></a></li>
                            <li><a href="#"><img src="/assets/Group.svg"/></a></li>
                            <li><a href="#"><img src="/assets/Group.svg"/></a></li>
                        </ul>
                    </div>
                </div>
             </div>
        </div>

        <div class="main__container__contacts">
            <form class="discuss">
                <h1>Обсуждение проекта</h1>
                <input class="default" name="name" type="text" placeholder="Введите имя..."/>

                <div class="input__line">

                </div>

                <input class="default" name="email" type="text" placeholder="Введите вашу почту..."/>

                <div class="input__line">
                    
                </div>

                <input class="default" name="phone" type="text" placeholder="Введите ваш номер телефона..."/>

                <div class="input__line">
                    
                </div>

                <textarea class="business" name="text" type="text" placeholder="Ваши предложения..."></textarea>

                <button class="confirm">Отправить сообщение</button>
            </form>
        </div>
    </main>
    </div>
);
}

export default Contacts;