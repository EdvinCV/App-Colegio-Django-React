import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/notas/notas';
import NotasContainer from './NotasContainer';

const ms2p = (state) => {
    return {
        ...state.notas,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(NotasContainer);
