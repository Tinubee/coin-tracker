import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";

const ModeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  top: 30px;
  left: 30px;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid ${(props) => props.theme.textColor};
  background-color: white;
  &:hover {
    cursor: pointer;
  }
  svg {
    font-size: 22px;
    background-color: inherit;
    color: black;
  }
`;

function Mode() {
  const modeDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleMode = () => {
    setDarkAtom((prev) => !prev);
    localStorage.setItem("mode", String(!modeDark));
  };
  return (
    <ModeContainer>
      {modeDark ? (
        <Icon onClick={toggleMode}>
          <FontAwesomeIcon icon={faSun} />
        </Icon>
      ) : (
        <Icon onClick={toggleMode}>
          <FontAwesomeIcon icon={faMoon} />
        </Icon>
      )}
    </ModeContainer>
  );
}

export default Mode;
