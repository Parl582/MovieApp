import React from "react";
import styled from "styled-components";
import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
import Addmovies from "./Addmovies";
import Fav from "./Favrate";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Home = () => {
  const [page, setPage] = React.useState("landing");
  const [search, setSearch] = React.useState("");

  return (
    <>
      <Wrapper>
        <NavBar
          page={page}
          setPage={setPage}
          search={search}
          setSearch={setSearch}
        />
        {page === "landing" && <Landing search={search} />}
        {page === "fav" && <Fav search={search} />}
        {page === "add" && <Addmovies />}
      </Wrapper>
    </>
  );
};

export default Home;
