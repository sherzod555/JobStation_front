import { useDispatch, useSelector } from "react-redux"
import { alertActions } from 'store/Alert'


const useAlert = () => {
    const dispatch = useDispatch()
    const { id: prevId } = useSelector(state => state.alert?.at(-1) || {})
    const id = prevId ? prevId + 1 : 1

    const addAlert = ({ message, type = 'error' }) => {
        dispatch(alertActions.addAlert({id: id, message, type}))
        setTimeout(() => {
            dispatch(alertActions.deleteAlert(id))
        }, 10000)
    }

    return {
        addAlert
    }
}

export default useAlert