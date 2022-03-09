import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/BaiTapDatVePhimActions";

class ThongTinDatGhe extends Component {
  render() {
    let { dsGheDangChon } = this.props;
    return (
      <div className="col-4">
        <h3 className="text-light mt-3">DANH SÁCH GHẾ BẠN CHỌN</h3>
        <div>
          <button className="gheDuocChon"></button>
          <span className="text-light">Ghế đã đặt</span>
        </div>
        <div>
          <button className="gheDangChon"></button>
          <span className="text-light">Ghế đang chọn</span>
        </div>
        <div>
          <button className="ghe ml-0"></button>
          <span className="text-light">Ghế chưa đặt</span>
        </div>
        <table className="table" border="2">
          <thead>
            <tr className="text-light">
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody className="text-warning">
            {dsGheDangChon.map((ghe, index) => {
              return (
                <tr>
                  <td>{ghe.soGhe}</td>
                  <td>{ghe.gia}</td>
                  <td>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.props.dispatch(huyGheAction(ghe.soGhe));
                      }}
                    >
                      <i
                        class="fas fa-times fa-2x"
                        style={{ color: "red" }}
                      ></i>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-light">Tổng tiền</td>
              <td className="text-warning">
                {dsGheDangChon.reduce((tongTien, ghe, index) => {
                  return (tongTien += ghe.gia);
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dsGheDangChon: state.BaiTapDatVePhimReducer.dsGheDangChon,
  };
};
export default connect(mapStateToProps)(ThongTinDatGhe);
