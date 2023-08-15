import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'REM', sans-serif;
      list-style: none;
  }
`

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`

export const Main = styled.main`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 24px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  transition: 0.3s ease;
  background-color: transparent;
  color: #505050;
  font-size: 20px;
  border: none;
  padding: 6px 16px;
  line-height: 0;
  cursor: pointer;
  font-weight: 700;

  svg {
    margin-right: 8px;
    margin-left: 8px;
  }
`
export const RemoveAndCancel = styled(Button)`
  &:hover {
    color: #c0392b;

    span {
      display: block
    }
  }
  span {
    font-size: 16px;
    display: none;
    color: #c0392b;
  }
`
export const EditAndAll = styled(Button)`
  &:hover {
    color: #2980b9;

    span {
      display: block
    }
  }
  span {
    font-size: 16px;
    display: none;
    color: #2980b9;
  }
  }
`

export const SaveAndChange = styled(Button)`
  &:hover {
    color: #16a085;

    span {
      display: block
    }
  }
  span {
    font-size: 16px;
    display: none;
    color: #16a085;
  }
`
