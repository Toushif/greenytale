import React, { Component } from "react";
import Core from "../../services/core";
import handleError from "../../services/errorHandler";
import Loading from "components/loader/index";
import "./index.scss";
import { Link } from "react-router-dom";

class Seller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: false,
            errorMsg: "",
            productsList: <div className="no=products">You do not have any items to sell right now. Click the 'Upload Items' button to strat uploading.</div>,
            userImg: "https://img.icons8.com/bubbles/100/000000/user.png",
        };
    }

    componentDidMount() {
        const { userDetails } = this.props.context;
        if (userDetails.imgUrl) {
            this.setState({ userImg: userDetails.imgUrl });
        }
        window.scrollTo(0, 150);

        this.getSellerProducts(userDetails.user_ID)
        console.log("prps", this.props.context, this.props.context.userDetails);
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

    async getSellerProducts(seller_ID) {
        this.setState({ pageLoading: true });
        try {
            const res = await Core.sellerProducts({seller_ID});
            if (res) {
                this.setState({ errorMsg: "" });
                const store = res.map((item, ind) => {
                    const buffer = this.arrayBufferToBase64(item?.image_buffer?.data);
                    const imga = 'data:image/png;base64,' + buffer
                    return (
                        <div className="col-6 product-ind" key={ind}>
                            <div className="product">
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
                        </div>
                    )
                })
                this.setState({productsList: store})

                console.log('res', res)
            }
        } catch (error) {
            this.setState({ errorMsg: "Error fetching products list" });
            handleError(error);
        }
        this.setState({ pageLoading: false });
    }

    render() {
        const { userDetails } = this.props.context;

        return (
            <div className="seller-page">
                {this.state.pageLoading ? <Loading /> : ""}
                <h1 className="page-settings-header">Seller Account</h1>
                <div className="page-content page-container" id="page-content">
                    <div className="row d-flex justify-content-center">
                        <div className="seller-inner-wrapper">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                <img
                                                    src={this.state.userImg}
                                                    className="img-radius"
                                                    alt="User-Profile-Image"
                                                />
                                            </div>
                                            <h6 className="f-w-600">
                                                {userDetails.full_name}
                                            </h6>
                                            <p>GreenyTale Seller</p>
                                            <p>{userDetails.email}</p>
                                            <p>
                                                Joined:{" "}
                                                {userDetails.created_dt.substr(
                                                    0,
                                                    userDetails.created_dt.indexOf(
                                                        "T"
                                                    )
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h6 style={{display: 'inline-block'}} className="m-b-20 p-b-5 b-b-default f-w-600">
                                                List of all products
                                            </h6>
                                            <button 
                                                className="btn btn-success upload-products">
                                                <Link to="seller-upload">Upload Items</Link>
                                            </button>
                                            <hr />
                                            <div className="row listing-section">
                                                {this.state.productsList}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Seller;
