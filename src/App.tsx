import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useForm } from "react-hook-form";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { AccordionDetailsComponent } from "./components/AccordionDetailsComponent";
import { DrawerAccordians } from "./components/DrawerAccordians";
import CloseIcon from "@mui/icons-material/Close";
import {
  ABOUT_US_CONTENT,
  CONTACT_PHONE_NUMBER,
  CONTACT_US_PARAGRAPHS,
} from "./constants";

const pages = ["About Us", "Contact Us"];
type FormData = {
  fullname: string;
  phone: string;
  quantity: number;
  address: string;
};

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openDialog2, setOpenDialog2] = useState<"about" | "contact" | null>(
    null
  );

  const [openDrawer, setopenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const { fullname, phone, address, quantity } = data;
    const message = `Hello! My name is ${fullname}.
I would like to place an order of *${quantity}* item(s).
You can reach me at: ${phone}.
Shipping address: ${address}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/7350506173?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    setOpenDialog(false);
    setOpenSuccess(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setOpenSuccess(false);
    }, 3000);
  }, [openSuccess]);
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Vaishali Ayurvedic Hair Oil",
          text: "Check out this amazing Ayurvedic hair oil for hair growth, anti-hair fall, and dandruff-free hair. Suitable for both men and women!",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing", error);
      }
    } else {
      alert("Sharing is not supported on this browser");
    }
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        <AppBar
          position="sticky"
          sx={{ background: "white", boxShadow: "none", color: "Green" }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <img
              src="/logo_bg.png"
              height={"64px"}
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.href = "https://g.co/kgs/EKdTMJu";
              }}
            />

            {isMobile && (
              <Box sx={{ display: { xs: "flex", md: "none" }, gap: 2 }}>
                <MenuIcon
                  onClick={() => {
                    setopenDrawer(true);
                  }}
                />
              </Box>
            )}

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {pages.map((page) => (
                <Typography
                  key={page}
                  variant="h6"
                  component="div"
                  sx={{ cursor: "pointer", fontWeight: "bold" }}
                  onClick={() =>
                    setOpenDialog2(page === "About Us" ? "about" : "contact")
                  }
                >
                  {page}
                </Typography>
              ))}
            </Box>
            <Dialog
              open={openDialog2 === "about"}
              onClose={() => setOpenDialog2(null)}
              fullWidth
            >
              <DialogTitle
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                About Us
                <IconButton onClick={() => setOpenDialog2(null)}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {ABOUT_US_CONTENT.map((content, index) => (
                    <p key={index}>{content}</p>
                  ))}
                </Typography>
              </DialogContent>
            </Dialog>

            <Dialog
              open={openDialog2 === "contact"}
              onClose={() => setOpenDialog2(null)}
              fullWidth
            >
              <DialogTitle
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Contact Us
                <IconButton onClick={() => setOpenDialog2(null)}>
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {CONTACT_US_PARAGRAPHS[0]}
                    <br />
                    <br />
                    {CONTACT_US_PARAGRAPHS[1]} 📞 Call us today at:{" "}
                    <Button
                      onClick={() =>
                        (window.location.href = `tel:${CONTACT_PHONE_NUMBER}`)
                      }
                    >
                      {CONTACT_PHONE_NUMBER}
                    </Button>
                    <br />
                    <br />
                    {CONTACT_US_PARAGRAPHS[2]}
                  </Typography>
                </Typography>
              </DialogContent>
            </Dialog>
          </Toolbar>
        </AppBar>
        <Drawer
          open={openDrawer}
          variant="temporary"
          onClose={() => {
            setopenDrawer(false);
          }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "& .MuiDrawer-paper": {
              width: "320px",
              height: "100%",
              backgroundColor: "#A0C878",
            },
          }}
        >
          <DrawerAccordians />
          <Box sx={{ gap: 2, padding: "30px", textAlign: "center" }}>
            <Typography> Vaishali Ayurvedic Industries</Typography>
            <Typography>@2025</Typography>
          </Box>
        </Drawer>
        {/* Hero Section */}
        <Container>
          <Grid
            container
            flex={1}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              height: isMobile ? "25vh" : "85vh",
              color: "Black",
              marginTop: isMobile ? "64px" : "10px",
              padding: "10px",
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography
                variant={isMobile ? "h4" : "h2"}
                style={{ fontWeight: "bold", color: "Green" }}
              >
                Vaishali Ayurvedic
              </Typography>
              <Typography
                variant={isMobile ? "h4" : "h2"}
                style={{ fontWeight: "bold", color: "Green" }}
              >
                Hair Oil
              </Typography>
              <Typography
                variant={isMobile ? "body2" : "subtitle1"}
                style={{ marginTop: "10px", color: "Black" }}
              >
                Useful for hair growth, anti-hair fall, and anti-dandruff.
                Suitable for both men and women.
              </Typography>
              {!isMobile && (
                <Button
                  variant="contained"
                  style={{
                    marginTop: "20px",
                    backgroundColor: "Black",
                    borderRadius: "20px",
                  }}
                  onClick={() => {
                    setOpenDialog(true);
                  }}
                >
                  Buy Now
                </Button>
              )}
            </Grid>
            {!isMobile && (
              <Grid item xs={12} sm={6}>
                <img
                  src="/hero.jpg"
                  alt="Vaishali Ayurvedic Hair Oil"
                  height={"550px"}
                />
              </Grid>
            )}
          </Grid>
        </Container>

        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={3}>
              <img height={"500px"} src="/hero.jpg" alt="Hero" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box sx={{ maxWidth: "350px", padding: "20px" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  fontWeight={"bold"}
                  noWrap
                >
                  Vaishali Ayurvedic Hair Oil 100ml
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Useful for hair growth, anti-hair fall, and anti-dandruff.
                  Suitable for both men and women.
                </Typography>
                <Typography sx={{ textAlign: "left", mt: "20px" }}>
                  <span style={{ fontWeight: "bold" }}>About this item</span>
                  <ul>
                    <li>100ml</li>
                    <li>Help to Prevent Baldness</li>
                    <li>Keeps cool and grow the hair rapidly</li>
                    <li>Help to reduces heat sensation in head</li>
                    <li>Useful to Remove dandruff in hair</li>
                    <li>Hairs become soft and silky</li>
                    <li>Useful in all type of Hair Problem Now</li>
                  </ul>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} sx={{ padding: "20px" }}>
              <Typography sx={{ fontWeight: "bold" }}>₹ 195.00</Typography>
              <Typography sx={{ color: "green" }}>
                Delivery in 4-5 days
              </Typography>
              <Stack spacing={1} mt={2}>
                <Button
                  variant="outlined"
                  sx={{ color: "black", backgroundColor: "#FF9B17" }}
                  onClick={() => {
                    setOpenDialog(true);
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: "white", backgroundColor: "#3D90D7" }}
                  onClick={handleShare}
                >
                  Share
                </Button>
              </Stack>
              <Button
                sx={{ mt: 2 }}
                onClick={() => (window.location.href = "tel:7350506173")}
              >
                Get Help from our sales team
              </Button>
            </Grid>
          </Grid>
        </Container>
        {/* Product Info Section */}
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={2}
          sx={{
            alignItems: "center",
            textAlign: "center",
            padding: "10px",
            margin: "10px",
          }}
        >
          <Box width={isMobile ? "100%" : "40%"}>
            <img height={"400px"} src="/hairs2-removebg-preview.png" />
          </Box>
          <AccordionDetailsComponent />
        </Stack>
        <Dialog
          open={openDialog}
          onClose={() => {
            setOpenDialog(false);
          }}
          style={{ borderRadius: "30px" }}
          maxWidth="md"
          children={
            <Stack direction={isMobile ? "column" : "row"}>
              <Box>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "10px",
                    padding: isMobile ? "20px" : "32px",
                    width: "320px",
                    height: "350px",
                    backgroundColor: "#A0C878",
                  }}
                >
                  <input
                    style={{
                      fontSize: "14px",
                      padding: "10px",
                      color: "black",
                      border: "1px solid #D69ADE",
                      backgroundColor: "white",
                    }}
                    {...register("fullname")}
                    placeholder="Full name (only alphabets)"
                    {...register("fullname", {
                      required: true,
                      pattern: /^[a-zA-Z\s]+$/,
                    })}
                  />
                  <input
                    style={{
                      fontSize: "14px",
                      padding: "10px",
                      color: "black",
                      border: "1px solid #D69ADE",
                      backgroundColor: "white",
                    }}
                    {...register("phone")}
                    placeholder="Phone number (10 digits)"
                    pattern="^[0-9]{10}$"
                  />
                  <input
                    style={{
                      fontSize: "14px",
                      padding: "10px",
                      color: "black",
                      border: "1px solid #D69ADE",
                      backgroundColor: "white",
                    }}
                    {...register("quantity")}
                    placeholder="Quantity (only numbers)"
                    pattern="^[0-9]+$"
                  />
                  <textarea
                    style={{
                      fontSize: "14px",
                      padding: "10px",
                      color: "black",
                      backgroundColor: "white",
                      border: "1px solid #D69ADE",
                    }}
                    {...register("address")}
                    placeholder="Enter your City, State and Pincode"
                  />
                  <input
                    style={{
                      fontSize: "14px",
                      padding: "10px",
                      color: "white",
                      backgroundColor: "#143D60",
                      border: "1px solid #D69ADE",
                    }}
                    type="submit"
                  />
                </form>
              </Box>
              <Box
                sx={{
                  padding: isMobile ? "20px" : "32px",
                  textAlign: "center",
                }}
              >
                <img
                  src="/hero.jpg"
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
            </Stack>
          }
        />
        <Dialog
          open={openSuccess}
          onClose={() => {
            setOpenSuccess(false);
          }}
          style={{
            borderRadius: "30px",
          }}
          maxWidth="md"
          children={
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
          }
        />
      </Container>

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
    </>
  );
}

export default App;
