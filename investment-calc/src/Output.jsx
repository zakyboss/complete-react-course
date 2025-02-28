import { memo } from "react";
import { useAppContext } from "./AppContext";
import { useCalculateTotals } from "./hooks/useCalculateTotals";
import Message from "./Message";
import styles from "./Output.module.css";
import Row from "./Row";

const Output= memo( function Output() {
  const { outputData } = useAppContext();

  console.log("Output Data:", outputData);

  const { totalFinalAmount, totalInterestEarned, totalInvestedCapital } =
    useCalculateTotals();
  if (!outputData || outputData.length < 1) {
    return <Message />;
  } else {
    return (
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {outputData.map((row, index) => (
              <Row row={row} key={index} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{totalFinalAmount}</td>
              <td>-</td>
              <td>{totalInterestEarned}</td>
              <td>{totalInvestedCapital}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
})
export default Output
