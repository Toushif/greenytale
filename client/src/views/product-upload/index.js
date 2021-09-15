import React, { Component } from "react";
import Core from "../../services/core";
import handleError from "../../services/errorHandler";
import Loading from "components/loader/index";
import "../seller/index.scss";
import { InputForm, Dropdown } from "../../components/form-inputs/index";
import { Link } from "react-router-dom";
import "./index.scss";

class SellerUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: false,
            userImg: "https://img.icons8.com/bubbles/100/000000/user.png",
            form: {
                product_name: "",
                unit_price: "",
                quantity: "",
                product_material: "",
                recycling_code: "",
                product_category: "",
                product_sub_category: "",
            },
            successMsg: "",
            errorMsg: "",
        };
    }

    componentDidMount() {
        const { userDetails } = this.props.context;
        if (userDetails.imgUrl) {
            this.setState({ userImg: userDetails.imgUrl });
        }
        window.scrollTo(0, 150);

        console.log("prps", this.props.context, this.props.context.userDetails);
    }

    changeInput = (e) => {
        const obj = { ...this.state.form };
        obj[e.target.id] = e.target.value;
        this.setState({
            form: obj,
        });
    };

    fileChange = (e) => {};

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ errorMsg: "" });
        const { userDetails } = this.props.context;
        const data = new FormData(e.target);

        const value = Object.fromEntries(data.entries());

        this.setState({ pageLoading: true });
        const request = new FormData();
        request.append("seller_ID", userDetails.user_ID);
        request.append("seller_name", userDetails.full_name);
        for (const key in value) {
            if (Object.hasOwnProperty.call(value, key)) {
                const element = value[key];
                request.append(key, element);
            }
        }
        console.log("data", request, value);
        try {
            const res = await Core.newProduct(request);
            if (res) {
                console.log("data", res);
                for (const key in this.state.form) {
                    if (Object.hasOwnProperty.call(value, key)) {
                        const obj = { ...this.state.form };
                        obj[key] = ''
                        this.setState({form: obj})
                    }
                }
                this.setState({
                    successMsg: "Product item uploaded successfully"
                });
                setTimeout(() => {
                    this.setState({ successMsg: "" });
                }, 3000);
            }
        } catch (error) {
            this.setState({ errorMsg: "Error uploading product" });
            handleError(error);
        }
        this.setState({ pageLoading: false });
    };

    render() {
        const { userDetails } = this.props.context;
        const {
            product_name,
            unit_price,
            quantity,
            product_material,
            recycling_code,
            product_category,
            product_sub_category,
        } = this.state.form;

        return (
            <div className="seller-page">
                {this.state.pageLoading ? <Loading /> : ""}
                <h1 className="page-settings-header">Upload Items</h1>
                <div className="page-content page-container" id="page-content">
                    <div className="row d-flex justify-content-center">
                        <div className="seller-inner-wrapper">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0 upload-wrapper">
                                    <div className="col-4 bg-c-lite-green user-profile">
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
                                        <div className="account-btn">
                                            <button
                                                className="btn btn-info">
                                                <Link to="seller">Account Details</Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="card-block upload-item">
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="outer-child">
                                                    <div className="input-child">
                                                        <InputForm
                                                            type="text"
                                                            name={
                                                                "product_name"
                                                            }
                                                            value={product_name}
                                                            id={"product_name"}
                                                            cat={true}
                                                            placeholder="Enter item name:"
                                                            onChange={
                                                                this.changeInput
                                                            }
                                                            required={true}
                                                        />
                                                    </div>
                                                    <div className="input-child">
                                                        <InputForm
                                                            type="number"
                                                            name={"unit_price"}
                                                            value={unit_price}
                                                            id={"unit_price"}
                                                            cat={true}
                                                            min={0}
                                                            placeholder="Price:"
                                                            onChange={
                                                                this.changeInput
                                                            }
                                                            required={true}
                                                        />
                                                    </div>
                                                    <div className="input-child">
                                                        <InputForm
                                                            type="number"
                                                            name={"quantity"}
                                                            value={quantity}
                                                            id={"quantity"}
                                                            cat={true}
                                                            min={1}
                                                            max={10}
                                                            placeholder="Quantity"
                                                            onChange={
                                                                this.changeInput
                                                            }
                                                            required={true}
                                                        />
                                                    </div>
                                                    <div className="input-child">
                                                        <InputForm
                                                            type="text"
                                                            name={
                                                                "product_material"
                                                            }
                                                            value={
                                                                product_material
                                                            }
                                                            id={
                                                                "product_material"
                                                            }
                                                            cat={true}
                                                            placeholder="Material used for items:"
                                                            onChange={
                                                                this.changeInput
                                                            }
                                                            required={true}
                                                        />
                                                    </div>
                                                    <div className="input-child input-child-dd">
                                                        <Dropdown
                                                            name={
                                                                "product_category"
                                                            }
                                                            value={
                                                                product_category
                                                            }
                                                            id={
                                                                "product_category"
                                                            }
                                                            cat={true}
                                                            placeholder="Category:"
                                                            changeFn={
                                                                this.changeInput
                                                            }
                                                        >
                                                            <option
                                                                value=""
                                                                default
                                                            >
                                                                --Select
                                                                Category--
                                                            </option>
                                                            <option>
                                                                Clothing
                                                            </option>
                                                            <option>
                                                                Footwear
                                                            </option>
                                                            <option>
                                                                Electronics
                                                            </option>
                                                            <option>
                                                                Domestic
                                                                appliances
                                                            </option>
                                                            <option>
                                                                Accessories
                                                            </option>
                                                        </Dropdown>
                                                    </div>
                                                    <div className="input-child">
                                                        <InputForm
                                                            type="text"
                                                            name={
                                                                "product_sub_category"
                                                            }
                                                            value={
                                                                product_sub_category
                                                            }
                                                            id={
                                                                "product_sub_category"
                                                            }
                                                            cat={true}
                                                            placeholder="Item sub-category:"
                                                            onChange={
                                                                this.changeInput
                                                            }
                                                            required={false}
                                                        />
                                                    </div>
                                                    <div className="input-child">
                                                        <InputForm
                                                            type="text"
                                                            name={
                                                                "recycling_code"
                                                            }
                                                            value={
                                                                recycling_code
                                                            }
                                                            id={
                                                                "recycling_code"
                                                            }
                                                            cat={true}
                                                            placeholder="Recycling code:"
                                                            onChange={
                                                                this.changeInput
                                                            }
                                                            required={false}
                                                        />
                                                    </div>
                                                    <div className="input-child">
                                                        <label htmlFor="file">
                                                            Upload items
                                                        </label>
                                                        <input
                                                            type="file"
                                                            id="file"
                                                            name="file"
                                                            onChange={
                                                                this.fileChange
                                                            }
                                                            accept="image/*"
                                                        />
                                                    </div>
                                                    <div className="input-child">
                                                        <button
                                                            className="btn btn-info upload-btn"
                                                            type="submit"
                                                        >
                                                            Upload
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                            {!!this.state.errorMsg && (
                                                <div className="error-body">
                                                    <span>
                                                        {this.state.errorMsg}
                                                    </span>
                                                </div>
                                            )}
                                            {!!this.state.successMsg && (
                                                <div className="success-body">
                                                    <span>
                                                        {this.state.successMsg}
                                                    </span>
                                                </div>
                                            )}
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

export default SellerUpload;
