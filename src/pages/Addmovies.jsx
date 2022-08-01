import React, { useEffect } from "react";
import { Container, MainContainer } from "../styles/AddmovieStyle";


const Alldata = () => {
  let locatData = localStorage.getItem("Movies");
  if (locatData) {
    return JSON.parse(localStorage.getItem("Movies"));
  }
  return [];
};

const Addmovies = () => {
  const [name, setname] = React.useState("");
  const [gener, setGener] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [cast, setCast] = React.useState("");
  const [des, setDes] = React.useState("");
  const [img, setImg] = React.useState();
  const [video, setVideo] = React.useState([]);

  // change image to dataUrl and save in localStorage
  const ImageSend = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      setImg(e.target.result);
    };
  };

  // create an object

  let obj = {
    name: name,
    gener: gener,
    language: language,
    cast: cast,
    des: des,
    img: img,
    video: video,
  };

  const [addmovies, setaddmovies] = React.useState(Alldata());

  const AdMovies = () => {
    setaddmovies((prev) => {
      return [...prev, obj];
    });
  };
  useEffect(() => {
    localStorage.setItem("Movies", JSON.stringify(addmovies));
  }, [addmovies]);

  return (
    <>
      <Container>
        <MainContainer>
          <h4>Add A Novie</h4>
          <span>Name</span>
          <input type="text" onChange={(e) => setname(e.target.value)} />
          <span> description </span>
          <textarea onChange={(e) => setDes(e.target.value)} />
          <span>cast</span>
          <input type="text" onChange={(e) => setCast(e.target.value)} />
          <span>Genre</span>
          <select onChange={(e) => setGener(e.target.value)}>
            <option value="">Select</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
            <option value="si-fi">Sci-Fi</option>
            <option value="drama">Drama</option>
          </select>

          <span>language</span>
          <select onChange={(e) => setLanguage(e.target.value)}>
            <option value="null">select a language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          <span>Image</span>
          <input type="file" accept="image/*" onChange={ImageSend} />
          <span>Movie</span>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
          <button onClick={AdMovies}>Save</button>
        </MainContainer>
      </Container>
    </>
  );
};

export default Addmovies;
