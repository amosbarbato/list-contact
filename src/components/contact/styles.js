import styled from "styled-components";

export const Card = styled.div`
  background-color: #e9e9e9;
  color: #505050;
  padding: 10px 8px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
`
export const Icon = styled.div`
  font-size: 10em;
  line-height: 1px;
`
export const CardInfo = styled.ul`
  text-align: center;
  padding-top: 5px;
`
export const CardName = styled.h3`
  color: #404040;
  font-size: 18px;
  font-weight: 600;
`
export const CardPhone = styled.p`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
`
export const CardEmail = styled.p`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
`
export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

export const Separator = styled.div`
  border-left: 1px solid #ccc;
  height: 37px;
`
