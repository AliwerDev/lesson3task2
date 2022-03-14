import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const linkStyle = {
    "& a": {
      textDecoration: "none",
      color: "#909090",
      fontSize: "20px",
      "&:hover": { color: "#000" },
      letterSpacing: "1px",
    },
  };
  return (
    <Box py={5}>
      <Container>
        <Typography
          sx={{
            fontFamily: "'Dancing Script', cursive !important",
            fontSize: "50px",
            textAlign: "center",
          }}
        >
          Олег Марков
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 3 }}>
          <Typography sx={linkStyle}>
            <Link to={"/"}>Главная</Link>
          </Typography>
          <Typography sx={linkStyle}>
            <Link to={"/about"}>Обо мне</Link>
          </Typography>
          <Typography sx={linkStyle}>
            <Link to={"/contact"}>Связаться</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
