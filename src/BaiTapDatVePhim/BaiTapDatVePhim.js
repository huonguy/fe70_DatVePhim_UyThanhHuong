import React, { Component } from "react";
import "./BaiTapDatVePhim.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import dsGheData from "../data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BaiTapDatVePhim extends Component {
  renderHangGhe = () => {
    return dsGheData.map((item, index) => {
      return <HangGhe key={index} soHangGhe={index} hangGhe={item} />;
    });
  };

  render() {
    return (
      <div className="bookingMovie">
        <div
          style={{
            backgroundImage: "url(./img/bgmovie.jpg)",
            width: "100%",
            height: "100%",
            backgroundSize: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.7)",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="container-fluid">
              <div className="row">
                <div className="col-8 text-center">
                  <h3 className="text-warning">
                    ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                  </h3>
                  <p className="text-light m-0">Màn hình</p>
                  <div style={{ margin: "0 auto", width: "80%" }}>
                    <div className="screen mb-3"></div>
                    {this.renderHangGhe()}
                  </div>
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
