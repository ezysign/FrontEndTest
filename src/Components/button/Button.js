import React from "react";

import { Button } from "@material-ui/core";

export default function Butt(props) {
  return (
    <Button
      id="button"
      variant="contained"
      color="primary"
      onClick={props.function}
    >
      {props.text}
    </Button>
  );
}
