import { createContext, useState } from "react";
import Swal from "sweetalert2";

//Context 컴포넌트
const PoketmonContext = createContext(null);

//Provider 컴포넌트
const PoketmonProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addPoketmon = (newPoketmon) => {
    if (
      data.find((poketmon) => poketmon.korean_name === newPoketmon.korean_name)
    ) {
      Swal.fire({
        title: "저런...",
        html:`이미 <strong>${newPoketmon.korean_name}</strong> 추가되어 있음!`,
        imageUrl: `${newPoketmon.img_url}`,
        imageWidth: 200,
        imageAlt: "Custom image",
      });
    } else if (data.length < 6) {
      setData([...data, newPoketmon]);
    } else {
      Swal.fire({
        icon: "error",
        title: "이제 그만!",
        text: "슬롯에 포켓몬이 가득 찼습니다!",
      });
    }
  };

  const deleteBtn = (id) => {
    const deletePoketmon = data.filter((singleData) => {
      return singleData.id !== id;
    });
    Swal.fire({
      title: "삭제하시겠습니까?",
      text: "저를 정말 삭제하실건가요?😥",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "지워줘!",
      cancelButtonText: "아니...",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "!",
          text: "당신의 포켓몬이 삭제되었습니다.",
          icon: "success",
        });
        setData(deletePoketmon);
      }
    });
  };

  return (
    <PoketmonContext.Provider
      value={{
        data,
        addPoketmon,
        deleteBtn,
      }}
    >
      {children}
    </PoketmonContext.Provider>
  );
};

export { PoketmonContext, PoketmonProvider };
