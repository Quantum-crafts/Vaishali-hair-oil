import { Button, Typography } from "@mui/material";
import { CONTACT_PHONE_NUMBER, CONTACT_US_PARAGRAPHS } from "../constants";

const ContactUsDialogContent = () => {
  return (
    <Typography variant="body2" sx={{ mt: 1 }}>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {CONTACT_US_PARAGRAPHS[0]}
        <br />
        <br />
        {CONTACT_US_PARAGRAPHS[1]} 📞 Call us today at:{" "}
        <Button
          onClick={() => (window.location.href = `tel:${CONTACT_PHONE_NUMBER}`)}
        >
          {CONTACT_PHONE_NUMBER}
        </Button>
        <br />
        <br />
        {CONTACT_US_PARAGRAPHS[2]}
      </Typography>
    </Typography>
  );
};
export default ContactUsDialogContent;
