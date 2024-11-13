import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addPoketmon, deleteBtn } from "../slice/pokemonSlice";

const StPoketmonBox = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

const StButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 15px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    background-color: #ff6200;
  }
`;

const PoketmonCard = ({ id, korean_name, img_url, onDashboard }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <StPoketmonBox onClick={() => navigate(`/detail/${id}`)}>
      <img src={img_url} alt={korean_name} />
      <p>{korean_name}</p>
      <p>No. {id}</p>
      {!onDashboard ? (
        <StButton
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addPoketmon({ id, korean_name, img_url }));
          }}
        >
          추가
        </StButton>
      ) : (
        <StButton
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteBtn(id));
          }}
        >
          삭제
        </StButton>
      )}
    </StPoketmonBox>
  );
};

export default PoketmonCard;
