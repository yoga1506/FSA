import { createSlice } from "@reduxjs/toolkit";

import { combineReducers, createStore } from "redux";
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposits(state, action) {
      state.balance = state.balance + action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state, action) {
      state.purpose = "";
      state.balance = state.balance - state.loan; // same as state.balance = state.balance-state.loan
      state.loan = 0;
    },
    covertingCurrency(state, action) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposits(amount, currency) {
  const cur = currency?.toUpperCase?.().trim();

  if (cur === "USD") {
    return { type: "account/deposits", payload: amount };
  }
  // MIDDLEWARE -THUNK
  return async function (dispatch, getState) {
    dispatch({ type: "account/covertingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency}&to=USD`,
    );
    const data = await res.json();

    const converted = data?.rates?.USD;
    if (!converted) {
      console.error("Currency conversion failed:", data);
      return;
    }

    dispatch({ type: "accounts/deposit", payload: converted });
  };
}
export default accountSlice.reducer;

/*

// using clasic redux method

export default function accountReducer(state = initialStateAccounts, action) {
  switch (action.type) {
    case "accounts/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "accounts/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "accounts/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "accounts/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}
export function deposits(amount, currency) {
  const cur = currency?.toUpperCase?.().trim();

  if (cur === "USD") {
    return { type: "accounts/deposit", payload: amount };
  }
  // MIDDLEWARE -THUNK
  return async function (dispatch, getState) {
    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${cur}&to=USD`,
    );
    const data = await res.json();
    console.log(data);

    const converted = data?.rates?.USD;
    if (!converted) {
      console.error("Currency conversion failed:", data);
      return;
    }

    dispatch({ type: "accounts/deposit", payload: converted });
  };
}

export function withdraw(amount) {
  return { type: "accounts/withdraw", payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: "accounts/requestLoan",
    payload: {
      amount,
      purpose,
    },
  };
}

export function payLoan() {
  return { type: "accounts/payLoan" };
}


*/
