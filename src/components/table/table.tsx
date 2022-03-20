import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

import { TableProps } from "./table.types";

const CustomTable: FC<TableProps> = (props) => {
  const navigate = useNavigate();

  const { rows, data, onClickRoute } = props;

  console.log(data)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {rows.map((row) => (
              <TableCell align="center">{row}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row, key) => {
              const keys = Object.keys(row);

              return (
                <TableRow
                  key={key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {keys.map((rowKey: string) => {
                    return (
                      <TableCell
                        align="center"
                        onClick={() =>
                          onClickRoute &&
                          row[onClickRoute.key] &&
                          navigate(
                            `${onClickRoute.link}${row[onClickRoute.key]}`
                          )
                        }
                      >
                        {row[rowKey]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
