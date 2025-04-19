import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const DrawerAccordians = () => {
  return (
    <Box sx={{ flex: 1, overflowY: "auto", gap: 2, padding: "30px" }}>
      <img src="/Vaishali-hair-oil/logo_bg.png" width={"240px"} />
      <Accordion>
        <AccordionSummary
          expandIcon={
            <span>
              <ArrowDropDownIcon />
            </span>
          }
        >
          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            Contact us
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box gap="20px" textAlign={"left"} width={"100%"} margin={"auto"}>
            <Typography variant="body1" style={{ marginBottom: "10px" }}>
              Looking to experience the benefits of authentic Ayurvedic hair
              care? Buy Vaishali Ayurvedic Hair Oil in bulk or get personalized
              assistance from our team. 📞 Call us today at: 7350506173 We’re
              here to help you choose the best solution for your hair care needs
              and ensure quick, reliable service across India.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <span>
              <ArrowDropDownIcon />
            </span>
          }
        >
          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            About us
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box gap="20px" textAlign={"left"} width={"100%"} margin={"auto"}>
            <Typography variant="body1" style={{ marginBottom: "10px" }}>
              Established in 2008 in Beed, Maharashtra, Vaishali Ayurvedic
              Industries is a leading manufacturer and supplier of premium Hair
              Care Products in India. With a strong commitment to traditional
              Ayurvedic principles and quality manufacturing, the company has
              built a solid reputation, especially with its flagship product —
              Vaishali Ayurvedic Hair Oil. Trusted by a wide consumer base
              across India, the oil is known for its effectiveness in addressing
              common hair problems such as hair fall, split ends, dandruff,
              premature greying, alopecia (chai), and even genetic baldness.
              Driven by a customer-centric approach, we continue to grow our
              pan-India presence and serve customers who seek authentic and
              result-driven Ayurvedic solutions.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
