import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./conponents/Header";
import Footer from "./conponents/Footer";
import { Box } from "@mui/material";
import About from "./pages/About";
import Contact from "./pages/Contact";

const data = [
  {
    img: "https://static.wixstatic.com/media/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg/v1/fill/w_302,h_302,al_c,q_80,usm_0.66_1.00_0.01/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg",
    title: "Нажмите Редактировать",
    desc: "Нажмите Редактировать, чтобы создать ваш сайт!",
  },
  {
    img: "https://static.wixstatic.com/media/d78df6_9f4f79dd27814710b261e3acb931156e.jpg/v1/fill/w_302,h_453,al_c,q_80,usm_0.66_1.00_0.01/d78df6_9f4f79dd27814710b261e3acb931156e.jpg",
    title: "Нажмите Редактировать",
    desc: "Нажмите Редактировать, чтобы создать ваш сайт!",
  },
  {
    img: "https://static.wixstatic.com/media/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg/v1/fill/w_491,h_491,al_c,q_80,usm_0.66_1.00_0.01/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg",
    title: "Нажмите Редактировать",
    desc: "Нажмите Редактировать, чтобы создать ваш сайт!",
  },
  {
    img: "https://static.wixstatic.com/media/d78df6_3eea4c192eed4667a602ead5652459c5.jpg/v1/fill/w_491,h_491,al_c,q_80,usm_0.66_1.00_0.01/d78df6_3eea4c192eed4667a602ead5652459c5.jpg",
    title: "Нажмите Редактировать",
    desc: "Нажмите Редактировать, чтобы создать ваш сайт!",
  },
  {
    img: "https://static.wixstatic.com/media/d78df6_b572be78b8984e2db58978eb21e433d7.jpg/v1/fill/w_491,h_491,al_c,q_80,usm_0.66_1.00_0.01/d78df6_b572be78b8984e2db58978eb21e433d7.jpg",
    title: "Нажмите Редактировать",
    desc: "Нажмите Редактировать, чтобы создать ваш сайт!",
  },
  {
    img: "https://static.wixstatic.com/media/d78df6_afe9335eb67640c988d648f7671308e5.jpg/v1/fill/w_491,h_491,al_c,q_80,usm_0.66_1.00_0.01/d78df6_afe9335eb67640c988d648f7671308e5.jpg",
    title: "Нажмите Редактировать",
    desc: "Нажмите Редактировать, чтобы создать ваш сайт!",
  },
  {
    img: "https://static.wixstatic.com/media/d78df6_b9747effc3074458a295cf5674f8c73c.jpg/v1/fill/w_491,h_491,al_c,q_80,usm_0.66_1.00_0.01/d78df6_b9747effc3074458a295cf5674f8c73c.jpg",
    title: "Нажмите Редактировать",
    desc: "Нажмите Редактировать, чтобы создать ваш сайт!",
  },
  {
    img: "https://static.wixstatic.com/media/d78df6_394a136048754355ad8432b30522c761.jpg/v1/fill/w_491,h_491,al_c,q_80,usm_0.66_1.00_0.01/d78df6_394a136048754355ad8432b30522c761.jpg",
    title: "Нажмите Редактировать",
    desc: "Нажмите Редактировать, чтобы создать ваш сайт!",
  },
  {
    img: "https://static.wixstatic.com/media/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg/v1/fill/w_491,h_491,al_c,q_80,usm_0.66_1.00_0.01/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg",
    title: "Нажмите Редактировать",
    desc: "Нажмите Редактировать, чтобы создать ваш сайт!",
  },
];

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
