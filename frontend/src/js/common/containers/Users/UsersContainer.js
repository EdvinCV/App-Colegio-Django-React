import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/usuarios/usuarios';
import { standardActions } from "../../components/Utils/Grid/StandardActions";
import Grid from "../../components/Utils/Grid";

class UsersContainer extends Component {

    componentDidMount(){
        const { listar, page} = this.props;
        listar(page);
    }

    componentDidMount() {
        const { listar, page } = this.props;
        listar(page);
    }

    render() {
        const { data, loader, listar: onPageChange, onSortChange } = this.props;

        console.log(data);
        return (
            <div>
                <div className="mb-4 col-12">
                        <div className="mb-4 card card-small">
                            <div className="border-bottom card-header"><h6 className="m-0">Control de Usuarios</h6></div>
                            <div className="p-0 px-3 pt-3">
                                <Grid hover striped data={data} loading={loader} onPageChange={onPageChange} onSortChange={onSortChange} >
                                    <TableHeaderColumn
                                        isKey
                                        dataField="username"
                                        dataSort
                                    >
                                        Usuario
                                    </TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField="first_name"
                                        dataSort
                                    >
                                        Nombre
                                    </TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField="last_name"
                                        dataSort
                                    >
                                        Apellidos
                                    </TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField="id"
                                        dataAlign="center"
                                        dataSort
                                        dataFormat={standardActions({ editar: "grids", ver: "grids", eliminar: () => {} })}
                                    >
                                        Acciones
                                    </TableHeaderColumn>
                                </Grid>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

const ms2p = (state) => {
    return {
        ...state.usuarios,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(UsersContainer);
