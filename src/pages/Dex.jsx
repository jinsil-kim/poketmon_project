// import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PoketmonList from "../components/PoketmonList";
// import { PoketmonProvider } from "../context/PoketmonContext";
// import { PoketmonContext } from "../context/PoketmonContext";

const Dex = () => {
  // const [data, setData] = useState([]);

  // const addPoketmon = (newPoketmon) => {
  //   if (
  //     data.find((poketmon) => poketmon.korean_name === newPoketmon.korean_name)
  //   ) {
  //     alert("이 포켓몬은 이미 추가되었습니다.");
  //   } else if (data.length < 6) {
  //     setData([...data, newPoketmon]);
  //   } else {
  //     alert("포켓몬 슬롯이 가득 찼습니다!!");
  //   }
  // };

  return (
    <div>
      <Dashboard />
      <PoketmonList />
    </div>
  );
};

export default Dex;
