// import constants
import { uiConstant, userConstant } from "../constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseAction } from "./baseAction";
import { userServices } from "../services";
import { stateAction } from "./stateAction";
const { request, failure, success } = baseAction;

toast.configure();
export const userAction = {
  register,
  login
};

/**
 * Signup with Google
 *
 */
function register(data, callback = () => {}) {
  return async (dispatch) => {
    dispatch(request(uiConstant.ON_REQUEST, "Loading..."));
    try {
      let resp = await userServices.register(data);
      callback(resp);
      dispatch(success(userConstant.UPDATE_USER, resp.data));
      dispatch(request(uiConstant.ON_SUCCESS));
      // dispatch(stateAction.updateAndStoreLocally(userConstant.TOKEN, resp.data.tokens.access.token, 'token'))
    } catch (e) {
      dispatch(request(uiConstant.ON_FAILED));
      console.error(e);
    }
  };
}

function login(data, callback = () => {}) {
  return async (dispatch) => {
    dispatch(request(uiConstant.ON_REQUEST, "Loading..."));
    try {
      let resp = await userServices.login(data);
      callback(resp);
      dispatch(
        stateAction.updateAndStoreLocally(
          userConstant.UPDATE_USER_ACCOUNT,
          resp.user._id,
          "userId"
        )
      );
      dispatch(request(uiConstant.ON_SUCCESS));
      // dispatch(stateAction.updateAndStoreLocally(userConstant.TOKEN, resp.data.tokens.access.token, 'token'))
    } catch (e) {
      dispatch(request(uiConstant.ON_FAILED));
      console.error(e);
    }
  };
}

