const stateDefault = {
  dsGheDangChon: [
    // { soGhe: "A1", gia: 1000 },
  ],
};

export const BaiTapDatVePhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      let dsGheDangChonUpdate = [...state.dsGheDangChon];

      //kiem tra ghe co trong ds dang chon hay chua?
      let indexGheDangChon = dsGheDangChonUpdate.findIndex(
        (ghe) => ghe.soGhe === action.ghe.soGhe
      );
      if (indexGheDangChon !== -1) {
        dsGheDangChonUpdate.splice(indexGheDangChon, 1);
      } else {
        dsGheDangChonUpdate.push(action.ghe);
      }

      state.dsGheDangChon = dsGheDangChonUpdate;

      return { ...state };
    }
    case "HUY_GHE": {
      let dsGheDangChonUpdate = [...state.dsGheDangChon];

      dsGheDangChonUpdate = dsGheDangChonUpdate.filter(
        (ghe) => ghe.soGhe !== action.soGhe
      );

      //   let indexGheDangChon = dsGheDangChonUpdate.findIndex(
      //     (ghe) => ghe.soGhe === action.soGhe
      //   );

      //   if (indexGheDangChon !== -1) {
      //     dsGheDangChonUpdate.splice(indexGheDangChon, 1);
      //   }

      state.dsGheDangChon = dsGheDangChonUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
