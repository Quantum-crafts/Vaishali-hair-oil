import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Drawer,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useForm } from "react-hook-form";
import { DrawerAccordians } from "./components/DrawerAccordians";
import CloseIcon from "@mui/icons-material/Close";
import { ABOUT_US_CONTENT } from "./constants";
import SyledFooterBox from "./components/StyledFooterBox";
import OrderSuccessBox from "./components/OrderSuccessBox";
import WhatsappFloater from "./components/WhatsappFloater";
import FillInformationBox from "./components/FillInformationBox";
import ContactUsDialogContent from "./components/ContactUsDialogContent";
import VaishaliCopyRight from "./components/VaishaliCopyRight";
import Grid from "@mui/material/Grid";
import ProductInfoBoxes from "./components/ProductInfoBoxes";
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
  const gridProps = {
    width: {
      xs: "100%",
      sm: "50%",
    },
  };
  const gridPropsforBuyNow = {
    width: {
      xs: "100%",
      sm: "32%",
    },
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
              src="/Vaishali-hair-oil/logo_bg.png"
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
                <ContactUsDialogContent />
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
          <VaishaliCopyRight />
        </Drawer>
        {/* Hero Section */}
        <Container
          sx={{
            margin: isMobile ? "10px" : "30px",
          }}
        >
          <Grid
            container
            flex={1}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid
              sx={{
                ...gridProps,
              }}
            >
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
              <Grid
                sx={{
                  ...gridProps,
                }}
              >
                <img
                  src="/Vaishali-hair-oil/hero.jpg"
                  alt="Vaishali Ayurvedic Hair Oil"
                  height={"550px"}
                />
              </Grid>
            )}
          </Grid>
        </Container>

        <Container
          sx={{
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid
              sx={{
                ...gridPropsforBuyNow,
              }}
            >
              <img
                height={"500px"}
                src="/Vaishali-hair-oil/hero.jpg"
                alt="Hero"
              />
            </Grid>

            <Grid
              sx={{
                ...gridPropsforBuyNow,
              }}
            >
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

            <Grid
              sx={{
                ...gridPropsforBuyNow,
                padding: "20px",
              }}
            >
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
        <Container
          sx={{
            justifyContent: "space-between",

            color: "Black",
            padding: "10px",
          }}
        >
          <ProductInfoBoxes isMobile={isMobile} />
        </Container>

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
              <FillInformationBox isMobile={isMobile} />
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
          children={<OrderSuccessBox isMobile={isMobile} />}
        />
      </Container>
      <SyledFooterBox isMobile={isMobile} />
      <WhatsappFloater />
    </>
  );
}

export default App;
