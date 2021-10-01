import React, { Component } from "react";
import { AuthContext } from "../../context/authContext";
import aboutVideo from "assets/images/greenytale-about.mp4";
import Toushif from "assets/images/preview.jpg";
import "./index.scss";

class AboutUs extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
            name: '',
            email: '',
            message: ''
        };
        this.contact = React.createRef();
    }

    componentDidMount() {
        const { dispatchWatsonDiscovery } = this.context;
        dispatchWatsonDiscovery({ type: "WATSON-DISCOVERY", res: true });
        
        if(this.props.history?.location?.hash === '#contact') {
            window.scrollTo(0, this.contact.current.offsetTop)
        }
    }

    componentWillUnmount() {
        const { dispatchWatsonDiscovery } = this.context;
        dispatchWatsonDiscovery({ type: "WATSON-DISCOVERY", res: false });
    }

    sendMail = e => {
        e.preventDefault();
        window.open(`mailto:produce.recycle@gmail.com?cc=&subject=Suggestions on GreenyTale Web App&body=${this.state.message}${<br/>}from nknk`)
    }

    onChangeContact = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return (
            <div className="about-us">
                <div
                    className="w3-content"
                    style={{maxWidth:'2000px'}}
                >
                    <div className="mySlides w3-display-container w3-center">
                        <div className="home-video home-banner">
                            <video controls="" preload="none" poster="themes/custom/porto/assets/cover.jpg" muted={true} autoPlay loop>
                                <source src={aboutVideo} type="video/mp4"/>
                            </video>
                            <div className="overlay">
                                <div className="container h-100 d-flex align-items-center">
                                    <div className="col-lg-6 col-md-7 col-sm-12">
                                        <h1>MAKING SUSTAINABLE CONSUMPTON AND PRODUCTION A 
                                            <br/>
                                            <span>REALITY</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w3-container w3-content w3-center w3-padding-64"
                        style={{maxWidth:'800px'}}
                        id="band"
                    >
                        <h2 className="w3-wide">GreenyTale</h2>
                        <p className="w3-opacity">
                            <i>We make the difference</i>
                        </p>
                        <p className="w3-justify">
                            The aim of this platform is to address Goal no. 12 of the United Nations’ 2030 Agenda for Sustainable Development through sustainable consumption and production patterns. Striking a balance between consumption and production while maintaining sustainability and minimum environmental impacts is key to this goal.
                        </p>
                        <div className="w3-row w3-padding-32">
                            <div className="w4-fourth">
                                <p>TOUSHIF</p>
                                <img
                                    src={Toushif}
                                    className="w3-round w3-margin-bottom"
                                    alt="Img"
                                    style={{width:'60%'}}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w3-black" id="tour">
                        <div
                            className="w3-container w3-content w3-padding-64"
                            style={{maxWidth:'800px'}}
                        >
                            <h2 className="w3-wide w3-center">GOALS</h2>
                            <p className="w3-opacity w3-center">
                                <i>Keep an eye on this!</i>
                            </p>
                            <br />

                            <div
                                className="w3-row-padding w3-padding-32"
                                style={{margin:'0 -16px'}}
                            >
                                <div className="w3-third w3-margin-bottom">
                                    <div className="w3-container w3-white">
                                        <p>
                                            <b>Decision Making</b>
                                        </p>
                                        <p className="w3-opacity">
                                            Ethical impact
                                        </p>
                                        <p>
                                            A consumer can make a more informed decision on choosing their raw materials/product parts/products based on a score we’ll provide through an algorithm leveraging Watson AI on parameters like recyclability, reusability, cost, manufacturing impact on environment, carbon footprint, end to end lifetime of a product, disposability, etc.  
                                        </p>
                                        <button
                                            className="w3-button w3-black w3-margin-bottom"
                                            style={{display:'block'}}
                                        >
                                            Learn more
                                        </button>
                                    </div>
                                </div>
                                <div className="w3-third w3-margin-bottom">
                                    <div className="w3-container w3-white">
                                        <p>
                                            <b>Consumption-Production eco-friendly balance</b>
                                        </p>
                                        <p className="w3-opacity">
                                            Economical impact
                                        </p>
                                        <p>
                                            We will provide an interface and channel for our seller who will be selling materials/products based on a number of parameters meeting our environment friendly guidelines of recycling, reusability, minimum carbon footprint, etc. Every seller will host/sell only environment friendly materials/products by sharing information and filling out one-time minimum form pertaining to the production process of the product which will be later approved by our team to be hosted in the platform if it meets all the sustainable consumption and production patterns. 
                                        </p>
                                        <button
                                            className="w3-button w3-black w3-margin-bottom"
                                            style={{display:'block'}}
                                        >
                                            Learn more
                                        </button>
                                    </div>
                                </div>
                                <div className="w3-third w3-margin-bottom">
                                    <div className="w3-container w3-white">
                                        <p>
                                            <b>Lowering carbon footprint</b>
                                        </p>
                                        <p className="w3-opacity">
                                            Ecological impact
                                        </p>
                                        <p>
                                            Consumer can compare the information available for a material/product from different sources to make the best possible decision based on price, quality, carbon footprint, etc. Beside comparison, we will also be leveraging Watson AI with other data sources and list out analytical useful data on every product like manufacturing cost, raw materials used, the impact of the product on the environment, how to reduce the impact, alternative solutions, how to reuse, how to connect to other organizations, companies for recycling, product lifecycle, etc 
                                        </p>
                                        <button
                                            className="w3-button w3-black w3-margin-bottom"
                                            style={{display:'block'}}
                                        >
                                            Learn more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="ticketModal" className="w3-modal">
                        <div className="w3-modal-content w3-animate-top w3-card-4">
                            <header className="w3-container w3-teal w3-center w3-padding-32">
                                <span
                                    style={{display:'none'}}
                                    className="w3-button w3-teal w3-xlarge w3-display-topright"
                                >
                                    ×
                                </span>
                                <h2 className="w3-wide">
                                    <i className="fa fa-suitcase w3-margin-right"></i>
                                    Tickets
                                </h2>
                            </header>
                            <div className="w3-container">
                                <p>
                                    <label>
                                        <i className="fa fa-shopping-cart"></i>{" "}
                                        Tickets, $15 per person
                                    </label>
                                </p>
                                <input
                                    className="w3-input w3-border"
                                    type="text"
                                    placeholder="How many?"
                                />
                                <p>
                                    <label>
                                        <i className="fa fa-user"></i> Send To
                                    </label>
                                </p>
                                <input
                                    className="w3-input w3-border"
                                    type="text"
                                    placeholder="Enter email"
                                />
                                <button className="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">
                                    PAY <i className="fa fa-check"></i>
                                </button>
                                <button
                                    className="w3-button w3-red w3-section"
                                    style={{display:'none'}}
                                >
                                    Close <i className="fa fa-remove"></i>
                                </button>
                                <p className="w3-right">
                                    Need{" "}
                                    <a href="#" className="w3-text-blue">
                                        help?
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w3-container w3-content w3-padding-64"
                        style={{maxWidth:'800px'}}
                        ref={this.contact}
                        id="contact"
                    >
                        <h2 className="w3-wide w3-center">CONTACT</h2>
                        <p className="w3-opacity w3-center">
                            <i>Suggestions? Drop a note!</i>
                        </p>
                        <div className="w3-row w3-padding-32">
                            <div className="w3-col m6 w3-large w3-margin-bottom">
                                <i
                                    className="fa fa-map-marker"
                                    style={{width:'30px'}}
                                ></i>{" "}
                                Kolkata, IND
                                <br />
                                <i
                                    className="fa fa-phone"
                                    style={{width:'30px'}}
                                ></i>{" "}
                                Phone: +91 8981288955
                                <br />
                                <i className="fa fa-envelope" style={{width:'30px'}}>
                                </i>
                                Email: produce.recycle@gmail.com
                                <br />
                            </div>
                            <div className="w3-col m6">
                                <form onSubmit={this.sendMail}>
                                    <div
                                        className="w3-row-padding"
                                        style={{margin:'0 -16px 8px -16px'}}
                                    >
                                        <div className="w3-half form-group">
                                            <input
                                                className="w3-input w3-border"
                                                type="text"
                                                id="name"
                                                value={this.state.name}
                                                placeholder="Name"
                                                required
                                                onChange={this.onChangeContact}
                                                name="Name"
                                            />
                                        </div>
                                        <div className="w3-half form-group">
                                            <input
                                                className="w3-input w3-border"
                                                type="text"
                                                id="email"
                                                value={this.state.email}
                                                placeholder="Email"
                                                required
                                                onChange={this.onChangeContact}
                                                name="Email"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        className="w3-input w3-border form-group"
                                        type="text"
                                        id="message"
                                        value={this.state.message}
                                        placeholder="Message"
                                        required
                                        onChange={this.onChangeContact}
                                        name="Message"
                                    />
                                    <button
                                        className="w3-button w3-black w3-section w3-right"
                                        type="submit"
                                    >
                                        SEND
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;
