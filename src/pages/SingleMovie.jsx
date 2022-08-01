import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ButtonDiv, Container, Imagedata, MainContainer, MoviesContent } from "../styles/SinglePageStyle";


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
