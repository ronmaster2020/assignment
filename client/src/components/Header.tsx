import React from "react";
import type { ReactNode } from "react";

const styles = {
  Header: {
    top: "0px",
    left: "0px",
    width: "100%",
    height: "80px",
    backgroundColor: "#212529",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  } as React.CSSProperties,
};

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return <div style={styles.Header}>{children}</div>;
};

export default Header;
