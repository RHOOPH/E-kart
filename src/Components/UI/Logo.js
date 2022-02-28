import styled from "styled-components"

const LogoBox = styled.div`
  display: flex;
  min-width: 137px;
  justify-content: flex-end;
  margin-right: 1rem;
`
const LogoName = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  align-self: center;
`
const Logo = () => {
  return (
    <LogoBox>
      <LogoName>E-kart</LogoName>
    </LogoBox>
  )
}
export default Logo
