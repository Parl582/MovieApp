import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  padding: 50px;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const MovieWrapper = styled.div`
  width: 250px;
  height: 350px;
  background-color: #141414;
  border: 1px solid;
  margin: 6px 5px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 680px) {
    width: 150px;
    height: 200px;
  }
  @media screen and (max-width: 380px) {
    width: 90%;
    height: 300px;
  }
`;

export const PosterWrapper = styled.div`
  width: 100%;
  height: 90%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    background-position: center;
    object-fit: cover;
  }
`;

export const Details = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10%;
  button {
    cursor: pointer;
  }
`;

export const MovieTitle = styled.h2`
  text-align: center;
  word-break: keep-all;
  font-size: 0.9rem;
  color: red;
  margin-top: 5px;
`;