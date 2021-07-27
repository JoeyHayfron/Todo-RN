const initialState = {
  sideMenuToggled: false,
};

export const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_SIDE_NAV':
      return {...state, sideMenuToggled: true};
    case 'HIDE_SIDE_NAV':
      return {...state, sideMenuToggled: false};
    default:
      return state;
  }
};
