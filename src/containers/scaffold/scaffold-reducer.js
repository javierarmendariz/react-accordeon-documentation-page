const scaffoldReducer = (state = null, action) => {
  switch (action.type) {
    case 'CASE_ONE':
    case 'CASE_TWO':
    default:
      return state;
  }
};

export default scaffoldReducer;
