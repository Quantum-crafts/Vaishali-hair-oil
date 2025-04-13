
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const AccordionDetailsComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box width={isMobile ? "100%" : "50%"}>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <span>
              <ArrowDropDownIcon />
            </span>
          }
        >
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Product Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            gap="20px"
            textAlign={"left"}
            width={"90%"}
            margin={"auto"}
            mt={"30px"}
          >
            <Typography variant="body1" style={{ marginBottom: "10px" }}>
              <strong>Type:</strong> Hair Growth, Anti Hair Fall, Anti Dandruff
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "10px" }}>
              <strong>Form:</strong> Oil
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "10px" }}>
              <strong>Fragrance:</strong> Natural, Organic, Ayurvedic
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "10px" }}>
              <strong>Ingredients:</strong> Herbal
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "10px" }}>
              <strong>Usage/Application:</strong> Apply on scalp once a day,
              massage for 8-10 minutes, and wash with a suitable shampoo twice a
              week.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Benefits Section */}
      <Accordion>
        <AccordionSummary
          expandIcon={
            <span>
              <ArrowDropDownIcon />
            </span>
          }
        >
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Benefits
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            gap="20px"
            textAlign={"left"}
            width={"90%"}
            margin={"auto"}
            mt={"30px"}
          >
            <Typography variant="body1" style={{ marginBottom: "10px" }}>
              <strong>
                Helps prevent hair fall and strengthens hair roots.
              </strong>
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "10px" }}>
              <strong>
                Encourages natural hair growth and reduces bald patches.
              </strong>
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "10px" }}>
              <strong>
                Effective in reducing dandruff and soothing the scalp.
              </strong>
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Method Of Use Section */}
      <Accordion>
        <AccordionSummary
          expandIcon={
            <span>
              <ArrowDropDownIcon />
            </span>
          }
        >
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Methods of Use
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ textAlign: "left", maxWidth: 500, width: "100%" }}>
            <Typography variant="h6">Step 1: Apply the Oil</Typography>
            <Typography variant="body2" color="textSecondary">
              Apply one cap of Vaishali Ayurvedic Hair Oil onto your scalp.
            </Typography>
            <Typography variant="h6">Step 2: Massage</Typography>
            <Typography variant="body2" color="textSecondary">
              Massage slowly for 8-10 minutes until the oil is absorbed.
            </Typography>
            <Typography variant="h6">Step 3: Wash Your Hair</Typography>
            <Typography variant="body2" color="textSecondary">
              Use a suitable shampoo to wash hair.
            </Typography>
            <Typography variant="h6">Step 4: Repeat Twice a Week</Typography>
            <Typography variant="body2" color="textSecondary">
              For best results, use twice a week.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
