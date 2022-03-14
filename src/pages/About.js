import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const About = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Container>
        <Box display={"flex"} alignItems={"center"} flexDirection="column">
          <Box
            sx={{
              width: { xs: "100%", sm: "60%", lg: "40%" },
              boxShadow:
                "0 0 0 7px #60B88D,0 0 0 14px #90CDAF,0 0 0 21px #BFE3D1",
            }}
          >
            <img
              style={{ width: "100%" }}
              src="https://static.wixstatic.com/media/bfdf85_f840a5e6be20475e84e239a74834d295.jpg/v1/fill/w_414,h_414,al_c,lg_1,q_80,enc_auto/bfdf85_f840a5e6be20475e84e239a74834d295.jpg"
            />
          </Box>
          <Typography
            color={"#909090"}
            mt={7}
            sx={{ textAlign: "center", fontSize: "35px" }}
          >
            Обо мне
          </Typography>
          <Typography
            color={"#909090"}
            mt={3}
            sx={{ textAlign: "center", fontSize: "18px", width: { md: "50%" } }}
          >
            Это текст. Нажмите один раз и выберите «Редактировать текст» или
            просто кликните дважды, чтобы добавить свой текст и настроить шрифт.
            Вы можете переместить его в любое место на странице. Расскажите
            посетителям сайта о себе. Чтобы удалить этот текст, нажмите один раз
            и выберите значок «Корзина».
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
