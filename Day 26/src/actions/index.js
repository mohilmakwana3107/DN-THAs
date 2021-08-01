export const changeUsername = (input) => {
  return {
    type: "USERNAME_CHNG",
    payload: input,
  };
};

export const changeEmail = (input) => {
  return {
    type: "EMAIL_CHNG",
    payload: input,
  };
};
