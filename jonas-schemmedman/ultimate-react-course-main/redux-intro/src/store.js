import { createStore } from "redux";
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
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

const store = createStore(reducer);

// store.dispatch({ type: "accounts/deposit", payload: 1000 });
// console.log(store.getState());

// store.dispatch({ type: "accounts/withdraw", payload: 600 });
// console.log(store.getState());

// store.dispatch({
//   type: "accounts/requestLoan",
//   payload: {
//     amount: 5000,
//     purpose: "buy a car",
//   },
// });
// console.log(store.getState());

// store.dispatch({ type: "accounts/payLoan" });
// console.log(store.getState());

// using action creators

function deposits(amount) {
  return { type: "accounts/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "accounts/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "accounts/requestLoan",
    payload: {
      amount,
      purpose,
    },
  };
}

store.dispatch(deposits(400000));
console.log(store.getState());

store.dispatch(withdraw(300000));
console.log(store.getState());
store.dispatch(requestLoan(1000, "buy a car"));
console.log(store.getState());
