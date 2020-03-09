import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from "../../components/Utils/Grid";
import { standardActions } from "../../components/Utils/Grid/StandardActions";


export default class AsignacionesContainer extends Component {
    static propTypes = {
    };

    componentWillMount() {
        const { listar, page } = this.props;
        listar(page);
    }

    componentDidMount() {
        const { listar, page } = this.props;
        listar(page);
    }

    render() {
        const { data, loader, listar: onPageChange, onSortChange } = this.props;

        return (
            <div className="py-4">
                <h2>Asignación de cursos</h2>
                <div className="mb-4 col-12">
                    <Link to="/asignacion/nuevo">
                        <button className="btn btn-primary btn-sm mr-1">Asignar Curso</button>
                    </Link>
                    <div className="mb-4 card card-small">
                        <div className="border-bottom card-header"><h6 className="m-0"> Listado General de Asignaciones </h6></div>
                        <div className="p-0 px-3 pt-3">
                            <Grid hover striped data={data} loading={loader} onPageChange={onPageChange} onSortChange={onSortChange} >
                                <TableHeaderColumn
                                    isKey
                                    dataField="id"
                                    dataSort
                                >
                                    Id
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                    dataField="nombre_curso"
                                    dataSort
                                >
                                    Curso
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                    dataField="nombre_completo"
                                    dataSort
                                >
                                    Estudiante
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                    dataField="created"
                                    dataSort
                                >
                                    Fecha Asignacion
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                    dataField="finalizado"
                                    dataSort
                                >
                                    Finalizado:
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                    dataField="id"
                                    dataAlign="center"
                                    dataSort
                                    dataFormat={standardActions({ editar: "grids", ver: "grids", eliminar: () => {console.log("eliminado")} })}
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
