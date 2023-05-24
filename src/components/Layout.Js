import { Container } from "@mui/material";
import Header from "./header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <Container fixed><main>{children}</main></Container>
    </>
  );
}
