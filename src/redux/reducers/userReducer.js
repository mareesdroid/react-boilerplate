import { userConstant } from "../constants";

const initialState = {
  user: {
  },
};

export default function (state = initialState, action) {
  if (!action || (action && !action.type)) return state;

  switch (action.type) {
            case userConstant.REGISTER:
              return {
                ...state,
                data: action.data
              }
       
    default:
      return state;
  }
}