import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/notas/misNotas';

var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

class MisNotasContainer extends Component {

    componentDidMount(){
        const { listar, page} = this.props;
        listar(page);
    }

    render() {
        const { data, loader, listar: onPageChange, onSortChange } = this.props;
        console.log(data);
        return (
            <div>
                <div className="mb-4 col-12">
                    <div className="mb-4 card card-small">
                        <div className="border-bottom card-header"><h6 className="m-0"> Mis Notas </h6></div>
                        <div className="p-0 px-3 pt-3">
                        <BootstrapTable
                            data={data.notas}
                        >
                            <TableHeaderColumn dataField="id" isKey dataAlign="center" dataSort>Id</TableHeaderColumn>
                            <TableHeaderColumn dataField="nombre_curso" dataAlign="center" dataSort>Nombre Curso</TableHeaderColumn>
                            <TableHeaderColumn dataField="nota" dataAlign="center" dataSort>Nota</TableHeaderColumn>
                            <TableHeaderColumn dataField="created" dataAlign="center" dataSort>Subido</TableHeaderColumn>
                        </BootstrapTable>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
        );
    }
}

const ms2p = (state) => {
    return {
        ...state.misNotas,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(MisNotasContainer);
