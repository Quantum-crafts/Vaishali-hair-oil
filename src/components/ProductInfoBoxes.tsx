import { Box, Stack, Typography } from "@mui/material";

const ProductInfoBoxes = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      gap={5}
      sx={{ marginTop: 10 }}
    >
      {/* Product Details */}
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "12px",
          padding: "20px",
          flex: 1,
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Product Details
        </Typography>
        <Typography variant="body1" mb={1}>
          <strong>Type:</strong> Hair Growth, Anti Hair Fall, Anti Dandruff
        </Typography>
        <Typography variant="body1" mb={1}>
          <strong>Form:</strong> Oil
        </Typography>
        <Typography variant="body1" mb={1}>
          <strong>Fragrance:</strong> Natural, Organic, Ayurvedic
        </Typography>
        <Typography variant="body1" mb={1}>
          <strong>Ingredients:</strong> Herbal
        </Typography>
        <Typography variant="body1" mb={1}>
          <strong>Usage/Application:</strong> Apply on scalp once a day, massage
          for 8-10 minutes, and wash with a suitable shampoo twice a week.
        </Typography>
      </Box>

      {/* Benefits */}
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "12px",
          padding: "20px",
          flex: 1,
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Benefits
        </Typography>
        <Typography variant="body1" mb={1}>
          <strong>Helps prevent hair fall and strengthens hair roots.</strong>
        </Typography>
        <Typography variant="body1" mb={1}>
          <strong>
            Encourages natural hair growth and reduces bald patches.
          </strong>
        </Typography>
        <Typography variant="body1" mb={1}>
          <strong>
            Effective in reducing dandruff and soothing the scalp.
          </strong>
        </Typography>
      </Box>

      {/* Methods of Use */}
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "12px",
          padding: "20px",
          flex: 1,
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Methods of Use
        </Typography>
        <Typography variant="h6">Step 1: Apply the Oil</Typography>
        <Typography variant="body2" color="textSecondary" mb={1}>
          Apply one cap of Vaishali Ayurvedic Hair Oil onto your scalp.
        </Typography>
        <Typography variant="h6">Step 2: Massage</Typography>
        <Typography variant="body2" color="textSecondary" mb={1}>
          Massage slowly for 8-10 minutes until the oil is absorbed.
        </Typography>
        <Typography variant="h6">Step 3: Wash Your Hair</Typography>
        <Typography variant="body2" color="textSecondary" mb={1}>
          Use a suitable shampoo to wash hair.
        </Typography>
        <Typography variant="h6">Step 4: Repeat Twice a Week</Typography>
        <Typography variant="body2" color="textSecondary">
          For best results, use twice a week.
        </Typography>
      </Box>
    </Stack>
  );
};

export default ProductInfoBoxes;
