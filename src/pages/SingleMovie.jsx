import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: black;
  padding: 50px;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  align-items: center;
  flex-direction: column;

  button {
    left: 0;
    cursor: pointer;
    padding: 5px 10px;
  }
`;
const MainContainer = styled.div`
  width: 70%;

  border: 1px solid #fff;
  color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 100%;
    height: 300px;
    background-position: center;
    object-fit: contain;
    overflow: hidden;
  }
`;

const MoviesContent = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 50px;
  border: 1px solid #fff;

  h5 {
    color: #fff;
    text-align: center;
  }
`;

const Imagedata = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid #fff;
  cursor: pointer;
  img {
    width: 100%;
    height: 80%;
    overflow: hidden;
    object-fit: cover;
    background-position: center;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 70%;
  padding: 10px 0;
`;

const SingleMovie = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, dec, cast, language, gener, img } = location.state;

  const [movies, setMovies] = React.useState([]);

  //get Sall movies and find similler movies
  const getMovies = () => {
    const getFav = JSON.parse(localStorage.getItem("Movies"));
    setMovies(getFav);
    console.log(getFav);
  };

  const [open, setOpen] = React.useState(false);

  const handleSearch = (filter) => {
    setOpen(!open);
    // setGener(e.target.value);
    console.log(filter);
    const newData = movies.filter((item) => {
      return item.gener === filter;
    });
    setMovies(newData);
    // getMovies();
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Container>
        <MainContainer>
          <img src={img} alt="" />
          <h3>Name : {name}</h3>
          <h3>Details : {dec}</h3>
          <h4>Cast : {cast}</h4>
          <h4>Language : {language}</h4>
          <h4>Gener : {gener} </h4>
        </MainContainer>

        <ButtonDiv>
          <button onClick={() => navigate(-1)}> Back </button>
          <button onClick={() => navigate("/")}> Home </button>
          <button onClick={() => handleSearch(gener)}>Similar movies</button>
        </ButtonDiv>

        {open == true && (
          <MoviesContent>
            {movies?.map((item, index) => (
              <Imagedata onClick={() => navigate("/details", { state: item })}>
                <img src={item.img} alt="" />
                <h5> {item.name} </h5>
              </Imagedata>
            ))}
          </MoviesContent>
        )}
      </Container>
    </>
  );
};

export default SingleMovie;
