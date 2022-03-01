import Carousel from "./CarouselSection"
import styled from "styled-components"
import ProductRow from "./ProductRow"

const Container = styled.div`
  margin: 0 auto;
  min-width: 978px;
  max-width: 1680px;
  padding: 1rem;
  width: 100%;
  background-color: #f1f3f6;
`
const RowContainer = styled.div`
  display: flex;
`
const Ad = styled.div`
  margin: 0 0 1rem 1rem;
  background: black;
  flex-shrink: 0;
  width: 250px;
  height: 360px;
`
const AdLeft = styled(Ad)`
  margin: 0 1rem 0 1rem;
`
const Image = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
`

function Content() {
  return (
    <Container>
      <Carousel />
      <RowContainer>
        <ProductRow title="Deals of the Day" />
        <Ad>
          <Image src="https://via.placeholder.com/300x500/FFFFFF" alt="..." />
        </Ad>
      </RowContainer>
      <RowContainer>
        <AdLeft>
          <Image src="https://via.placeholder.com/300x500/FFFFFF" alt="..." />
        </AdLeft>
        <ProductRow title="Best of Appliances" />
      </RowContainer>
      <ProductRow title="Furniture Bestsellers" subtitle="From ₹199" />
      <ProductRow title="Top Offers On" subtitle="Men's Accessories" />
      <ProductRow title="Fashion For Everyone" />
      <ProductRow title="Top Deals on Accessories" />
      <ProductRow title="Men's Footwear" />
      <ProductRow title="Health Care Devices" />
    </Container>
  )
}
export default Content
