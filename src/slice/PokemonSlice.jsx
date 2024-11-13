import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: [],
  reducers: {
    addPoketmon: (state, action) => {
      console.log(1);
      if (
        state.find(
          (poketmon) => poketmon.korean_name === action.payload.korean_name
        )
      ) {
        Swal.fire({
          title: "저런...",
          html: `이미 <strong>${action.payload.korean_name}</strong> 추가되어 있음!`,
          imageUrl: `${action.payload.img_url}`,
          imageWidth: 200,
          imageAlt: "Custom image",
        });
        return;
      } else if (state.length < 6) {
        toast.info(`${action.payload.korean_name} 추가 완료!`);
        state.push(action.payload);
        return;
      } else {
        Swal.fire({
          icon: "error",
          title: "이제 그만!",
          text: "슬롯에 포켓몬이 가득 찼습니다!",
        });
      }
    },
    deleteBtn: (state, action) => {
      toast.info(`삭제 완료!`);
      return state.filter((singleData) => singleData.id !== action.payload);
    },
  },
});

export const { addPoketmon, deleteBtn } = pokemonSlice.actions;
export default pokemonSlice.reducer;
