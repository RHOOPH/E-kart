import SearchBar from "./UI/SearchBar"
import Logo from "./UI/Logo"
import LoginButton from "./UI/LoginButton"
import CartButton from "./UI/CartButton"
import MoreButton from "./UI/MoreButton"
import Navbar from "react-bootstrap/Navbar"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1248px;
  color: #fff;
`
const Spacing = styled.div`
  min-width: 126px;
  height: 100%;
`
const Test = () => {
  return (
    <Navbar
      variant="dark"
      bg="primary"
      fixed="top"
      className="justify-content-center"
    >
      <Spacing />
      <Container>
        <Logo />
        <SearchBar />
        <LoginButton />
        <MoreButton />
        <CartButton />
      </Container>
      <Spacing />
    </Navbar>
  )
}

export default Test
