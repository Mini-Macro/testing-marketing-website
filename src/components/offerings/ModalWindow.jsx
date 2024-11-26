import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ModalWindow = ({ open, onClose }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // State variables for the selected values of the dropdowns
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [priceMessage, setPriceMessage] = useState(null);

  const handleDropdown1Change = (event) => {
    setSelectedValue1(event.target.value);
    updatePriceMessage(event.target.value, selectedValue2);
  };

  const handleDropdown2Change = (event) => {
    setSelectedValue2(event.target.value);
    updatePriceMessage(selectedValue1, event.target.value);
  };

  const updatePriceMessage = (value1, value2) => {
    if (!value2) return;

    let quote = "";
    let price = "";
    let additionalTransactions = 0;
    let fee = "";

    switch (value1) {
      case "Business Owner":
      case "Professional Firm of Accountants/Tax Practitioner":
        switch (value2) {
          case "Upto 500":
            quote = "Upto 500";
            price = "INR 4999.00";
            additionalTransactions = 250;
            fee = "INR 850";
            break;
          case "1000":
            quote = "Upto 1000";
            price = "INR 9,999.00";
            additionalTransactions = 500;
            fee = "INR 850";
            break;
          case "5000":
            quote = "Upto 5000";
            price = "INR 14,999.00";
            additionalTransactions = 500;
            fee = "INR 850";
            break;
          default:
            setPriceMessage(
              <Typography>
                Please contact us on{" "}
                <span style={{ color: "#0a5ac2", fontWeight: "bold" }}>
                  +919823197963
                </span>{" "}
                or send us an email on{" "}
                <span style={{ color: "#0a5ac2", fontWeight: "bold" }}>
                  sales@finkeep.in
                </span>
                . Our sales team will reach out to you for further discussion.
              </Typography>
            );
            return;
        }
        break;
      case "CA/CS/CWA":
      case "Professional Affiliates (Student of CA/CS/CWA)":
        switch (value2) {
          case "Upto 500":
            quote = "Upto 500";
            price = "INR 2,499.50";
            additionalTransactions = 250;
            fee = "INR 425";
            break;
          case "1000":
            quote = "Upto 1000";
            price = "INR 4,999.50";
            additionalTransactions = 500;
            fee = "INR 425";
            break;
          case "5000":
            quote = "Upto 5000";
            price = "INR 7,499.50";
            additionalTransactions = 500;
            fee = "INR 425";
            break;
          default:
            setPriceMessage(
              <Typography>
                Please contact us on{" "}
                <span style={{ color: "#0a5ac2", fontWeight: "bold" }}>
                  +919823197963
                </span>{" "}
                or send us an email on{" "}
                <span style={{ color: "#0a5ac2", fontWeight: "bold" }}>
                  sales@finkeep.in
                </span>
                . Our sales team will reach out to you for further discussion.
              </Typography>
            );
            return;
        }
        break;
      default:
        setPriceMessage("");
        return;
    }

    setPriceMessage(
      <Typography>
        Your quote for transactions{" "}
        <span style={{ color: "#0a5ac2", fontWeight: "bold" }}>{quote}</span> is{" "}
        <span style={{ color: "#0a5ac2", fontWeight: "bold" }}>{price}</span>.
        For every extra{" "}
        <span style={{ color: "#0a5ac2", fontWeight: "bold" }}>
          {additionalTransactions}
        </span>{" "}
        transactions, a fee of{" "}
        <span style={{ color: "#0a5ac2", fontWeight: "bold" }}>{fee}</span> will
        be charged.
      </Typography>
    );
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={isSmallScreen ? "xs" : "md"}
      fullWidth
    >
      <DialogTitle>Get a Quote</DialogTitle>
      <DialogContent style={{ paddingTop: "16px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Client Type</InputLabel>
              <Select
                value={selectedValue1} // Provide the selected value
                onChange={handleDropdown1Change}
              >
                <MenuItem value="Business Owner">Business Owner</MenuItem>
                <MenuItem value="CA/CS/CWA">CA/CS/CWA</MenuItem>
                <MenuItem value="Professional Firm of Accountants/Tax Practitioner">
                  Professional Firm of Accountants/Tax Practitioner
                </MenuItem>
                <MenuItem value="Professional Affiliates (Student of CA/CS/CWA)">
                  Professional Affiliates (Student of CA/CS/CWA)
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Transaction Type</InputLabel>
              <Select
                value={selectedValue2} // Provide the selected value
                onChange={handleDropdown2Change}
              >
                <MenuItem value="Upto 500">Upto 500</MenuItem>
                <MenuItem value="1000">1000</MenuItem>
                <MenuItem value="5000">5000</MenuItem>
                <MenuItem value="More than 5000">More than 5000</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {priceMessage && (
            <Grid item xs={12}>
              <Typography variant="body1" component="div">
                {priceMessage}
              </Typography>
            </Grid>
          )}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalWindow;
