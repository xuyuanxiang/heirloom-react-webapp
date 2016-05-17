/**
 * @name
 * @description
 * @usage
 *
 * ==================================================
 * @version 1.0.0
 * @author xuyuanxiang
 * @date 16/5/17
 * ==================================================
 * @version
 * @updator
 * @date
 * @changelog
 *
 * ==================================================
 * ...
 */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const app = (state = {}, action) => state;

export default combineReducers({app, routing: routerReducer});
