import { combineReducers } from 'redux';
import taskReducer from './tasks/taskReducer';
import userReducer from './user/userReducer';
import redirectReducer from './redirect/redirectReducer';

const rootReducer = combineReducers({
    task: taskReducer,
    user: userReducer,
    redirect: redirectReducer
});

export default rootReducer;
