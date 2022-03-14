import React from "react";
import { Box, Container } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

const Home = ({ data }) => {
  return (
    <Box>
      <Container mx={"auto"}>
        <Box sx={{ width: "100%" }}>
          <Masonry
            columns={{ xs: 1, sm: 2, lg: 3 }}
            sx={{ width: "100%" }}
            spacing={3}
          >
            {data.map((item, i) => (
              <Box key={i}>
                <img
                  style={{ width: "100%" }}
                  src={item.img}
                  alt={item.title}
                />
              </Box>
            ))}
          </Masonry>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
