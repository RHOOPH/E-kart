import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from "./Components/NavigationBar"
import styled from "styled-components"

const Body = styled.div`
  background-color: #f1f3f6;
`
function App() {
  return (
    <Body className="App">
      <NavigationBar />
    </Body>
  )
}
export default App
