import styled from "styled-components/native";

interface IHeading {
  children?: React.ReactNode;
  textAlign?: string;
}

export default function Heading({ children, ...rest }: IHeading) {
  return <HeadingUI {...rest}>{children}</HeadingUI>;
}

const HeadingUI = styled.Text<IHeading>`
  font-size: 32px;
  font-weight: semibold;
  font-family: "Poppins-Semibold";
  text-align: ${(props) => props.textAlign || "left"};
`;
