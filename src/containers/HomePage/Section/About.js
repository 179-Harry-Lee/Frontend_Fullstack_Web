import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
    //fire redux event : actions
  };

  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">Giới thiệu về Website</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="700px"
              height="400px"
              src="https://www.youtube.com/embed/abPmZCZZrFA"
              title="SƠN TÙNG M-TP | ĐỪNG LÀM TRÁI TIM ANH ĐAU | OFFICIAL MUSIC VIDEO"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Hãy Đặt Link Ở Đây Chung Tôi Rất Uy Tính
              <a href="https://vivienm.lnk.to/DLTTAD">
                https://vivienm.lnk.to/DLTTAD
              </a>
              💍❤️‍🩹🧩
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
