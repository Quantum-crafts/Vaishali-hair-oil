import { Box, Typography } from "@mui/material";
interface StyledFooterBoxProps {
  isMobile: boolean;
}
const StyledFooterBox = ({ isMobile }: StyledFooterBoxProps) => {
  return (
    <Box
      sx={{
        mt: 5,
        backgroundColor: "#000000",
        color: "#ffffff",
        paddingTop: "15px",
        paddingBottom: "15px",
        width: isMobile ? "100%" : "100vw",
      }}
    >
      <Typography variant="body1" style={{ fontWeight: "bold" }}>
        All rights reserved &copy; QuantumCrafts
      </Typography>
    </Box>
  );
};
export default StyledFooterBox;
