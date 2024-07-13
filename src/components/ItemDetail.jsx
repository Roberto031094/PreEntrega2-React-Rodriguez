import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PropsPeso from './PropsPeso';

const ItemDetail = () => {
    const { productId } = useParams();
    const location = useLocation();
    const { breed } = location.state || {};

    if (!breed) {
        return <div>Error: No se encontró detalles de raza para la ID: {productId}.</div>;
    }

    return (
        <section className="d-flex flex-row justify-content-center text-center" style={{ border: "2px solid black", borderRadius: '20px', backgroundColor: "rgb(240, 240, 240)" }}>
            <div className="m-5">
                <img src={breed.image.url} alt={breed.name} style={{ width: '300px', height: "300px", borderRadius: '20px', border: "2px solid black" }} />
            </div >
            <div  className="m-5 d-flex flex-column justify-content-center align-items-center">
                <h2>"{breed.name}"</h2>
                <p></p>
                <p><strong>ID:</strong> {breed.id}</p>
                <p><strong>Peso:</strong> {breed.weight.metric} kg</p>
                <p><strong>Altura:</strong> {breed.height.metric} cm</p>
                <PropsPeso peso={breed.weight.metric} />
                <p><strong>Stock:</strong> 1</p>
            </div>
        </section>
        
    );
};

export default ItemDetail;