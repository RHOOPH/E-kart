import { useState } from "react"
import styled from "styled-components"

const StyledForm = styled.div`
  display: flex;
  border-radius: 0.25rem;
  background-color: #fff;
  min-width: 330px;
  max-width: 560px;
  padding: 0;
  flex-grow: 1;
  align-items: center;
  margin-right: auto;
`
const StyledInput = styled.input`
  border-radius: 0.25rem 0 0 0.25rem;
  border: none;
  padding: 0 0 0 1rem;
  flex-grow: 1;
  &:focus-visible,
  &:focus {
    outline: none;
  }
`
const StyledButton = styled.div`
  border-radius: 0 0.25rem 0.25rem 0;
  cursor: pointer;
  padding: 0 1rem 0 0;
`

const SearchBar = () => {
  const [searchString, setSearchString] = useState("")

  const handleChange = (e) => {
    setSearchString(e.target.value)
  }
  return (
    <StyledForm>
      <StyledInput
        placeholder="Search for products, brands and more"
        name="search"
        onChange={handleChange}
        value={searchString}
        type="text"
        autoComplete="off"
      />

      <StyledButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
            fill="#757575"
          />
        </svg>
      </StyledButton>
    </StyledForm>
  )
}
export default SearchBar
