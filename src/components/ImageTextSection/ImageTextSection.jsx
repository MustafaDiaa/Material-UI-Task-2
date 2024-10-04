/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";

const ImageTextSection = ({
  imageSrc,
  title,
  paragraph,
  buttonText,
  reverse,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        backgroundColor: "#f5fdfa",
        marginBottom: "30px",
        borderRadius: "0",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover",
            maxHeight: "400px",
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <Typography variant="h3" component="h3" gutterBottom align="center">
          {title}
        </Typography>
        <Typography variant="body1" paragraph align="center">
          {paragraph}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default ImageTextSection;
