import { useAuthContext } from "./useAuthContext"

export const useAdminLogout = () => {
    const { dispatch } = useAuthContext()
    
    const adminLogout = () => {
        // remove user from storage
        localStorage.removeItem('admin')
        
        // dispatch logout action
        dispatch({type: 'LOGOUT'})
    }

    return {adminLogout}
}