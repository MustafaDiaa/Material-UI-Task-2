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
      sx={{ backgroundColor: "#f5f5f5", color: "#333", padding: "10px 20px" }}
      elevation={1}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          EQ3
        </Typography>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <IconButton color="inherit">
            <LocationOnIcon />
          </IconButton>
          <IconButton color="inherit">
            <HelpOutlineIcon />
          </IconButton>
          <IconButton color="inherit">
            <FavoriteBorderIcon />
          </IconButton>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<PersonOutlineIcon />}
            sx={{ borderRadius: "20px" }}
          >
            Join/Login
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<PublicIcon />}
            sx={{ borderRadius: "20px" }}
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
