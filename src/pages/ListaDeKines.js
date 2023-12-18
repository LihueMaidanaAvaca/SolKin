import "./ListaDeKines.css"

export default function ListaDeKines() {
    return (
        <div className="card">
            <div className="card-body">
                <a href="/form" className="card-link">
                    <span className="plus-sign">+</span>
                    <p>Add New Item</p>
                </a>
            </div>
        </div>
    )
}