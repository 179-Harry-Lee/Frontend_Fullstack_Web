import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers } from "../../services/userService";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }

  async componentDidMount() {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState(
        {
          arrUsers: response.users,
        },
        () => {
          console.log("Check state user  ", this.state.arrUsers);
        }
      );
      console.log("Check state user 1 ", this.state.arrUsers);
    }
  }

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        <div className="title text-center">Daniel Dung</div>
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <tr>
              <th>Email</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Address</th>
              <th class="w-25">Actions</th>
            </tr>

            {arrUsers &&
              arrUsers.map((item, index) => {
                console.log(" check map", item, index);
                return (
                  <tr key={index}>
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>
                      <button className="btn-edit">
                        <i class="fas fa-pencil-alt"></i>
                      </button>
                      <button className="btn-delete">
                        <i class="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
