import React, { Component } from "react";
import { Tabs, Tab, Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../context/authContext'

class Profile extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state = {
            pageLoading: true,
            userData: null,
            isEdit: false,
            userRoles: ''
        };
    }

    async componentDidMount() {
        const { isAuthenticated } = this.context;
        if (!isAuthenticated) {
            this.props.history.push('/login')
        }
        const file = await import('../../constants/json/get-user-profile');
        this.setState({ userData: file.default });
        this.setState({ userRoles: this.getRoles(file.default["Roles"]) })
        console.log(this.state.userData);

        if(this.props.history?.location?.param === 'edit') {
            this.setState({ isEdit: true });
        }
    }

    getRoles(data) {
        let roleString = '';
        if (data && Array.isArray(data)) {
            roleString = data.map(function (elem) {
                return elem.Name;
            }).join(", ");
        }
        return roleString;
    }

    editProfile = () => {
        this.setState(p => ({ isEdit: !p.isEdit }));
    }

    updateUserData() {
        return true;
    }

    render() {
        const { userDetails } = this.context;
        return (
            <div className="container bootstrap snippet">
                <div className="row">
                    <div className="col-sm-10">
                        <h1>{this.state.userData?.FullName}</h1>
                    </div>
                    <div className="col-sm-2">
                        {this.state.isEdit
                            ?
                            <React.Fragment>
                                <Button variant="success" type="submit" onClick={this.updateUserData}>Update</Button>
                                <Button variant="danger" type="button" onClick={this.editProfile}>Cancel</Button>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Button variant="primary" type="submit" onClick={this.editProfile}>Edit Profile</Button>
                            </React.Fragment>
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="text-center">
                            <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
                            <h6>Upload a different photo...</h6>
                            <input type="file" className="text-center center-block file-upload" />
                        </div>

                        <div className="panel panel-default">
                            <div className="panel-heading">Website <i className="fa fa-link fa-1x"></i></div>
                            <div className="panel-body"><a href="javascript:void(0)">facebook.com</a></div>
                        </div>


                        <ul className="list-group">
                            <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x"></i></li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Shares</strong></span> 125</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Likes</strong></span> 13</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Posts</strong></span> 37</li>
                            <li className="list-group-item text-right"><span className="pull-left"><strong>Followers</strong></span> 78</li>
                        </ul>

                        <div className="panel panel-default">
                            <div className="panel-heading">Social Media</div>
                            <div className="panel-body">
                                <i className="fa fa-facebook fa-2x"></i> <i className="fa fa-github fa-2x"></i> <i
                                    className="fa fa-twitter fa-2x"></i> <i className="fa fa-pinterest fa-2x"></i> <i
                                        className="fa fa-google-plus fa-2x"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-9">
                        <Form onSubmit={this.handleSubmit}>
                            {!this.state.isEdit
                                ?
                                <React.Fragment>
                                    <Form.Group as={Row} className="mb-3" controlId="formFullName">
                                        <Form.Label column sm="2">
                                            Full Name
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={userDetails?.full_name} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formFullName">
                                        <Form.Label column sm="2">
                                            Email
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={userDetails?.email} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="gender">
                                        <Form.Label column sm="2">
                                            Gender
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={userDetails?.gender} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="fomDob">
                                        <Form.Label column sm="2">
                                            DOB
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={userDetails?.dob} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formstreetaddress1">
                                        <Form.Label column sm="2">
                                            Street Address 1
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={userDetails?.StreetAddress1} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formstreetaddress2">
                                        <Form.Label column sm="2">
                                            Street Address 2
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={userDetails?.StreetAddress2} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formCity">
                                        <Form.Label column sm="2">
                                            City
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={userDetails?.city} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formState">
                                        <Form.Label column sm="2">
                                            State
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={userDetails?.state} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formZip">
                                        <Form.Label column sm="2">
                                            Zip
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={userDetails?.zip} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formRole">
                                        <Form.Label column sm="2">
                                            Role
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={this.state.userRoles} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Username
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={this.state.userData?.Username} />
                                        </Col>
                                    </Form.Group>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <Form.Group as={Row} className="mb-3" controlId="formFullName">
                                        <Form.Label column sm="2">
                                            Full Name
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext defaultValue={this.state.userData?.FullName} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formFullName">
                                        <Form.Label column sm="2">
                                            Email
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext defaultValue={this.state.userData?.Email} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="gender">
                                        <Form.Label column sm="2">
                                            Gender
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={this.state.userData?.Gender} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="fomDob">
                                        <Form.Label column sm="2">
                                            DOB
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={this.state.userData?.Dob} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formstreetaddress1">
                                        <Form.Label column sm="2">
                                            Street Address 1
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext defaultValue={this.state.userData?.StreetAddress1} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formstreetaddress2">
                                        <Form.Label column sm="2">
                                            Street Address 2
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext defaultValue={this.state.userData?.StreetAddress2} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formCity">
                                        <Form.Label column sm="2">
                                            City
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext defaultValue={this.state.userData?.City} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formState">
                                        <Form.Label column sm="2">
                                            State
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext defaultValue={this.state.userData?.State} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formZip">
                                        <Form.Label column sm="2">
                                            Zip
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext defaultValue={this.state.userData?.Zip} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formRole">
                                        <Form.Label column sm="2">
                                            Role
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={this.state.userRoles} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Username
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control plaintext readOnly defaultValue={this.state.userData?.Username} />
                                        </Col>
                                    </Form.Group>
                                </React.Fragment>
                            }

                        </Form>
                        <Form onSubmit={this.handleSubmit}>

                            {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Password
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formDob">
                                <Form.Label column sm="2">
                                    DOB:
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="date" placeholder="Password" />
                                </Col>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button> */}
                        </Form>
                    </div>


                </div>
            </div>
        );
    }
}

export default Profile;
