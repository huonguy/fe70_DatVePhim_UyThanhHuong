import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/actions/BaiTapDatVePhimActions";
import { DAT_GHE } from "../redux/types/BaiTapDatVePhimType";

class HangGhe extends Component {
  renderGhe = () => {
    let { soHangGhe, hangGhe } = this.props;
    let cssGheDaDat = "";
    let disable = false;

    //thay doi css cho hang ghe dau tien
    if (soHangGhe === 0) {
      return hangGhe.danhSachGhe.map((ghe, index) => {
        return (
          <button key={index} className="rowNumber">
            {index + 1}
          </button>
        );
      });
    } else {
      return hangGhe.danhSachGhe.map((ghe, index) => {
        //thay doi css cho ghe da dat
        if (ghe.daDat) {
          cssGheDaDat = "gheDuocChon";
          disable = true;
        }

        //thay doi css cho ghe dang chon
        let cssGheDangChon = "";
        let indexGheDangChon = this.props.dsGheDangChon.findIndex(
          (gheDangChon) => gheDangChon.soGhe === ghe.soGhe
        );
        if (indexGheDangChon !== -1) {
          cssGheDangChon = "gheDangChon";
        }

        return (
          <button
            key={index}
            disabled={disable}
            className={`ghe ${cssGheDaDat} ${cssGheDangChon}`}
            onClick={() => {
              this.props.dispatch(datGheAction(ghe));
            }}
          >
            {index + 1}
          </button>
        );
      });
    }
  };

  render() {
    console.log("props", this.props.dsGheDangChon);
    return (
      <div className="firstChar">
        {this.props.hangGhe.hang}

        {this.renderGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dsGheDangChon: state.BaiTapDatVePhimReducer.dsGheDangChon,
});

export default connect(mapStateToProps)(HangGhe);
