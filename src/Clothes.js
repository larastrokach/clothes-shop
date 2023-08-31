function Clothes ({itemsForSale}){

    return (<div className="products">
        {itemsForSale.map((thing =>{
            const {id, name, searchTerm, price, image} =thing;

            return(
            <div className="product-card" key ={id}>
            <img src={image} width ="400px" alt = "clothes"/> 
            <div className="product-info">
                 <h3>{name}</h3>
                 <h4>$ {price}</h4>
            </div>
            </div>
                
            )       
            }))}
           </div>
    )
}

export default Clothes;