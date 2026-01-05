import { createStore } from "redux";

const startingState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = startingState, action) {
  switch (action.type) {
    case "accounts/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "accounts/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "accounts/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "accounts/payloan":
      return {
        ...state,
        loan: state.loan - action.payload,
        balance: state.balance - state.loan,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

export const store = createStore(reducer);
store.dispatch({ type: "accounts/deposit", payload: 5000 });
console.log(store.getState());
store.dispatch({ type: "accounts/withdraw", payload: 4000 });
console.log(store.getState());
store.dispatch({
  type: "accounts/requestLoan",
  payload: {
    amount: 1000,
    purpose: "To buy a car",
  },
});
console.log(store.getState());

store.dispatch({ type: "accounts/payloan", payload: 1000 });
console.log(store.getState());
