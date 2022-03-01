import styled from "styled-components"

const Item = styled.div`
display:flex;
flex-flow:column;
align-items:center;
cursor:pointer
margin:0 .5rem;
width:200px;
flex:0 0 auto;
margin-right: 1rem;
`

const Img = styled.img`
  width: 100%;
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Details = styled.span`
  font-weight: 600;
`
const Discount = styled.span`
  color: #388e3c;
`
const Similar = styled.span`
  color: #6c757d;
`
const colors = ["2C3542", "4C4E60", "FEF5CF", "61A596", "8FC18E"]
const Product = () => {
  return (
    <Item>
      <Img
        src={`https://via.placeholder.com/300/${
          colors[Math.floor(Math.random() * colors.length)]
        }`}
        alt="..."
      />

      <Description>
        <Details>product&nbsp;details</Details>
        <Discount>discount</Discount>
        <Similar>similar&nbsp;products</Similar>
      </Description>
    </Item>
  )
}
export default Product
