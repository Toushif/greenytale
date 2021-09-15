import React, { Component } from "react";
import Core from "../../services/core";
import Loading from "components/loader/index";
import { AuthContext } from "../../context/authContext";
import handleError from "../../services/errorHandler";
import "./index.scss";

class WatsonDiscovery extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: false,
            search: "",
            searchOff: true,
            resultHtml: <div className="no-result-found">Start discovering!</div>
        };
        this.textInput = React.createRef();
    }

    componentDidMount() {
        const { dispatchWatsonDiscovery } = this.context;
        dispatchWatsonDiscovery({ type: "WATSON-DISCOVERY", res: true });
    }

    componentWillUnmount() {
        const { dispatchWatsonDiscovery } = this.context;
        dispatchWatsonDiscovery({ type: "WATSON-DISCOVERY", res: false });
    }

    searchChange = (e) => {
        const query = e.target.value;
        this.setState({ search: query });
    };

    enterKey = (e) => {
        if (e.code === "Enter") {
            this.toggleClass();
        }
    };

    readMore = e => {
        const win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=880,height=300,top="+(window.innerHeight-500)+",left="+(window.innerWidth-1240));
        win.document.body.innerHTML = e;
    }

    toggleClass = async (e) => {
        if(!this.state.searchOff && this.state.search?.length > 2) {
            this.setState({ pageLoading: true });
            try {
                const res = await Core.searchWatson(this.state.search);
                this.setState({ search: '' });
                let html;
                if(res.matching_results === 0) {
                    html = (<div className="no-result-found">No matching results found. Try again using different keywords.</div>)
                } else {
                    html = res.results.map((element, index) => {
                        const text = element.text
                        const trimText = text.substr(0, 200) + '...'
                        return (
                            <aside key={index}>
                                <div className="content" style={{padding: 0}}>
                                    <h3>
                                        {element.title || element.enriched_text?.keywords?.[0]?.text}
                                    </h3>
                                    <p>
                                        {trimText}
                                        <span className="read-more" onClick={e => this.readMore(element.html || element.text)}>read more</span>
                                    </p>
                                </div>
                            </aside>
                        )
                    });
                }
                this.setState({resultHtml: html})
                console.log("search", res);
            } catch (error) {
                handleError(error);
            }
            this.setState({ pageLoading: false });
        }

        this.setState((prevState) => ({ searchOff: !prevState.searchOff }), () => {
            if(!this.state.searchOff) {
                this.textInput.current.focus()
            }
        });

    };

    render() {
        const { pageLoading, searchOff, resultHtml } = this.state;
        return (
            <div className="dashboard">
                {pageLoading ? <Loading /> : ""}
                <div
                    className="search"
                    style={{ width: searchOff ? "100px" : "420px" }}
                >
                    {!searchOff && (
                        <input
                            style={{ width: "250px" }}
                            type="text"
                            ref={this.textInput}
                            value={this.state.search}
                            placeholder="Search anything"
                            className="search-box"
                            onKeyUp={this.enterKey}
                            onChange={this.searchChange}
                        ></input>
                    )}
                    <span
                        className={
                            searchOff ? "search-button" : "search-button open"
                        }
                        onClick={this.toggleClass}
                    >
                        <span className="search-icon"></span>
                    </span>
                </div>

                <section className="main watson-main">
                    {resultHtml}
                </section>

                <section className="main discovery-main">
                    <aside>
                        <div className="content trending">
                            <h3>
                                <a
                                    href="javascript:void(0)"
                                    onClick={this.onClick}
                                >
                                    What&apos;s Watson Discovery?
                                </a>
                            </h3>
                            <p>
                                Watson Discovery is an award-winning enterprise
                                search tool and AI search technology that breaks
                                open data silos and retrieves specific answers
                                to your questions while analyzing trends and
                                relationships buried in enterprise data.{" "}
                            </p>
                            <p>
                                Watson Discovery applies the latest
                                breakthroughs in machine learning, including
                                natural language processing capabilities, and is
                                easily trained on the language of your domain.
                                Unlike competitors, Watson Discovery can be
                                deployed on any cloud or on-premises
                                environment.
                            </p>
                        </div>
                    </aside>

                    <aside>
                        <div className="content find-it">
                            <h3>
                                <a
                                    href="javascript:void(0)"
                                    onClick={this.onClick}
                                >
                                    What can we discover?
                                </a>
                            </h3>
                            <p>
                                Discovery has a powerful analytics engine that
                                provides cognitive enrichments and insights into
                                your data. With built-in natural language
                                processing (NLP) capabilities, it can extract
                                enrichments from a wide range of document types,
                                such as JSON, HTML, PDF, and Microsoft™ Word.
                                The following table shows the key enrichments.
                            </p>
                        </div>
                    </aside>

                    <aside>
                        <div className="content tools">
                            <h3>
                                <a
                                    href="javascript:void(0)"
                                    onClick={this.onClick}
                                >
                                    Tools of the trade
                                </a>
                            </h3>
                            <p>
                                Discovery has its own set of tooling that is
                                available through the IBM Cloud, and which
                                provides a UI to manually manage your Discovery
                                collections.
                            </p>
                            <p>
                                All of the data content is stored and enriched
                                within a Discovery collection. The data does not
                                require any specific structure and can come from
                                multiple public and private data sources. Every
                                Discovery environment comes with a pre-enriched
                                data collection named Watson Discovery News.
                            </p>
                        </div>
                    </aside>
                </section>

                <section className="atmosphere watson-atmosphere">
                    <article>
                        <h2>Anyone can teach Watson Discovery</h2>
                        <p>
                            Intuitive tooling empowers your subject-matter experts to teach Watson the language of your industry without deep technical or coding skills required. Join us to create a better and stronger AI - which will help us all to combat climate change.
                        </p>
                        <a
                            className="btn watson-learn"
                            title="Creating a modern atmosphere"
                            href="https://www.ibm.com/in-en/cloud/watson-discovery"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Learn more
                        </a>
                    </article>
                </section>
            </div>
        );
    }
}

export default WatsonDiscovery;
