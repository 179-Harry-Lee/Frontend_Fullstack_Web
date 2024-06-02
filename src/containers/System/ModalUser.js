import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { ModalBody, ModalFooter, ModalHeader, Modal } from "reactstrap";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
  };
  render() {
    console.log("Check chile Props", this.props);
    console.log("Check chile  open modal", this.props.isOpen);
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
          Create User
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="input-container">
              <label>First name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="input-container">
              <label>Last name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="input-container max-wid">
              <label>Address</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            color="primary"
            className="px-3"
            onClick={() => {
              this.toggle();
            }}
          >
            Save
          </button>
          {""}
          <button
            color="secondary"
            className="px-3"
            onClick={() => {
              this.toggle();
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
