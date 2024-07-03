import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorExtraInfor.scss";
import { LANGUAGES } from "../../../utils";
import { getScheduleDoctorByDate } from "../../../services/userService";
import { FormattedMessage } from "react-intl";

class DoctorExtraInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetailInfo: false,
    };
  }

  async componentDidMount() {
    let { language } = this.props;

    this.setState({});
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
  }

  showHideDetailInfor = (status) => {
    this.setState({ isShowDetailInfo: status });
  };

  render() {
    let { language } = this.props;
    let { isShowDetailInfo } = this.state;
    return (
      <div className="doctor-extra-infor-container">
        <div className="content-up">
          <div className="text-address">ĐỊA CHỈ PHÒNG KHÁM</div>
          <div className="name-clinic">Phòng khám chuyên khoa Da Liễu</div>
          <div className="detail-address">
            207 Phố Huế - Hai Bà Trưng - Hà Nội
          </div>
        </div>
        <div className="content-down">
          {isShowDetailInfo === false && (
            <div className="short-infor">
              GIÁ KHÁM 250.000đ.
              <span
                onClick={() => {
                  this.showHideDetailInfor(true);
                }}
              >
                XEM CHI TIẾT
              </span>
            </div>
          )}

          {isShowDetailInfo === true && (
            <>
              <div className="title-price">GIÁ KHÁM: </div>
              <div className="detail-infor">
                <div className="price">
                  <span className="left">Giá khám</span>
                  <span className="right">250.000đ</span>
                </div>
                <div className="note">
                  Đc ưu tiên khám trước khi đặt qua website
                </div>
              </div>
              <div className="payment">
                Người bệnh có thể thanh toán bằng tiền mặt hoặc quẹt thẻ
              </div>
              <div className="hide-price">
                <span
                  onClick={() => {
                    this.showHideDetailInfor(false);
                  }}
                >
                  Ẩn bản giá
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
