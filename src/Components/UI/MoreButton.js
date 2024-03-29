import styled from "styled-components"

const Button = styled.div`
  position: relative;
  align-self: center;
  cursor: pointer;
  flex: 0 0 auto;
`

const MoreButton = () => {
  return (
    <Button>
      <span>More</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
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
