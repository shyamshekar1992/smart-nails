// ContactForm.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, MenuItem, Grid , Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const countries = [
    { value: '+1', label: 'United States' },
    { value: '+44', label: 'United Kingdom' },
    { value: '+91', label: 'India' },
    { value: '+33', label: 'France' },
    { value: '+81', label: 'Japan' },
    { value: '+49', label: 'Germany' },
    { value: '+86', label: 'China' },
    { value: '+7', label: 'Russia' },
    { value: '+55', label: 'Brazil' },
    { value: '+39', label: 'Italy' },
    { value: '+1', label: 'Canada' },
    { value: '+61', label: 'Australia' },
    { value: '+27', label: 'South Africa' },
    { value: '+82', label: 'South Korea' },
    { value: '+34', label: 'Spain' },
    { value: '+52', label: 'Mexico' },
    { value: '+91', label: 'Pakistan' },
    { value: '+63', label: 'Philippines' },
    { value: '+65', label: 'Singapore' },
    { value: '+20', label: 'Egypt' },
  ];
  
  console.log(countries.map(country => country.value));
  

const ContactForm = () => {
    const navigate = useNavigate(); // Use useNavigate to access the navigate function

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      countryCode: Yup.string().required("Required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]*$/, "Invalid phone number") // Only allow numeric characters
        .required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        // Use Formspree for form submission
        await axios.post("https://formspree.io/your-formspree-id", values);
        alert("Form submitted successfully!");
        formik.resetForm();
      } catch (error) {
        console.log("FORM VALue:", values);
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please try again later.");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
         <Typography variant="h4" gutterBottom>
        Get in touch with us
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            id="countryCode"
            name="countryCode"
            label="Country Code"
            value={formik.values.countryCode}
            onChange={formik.handleChange}
            error={
              formik.touched.countryCode && Boolean(formik.errors.countryCode)
            }
            helperText={formik.touched.countryCode && formik.errors.countryCode}
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value} {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            InputProps={{
              inputProps: { pattern: "[0-9]*" }, // Allow only numeric input
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            id="message"
            name="message"
            label="Message"
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" style={{ width:"99%" , height:"40px"}}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
