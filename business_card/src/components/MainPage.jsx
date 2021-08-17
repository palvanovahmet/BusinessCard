function MainPage() {
    return (
    <div class="back__gradient">
        <main class="mainPage">
            <div class="wrapper">
                <div class="main__container__home">
                    <div class="about__me">
                        <span>Меня зовут Иван Иванов Иванович</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Ratione accusamus voluptatem impedit tempora quod ad perspiciatis veritatis atque! Odit possimus id quibusdam molestias minima iure accusamus atque nesciunt inventore obcaecati.</p>
                        <a href="/about">Подробно обо мне</a>
                    </div>
                    
                    <div class="avatar">
                            <svg class="circle" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <mask id="mask0" mask-type="alpha">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                </mask>
                                <g mask="url(#mask0)">
                                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                    <image class="profile__picture"  xlinkHref="assets/ProfilePicture.png"/>
                                </g>
                            </svg>
                    </div>
                </div>
            </div>
        </main>
    </div>
    );
}

export default MainPage;