import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { blue} from '@mui/material/colors';


function Counter() {
  let [counter, setCounter] = useState(0);

  function handleCounter(count) {
    let i = counter;
    if (count === "dec") {
      if (i == 0) alert("counter can not be lower than zero");
      else {
        i--;
        setCounter(i);
      }
    } else if (count === "in") {
      i++;
      setCounter(i);
    } else setCounter(0);
  }
  return (
    <Box component="div" py={6} sx={{backgroundColor:blue[100]}}>
      <Paper elevation={3} className="BoxDiv">
        <Stack direction="column" spacing={2}>
          <Typography
            variant="h5"
            sx={{ color: "black", alignSelf: "center" }}
            gutterBottom
          >
            React Counter
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "black", alignSelf: "center" }}
            gutterBottom
          >
            {" "}
            {counter}
          </Typography>
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => handleCounter("in")}>
              Increment
            </Button>
            <Button variant="contained" onClick={() => handleCounter("dec")}>
              Decrement
            </Button>
          </Stack>
          <Button
            variant="contained"
            className="Reset"
            onClick={() => handleCounter("reset")}
          >
            Reset
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Counter;
