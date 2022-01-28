import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

const productsReducer = (state, actions) => {
  if (actions.type === SIDEBAR_OPEN) return { ...state, isSidebarOpen: true };
  if (actions.type === SIDEBAR_CLOSE) return { ...state, isSidebarOpen: false };

  return state;
  throw new Error(`no matching ${actions.type}`);
};

export default productsReducer;
