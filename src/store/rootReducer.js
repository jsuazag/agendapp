import { combineReducers } from 'redux';
import taskReducer from './tasks/taskReducer';

const rootReducer = combineReducers({
    task: taskReducer,
});

export default rootReducer;
