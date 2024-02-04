// components/LandingPage.js
import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import nails from '../nails.mp4';

const LandingPage = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to SmartNails
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        The future of personalized nail art and interaction.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Feature Cards */}
        {features.map((feature) => (
          <Grid item key={feature.title}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography>{feature.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" align="center" gutterBottom>
        Watch the SmartNails in Action
      </Typography>
      <video width="100%" controls>
        <source src={nails} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Embed promotional video or link here */}
      <Link to="/contactus" style={{ textDecoration: "none", color: "inherit" }}>

      <Button variant="contained" color="primary" size="large" fullWidth>
        Invest in SmartNails
      </Button>
      </Link>
    </Container>
  );
};

// Sample features
const features = [
  {
    title: 'Personalized Nail Art',
    description: 'Transfer your favorite designs to your fingernails effortlessly.',
  },
  {
    title: 'Interactive Learning',
    description: 'Learn piano by hitting glowing keys in real-time using SmartNails.',
  },
  {
    title: 'Health Monitoring',
    description: 'Monitor vital signs and detect early signs of health problems in real-time.',
  },
];

export default LandingPage;