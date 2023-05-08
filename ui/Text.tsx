import React from "react";
import styled from "styled-components/native";

interface IText {
  children?: React.ReactNode;
  textAlign?: string;
  color?: string;
  fontSize?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

export default function Text({ children, ...rest }: IText) {
  return <TextUI {...rest}>{children}</TextUI>;
}

const TextUI = styled.Text<IText>`
  color: ${(props) => props.color || "#999999"};
  text-align: ${(props) => props.textAlign || "left"};
  font-family: "Poppins-Regular";
  font-size: ${(props) => props.fontSize || "16px"};
  margin-top: ${(props => props.marginTop || "0px")};
  margin-bottom: ${(props => props.marginBottom || "0px")};
  margin-right: ${(props => props.marginRight || "0px")};
  margin-left: ${(props => props.marginLeft || "0px")};
`;
