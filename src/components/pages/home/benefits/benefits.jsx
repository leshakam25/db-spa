import { Box, maxWidth } from "@mui/system";
import s from "./benefits.module.css";
import iconSuccess from "../../../img/iconSuccess.svg";

function Benefits() {
  return (
    <div className="container">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "-120px",
        }}
      >
        <Box sx={{ maxWidth: "348px" }} className="subtitleColor">
          Our benefits
        </Box>
        <Box
          sx={{ maxWidth: "348px", textAlign: "center" }}
          className="textBlack"
        >
          Here our benefits if you collaboration with our team
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            className={s.benefits1}
            sx={{
              width: "300px",
              minHeight: "313px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2vh 4vw",
            }}
          >
            <img src={iconSuccess} alt="" />
            <Box className="subtitle">Flexible time</Box>
            <Box sx={{ width: "200px", textAlign: "center" }} className="text">
              We work wherever you ready to builds. Work fast and profesional
            </Box>
          </Box>
          <Box
            className={s.benefits2}
            sx={{
              width: "300px",
              minHeight: "313px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2vh 4vw",
            }}
          >
            <img src={iconSuccess} alt="" />
            <Box className="subtitle">Customizable design</Box>
            <Box
              sx={{ minWidth: "200px", textAlign: "center" }}
              className="text"
            >
              We can design your buildings, but we open if you want to customize
              your design or if you have architect{" "}
            </Box>
          </Box>
          <Box
            className={s.benefits3}
            sx={{
              width: "300px",
              minHeight: "313px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2vh 4vw",
            }}
          >
            <img src={iconSuccess} alt="" />
            <Box className="subtitle">Negotiable price</Box>
            <Box
              sx={{ minWidth: "200px", textAlign: "center" }}
              className="text"
            >
              Yes, we’re open to negotiate the price with you, and we will give
              the best price for our lovely clients{" "}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Benefits;
