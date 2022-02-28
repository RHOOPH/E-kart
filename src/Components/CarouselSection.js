import { useState } from "react"
import styled from "styled-components"
import Carousel from "react-bootstrap/Carousel"

const StyledCarousel = styled(Carousel)`
  margin-bottom: 1rem;
`
const StyledItem = styled(Carousel.Item)`
  height: 18rem;
`

const CarouselSection = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <StyledCarousel activeIndex={index} onSelect={handleSelect}>
      <StyledItem>
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#777" />
        </svg>
      </StyledItem>
      <StyledItem>
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#444" />
        </svg>
      </StyledItem>
      <StyledItem>
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#999" />
        </svg>
      </StyledItem>
    </StyledCarousel>
  )
}
export default CarouselSection
