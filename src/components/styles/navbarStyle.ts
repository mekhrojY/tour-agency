import { Link } from "react-router-dom";
import { styled } from "styled-components";

// const bgImage = require();

export const Container = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  cursor: pointer;
  margin-bottom: 0;
`;
export const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Playfair Display;
  font-size: 45px;
  font-weight: 700;
  line-height: 59.99px;
  text-align: left;

  width: 283px;
  height: 62px;
  top: 25px;
  left: 40px;
  gap: 0px;
  opacity: 0px;
`;

export const SearchWrapper = styled.div`
  width: 30px;
  height: 30px;
  top: 48px;
  left: 1555px;
  gap: 0px;
  opacity: 0px;
  color: white;
`;

export const NavMiddle = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-around;

  p {
    color: var(--text, #373737);

    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
export const NavRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Navlink = styled(Link)`
  color: black;
  font-weight: 600;
  text-decoration: none;
`;

interface BgWrapperProps {
    $bgImage: string;
    fullHeight?: boolean; // optional prop for full height
  }

export const BgWrapper = styled.div<BgWrapperProps>`
  margin-top: 0;
  position: relative;
  height: ${(props) => (props.fullHeight ? '1008px' : '574px')}; /* Adjust based on your navbar height */
  /* height: calc(100vh - 60px); Adjust based on your navbar height */
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  width: 100%;

  /* background-position: center; */
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
  /* height: 700px; */
  /* width: 100%; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* flex-direction: column; */

  color: white;

  h1 {
    font-size: 70px;
  }
  h2 {
    font-size: 27px;
  }
  p {
    font-size: 18px;
  }
`;
