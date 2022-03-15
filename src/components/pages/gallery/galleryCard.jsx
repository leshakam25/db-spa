import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard(props) {
  return (
    <Card
      className="hover"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "left",
        width: 420,
        minHeight: 480,
        margin: "16px 0",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="250" image={props.img} />
        <CardContent>
          <Typography
            className="subtitleColor"
            gutterBottom
            variant="h4"
            component="div"
            sx={{ fontWeight: "700" }}
          >
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          sx={{
            bottom: "0",
            color: "white",
            width: "158px",
          }}
          className="button1"
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
