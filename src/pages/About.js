import './About.css';

export default function About() {
    return (
        <section className="about-section">
            <div className="all-sections">
                <div data-aos="fade-right" className="mini-section">
                    <div className="hexagon">
                        <i className="fa fa-fighter-jet" aria-hidden="true"></i>
                    </div>
                    <div className="text-mini-section">
                        <h1>Fast</h1>
                        <p>
                            Fast load times and lag free interaction, my highest priority.
                        </p>
                    </div>
                </div>
                <div className="mini-section">
                    <div className="hexagon">
                        <i className="fa fa-window-restore" aria-hidden="true"></i>
                    </div>
                    <div className="text-mini-section">
                        <h1>Choice</h1>
                        <p>You can choose your favorite foods.</p>
                    </div>
                </div>
                <div className="mini-section">
                    <div className="hexagon">
                        <i className="fa fa-rocket" aria-hidden="true"></i>
                    </div>
                    <div className="text-mini-section">
                        <h1>Intuitive</h1>
                        <p>everything is so easy.</p>
                    </div>
                </div>
            </div>
            <div className="who-am-i">
                <div data-aos="zoom-in-up" className="image-me"></div>
                <div className="all-who">
                    <h1 data-aos="zoom-in-down">Who are we?</h1>
                    <div className="div-para">
                        <p data-aos="zoom-in-down">
                            Choose your favorite meal from our broad selection of available meals
                            and enjoy a delicious lunch or dinner at home.
                            All our meals are cooked with high-quality ingredients, just-in-time and
                            of course by experienced chefs!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}