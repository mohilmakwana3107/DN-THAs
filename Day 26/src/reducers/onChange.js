const initialState = {
  userName: "",
  email: "",
};

const onChange = (state = initialState, action) => {
  switch (action.type) {
    case "USERNAME_CHNG":
      return {
        ...state,
        userName: action.payload,
      };

    case "EMAIL_CHNG":
      return {
        ...state,
        email: action.payload,
      };

    default:
      return state;
  }
};

export default onChange;
