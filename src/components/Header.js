import DateInput from "./DateInput0";

export default function Header({ date, onDateChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SolKin</a>
                <DateInput date={date} onDateChange={onDateChange} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Hoy</a>
                        </li>
                        {/* Otros elementos de la navbar si los necesitas */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
