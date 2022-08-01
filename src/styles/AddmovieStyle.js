import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  padding: 50px;
  background-color: black;
`;

export const MainContainer = styled.div`
  /* width: 50%; */
  color: #480303;
  background-color: #fff;
  padding: 50px;
  input,
  textarea,
  select {
    width: 100%;
    padding: 6px 20px;
    margin: 5px 0;
    outline: none;
  }

  button {
    width: 100%;
    height: 30px;
    text-align: center;
    margin: 20px 0;
  }
`;