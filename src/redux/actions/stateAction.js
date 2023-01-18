import { baseAction } from './baseAction';

const { success } = baseAction;

// Export All Base Action Functions
export const stateAction = {
  update,
  updateAndStoreLocally
};

/**
 * To Update Reducer Data Locally
 * @param type
 * @param data
 */
function update(type, data, successCallback = () => { }) {
  return (dispatch) => {
    dispatch(success(type, data));
    successCallback()
  }
};

function updateAndStoreLocally (type, data, key = null) {
  return (dispatch) => {
    if(key){
      localStorage.setItem(key, data)
    }
    dispatch(success(type, {[key]: data}));
  }
};