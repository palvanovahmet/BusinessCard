function NotFound() {
    return (
        <main class="error">
            <div className="wrapper">
            <div className="error__container">
                <div className="error__picture">
                <img src="../../public/assets/picture.jpg"/>
                </div>

                <div className="error__text">
                    <h1>Awww...Don't Cry.</h1>
                    <span>It's just a 404 error</span>
                    <p>What you're looking for may have been misplaced</p>
                    <p>in Long Team Memory.</p>
                </div>
            </div>
            </div>
        </main>
    );
}

export default NotFound;