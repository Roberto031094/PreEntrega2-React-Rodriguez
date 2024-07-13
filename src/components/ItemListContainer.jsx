import React, { useState, useEffect } from "react";
import Api from "./Api";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const { id } = useParams();
    const [filteredBreeds, setFilteredBreeds] = useState([]);

    useEffect(() => {
        const fetchBreeds = async () => {
            const headers = new Headers({
                "Content-Type": "application/json",
                "x-api-key": "DEMO-API-KEY"
            });

            const requestOptions = {
                method: 'GET',
                headers: headers,
                redirect: 'follow'
            };

            try {
                const response = await fetch("https://api.thedogapi.com/v1/breeds", requestOptions);
                const breeds = await response.json();

                const filtered = breeds.filter(breed => {
                    const weight = parseInt(breed.weight.metric.split(' - ')[0]);
                    if (id === "pequeños") {
                        return weight <= 10;
                    } else if (id === "medianos") {
                        return weight > 10 && weight <= 25;
                    } else if (id === "grandes") {
                        return weight > 25;
                    } else {
                        return true; // Si no hay category, muestra todas las razas
                    }
                });

                setFilteredBreeds(filtered);
            } catch (error) {
                console.error('Error fetching breeds:', error);
            }
        };

        fetchBreeds();
    }, [id]);

    return (
        <div>
            <h1 className="d-flex flex-row justify-content-center text-center m-5">CATÁLOGO DE NUESTROS EJEMPLARES</h1>
            <Api breeds={filteredBreeds} /> 
        </div>
    );
}

export default ItemListContainer;