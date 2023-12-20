import React, { useEffect, useState, useRef } from 'react';
import { PACKAGE } from '../../utils/PACKAGE';
import { LOGISTICS } from '../../utils/LOGISTICS';
import { calculateBoxes } from '../../utils/CalculateBoxes';
import styles from './Calculator.module.scss';
import down from '../../assets/icons/down.svg';
import up from '../../assets/icons/up.svg';
import {
  ButtonBlueWithoutLink,
  ButtonClear,
  ButtonError,
  ButtonTransparentDownload
} from '../UI/Buttons/Buttons';
import CalculationResult from '../CalculationResult/CalculationResult';
import useModal from '../Portal/useModal';
import pricelist from '../../assets/downloads/pricelist.jpeg'
const Calculator = () => {
  const [itemsQuantity, setItemsQuantity] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [lengthBox, setLengthBox] = useState('');
  const [boxQuantity, setBoxQuantity] = useState('');
  const [total, setTotal] = useState('');

  const [logistics, setLogistics] = useState(LOGISTICS);
  const [packages, setPackages] = useState(PACKAGE);
  const [error, setError] = useState({ params: false, logistics: false });
  const [message, setMessage] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [result, setResult] = useState(false);
  const componentRef = useRef();
  const { isModalOpen, openModal, modalRef } = useModal();
  const scrollToTop = () => {
    componentRef.current.scrollIntoView({
      behavior: 'smooth',
    
    });
  };

  const handleCalculate = () => {
    if (height !== '' && width !== '' && lengthBox !== '' && itemsQuantity !== '' && logistics.some(item => item.applied === true)) {
      if (height<=40 && width<=40 && lengthBox<=60 && itemsQuantity>0) {
        setResult(!result);
        setError({ params: false, logistics: false });
        setMessage('');
      }else {
        setError({ params: true, logistics: false });
        setMessage('Не более 60х40х40см');
      }
    } else if (height === '' && width === '' && lengthBox === '' && itemsQuantity === '' && logistics.some(item => item.applied === true)) {
      setError({ params: true, logistics: false });
      setMessage('Вы не ввели данные');
    } else if (logistics.every(item => item.applied === false) && height !== '' && width !== '' && lengthBox !== '' && itemsQuantity !== '') {
      setError({ params: false, logistics: true });
      setMessage('Вы не ввели данные');
    } else {
      setError({ params: true, logistics: true });
      setMessage('Вы не ввели данные');
    }
    scrollToTop();
  };

  const handleAddAddress = (e, place) => {
    const checkbox = e.target;
    if (checkbox.checked) {
      setAddresses((prevAddresses) => [...prevAddresses, `${checkbox.value} - ${place}`]);
    } else {
      const newArr = addresses.filter((address) => address !== `${checkbox.value} - ${place}`);
      setAddresses(newArr);
    }
  };


  const clearData = () => {
    setItemsQuantity('');
    setHeight('');
    setWidth('');
    setLengthBox('');
    setBoxQuantity('');
    setTotal('');
    setLogistics(LOGISTICS);
    setPackages(PACKAGE);
    setError({ params: false, logistics: false });
    setMessage('');
    setAddresses([]);
  };

  const handleRecalculate = () => {
    clearData();
    setResult(!result);
    scrollToTop();
  };

  const handleCheckedChange = (id, type) => {
    if (type === 'logistics') {
      setLogistics((prevLogistics) => {
        const index = prevLogistics.findIndex((item) => item.id === id);
        if (index !== -1) {
          const updatedLogistics = [...prevLogistics];
          updatedLogistics[index] = { ...updatedLogistics[index], applied: !updatedLogistics[index].applied };
          return updatedLogistics;
        } else {
          return prevLogistics;
        }
      });
    } else {
      setPackages((prevPackages) => {
        const index = prevPackages.findIndex((item) => item.id === id);
        if (index !== -1) {
          const updatedPackages = [...prevPackages];
          updatedPackages[index] = { ...updatedPackages[index], applied: !updatedPackages[index].applied };
          return updatedPackages;
        } else {
          return prevPackages;
        }
      });
    }
  };

  const handleHeight = (e) => {
    setHeight(+e.target.value);
    if (e.target.value > 40 ) {
      setHeight('')
      setError({ params: true, logistics: false });
      setMessage('Не более 60х40х40см');
    } else if (height===0) {
      setHeight('')
    } else {
      setError({ params: false, logistics: false });
      setMessage('');
    }
  };

  const handleWidth = (e) => {
    setWidth(+e.target.value);
    if (e.target.value > 40) {
      setWidth('')
      setError({ params: true, logistics: false });
      setMessage('Не более 60х40х40см');
    } else if (width===0) {
      setWidth('')
    }else {
      setError({ params: false, logistics: false });
      setMessage('');
    }
  };

  const handleLengthBox = (e) => {
    setLengthBox(+e.target.value);
    if (e.target.value > 60) {
      setLengthBox('')
      setError({ params: true, logistics: false });
      setMessage('Не более 60х40х40см');
    } else if (lengthBox===0) {
      setLengthBox('')
    } else {
      setError({ params: false, logistics: false });
      setMessage('');
    }
  };
  const handleQuantity = (e) => {
    setItemsQuantity(+e.target.value);
    if (itemsQuantity===0) {
      setItemsQuantity('')
    }

  };
  const handleButtonClick = (e) => {
    // Предотвращаем всплытие события, чтобы оно не достигло handleClickOutside
    e.stopPropagation();
    openModal();

  };


  useEffect(() => {
    if (height !== '' && width !== '' && lengthBox !== '' && !error.params && itemsQuantity !== '') {
      setBoxQuantity(() =>
        calculateBoxes(height, lengthBox, width, itemsQuantity)
      );
    }
  }, [height, width, lengthBox, itemsQuantity, boxQuantity]);
  

  return (
    <div  className={styles.calculator} ref={componentRef}>
      {!result ? (
        <>
          <div className={styles.title}>
            <h1>Узнайте стоимость услуг</h1>
            <ButtonTransparentDownload buttonText='Скачать прайс-лист' download={pricelist} link={pricelist} />
          </div>
          <div className={styles.popup}>
            <div className={styles.popupOverlay} style={{display:isModalOpen ? 'block' : 'none'}}></div>
            <div
              style={{transition:isModalOpen ? 'all 0.8s ease' : 'all 0.3s ease', border: isModalOpen ? '2px solid #0250EE' : error.logistics ? '2px solid #DB063B' : '2px solid #A9B0BE' }}
              className={styles.inputContainer}
             
              onClick={handleButtonClick}
            >
              <div
                className={styles.input}
              >
                {addresses.length > 0? addresses.join('; ') : <div className={styles.placeholder}>Выберите адрес отгрузки<span style={{display:addresses.length === 0 ? 'inline' : 'none', color:'#DB063B'}}>*</span></div>}
               </div><img  src={isModalOpen ? up : down} alt='choose' />
            </div>
            {isModalOpen && (
              <div className={styles.checkboxes} ref={modalRef}>
                <div className={styles.checkboxWrapper}>
                  {logistics.map((item) => (
                    <div key={item.place} className={styles.address}>
                      <div className={styles.checkboxContainer}>
                        <div className={styles.inputCenter}>
                          <input
                            className={styles.customCheckbox}
                            id={item.place}
                            type='checkbox'
                            data-price={item.price}
                            value={item.name}
                            checked={item.applied}
                            onChange={(e) => {
                              handleCheckedChange(item.id, 'logistics');
                              handleAddAddress(e, item.place);
                            }}
                          />
                          <label htmlFor={item.place} className={styles.name}>
                            {item.name}
                          </label>
                        </div>
                        <div className={styles.place}>{item.place}</div>
                      </div>
                      <div className={styles.price}>
                        {item.price}₽ <br /> <span className={styles.per}>{item.per} </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={styles.overlayContainer}>
            <div className={styles.overlay} style={{ display: isModalOpen ? 'flex' : 'none' }}></div>
            <div className={styles.params}>
              <h2>
                Заполните параметры товара<span style={{ color: 'red' }}>*</span>
              </h2>
              <small>Укажите минимальные размеры единицы товара (ДхВхШ не более 60х40х40см)</small>
              <div className={styles.inputs}>
                <div className={styles.paramsContainer}  style={{ border: error.params ? '2px solid #DB063B' : '2px solid #D2D4D8' }}>
                  <div className={styles.box}> <div>Длина:</div>
                <input
                  placeholder='60'
                  type='number'
                  id='length'
                  value={lengthBox}
                  onChange={handleLengthBox}
                />
                </div>
                </div>
                <div className={styles.paramsContainer} style={{ border: error.params ? '2px solid #DB063B' : '2px solid #D2D4D8' }}>
                <div className={styles.box}> <div>Высота:</div>
                <input
                  placeholder='40'
                  type='number'
                  id='height'
                  value={height}
                  onChange={handleHeight}
                />
                </div>
                </div>
                <div  className={styles.paramsContainer}  style={{ border: error.params ? '2px solid #DB063B' : '2px solid #D2D4D8' }}>
                <div className={styles.box}> <div>Ширина:</div>
                <input
                  placeholder='40'
                  type='number'
                  id='width'
                  value={width}
                  onChange={handleWidth}
                />
                </div>
                </div>
                <div className={styles.paramsContainer}  style={{ border: error.params ? '2px solid #DB063B' : '2px solid #D2D4D8' }}>
                <div className={styles.box}> <div>Количество:</div>
                <input
                  placeholder={itemsQuantity===0 || itemsQuantity===''? '1000' : itemsQuantity}
                  className={styles.quantity}
                  type='number'
                  id='quantity'
                  value={itemsQuantity}
                  onChange={handleQuantity}
                />
                </div>
                </div>
              </div>
            </div>
            <div className={styles.services}>
              <h2>Выберите дополнительные услуги</h2>
              <div className={styles.inputWrapper}>
                {packages.map((item) => (
                  !item.default && (
                    <div key={item.id}  className={styles.servicesContainer}>
                      <div>
                      <input
                        className={styles.customCheckbox}
                        checked={item.applied}
                        id={item.name}
                        type='checkbox'
                        data-price={itemsQuantity > 1000 ? item.to1000 : itemsQuantity > 1001 && itemsQuantity < 2001 ? item.from1001 : item.from2001}
                        onChange={(e) => {
                          handleCheckedChange(item.id, 'packages');
                        }}
                      />
                      <label className={styles.name} style={{ lineHeight: item.weight ? '16px' : '28px' }} htmlFor={item.name}>
                   
                        {item.name} {item.weight ? <span className={styles.weight}>{item.weight}</span> : ''} <br />
                   
                      </label>
                      </div>
                      {item.info ? <small style={{ color: '#A9B0BE', fontSize: '12px', paddingLeft: '40px', lineHeight: '16px' }}>{item.info}</small> : ''}
                    </div>
                  )
                ))}
              </div>
            </div>
            <div className={styles.buttons}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',  }}>
                {error.params || error.logistics ? (
                  <ButtonError onClick={handleCalculate}>Рассчитать стоимость</ButtonError>
                ) : (
                  <ButtonBlueWithoutLink onClick={handleCalculate}>Рассчитать стоимость </ButtonBlueWithoutLink>
                )}
                <div style={{ textAlign: 'center', color: '#DB063B', lineHeight: '16px', marginTop: '8px', height: '16px' }}>{message}</div>
              </div>
              <ButtonClear onClick={clearData}>Очистить данные</ButtonClear>
            </div>
          </div>
        </>
      ) : (
        <CalculationResult
          total={total}
          handleRecalculate={handleRecalculate}
          width={width}
          height={height}
          lengthBox={lengthBox}
          itemsQuantity={itemsQuantity}
          boxQuantity={boxQuantity}
          logistics={logistics}
          packages={packages}
        />
      )}
    </div>
  );
};

export default Calculator;