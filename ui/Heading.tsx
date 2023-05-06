import styled from "styled-components/native";
import { colors } from "../styles/theme";

interface IHeading {
  children?: React.ReactNode;
  textAlign?: string;
  color?: string;
  fontSize?: string;
  textTransform?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

export default function Heading({ children, ...rest }: IHeading) {
  return <HeadingUI {...rest}>{children}</HeadingUI>;
}

const HeadingUI = styled.Text<IHeading>`
  font-size: ${(props) => props.fontSize || "32px"};
  font-weight: semibold;
  font-family: "Poppins-Semibold";
  text-align: ${(props) => props.textAlign || "left"};
  color: ${(props) => props.color || colors.primary};
  text-transform: ${(props) => props.textTransform || "lowercase"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-right: ${(props) => props.marginRight || "0px"};
`;
