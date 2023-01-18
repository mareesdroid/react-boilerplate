import 'react-toastify/dist/ReactToastify.css';
import * as apiHelper from '../../helpers/api_helpers'
// import { ToastProvider, useToasts } from 'react-toast-notifications';

// toast.configure()
export const userServices = {
    register,
    login,
}
async function register(data) {
    try {
        const user = await apiHelper.postRequest(`userapi/sign_up`, data)
        // window.location.reload(false);
        return user
    } catch (e) {
        console.error(e)
        return e.toString()
    }
}

async function login(data) {
    try {
        const user = await apiHelper.postRequest(`userapi/login`, data)
        // window.location.reload(false);
        return user
    } catch (e) {
        console.error(e)
        return e.toString()
    }
}
