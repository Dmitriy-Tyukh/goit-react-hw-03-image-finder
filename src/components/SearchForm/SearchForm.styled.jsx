
import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import Button from '@mui/material/Button';

export const FormStyle = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`

export const FieldStyle = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`

export const ButtonSearch = styled(Button)`
  padding-left:32px;
  font-weight: bold;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  color: black;
  background-color: silver;
  
  &:hover {
    background-color: grey;
    color: #fff;
  }
`;
export const LabelButton = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`
