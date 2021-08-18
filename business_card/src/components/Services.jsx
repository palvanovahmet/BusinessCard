function Services() {
    return (
            <main class="services">
                <div className="wrapper">
                    <div className="services__container">
                        <div className="service__title">
                            <h1>Service prices</h1>
                        </div>

                        <div className="service__info">
                            {/******* First Service *******/}
                            <div className="service__card">
                                <div className="service__price">
                                    <span>Minimal</span>
                                    <span>100$</span>
                                </div>

                                <div className="service__offer">
                                    <div className="duration">
                                        <span>Duration</span>
                                        <span>1 hour</span>
                                    </div>

                                    <div className="number__of__photos">
                                        <span>Number of photos</span>
                                        <span>10-20</span>
                                    </div>

                                    <div className="consultation">
                                        <span>Consultation on style</span>
                                    </div>
                                </div>

                                        <div className="button">
                                            <button class="submit__service">Select service</button>
                                        </div>  
                            </div>

                            {/****** Second Service ******/}
                                <div className="service__card">
                                    <div className="service__price">
                                        <span>Standart</span>
                                        <span>200$</span>
                                     </div>

                                    <div className="service__offer">
                                        <div className="duration">
                                            <span>Duration</span>
                                            <span>1 hour</span>
                                        </div>

                                        <div className="number__of__photos">
                                            <span>Number of photos</span>
                                            <span>50-70</span>
                                        </div>

                                        <div className="consultation">
                                            <span>Consultation on style</span>
                                        </div>
                                    </div>
                                      
                                        <div className="button">
                                            <button class="submit__service">Select service</button>
                                        </div>     
                                </div>

                            {/****** Third Service *******/}
                            <div className="service__card">
                                    <div className="service__price">
                                            <span>Maximum</span>
                                            <span>300$</span>
                                    </div>

                                    <div className="service__offer">
                                        <div className="duration">
                                            <span>Duration</span>
                                            <span>1 hour</span>
                                        </div>

                                        <div className="number__of__photos">
                                            <span>Number of photos</span>
                                            <span>all</span>
                                        </div>

                                        <div className="consultation">
                                            <span>Consultation on style</span>
                                            <span>yes</span>
                                        </div>
                                    </div>

                                        <div className="button">
                                            <button class="submit__service">Select service</button>
                                        </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    );
}

export default Services;