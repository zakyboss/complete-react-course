import React from "react";
import styles from './Row.module.css'
export default function Row({ row }) {
  const { totalInterest, totalAmount, year, interest, investedCapital } = row;
  
  return (
    <tr className={styles.row}>
      <td>{year||1}</td>
      <td>{totalAmount||1}</td>
      <td>{interest||1}</td>
      <td>{totalInterest||1}</td>
      <td>{investedCapital||1}</td>
    </tr>
  );
}
