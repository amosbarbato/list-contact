import styled from "styled-components";

export const Header = styled.header`
  margin-bottom: 40px;
  background-color: #eee;
  padding: 16px;

  h1 {
    margin-top: 50px;
    font-weight: 700;
  }

  h3 {
    margin-top: 24px;
    font-weight: 300;
  }
`
export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 16px;
  margin-bottom: 40px;
`
export const Input = styled.input`
  font-size: 13px;
  width: 100%;
  padding: 8px 16px;
  outline: none;
`
export const ActionsHead = styled.div`
  display: flex;
`
