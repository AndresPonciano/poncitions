import { combineReducers } from 'redux';
import ModalReducer from './ModalReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    modal: ModalReducer,
    form: formReducer,
});
