import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Product from "./Product"
import styled from "styled-components"
import { useRef, useState, useEffect } from "react"

const Body = styled(Card.Body)`
  position: relative;
  padding: 0 1rem 1rem 1rem;
`
const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  scroll-behavior: smooth;
  padding-top: 1rem;
`
const Products = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => <Product key={i} />)

const ChevronContainer = styled.div`
  position: absolute;
  height: 100%;
  z-index: 5;
`

const Chevron = styled.div`
  display: flex;
  padding: 30px 10px;
  cursor: pointer;
  background-color: hsla(0, 0%, 100%, 0.98);
  border-radius: 0 4px 4px 0;
  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);
  margin-top: 70px;
`
const ChevronContainerRight = styled(ChevronContainer)`
  right: 0;
`
const ChevronRight = styled(Chevron)`
  border-radius: 4px 0 0 4px;
  box-shadow: -1px 2px 10px -1px rgba(0, 0, 0, 0.3);
`
const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.h4``
const Subtitle = styled.span`
  font-size: 14px;
  color: #6c757d;
  font-weight: 400;
`
const Header = styled(Card.Header)`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
`

const ProductRow = (props) => {
  const scrollingArea = useRef(null)
  const [scroll, setScroll] = useState([0, true])

  const scrollLeftBy = (Amount) => {
    scrollingArea.current.scrollLeft += Amount
  }
  const debounce = (cb, d) => {
    let timer

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(cb, d)
    }
  }

  const handleScroll = debounce(
    () => {
      let display

      if (
        Math.floor(
          scrollingArea.current.scrollWidth - scrollingArea.current.scrollLeft
        ) > scrollingArea.current.offsetWidth
      ) {
        display = true
      } else display = false

      setScroll([scrollingArea.current.scrollLeft, display])
    },

    70
  )
  useEffect(() => {
    if (
      scrollingArea?.current?.scrollWidth <= scrollingArea?.current?.offsetWidth
    )
      setScroll([0, false])
  }, [scrollingArea?.current?.scrollWidth, scrollingArea?.current?.offsetWidth])

  return (
    <Card className="mb-3">
      <Header className="d-flex justify-content-between">
        <CardTitle>
          <Title>{props.title}</Title>
          {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
        </CardTitle>
        <Button variant="primary" className="align-self-center">
          View All
        </Button>
      </Header>
      <Body>
        {scroll[0] !== 0 && (
          <ChevronContainer>
            <Chevron
              onClick={() => scrollLeftBy(-scrollingArea.current.clientWidth)}
            >
              <svg
                id="i-chevron-left"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32"
                height="32"
                fill="none"
                stroke="currentcolor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M20 30 L8 16 20 2" />
              </svg>
            </Chevron>
          </ChevronContainer>
        )}
        {scroll[1] && (
          <ChevronContainerRight>
            <ChevronRight
              onClick={() => scrollLeftBy(scrollingArea.current.clientWidth)}
            >
              <svg
                id="i-chevron-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32"
                height="32"
                fill="none"
                stroke="currentcolor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M12 30 L24 16 12 2" />
              </svg>
            </ChevronRight>
          </ChevronContainerRight>
        )}
        <ProductsContainer ref={scrollingArea} onScroll={handleScroll}>
          {Products}
        </ProductsContainer>
      </Body>
    </Card>
  )
}
export default ProductRow
