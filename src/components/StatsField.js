import React from "react";
import TextField from "@material-ui/core/TextField";
import { getIn } from "formik";

export default function StatsField({ form, field, ...props }) {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <TextField
      margin="normal"
      required={true}
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
    />
  );
}
