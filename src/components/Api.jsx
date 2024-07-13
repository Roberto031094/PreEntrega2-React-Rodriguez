import React, { useContext } from 'react';
import { ContadorContext } from './ContadorContext';
import PropsPeso from './PropsPeso';
import { Link } from 'react-router-dom';

const Api = ({ breeds }) => {
    const { incrementarContador, decrementarContador } = useContext(ContadorContext);

    if (breeds.length === 0) {
        return <p className="m-3"><strong>Cargando...</strong></p>;
    }

    return (
        <div>
            <ul className="list-unstyled product-grid">
                {breeds.map(breed => (
                    <li key={breed.id} className="product">
                        <img src={breed.image.url} alt={breed.name} style={{ width: '250px', height: "250px" }} className="card-img-top imagen_producto" />
                        <h5 className="card-title">{breed.name}</h5>
                        <PropsPeso peso={breed.weight.metric} />
                        <Link to={`/item/${breed.id}`} state={{ breed }}>
                            <button className='boton' style={{ backgroundColor: "skyblue" }}>
                                <p className='boton_adquirir'>Detalles</p>
                            </button>
                        </Link>
                        <button className='boton' onClick={incrementarContador}>
                            <p className='boton_adquirir'>Adquirir</p>
                        </button>
                        <button className='boton' onClick={decrementarContador} style={{ backgroundColor: "pink" }}>
                            <p className='boton_adquirir'>Cancelar</p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Api;