import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Facebook, Twitter, YoutubeSearchedFor } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box py={5}>
      <Typography color={"#909090"} align="center">
        © 2023 Олег Марков. Сайт создан на Wix.com.
      </Typography>
      <Box display={"flex"} justifyContent="center">
        <IconButton mr={1}>
          <Facebook />
        </IconButton>
        <IconButton mr={1}>
          <Twitter />
        </IconButton>
        <IconButton mr={1}>
          <YoutubeSearchedFor />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
