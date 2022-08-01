import React from "react";
import { useNavigate } from "react-router-dom";

import { MdLocalMovies, MdFavorite, MdAddCircle } from "react-icons/md";
import {
  Container,
  Logo,
  MenuItems,
  Navlinks,
  Search,
  Wrapper,
} from "../styles/NavBarStyle";

const NavBar = ({ setPage, setSearch }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Wrapper>
          <Logo onClick={() => navigate("/")}>Movies.Com</Logo>
          <Search>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Name & Gener"
            />
          </Search>
          <MenuItems>
            <Navlinks onClick={() => setPage("landing")}>
              <MdLocalMovies /> Movies
            </Navlinks>
            <Navlinks onClick={() => setPage("fav")}>
              <MdFavorite /> Favourate
            </Navlinks>
            <Navlinks onClick={() => setPage("add")}>
              <MdAddCircle /> Add
            </Navlinks>
          </MenuItems>
        </Wrapper>
      </Container>
    </>
  );
};

export default NavBar;
