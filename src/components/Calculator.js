import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";

import StatsField from "./StatsField";
import { PlayerContext } from "../context/PlayerContext";

var ptMULT = 0.71;
var astMULT = 3.28;
var rebMULT = 1.8;
var stlMULT = 11.05;
var blkMULT = 16.26;
var threesMULT = 7.5;
var toMULT = 6;
var pfMULT = 4.42;

var schema = yup.object({
  player: yup
    .string()
    .required()
    .trim(),
  pt: yup.number().required(),
  ast: yup.number().required(),
  reb: yup.number().required(),
  threes: yup.number().required(),
  stl: yup.number().required(),
  blk: yup.number().required(),
  to: yup.number().required(),
  pf: yup.number().required()
});

function score(values) {
  const playerValue =
    values.pt * ptMULT * 1.05 +
    values.ast * astMULT * 1.2 +
    values.reb * rebMULT * 1.13 -
    values.to * toMULT * 1.13 +
    values.stl * stlMULT +
    values.blk * blkMULT +
    values.threes * threesMULT -
    values.pf * pfMULT;
  return playerValue.toFixed(2);
}

export default function Calculator() {
  const { players, setPlayers } = useContext(PlayerContext);

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        player: "",
        pt: "",
        ast: "",
        reb: "",
        threes: "",
        stl: "",
        blk: "",
        to: "",
        pf: ""
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const finalScore = score(values);
        setPlayers([...players, { ...values, finalScore }]);
        setSubmitting(true);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            label="Player"
            name="player"
            type="text"
            onChange={handleChange}
            value={values.player}
            component={StatsField}
          />
          <Field
            label="PT"
            name="pt"
            type="number"
            onChange={handleChange}
            value={values.pt}
            component={StatsField}
          />
          <Field
            label="AST"
            name="ast"
            type="number"
            onChange={handleChange}
            value={values.ast}
            component={StatsField}
          />
          <Field
            label="REB"
            name="reb"
            type="number"
            onChange={handleChange}
            value={values.reb}
            component={StatsField}
          />
          <Field
            label="Threes"
            name="threes"
            type="number"
            onChange={handleChange}
            value={values.threes}
            component={StatsField}
          />
          <Field
            label="STL"
            name="stl"
            type="number"
            onChange={handleChange}
            value={values.stl}
            component={StatsField}
          />
          <Field
            label="BLK"
            name="blk"
            type="number"
            onChange={handleChange}
            value={values.blk}
            component={StatsField}
          />
          <Field
            label="TO"
            name="to"
            type="number"
            onChange={handleChange}
            value={values.to}
            component={StatsField}
          />
          <Field
            label="PF"
            name="pf"
            type="number"
            onChange={handleChange}
            value={values.pf}
            component={StatsField}
          />
          <br />
          <br />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
