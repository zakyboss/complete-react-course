import { createContext, useContext, useReducer, useMemo } from "react";

const initialState = {
  initialInvestment: "",
  annualInvestment: "",
  expectedReturnRate: "",
  duration: "",
  monthlyData: [],
  outputData: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "account/initialInvestment":
      return { ...state, initialInvestment: action.payload };
    case "account/annualInvestment":
      return { ...state, annualInvestment: action.payload };
    case "account/expectedReturnRate":
      return { ...state, expectedReturnRate: action.payload };
    case "account/duration":
      return { ...state, duration: action.payload };
    case "account/reset":
      return { ...initialState };
    default:
      return state;
  }
}

const MainContext = createContext();

export default function AppContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { initialInvestment, annualInvestment, expectedReturnRate, duration } =
    state;

  const outputData = useMemo(() => {
    if (
      !initialInvestment ||
      !annualInvestment ||
      !expectedReturnRate ||
      !duration
    ) {
      return [];
    }

    let dataArray = [];
    let investedCapital = +initialInvestment;

    for (let i = 1; i <= duration; i++) {
      investedCapital += +annualInvestment; 
      const amount = Math.round(
        investedCapital * Math.pow(1 + expectedReturnRate / 100 / 12, i * 12)
      );
      const interest = amount - investedCapital;

      dataArray.push({
        year: i,
        totalAmount: amount,
        totalInterest: interest,
        investedCapital,
        interest
      });
    }

    return dataArray;
  }, [initialInvestment, annualInvestment, expectedReturnRate, duration]);

  return (
    <MainContext.Provider value={{ state, dispatch, outputData }}>
      {children}
    </MainContext.Provider>
  );
}

function useAppContext() {
  return useContext(MainContext);
}

export { useAppContext };
