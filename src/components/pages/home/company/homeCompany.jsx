import { Box } from "@mui/system";
import s from "./homeCompany.module.css";
import img from "../../../img/company.png";
import { Button } from "@mui/material";

function Company() {
  return (
    <div>
      <div className="container">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
            minHeight: "50vh",
          }}
        >
          <Box sx={{ width: "300px" }}>
            <img src={img} />
          </Box>
          <Box
            sx={{
              maxWidth: "473px",
              minHeight: "440px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "left",
            }}
          >
            <span className="subtitleColor">Our company</span>
            <span className="textBlack">
              Debuilds is a team of architects, interior design, and contractors
              who help our clients not only to build their dream building, but
              also to feel comfortable after the building is used.
            </span>
            <span className="textBlack">We already handled</span>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span className="subtitleColor">50+ Clients</span>
              <span className="subtitleColor">30+ House</span>

              <span className="subtitleColor">20+ Building</span>
            </Box>
            <Button sx={{ color: "#ffffff" }} className="button1">
              See more
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Company;
