import Carousel from "./CarouselSection"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  min-width: 978px;
  max-width: 1680px;
  padding: 1rem;
  width: 100%;
  background-color: #f1f3f6;
`
function Content() {
  return (
    <Container>
      <Carousel />
    </Container>
  )
}
export default Content
