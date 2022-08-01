import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  height: 100vh;
  background-color: black;
  color: #fff;
  top: 0;
  position: sticky;
  overflow-y: auto;
  border-right: 1px solid #535353;

  @media screen and (max-width: 680px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding: 20px;
`;
export const Logo = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Search = styled.div`
  width: 100%;
  margin: 20px 0;
  border-radius: 5px;
  background-color: #fff;

  input {
    width: 100%;
    height: 100%;
    padding: 7px 10px;
    outline: none;
  }
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Navlinks = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  padding: 10px 0;
  text-decoration: none;
  color: #fff;
  gap: 10px;
  display: flex;
  align-items: center;
  :hover {
    color: red;
  }
`;
