import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";

export default function CarInfoCard({ info }) {
  return (
    <Card>
      <CardMedia
        image="https://cdnblob.fastly.carvana.io/2001092290/post-large/normalized/zoomcrop/2001092290-edc-02.jpg?v=2021.6.21_20.10.59&width=449"
        style={{ height: 300 }}
        component="img"
        alt="Image not found"
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body2" color="textPrimary" component="p">
              {info.year} {info.make}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              {info.model}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {info.miles} miles
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" color="textPrimary" component="p">
              ${info.price}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
