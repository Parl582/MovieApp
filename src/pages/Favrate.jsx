import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  MainContainer,
  MovieTitle,
  MovieWrapper,
  PosterWrapper,
} from "../styles/FavStyle";

const Fav = ({ search }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = React.useState([]);

  // get Favorite from localStorage and set to state
  const getMovies = () => {
    const getFav = JSON.parse(localStorage.getItem("Favorite"));
    setMovies(getFav);
    console.log(getFav);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Container>
        <MainContainer>
          {movies
            ?.filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, index) => (
              <MovieWrapper
                key={index}
                onClick={() => navigate("/details", { state: item })}
              >
                <PosterWrapper>
                  <img src={item.img} alt="" />
                </PosterWrapper>
                <MovieTitle>{item.name}</MovieTitle>
              </MovieWrapper>
            ))}
        </MainContainer>
      </Container>
    </>
  );
};

export default Fav;
