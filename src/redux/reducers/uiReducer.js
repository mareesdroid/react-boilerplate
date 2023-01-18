import { uiConstant } from "../constants";

const initialState = {
  loading: false,
};

export default function (state = initialState, action) {
  if (!action || (action && !action.type)) return state;
  switch (action.type) {
    case uiConstant.ON_REQUEST:
      return {
        ...state,
        loading: true,
        text: action.data
      }
      case uiConstant.ON_SUCCESS:
      return {
        ...state,
        loading: false,
        text: ''
      }
      case uiConstant.ON_FAILED:
      return {
        ...state,
        loading: false,
        text: ''
      }
    default:
      return state;
  }
}