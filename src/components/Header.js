import DateInput from "./DateInput";
import { Link } from "react-router-dom";

export default function Header({ day, month, year, onDateChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SolKin</a>
                <DateInput
                    day={day}
                    month={month}
                    year={year}
                    onDateChange={onDateChange}
                />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Hoy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/kins">Mis Kins</a>
                        </li>
                        {/* Otros elementos de la navbar si los necesitas */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
