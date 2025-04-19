import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
interface OrderSuccssBoxProps {
  isMobile: boolean;
}
const OrderSuccessBox = ({ isMobile }: OrderSuccssBoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "36px",
        color: "green",
      }}
    >
      <CheckCircleIcon sx={{ fontSize: 100 }} />
      <Typography
        variant={isMobile ? "h6" : "h4"}
        style={{ fontWeight: "bold" }}
      >
        Order Placed Successfully
      </Typography>
    </Box>
  );
};
export default OrderSuccessBox;
