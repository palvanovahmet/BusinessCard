import ProjectComponents from './ProjectComponents';

function Portfolio() {
    return (
            <main class="portfolio">
                <div className="wrapper">
                    <div class="main__title__portfolio">
                        <h1>Портфолио</h1>
                    </div>


                    <div class="main__container__portfolio">
                        <div class="first__column__project">
                            {/* <!-- FIRST PROJECT DIV --> */}
                                {/* <div class="projects">
                                    <div class="project__container">
                                    </div>
                                <p>Project Name</p>
                                </div> */}
                            <ProjectComponents/>
                        </div>
                    </div>
                </div>  
            </main>
    );
}

export default Portfolio;