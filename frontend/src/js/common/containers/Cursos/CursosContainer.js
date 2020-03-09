import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { standardActions } from "../../components/Utils/Grid/StandardActions";
import Grid from "../../components/Utils/Grid";


export default class CursosContainer extends Component {
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

    handleDelete = id => {
        console.log(id);
    }

    render() {
        const { data, loader, listar: onPageChange, onSortChange } = this.props;

        return (
            <div className="py-4">
                <h2>Control de cursos</h2>
                <div className="mb-4 col-12">
                    <Link to="/cursos/nuevo">
                        <button className="btn btn-primary btn-sm mr-1"> Agregar Curso</button>
                    </Link>
                    <div className="mb-4 card card-small">
                        <div className="border-bottom card-header"><h6 className="m-0"> Información General Cursos </h6></div>
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
                                    Nombre de curso
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                    dataField="descripcion"
                                    dataSort
                                >
                                    Descripción
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                    dataField="creditos"
                                    dataSort
                                >
                                    Créditos
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                    dataField="nombre_maestro"
                                    dataSort
                                >
                                    Impartido por:
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                    dataField="num_estudiantes"
                                    dataSort
                                >
                                    Est. Asignados:
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                    dataField="promedio_total"
                                    dataSort
                                >
                                    Promedio Total:
                                </TableHeaderColumn>
                                <TableHeaderColumn
                                    dataField="id"
                                    dataAlign="center"
                                    dataSort
                                    dataFormat={standardActions({ editar: "cursos", ver: "grids", eliminar: () => {} })}
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
