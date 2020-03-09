import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/asignaciones/asignaciones';
import AsignacionesContainer from './AsignacionesContainer';


const ms2p = (state) => {
    return {
        ...state.asignaciones,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(AsignacionesContainer);
