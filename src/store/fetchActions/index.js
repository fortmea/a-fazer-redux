import api from "../../services/api";
import {get} from "../../store/commit/commit.action"
export const getCommitInfo = () =>{
    return dispatch => {
        api.get('/repos/fortmea/a-fazer-redux/branches/main').then(res =>  dispatch(get(res.data)))
    }
}