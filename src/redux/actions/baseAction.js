// Export All Base Action Functions
export const baseAction = {
    success,
    failure,
    request
  };
  
  /**
   *
   * @param type
   * @param params
   */
  function request (type, params) {
    return {
      type,
      params
    };
  };
  
  /**
   *
   * @param type
   * @param data
   */
  function success (type, data) {
    return {
      type,
      data
    };
  };
  
  /**
   *
   * @param type
   * @param error
   */
  function failure (type, error) {
    if(!error){
      error = "Request timeout."
    }
    return {
      type,
      error: error.toString()
    };
  };