import React, { Component } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  handleCounter(count) {
    let i = this.state.counter;
    if (count === "dec") {
      if (i === 0) alert("counter can not be lower than zero");
      else {
        i--;
        this.setState({ counter: i });
      }
    } else if (count === "in") {
      i++;
      this.setState({ counter: i });
    } else {
      i = 0;
      this.setState({ counter: i });
    }
  }
  render() {
    return (
      <Box component="div">
        <Paper elevation={3} className="BoxDiv">
          <Stack direction="column" spacing={2}>
            <Typography
              variant="h5"
              sx={{ color: "black", alignSelf: "center" }}
              gutterBottom
            >
              Class-based Counter
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "black", alignSelf: "center" }}
              gutterBottom
            >
              {" "}
              {this.state.counter}
            </Typography>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                color="success"
                onClick={() => this.handleCounter("in")}
              >
                Increment
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => this.handleCounter("dec")}
              >
                Decrement
              </Button>
            </Stack>
            <Button
              variant="contained"
              className="Reset"
              onClick={() => this.handleCounter("reset")}
              color="success"
            >
              Reset
            </Button>
          </Stack>
        </Paper>
      </Box>
    );
  }
}

export default Counter;
