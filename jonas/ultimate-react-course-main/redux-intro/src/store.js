import { createStore } from "redux";

const initialStateAccounts = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCutomers = {
  fullName: "",
  nationalId: "",
  createdAt: new Date().toISOString,
};
function customerReducer(state = initialStateCutomers, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };

    default:
      return state;
  }
}

export const customerStore = createStore(customerReducer);
function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: payload },
  };
}

function updateCustomers(fullName) {
  return { type: "customer/updateCustomers", payload: fullName };
}

// for accounts

function reducerAccounts(state = initialStateAccounts, action) {
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
        loan: 0,
        balance: state.balance - state.loan,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

export const store = createStore(reducerAccounts);
// pld way
// store.dispatch({ type: "accounts/deposit", payload: 5000 });
// console.log(store.getState());
// store.dispatch({ type: "accounts/withdraw", payload: 4000 });
// console.log(store.getState());
// store.dispatch({
//   type: "accounts/requestLoan",
//   payload: {
//     amount: 1000,
//     purpose: "To buy a car",
//   },
// });
// console.log(store.getState());

// store.dispatch({ type: "accounts/payloan", payload: 1000 });
// console.log(store.getState());

function deposit(amount) {
  return { type: "accounts/deposit", payload: amount };
}
function withDraw(amount) {
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

function payLoan() {
  return { type: "accounts/payloan" };
}

store.dispatch(deposit(1000));

console.log(store.getState());

store.dispatch(withDraw(100));
console.log(store.getState());

// using function order
store.dispatch(requestLoan(100, "to become a world best developer"));
console.log(store.getState());

store.dispatch(payLoan(100));
console.log(store.getState());
