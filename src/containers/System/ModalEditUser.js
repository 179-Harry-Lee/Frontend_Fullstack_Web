import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { ModalBody, ModalFooter, ModalHeader, Modal } from "reactstrap";
import { emitter } from "../../utils/emitter";
import _ from "lodash";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }

  componentDidMount() {
    let user = this.props.currentUser; // {}
    //let {currentUser} = this.props
    if (user && !_.isEmpty(user)) {
      console.log("user:", user);
      this.setState({
        id: user.id,
        email: user.email,
        password: "harcode", // de cho ko trong
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
      });
    }
  }

  toggle = () => {
    this.props.toggleFromParent();
  };

  cancelButton = () => {
    this.props.cancelButton();
  };

  cancelEditButton = () => {
    this.props.cancelEditButton();
  };

  handleOnchangeInput = (event, id) => {
    //Bad code ==> modifile xong ms copy
    // this.state[id] = event.target.value;

    // this.setState(
    //   {
    //     ...this.state,
    //   },
    //   () => {
    //     console.log("check Bad code:",this.state);
    //   }
    // );

    //Good Code => copy xong moi modifile
    let copyState = { ...this.state };
    copyState[id] = event.target.value;

    this.setState({
      ...copyState,
    });
  };

  checkValidInput = () => {
    let isValid = true;

    let arrInput = ["email", "password", "firstName", "lastName", "address"];

    for (let i = 0; i < arrInput.length; i++) {
      // console.log("check inside loop", this.state[arrInput[i]], arrInput[i]);
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter:" + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleAddNewUser = () => {
    //validate: check du lieu dung hay sai
    let isValid = this.checkValidInput();
    if (isValid === true) {
      //call API:
      this.props.createNewUser(this.state);
    }
  };

  handleSaveUser = () => {
    //validate: check du lieu dung hay sai
    let isValid = this.checkValidInput();
    if (isValid === true) {
      //call API:
      this.props.editUser(this.state);
    }
  };
  render() {
    // console.log("Check chile Props", this.props);
    // console.log("Check chile  open modal", this.props.isOpen);
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className={"modal-user-container"}
        size="lg"
        centered
      >
        <ModalHeader
          toogle={() => {
            this.toggle();
          }}
        >
          Edit User
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "email");
                }}
                value={this.state.email}
                disabled
              />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "password");
                }}
                value={this.state.password}
                disabled
              />
            </div>
            <div className="input-container">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "firstName");
                }}
                value={this.state.firstName}
              />
            </div>
            <div className="input-container">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "lastName");
                }}
                value={this.state.lastName}
              />
            </div>
            <div className="input-container max-wid">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "address");
                }}
                value={this.state.address}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            color="primary"
            className="px-3"
            onClick={() => {
              this.handleSaveUser();
            }}
          >
            Save changes
          </button>
          {""}
          <button
            color="secondary"
            className="px-3"
            onClick={() => {
              this.cancelEditButton();
            }}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
