const initialStateCustomers = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomers, action) {
  switch (action.type) {
    case "customers/createUserName":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };

    case "customers/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state; // ✅ MUST HAVE
  }
}

export function createUserName(fullName, nationalId) {
  return {
    type: "customers/createUserName",
    payload: {
      fullName,
      nationalId,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateName(fullname) {
  return { type: "customers/updateName", payload: fullname };
}
