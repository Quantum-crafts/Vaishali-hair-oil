import { Box, Typography } from "@mui/material";
interface FillInformationBoxProps {
  isMobile: boolean;
}

const FillInformationBox = ({ isMobile }: FillInformationBoxProps) => {
  return (
    <Box
      sx={{
        padding: isMobile ? "20px" : "32px",
        textAlign: "center",
      }}
    >
      <img
        src="./hero.jpg"
        alt="Vaishali Ayurvedic Hair Oil"
        style={{
          width: "170px",
          height: isMobile ? "250px" : "200px",
        }}
      />
      <Typography
        style={{ fontWeight: "bold" }}
        variant="h6"
        marginTop={isMobile ? "10px" : "70px"}
      >
        Please fill this information
      </Typography>
      <Typography style={{ fontWeight: "bold" }} variant="h6">
        to book your order
      </Typography>
    </Box>
  );
};
export default FillInformationBox;
