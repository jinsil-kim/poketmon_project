import { createContext, useState } from "react";

//Context 컴포넌트
const PoketmonContext = createContext(null);

//Provider 컴포넌트
const PoketmonProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addPoketmon = (newPoketmon) => {
    if (
      data.find((poketmon) => poketmon.korean_name === newPoketmon.korean_name)
    ) {
      alert("이 포켓몬은 이미 추가되었습니다.");
    } else if (data.length < 6) {
      setData([...data, newPoketmon]);
    } else {
      alert("포켓몬 슬롯이 가득 찼습니다!!");
    }
  };
  
  const deleteBtn = (id) => {
    const deletePoketmon = data.filter((singleData) => {
      return singleData.id !== id;
    });
    setData(deletePoketmon);
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
