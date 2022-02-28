import styled from "styled-components"

const Button = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`
const BtnTxt = styled.div``

const MoreButton = () => {
  return (
    <Button>
      <BtnTxt>More</BtnTxt>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 20"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
          fill="rgba(255,255,255,1)"
        />
      </svg>
    </Button>
  )
}
export default MoreButton
