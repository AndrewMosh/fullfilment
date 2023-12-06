import { useEffect, useState } from 'react';
import { PACKAGE } from '../../utils/PACKAGe';
 import { LOGISTICS } from '../../utils/LOGISTICS';
 import { calculateBoxes } from '../../utils/CalculateBoxes';
import styles from './Calculator.module.scss';
import down from '../../assets/images/down.svg';
import up from '../../assets/images/up.svg';
import { ButtonBlueWithoutLink, ButtonTransparent, ButtonClear, ButtonError } from '../UI/Buttons/Buttons';
import CalculationResult from '../CalculationResult/CalculationResult';
const Calculator = () => {
  const [itemsQuantity, setItemsQuantity] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [lengthBox, setLengthBox] = useState('');
  const [boxQuantity, setBoxQuantity] = useState('');
  const [total, setTotal] = useState('');
  const [popup, setPopup] = useState(false);
  const [logistics, setLogistics]=useState(LOGISTICS);
  const [packages, setPackages]=useState(PACKAGE);
  const [error, setError]=useState(false);
  const [message, setMessage]=useState('');
  const [addresses, setAddresses]=useState([]);
  const [result,setResult]=useState(false);
  // const [packagesTotal, setPackagesTotal]=useState(0);
  // const [damagesTotal, setDamagesTotal]=useState(0);
  // const [zipTotal, setZipTotal]=useState(0);
  // const [bubbleTotal, setBubbleTotal]=useState(0);
  // const [additionalPackageTotal, setAdditionalPackageTotal]=useState(0);

const handleCalculate=()=> {
  if (height!=='' && width!=='' && lengthBox!=='' && itemsQuantity!=='') {
    setResult(!result);
    setError(false)
    setMessage('')
  } else {
    setError(true)
    setMessage('Вы не ввели данные')
  }
}
  const handleAddAddress = (e, place) => {
    const checkbox = e.target;
       if (checkbox.checked) {
      setAddresses((prevAddresses) => [...prevAddresses, checkbox.value+' - '+place]);
    } else {
      const newArr = addresses.filter((address) => address !== checkbox.value+' - '+place);
      setAddresses(newArr);
    }
   }
const showModal = () => {
  if (height!=='' && width!=='' && lengthBox!=='' && itemsQuantity!=='') {
    setPopup(!popup);
    setMessage('')
  } else {
    setError(true)
    setMessage('Вы не ввели данные')
  }
}
const clearData=()=>{
  setItemsQuantity('');
  setHeight('');
  setWidth('');
  setLengthBox('');
  setBoxQuantity('');
  setTotal('');
  setPopup(false);
  setLogistics(LOGISTICS);
  setPackages(PACKAGE);
  setError(false)
  setMessage('')
  setAddresses([]);
}
const handleRecalculate = () => {
clearData()
setResult(!result);
}
const handleCheckedChange = (id, type) => {
  if (height==='' && width==='' && lengthBox=='' && itemsQuantity=='') {
    setError(true)
    setMessage('Вы не ввели данные')
        } else {
          if (type==='logistics') {
            setLogistics(prevLogistics => {
              const index = prevLogistics.findIndex(item => item.id === id);
              if (index !== -1) {
                const updatedLogistics = [...prevLogistics];
                updatedLogistics[index] = { ...updatedLogistics[index], applied: !updatedLogistics[index].applied };
                return updatedLogistics;
              } else {
                return prevLogistics;
              }
            });
          } else {
            setError(false)
            setMessage('')
            setPackages(prevPackages => {
              const index = prevPackages.findIndex(item => item.id === id);
              if (index!== -1) {
                const updatedPackages = [...prevPackages];
                updatedPackages[index] = { ...updatedPackages[index], applied: !updatedPackages[index].applied };
                return updatedPackages;
              } else {
                return prevPackages;
              }
            });
          }
        }
}
  const handleCheckboxChange = (e, all) => {
    if (height==='' && width==='' && lengthBox==='' && itemsQuantity==='') {
setError(true)
setMessage('Вы не ввели данные')
    } else {
      setError(false)
      setMessage('')
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
    }
  };
const pricePerBox= itemsQuantity<=1000?160:itemsQuantity>=1001 && itemsQuantity<=2001?110:100
const handleHeight=(e)=>{
  setHeight(e.target.value)
  if (e.target.value>40) {
    setError(true)
    setMessage('не более 60х40х40см')
} else {
  setError(false)
  setMessage('')
}
}
const handleWidth=(e)=>{
  setWidth(e.target.value)
  if (e.target.value>40) {
    setError(true)
    setMessage('не более 60х40х40см')
}else {
  setError(false)
  setMessage('')
}
}
const handleLengthBox=(e)=>{
  setLengthBox(e.target.value)
  if (e.target.value>60) {
    setError(true)
    setMessage('не более 60х40х40см')
} else {
  setError(false)
  setMessage('')
}
}
useEffect(() => {
  if(height!=='' && width!=='' && lengthBox!=='' && !error){
    setBoxQuantity(() =>
      calculateBoxes(height, lengthBox, width, itemsQuantity)
    );
    setTotal(() => pricePerBox * boxQuantity);
  }
}, [height, width, lengthBox, itemsQuantity, pricePerBox, boxQuantity]);

  return (

    <div className={styles.calculator}>
      {!result ? <><div className={styles.title}>
      <h1>Узнайте стоимость услуг</h1>
      <ButtonTransparent>Скачать прайс-лист</ButtonTransparent>
      </div>
        <div className={styles.popup}>
        <div style={{border:popup?'2px solid #0250EE':'2px solid #A9B0BE'}} className={styles.inputContainer}  onClick={showModal}>
        <input className={styles.input} value={addresses} placeholder='Выберите адреc отгрузки товара'  type="text" />
        <img onClick={showModal} src={popup ? up : down} alt="choose" />
        </div>
          { popup  && <div className={styles.checkboxes}>
          <div className={styles.checkboxWrapper}> 
          {logistics.map((item) => (
            <div key={item.place} className={styles.address} >
          <div className={styles.checkboxContainer}>
            <div className={styles.inputCenter}>
            <input
            disabled={height!=='' && width!=='' && lengthBox!=='' && itemsQuantity!==''?false:true}
            className={styles.customCheckbox}
            id={item.place}
              type="checkbox"
              data-price={item.price}
              value={item.name}
              checked={item.applied}
              onChange={(e) => {
                handleCheckedChange(item.id, 'logistics')
                handleCheckboxChange(e, item.all)
                handleAddAddress(e, item.place)
              } }
            /> 
          <label htmlFor={item.place} className={styles.name} > {item.name}</label> 
          </div>
          <div className={styles.place}>{item.place}</div>
          </div>
          <div className={styles.price}>{item.price}₽ <br /> <span className={styles.per}>{item.per} </span></div>
          </div>
        ))}
         </div>
        </div>} 
        
</div>
<div className={styles.overlayContainer}>
<div className={styles.overlay} style={{display:popup?'flex':'none'}}></div>
      <div className={styles.params}>
        <h2>Заполните параметры товара</h2>
        <small>Укажите минимальные размеры единицы товара (ДхВхШ не более 60х40х40см)</small>
        <div className={styles.inputs}>
        <input style={{border:error?'2px solid #DB063B':'2px solid #D2D4D8'}} placeholder="Длина: 60" type="number" id="length" value={lengthBox} onChange={handleLengthBox}  />
        <input style={{border:error?'2px solid #DB063B':'2px solid #D2D4D8'}} placeholder="Высота: 40" type="number" id="height" value={height} onChange={handleHeight} />
        <input style={{border:error?'2px solid #DB063B':'2px solid #D2D4D8'}} placeholder="Ширина: 40" type="number" id="width" value={width} onChange={handleWidth}   />
        <input style={{border:error?'2px solid #DB063B':'2px solid #D2D4D8'}}  placeholder="Количество:100 000" type="number" id="quantity" value={itemsQuantity} onChange={(e)=>setItemsQuantity(+e.target.value)} />
        </div>
      </div>
   <div className={styles.services}>
    <h2>Выберите дополнительные услуги</h2>
    <div className={styles.inputWrapper}> 
{packages.map((item) => (
  !item.default &&
  <div className={styles.servicesContainer} >
  <input className={styles.customCheckbox}  checked={item.applied} id={item.name} type="checkbox" data-price={ itemsQuantity>1000?item.to1000:itemsQuantity>1001 && itemsQuantity<2001?item.from1001:item.from2001}  onChange={(e)=> {
    handleCheckedChange(item.id, 'packages') 
   handleCheckboxChange(e,item.all)
   
  }} /><label className={styles.name} style={{lineHeight:item.weight?'16px':'28px'}}  htmlFor={item.name}> {item.name} {item.weight?<span className={styles.weight}>{item.weight}</span>:''} <br />{item.info?<small style={{color:'#8A93A6',fontSize:'12px'}}>{item.info}</small>:''}</label> </div>
))}

   </div>
   </div>
   <div className={styles.buttons}>
   <div style ={{display:'flex',flexDirection:'column',justifyContent:'center'}}>{error? <ButtonError onClick={handleCalculate}>Рассчитать стоимость</ButtonError>: <ButtonBlueWithoutLink onClick={handleCalculate}>Рассчитать стоимость </ButtonBlueWithoutLink>}<div style={{textAlign:'center',color:'#DB063B',lineHeight:'16px',marginTop:'8px'}}>{message}</div></div>
<ButtonClear onClick={clearData}>Очистить данные</ButtonClear>
</div>
    </div></>:<CalculationResult total={total} handleRecalculate={handleRecalculate} width={width} height={height} lengthBox={lengthBox} itemsQuantity={itemsQuantity} boxQuantity={boxQuantity} logistics={logistics} packages={packages} />}
    
    </div>
  );
};

export default Calculator;
