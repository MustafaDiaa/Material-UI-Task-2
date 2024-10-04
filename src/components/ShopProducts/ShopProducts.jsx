import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import placeholderImg from "../../assets/Table.jpeg";

export default function ProductGrid() {
  const itemsToRender = Array.from({ length: 12 }, (_, index) => ({
    img: placeholderImg,
    name: `Table ${index + 1}`,
    price: "$79.99",
  }));

  return (
    <Grid container spacing={2}>
      {itemsToRender.map((product, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <Card
            sx={{
              backgroundColor: "#ffffff",
              textAlign: "center",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={product.img}
              alt={product.name}
              sx={{
                height: "200px",
                objectFit: "cover",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {" "}
                {product.price}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "20px",
                    textTransform: "none",
                    padding: "8px 16px",
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
