import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  padding: 5 50px;
  justify-content: center;
  overflow-y: auto;
  align-items: center;

  li {
    list-style: none;
    cursor: pointer;
    color: #fff;
    padding: 20px;
  }
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
  bottom: 2%;

  button {
    cursor: pointer;
    color: red;
    background-color: transparent;
    border: none;
    font-size: 40px;
  }
`;

export const MovieTitle = styled.h2`
  text-align: center;
  word-break: keep-all;
  font-size: 0.9rem;
  color: red;
  margin-top: 5px;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: ${(props) => (props.open ? "block" : "none")};
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 80px;
  background-color: #141414;
  color: #fff;
  margin: 20px 0;
  position: sticky;
  top: 0;
  z-index: 111;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 0 20px;
`;

export const SelectLanguage = styled.div`
  display: flex;
  align-items: center;
  select {
    padding: 10px;
    border: none;
    outline: none;
  }
`;
