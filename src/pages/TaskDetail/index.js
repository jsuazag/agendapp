import React, {Fragment} from "react";
import { useParams } from "react-router";

export const TaskDetail = () => {

    const { id } = useParams();

    return (
        <Fragment>
            <div>
                <p>In progress</p>
            </div>
            <h3>Titulo</h3>
            <p>Lorem ......</p>
            <div>
                <div>
                    <p>due date</p>
                </div>
                <div>
                    <p>Responsable</p>
                </div>
            </div>
        </Fragment>
    )
}
