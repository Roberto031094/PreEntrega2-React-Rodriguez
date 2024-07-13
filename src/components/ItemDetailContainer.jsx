import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const location = useLocation();
    const { breed } = location.state || {};

    if (!breed) {
        return <div>Error: No se encontró detalles de raza para la ID: {productId}.</div>;
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className=" text-center m-5 text-decoration-underline">INFORMACIÓN DEL CANINO</h1>
            <ItemDetail/>
            <Link to={`/`}>
                <button className='boton mt-4'>
                    <p className='boton_adquirir'>Regresar al catálogo</p>
                </button>
            </Link>
        </div>
    );
};

export default ItemDetailContainer;