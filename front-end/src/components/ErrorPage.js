import { useRouteError } from "react-router-dom";

export default function ErrorPage(props) {
    const error = useRouteError();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="mt-3">Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        {props.error ? <em>{props.error.statusText || props.error.message}</em> : <em>{error.statusText || error.message}</em>}

                    </p>
                </div>
            </div>
        </div>
    )
}