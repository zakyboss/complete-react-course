import { useAppContext } from "../AppContext"

export  function useCalculateTotals() {
    const {outputData} = useAppContext();

    const totalInvestedCapital = outputData.reduce(
        (sum, row) => sum + row.investedCapital,
        0
      );
      const totalInterestEarned = outputData.reduce(
        (sum, row) => sum + row.totalInterest,
        0
      );
      const totalFinalAmount = outputData.reduce(
        (sum, row) => sum + row.totalAmount,
        0
      )
  return   {totalFinalAmount,totalInterestEarned,totalInvestedCapital}
  
}
