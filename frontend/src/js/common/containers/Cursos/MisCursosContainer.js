import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from "../../components/Utils/Grid";

var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

class MisCursosContainer extends Component {

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
                    <Link to="/cursos/nuevo">
                    </Link>
                    <div className="mb-4 card card-small">
                        <div className="border-bottom card-header"><h6 className="m-0"> Mis Cursos </h6></div>
                        <div className="p-0 px-3 pt-3">
                        <BootstrapTable
                            data={data.cursos}
                        >
                            <TableHeaderColumn dataField="nombre_curso" isKey dataAlign="center" dataSort>Nombre Curso</TableHeaderColumn>
                            <TableHeaderColumn dataField="nombre_completo" dataAlign="center" dataSort>Nombre Completo</TableHeaderColumn>
                            <TableHeaderColumn dataField="promedio" dataAlign="center" dataSort>Promedio</TableHeaderColumn>
                            <TableHeaderColumn dataField="finalizado" dataAlign="center" dataSort>Finalizado</TableHeaderColumn>
                        </BootstrapTable>
                        </div><br></br>
                    </div>
                </div><br></br>
            </div>
        );
    }
}

export default MisCursosContainer;
