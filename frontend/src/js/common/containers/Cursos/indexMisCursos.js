import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/cursos/misCursos';
import MisCursosContainer from './MisCursosContainer';


const ms2p = (state) => {
    return {
        ...state.misCursos,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(MisCursosContainer);
