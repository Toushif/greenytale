import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Col, Row, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./index.scss";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
        };
    }

    componentDidMount() { }

    render() {
        return (
            <div className="cart-wrapper">
                <div className="cart">
                    <div className="cart-title">My shopping cart</div>
                    <table className="cart-table">
                        <tr>
                            <th width="60"><span className="cart-all">Select all</span></th><th>Products</th><th width="120">Unit price</th>< th width="100">Quantity</th>
                            <th width="120">Subtotal</th><th width="80">Operation</th>
                        </tr>
                        <tr className="cart-item">
                            <td><input type="checkbox" checked="checked" className="cart-check" /></td>
                            <td className="cart-txt-left"><span className="cart-name">loading...</span></td>
                            <td><span className="cart-price">0</span></td>
                            <td><span className="cart-reduce">-</span><span className="cart-num">0</span> <span className="cart-add">+</span> </td>
                            <td><span className="cart-subtotal">0</span></td>
                            <td><span className="cart-del">Delete</span></td>
                        </tr>
                        <tr className="cart-item">
                            <td><input type="checkbox" checked="checked" className="cart-check" /></td>
                            <td className="cart-txt-left"><span className="cart-name">loading...</span></td>
                            <td><span className="cart-price">0</span></td>
                            <td><span className="cart-reduce">-</span><span className="cart-num">0</span> <span className="cart-add">+</span> </td>
                            <td><span className="cart-subtotal">0</span></td>
                            <td><span className="cart-del">Delete</span></td>
                        </tr>
                        <tr className="cart-item">
                            <td><input type="checkbox" checked="checked" className="cart-check" /></td>
                            <td className="cart-txt-left"><span className="cart-name">loading...</span></td>
                            <td><span className="cart-price">0</span></td>
                            <td><span className="cart-reduce">-</span><span className="cart-num">0</span> <span className="cart-add">+</span> </td>
                            <td><span className="cart-subtotal">0</span></td>
                            <td><span className="cart-del">Delete</span></td>
                        </tr>
                        <tr className="cart-bottom">
                            <td colspan="6">
                                <span className="cart-bottom-span">Selected <span className="cart-total-num">0</span> items</span>
                                <span className="cart-bottom-span">Total: <span className="cart-total-price">0</span></span>
                                <span className="cart-bottom-btn">Submit an order</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Cart