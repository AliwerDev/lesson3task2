import { Box } from "@mui/system";
import React from "react";
import {
  Button,
  Container,
  FormControl,
  Input,
  TextareaAutosize,
  Typography,
} from "@mui/material";

const inputStyle = {
  border: "1px solid transparent",
  "&:hover": { borderColor: "#000" },
  "&:focus, &:active": {
    boderSize: "2px",
    borderColor: "#000",
    background: "#fff",
  },
  bgcolor: "#f1f1f1",
  mb: 1,
  px: 2,
  py: 1,
  width: "100%",
};

const Contact = () => {
  return (
    <Box py={5}>
      <Container mx={"auto"} maxWidth={"sm"}>
        <Box sx={{ px: { xs: 2, sm: 5, md: 7, lg: 12 } }}>
          <img
            style={{ width: "100%" }}
            src={
              "https://static.wixstatic.com/media/bfdf85_bb32704cfdf641b78b2207124c945fc8.png/v1/fill/w_322,h_176,al_c,lg_1,enc_auto/bfdf85_bb32704cfdf641b78b2207124c945fc8.png"
            }
          />
        </Box>
        <Typography
          color={"#909090"}
          fontSize={"36px"}
          mt={5}
          sx={{ textAlign: "center" }}
        >
          Свяжитесь мо мной
        </Typography>
        <Typography color={"#909090"} mt={4} sx={{ textAlign: "center" }}>
          info@mysite.com | Телефон: +7 (945) 000-00-00
        </Typography>
        <FormControl fullWidth component={"form"} sx={{ mt: 5 }}>
          <Input
            disableUnderline
            sx={inputStyle}
            type={"text"}
            placeholder={"Имя"}
          />
          <Input
            disableUnderline
            sx={inputStyle}
            type={"text"}
            placeholder={"Телефон"}
          />
          <Input
            disableUnderline
            sx={inputStyle}
            type={"text"}
            placeholder={"Email"}
          />
          <Input
            disableUnderline
            multiline
            sx={{ ...inputStyle, minHeight: "60px" }}
            placeholder={"Сообщение"}
          />
          <Box display={"flex"} justifyContent={"flex-end"} mt={3}>
            <Button sx={{ float: "right" }} type={"submit"}>
              Отправить
            </Button>
          </Box>
        </FormControl>
      </Container>
    </Box>
  );
};

export default Contact;
