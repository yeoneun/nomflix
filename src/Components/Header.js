import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  display: flex;
  height: 50px;
  border-bottom: solid 3px ${(props) => (props.current ? "red" : "transparent")};
  transition: 0.2s;
`;
const Slink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default withRouter(({ location: { pathname } }) => (
  <Header className="nav">
    <List>
      <Item current={pathname === "/"}>
        <Slink to="/">Movies</Slink>
      </Item>
      <Item current={pathname === "/tv"}>
        <Slink to="/tv">TV</Slink>
      </Item>
      <Item current={pathname === "/search"}>
        <Slink to="/search">Search</Slink>
      </Item>
    </List>
  </Header>
));
