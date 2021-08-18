function Contacts() {
    return (
            <main class="main__contacts">
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

                    <div className="contact__container">
                    <div className="contact__info">

                        {/* first__column */}
                        <div className="office">
                            <span>Office: </span>
                            <p>11301 West Olympic Boulevard</p>
                            <p>Los Angeles, CA 90064 USA</p>
                        </div>

                        <div className="container__line">

                        </div>

                        {/* Second__column */}
                        <div className="get__in__touch">
                            <span>Get in touch: </span>
                            <p>garrycooper@gmail.com</p>
                            <p>+1 (123)-456-7890</p>
                        </div>

                        <div className="container__line">

                        </div>

                        {/* Third__column */}
                        <div className="social__network">
                            <span>Social: </span>
                            <p>I'm in social media</p>

                            <ul class="social__menu">
                                <li class="social__items"><a href="" class="social__links">twitter</a></li>
                                <li class="social__items"><a href="" class="social__links">instagram</a></li>
                                <li class="social__items"><a href="" class="social__links">vk</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="contacts__line">

                    </div>
                    </div>   
                </div>
            </main>       
    );
}

export default Contacts;