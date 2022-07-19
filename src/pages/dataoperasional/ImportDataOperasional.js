import React from "react";
import { Grid, Button, FormGroup, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";

const useStyles = makeStyles(theme => ({
    tableOverflow: {
      overflow: 'auto'
    }
}))

export default function ImportDataOperasional() {
    const classes = useStyles();
  return (
    <>
      <PageTitle title="Import Data Operasional"/>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Widget
            title="IMPORT DATA"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <Input
                type="file"
                variant="form-control"
            >

            </Input>
            <br></br>
            <Button 
                variant="contained"
                size="medium"
                color="secondary"
            >
                Import
            </Button>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
