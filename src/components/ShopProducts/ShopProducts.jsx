import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import placeholderImg from "../../assets/Img11.jpg";

export default function ProductGrid() {
  const itemsToRender = Array(12).fill({
    img: placeholderImg,
    name: "chair",
  });

  return (
    <Grid container spacing={2}>
      {itemsToRender.map((product, index) => (
        <Grid item xs={6} sm={4} md={3} key={product.id || index}>
          <Card sx={{ backgroundColor: "#f5f5f5", textAlign: "center" }}>
            <CardMedia
              component="img"
              image={product.img}
              alt={product.name}
              sx={{
                height: "200px",
                width: "auto",
                maxWidth: "100%",
                margin: "0 auto",
              }}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
