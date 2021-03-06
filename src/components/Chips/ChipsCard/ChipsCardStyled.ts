import { RiFilterLine } from "react-icons/ri";
import { BsFilterLeft } from "react-icons/bs"
import styled from "styled-components";

export const Item = styled.div `
 display: flex;
 align-items: center;
 margin-right: 8px;
 border-radius: 16px;
 border: solid 1px #e5e7e9; 
 padding: 6px 12px;
 cursor: pointer;
`

export const WrapItem =styled.div `
 display: flex;
`

export const IconFilter = styled(RiFilterLine) `
 margin-right: 8px ;
`

export const IconSort = styled(BsFilterLeft) `
   margin-right: 8px ;
`