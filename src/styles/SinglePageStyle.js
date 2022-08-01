import styled from "styled-components";

export const Container = styled.div`
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
export const MainContainer = styled.div`
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

export const MoviesContent = styled.div`
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

export const Imagedata = styled.div`
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

export const ButtonDiv = styled.div`
  display: flex;
  width: 70%;
  padding: 10px 0;
`;
