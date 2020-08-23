import React from "react";

import { TextField } from "@material-ui/core";

export default function Text(props) {
  return (
    <TextField
      className="input"
      data-testid="input"
      id="outlined-basic"
      label={props.label}
      variant="outlined"
      disabled={props.loading ? true : false}
      size="small"
      type={props.type}
      onChange={props.function}
    />
  );
}
