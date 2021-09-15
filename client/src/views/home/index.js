import React, { Component } from "react";
import photoSeating from 'assets/images/photo_seating.jpg'
import photoLight from 'assets/images/photo_lighting.jpg'
import Core from "../../services/core";
import handleError from "../../services/errorHandler";
import Loading from "components/loader/index";
import "./index.scss";
import "../home/index.scss";
import { Link } from "react-router-dom";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
            search: '',
            errorMsg: "",
            productsList: <div className="no=products">You do not have any items to sell right now. Click the 'Upload Items' button to strat uploading.</div>,
        };
    }

    onClick(e) {
        e.preventDefault()
    }

    componentDidMount() {
        window.scrollTo(0, 0)

        this.getSellerProducts()
    }

    arrayBufferToBase64( buffer ) {
        let binary = '';
        const bytes = new Uint8Array( buffer );
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );

    }

    async getSellerProducts() {
        this.setState({ pageLoading: true });
        try {
            const res = await Core.allProduct();
            if (res) {
                this.success(res)
            }
        } catch (error) {
            this.setState({ errorMsg: "Error fetching products list" });
            handleError(error);
        }
        this.setState({ pageLoading: false });
    }

    success = (res, search) => {
        this.setState({ errorMsg: "" });
        console.log('res', res, search)
        const response = res.data ? res.data : res
        const store = response.map((item, ind) => {
            if(ind < 100) {
                const buffer = this.arrayBufferToBase64(item?.image_buffer?.data);
                const imga = 'data:image/png;base64,' + buffer
                return (
                    <div className="product" key={ind}>
                        <Link to="/product" title="Product">
                            <div className="image-box">
                                <div className="images">
                                    <img
                                        src={imga}
                                        alt="product_img"
                                    />
                                </div>
                            </div>
                        </Link>
                        <div className="text-box">
                            <h2 className="item">{item.product_name}</h2>
                            <h3 className="price">{item.unit_price}</h3>
                            <p className="description">Materials used: {item.product_material}</p>
                            <p className="description">Recycling code: {item.recycling_code}</p>
                            <p className="description">Item uploaded on: {item.created_dt.substr(0, item.created_dt.indexOf('T'))}</p>
                            <label htmlFor="item-1-quantity">Quantity: </label>
                            <input type="number" name="item-1-quantity" id="item-1-quantity" value={item.quantity} />
                            <button type="button" name="item-1-button" id="item-1-button">Add to Cart</button>
                        </div>
                    </div>
                )
            }
        })
        this.setState({productsList: store})
    }

    async componentDidUpdate() {
        const {searchText, dispatchSearch} = this.props.context
        if(searchText.length > 2) {
            // this.setState({ pageLoading: true });
            const request = {
                product_name: searchText,
            }
            try {
                const res = await Core.searchProducts(request);
                if (res) {
                    this.success(res, true)
                }
            } catch (error) {
                // this.setState({ errorMsg: "Error fetching products" });
                handleError(error);
            }
            // this.setState({ pageLoading: false });
        }
        dispatchSearch({ type: "SEARCH-HOME", res: '' })
        console.log('searchText2', searchText)
    }

    render() {
        const {searchText} = this.props.context
        console.log('searchText', searchText)
        return (
            <div className="listing-section">
                {this.state.pageLoading ? <Loading /> : ""}
                {this.state.productsList}
            </div>
        );
    }
}

export default Dashboard;
