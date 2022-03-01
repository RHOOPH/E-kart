import SearchBar from "./UI/SearchBar"
import Logo from "./UI/Logo"
import LoginButton from "./UI/LoginButton"
import CartButton from "./UI/CartButton"
import MoreButton from "./UI/MoreButton"
import Navbar from "react-bootstrap/Navbar"
import styled from "styled-components"
import data from "../Assets/CategoriesData.json"

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
const FillerDiv = styled.div`
  height: 3.45rem;
`
const BottomContainer = styled(Container)`
  color: #000;
  justify-content: space-between;
`
const Category = styled.span`
  cursor: pointer;
  flex-shrink: 0;
`
const category = data.map((obj) => {
  return (
    <Category key={obj.name}>
      {obj.name}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" />
      </svg>
    </Category>
  )
})

const NavigationBar = () => {
  return (
    <>
      <FillerDiv />
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
      <Navbar variant="light" bg="light" className="justify-content-center">
        <BottomContainer>{category}</BottomContainer>
      </Navbar>
    </>
  )
}

export default NavigationBar
