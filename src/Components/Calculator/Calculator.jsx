import { useEffect, useState } from 'react';
import { PACKAGE } from '../../utils/PACKAGe';
 import { LOGISTICS } from '../../utils/LOGISTICS';
 import { calculateBoxes } from '../../utils/CalculateBoxes';

const Calculator = () => {
  const [itemsQuantity, setItemsQuantity] = useState(0);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [boxQuantity, setBoxQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  

  const handleCheckboxChange = (e, all) => {
    const checkbox = e.target;
    const price = parseFloat(checkbox.getAttribute('data-price'));
    if (checkbox.checked) {
      if(all===true){
        setTotal((prevTotal) => (price*itemsQuantity)+prevTotal);
      }else {
        setTotal((prevTotal) => (prevTotal + price));
      }
    } else {
      if(all===true){
        setTotal((prevTotal) => prevTotal - (price * itemsQuantity));
      }else {
        setTotal((prevTotal) => (prevTotal - price));
      }
      
    }
  };
const pricePerBox= itemsQuantity<1000?160:itemsQuantity>1001 && itemsQuantity<2001?110:100


useEffect(() => {
  setBoxQuantity(() => calculateBoxes(height, length, width, itemsQuantity))
  setTotal( pricePerBox*boxQuantity)
}, [height, width, length, itemsQuantity, boxQuantity, pricePerBox])

  return (
    <div>
        <h1>Калькулятор стоимости</h1>
        
          {LOGISTICS.map((item) => (
          <label key={item.place}>
            <input
              type="checkbox"
              data-price={item.price}
              value={item.name}
              onChange={handleCheckboxChange}
            />
            {item.name} - {item.place}
          </label>
        ))}
       <br />
        <input placeholder="высота" type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
        <input placeholder="ширина" type="number" id="width" value={width} onChange={(e) => setWidth(e.target.value)} />
        <input placeholder="длина" type="number" id="length" value={length} onChange={(e) => setLength(e.target.value)} />
        <input  placeholder="количество единиц" type="number" id="quantity" value={itemsQuantity} onChange={(e) => {
            setItemsQuantity( e.target.value)
            setBoxQuantity(() => calculateBoxes(height, length, width, e.target.value))
            setTotal( pricePerBox*boxQuantity)
        } } /> <br />
{PACKAGE.map((item) => (
  <label key={item.name}> 
  <input type="checkbox" data-price={itemsQuantity>1000?item.to1000:itemsQuantity>1001 && itemsQuantity<2001?item.from1001:item.from2001}  onChange={(e)=>handleCheckboxChange(e,item.all)} /> {item.name} </label>
))}

      <p>Итоговая стоимость: {total}</p>
      <p>Количество коробок: {boxQuantity}</p>
    </div>
  );
};

export default Calculator;


//проверка на брак каждую единицу или коробку?