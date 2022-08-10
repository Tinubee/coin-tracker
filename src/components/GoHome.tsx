import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeBtn = styled.div`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  justify-content: center;
  a {
    padding: 12px;
    transition: all 0.2s ease-in;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

function GoHome() {
  return (
    <HomeBtn>
      <Link to="/">
        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Go Home
      </Link>
    </HomeBtn>
  );
}

export default GoHome;
