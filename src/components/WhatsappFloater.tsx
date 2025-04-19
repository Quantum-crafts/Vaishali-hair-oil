import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton } from "@mui/material";

const WhatsappFloater = () => {
  return (
    <IconButton
      href="https://wa.me/7350506173"
      target="_blank"
      sx={{
        position: "fixed",
        bottom: "30px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        zIndex: 1000,
        "&:hover": {
          backgroundColor: "#128C7E",
        },
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 36 }} />
    </IconButton>
  );
};
export default WhatsappFloater;
