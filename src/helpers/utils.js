import _ from 'lodash'
import moment from 'moment'
export const isValidString = (str) => {
    return str.match(/^[a-zA-Z ]+$/);
};

export const isEmpty = (str) => {
   return str && str.trim() == '' ? false : true;
};

export const HanldeApis = (resp) => {
   
    if (resp.status === 401) {
        
        localStorage.setItem('access', 'Access Denied')
        window.location.reload()
        return resp
    } else {
        localStorage.setItem('access', 'Access Granted')
        return resp
    }
};

export const logout = () => {
    localStorage.clear()
    window.location.reload()
}

export const mergeArray = (arr1, arr2, key1, key2) => {
    const merged = _.merge(_.keyBy(arr1, key1), _.keyBy(arr2, key2));
    return _.values(merged)
}

export const getCurrentPlan = (selectPlan, key, type) => {
            if(type === 'date'){
                return new Date(selectPlan[key] * 1000)
            }
            else if(type === 'status'){
                if(selectPlan[key] == true)
                    return true
                else
                    return false
            }
            else
                return Number((selectPlan[key]))
}

