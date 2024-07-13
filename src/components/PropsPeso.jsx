import React from 'react';

const PropsPeso = ({ peso }) => {
    const obtenerPeso = (pesoString) => {
        const regex = /(\d+)/; // Expresión regular para encontrar el primer número
        const match = pesoString.match(regex);
        
        if (match && match.length > 1) {
          return parseInt(match[1], 10); // Convertir el primer número encontrado a entero
        }
        
        return 0; // Valor por defecto si no se puede parsear
      };
    
      const pesoNumerico = obtenerPeso(peso);
      let precio = 0;
    
      // Cálculo de precio basado en el peso
      if (pesoNumerico < 5) {
        precio = "50.000"; 
      } else if (pesoNumerico >= 5 && pesoNumerico < 10) {
        precio = "75.000"; 
      } else if (pesoNumerico >= 10 && pesoNumerico < 20) {
        precio = "100.000"; 
      } else if (pesoNumerico >= 20 && pesoNumerico < 30) {
        precio = "125.000"; 
      } else if (pesoNumerico >= 30 && pesoNumerico <= 50) {
        precio = "150.000"; 
      } else {
        precio = "200.000"; 
      }
    
      return (
        <div>
          <p><strong>Precio:</strong> ${precio}</p>
        </div>
      );
    };

export default PropsPeso;