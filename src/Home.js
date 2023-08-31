
import Clothes from './Clothes';
import { data } from './data';
import  { useState } from 'react';
import Buttons from './Buttons';


function Home () {
const [clothes, setClothes] = useState (data);

const chosenClothes = (searchTerm) => {
const newClothes = data.filter (thing =>thing.searchTerm === searchTerm);
setClothes(newClothes);
}

  return(
<div> 
<div className='cont'>
  <h2 className='back'>Free Standart Shipping</h2>
</div>

<Buttons filteredClothes = {chosenClothes} chosenAll = {setClothes}/>
<Clothes  itemsForSale = {clothes}/>
</div>
  )
}

export default Home;