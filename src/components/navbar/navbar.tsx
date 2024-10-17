import {
  Container,
  LogoWrapper,
  NavMiddle,
  NavRight,
  Navlink,
  SearchWrapper,
} from "../styles/navbarStyle";
const logo = require("../../assets/images/logo-icon.png");
const search = require("../../assets/images/search-icon.png");

let navbarTitle: string = "Travel Pro";

const Navbar = () => {
  return (
    <Container>
      <Navlink to="/">
        <LogoWrapper>
          <img
            style={{
              width: "55px",
              height: "55px",
              top: "32px",
              left: "40px",
              gap: "0px",
              opacity: "0px",
            }}
            src={logo}
            alt="logo-img"
          />
          {navbarTitle}
        </LogoWrapper>
      </Navlink>
      <NavMiddle>
        <Navlink to="/">
          <p>Home</p>
        </Navlink>
        <Navlink to="/about-us">
          <p>About Us</p>
        </Navlink>
        <Navlink to="/destinations">
          <p>Destinations</p>
        </Navlink>
        <Navlink to="/tours">
          <p>Tours</p>
        </Navlink>
        <Navlink to="/blog">
          <p>Blog</p>
        </Navlink>
        <Navlink to="/blog">
          <p>Blog</p>
        </Navlink>
        <Navlink to="/contacts">
          <p>Contacts</p>
        </Navlink>
      </NavMiddle>
      <NavRight>
        <SearchWrapper>
          <img src={search} alt="search-img" />
        </SearchWrapper>
        <p>+82(10)2828 1010</p>
      </NavRight>
    </Container>
  );
};

export default Navbar;
