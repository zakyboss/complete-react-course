import React, { memo } from "react";
import { useAppContext } from "./AppContext";
import styles from "./Form.module.css";

const Form = memo(function Form() {
  const { dispatch } = useAppContext();

  return (
    <div className={styles.formContainer}>
      <form
        onSubmit={(e) => {
          //   calculateMonthly(e);
          e.target.reset();
        }}
      >
        <div className={styles.inputGroup}>
          <input
            type="text"
            onChange={(e) =>
              dispatch({
                type: "account/initialInvestment",
                payload: +e.target.value,
              })
            }
            placeholder="Enter Initial Investment"
          />
          <input
            type="text"
            onChange={(e) =>
              dispatch({
                type: "account/annualInvestment",
                payload: +e.target.value,
              })
            }
            placeholder="Enter Annual Investment"
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="text"
            onChange={(e) =>
              dispatch({
                type: "account/expectedReturnRate",
                payload: +e.target.value,
              })
            }
            placeholder="Enter Expected Return Rate"
          />
          <input
            type="text"
            onChange={(e) =>
              dispatch({ type: "account/duration", payload: +e.target.value })
            }
            placeholder="Enter Duration"
          />
        </div>
      </form>
    </div>
  );
});
export default Form;
