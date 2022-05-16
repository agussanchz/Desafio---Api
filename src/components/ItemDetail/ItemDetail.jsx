import React from "react"
import Item from "../Item/Item"

export default function ItemDetail({products}) {
    
    return (
        <>
            <h3>Lista de Productos</h3>
            {products.map((producto) => <Item producto={producto} key={producto.id}/> )}            
        </>
    )
}
