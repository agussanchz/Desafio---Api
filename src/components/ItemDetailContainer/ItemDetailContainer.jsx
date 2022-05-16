import React, { useEffect } from 'react'
import axios from 'axios'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {

    const [products, setProducts] = React.useState([])

    const getItem = new Promise ((resolve, reject) => {
        let condition = true
        setTimeout(() => {
            if(condition){
                resolve(
                    axios.get("https://api.mercadolibre.com/sites/MLA/search?q=mouse")
                )
            }else{
                reject("Error 404")
            }
        }, 2000)
    })

    useEffect(() =>{
        getItem
        .then(res => {
            const data = (res.data.results)
            const productFilter =  data.filter((el) => el.price > 2000)
            setProducts(productFilter)       
        })
        .catch((err) => console.log(err))
    },[])

    console.log(products)

    return (
        <ItemDetail products={products} />
    )
}
