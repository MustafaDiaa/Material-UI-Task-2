import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PublicIcon from "@mui/icons-material/Public";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        color: "#333",
        padding: "10px 20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            letterSpacing: "1px",
            color: "#4CAF50",
          }}
        >
          EQ3
        </Typography>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <IconButton color="inherit" sx={{ "&:hover": { color: "#4CAF50" } }}>
            <LocationOnIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ "&:hover": { color: "#4CAF50" } }}>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ "&:hover": { color: "#4CAF50" } }}>
            <FavoriteBorderIcon />
          </IconButton>
          <Button
            variant="contained"
            color="success"
            startIcon={<PersonOutlineIcon />}
            sx={{
              borderRadius: "20px",
              padding: "8px 16px",
              "&:hover": {
                backgroundColor: "#388E3C",
              },
            }}
          >
            Join/Login
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<PublicIcon />}
            sx={{
              borderRadius: "20px",
              padding: "8px 16px",
              borderColor: "#4CAF50",
              "&:hover": {
                backgroundColor: "#4CAF50",
                color: "#fff",
              },
            }}
          >
            EN/CAD
          </Button>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
