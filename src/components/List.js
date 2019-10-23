import React, { useContext, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";

import { PlayerContext } from "../context/PlayerContext";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 650
  }
}));

function totalScore(players) {
  return players
    .map(({ finalScore }) => Number(finalScore))
    .reduce((sum, i) => {
      return sum + i;
    }, 0)
    .toFixed(2);
}

export default function List() {
  const { players, setPlayers } = useContext(PlayerContext);

  const classes = useStyles();

  const lineupScore = useCallback(totalScore(players));

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"></TableCell>
              <TableCell>Player</TableCell>
              <TableCell align="right">PT</TableCell>
              <TableCell align="right">AST</TableCell>
              <TableCell align="right">REB</TableCell>
              <TableCell align="right">3S</TableCell>
              <TableCell align="right">STL</TableCell>
              <TableCell align="right">BLK</TableCell>
              <TableCell align="right">TO</TableCell>
              <TableCell align="right">PF</TableCell>
              <TableCell align="right">SCORE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map(player => (
              <TableRow key={player.id}>
                <TableCell padding="checkbox" component="th" scope="row">
                  <IconButton
                    onClick={() => {
                      const removedPlayer = player.id;
                      const newLineup = players.filter(
                        player => player.id !== removedPlayer
                      );
                      setPlayers(newLineup);
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                </TableCell>
                <TableCell>{player.player}</TableCell>
                <TableCell align="right">{player.pt}</TableCell>
                <TableCell align="right">{player.ast}</TableCell>
                <TableCell align="right">{player.reb}</TableCell>
                <TableCell align="right">{player.threes}</TableCell>
                <TableCell align="right">{player.stl}</TableCell>
                <TableCell align="right">{player.blk}</TableCell>
                <TableCell align="right">{player.to}</TableCell>
                <TableCell align="right">{player.pf}</TableCell>
                <TableCell align="right">{player.finalScore}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <Button onClick={() => setPlayers([])}>Reset</Button>
              </TableCell>
              <TableCell rowSpan={1}>Total</TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell align="right">{lineupScore}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
