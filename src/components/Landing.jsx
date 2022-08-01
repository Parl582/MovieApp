import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import data from "../data.json";

import { MdOutlineFavorite } from "react-icons/md";
import {
  Container,
  Details,
  HeaderContainer,
  MainContainer,
  MovieTitle,
  MovieWrapper,
  PosterWrapper,
  SelectLanguage,
} from "../styles/LandingStyle";

//get Favorite data from localstorage

const GetLocatdata = () => {
  let locatdata = localStorage.getItem("Favorite");
  if (locatdata) {
    return JSON.parse(localStorage.getItem("Favorite"));
  }
  return [];
};

//get data from localstorage
const GetLocatMovie = () => {
  let locatdata = localStorage.getItem("Movie");
  if (locatdata) {
    return JSON.parse(localStorage.getItem("Movie"));
  }
  return [];
};

const Landing = ({ search }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = React.useState(GetLocatMovie());
  const [datas, setDatas] = React.useState(GetLocatdata());
  const [language, setLanguage] = React.useState("");

  //send data to localstorage to store favaurate movies
  const dataSend = (data) => {
    setDatas((prev) => {
      return [...prev, data];
    });
  };

  // get movies from localStorage and set to state

  const getMovies = () => {
    const getFav = JSON.parse(localStorage.getItem("Movies"));
    setMovies(getFav);
    console.log(getFav);
  };
  // search by language

  console.log(language);
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
    const newData = movies.filter((item) => {
      return item.language === e.target.value;
    });
    setMovies(newData);
  };

  useEffect(() => {
    getMovies();
    localStorage.setItem("Favorite", JSON.stringify(datas));
  }, [datas]);

  return (
    <>
      <Container>
        <HeaderContainer>
          <SelectLanguage>
            <select onChange={handleLanguage}>
              <option value="">Select Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </SelectLanguage>
        </HeaderContainer>

        <MainContainer>
          {movies
            ?.filter(
              (item) =>
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.gener.toLowerCase().includes(search)
            )
            .map((item, index) => (
              <MovieWrapper key={index}>
                <PosterWrapper
                  onClick={() => navigate("/details", { state: item })}
                >
                  <img src={item.img} alt="" />
                </PosterWrapper>
                <MovieTitle>{item.name}</MovieTitle>
                <Details>
                  <button onClick={() => dataSend(item)}>
                    <MdOutlineFavorite />
                  </button>
                </Details>
              </MovieWrapper>
            ))}
        </MainContainer>
      </Container>
    </>
  );
};

export default Landing;
