import React from 'react';
import styles from './CalculationResult.module.scss';
import { ResultCard, ResultCardWithLogistics } from '../UI/Cards/Cards';
import { ButtonRecalculate, ButtonTransparentDownload } from '../UI/Buttons/Buttons';
import info from '../../assets/icons/info.svg';
import pack from '../../assets/icons/package.svg';
import transfer from '../../assets/icons/logistics.svg';

const CalculationResult = ({
  handleRecalculate,
  width,
  height,
  lengthBox,
  itemsQuantity,
  boxQuantity,
  packages,
  logistics,
}) => {
  // Функция для вычисления стоимости для разных количеств коробок
  const multiplyBoxes = (quantity, obj, boxes) => {
    if (quantity <= 1000) {
      return obj ? obj.to1000 * boxes : 0;
    } else if (quantity >= 1001 && quantity <= 2001) {
      return obj ? obj.from1001 * boxes : 0;
    } else if (quantity > 2001) {
      return obj ? obj.from2001 * boxes : 0;
    } else {
      return 0;
    }
  };

  // Функция для вычисления стоимости для каждой единицы товара
  const calculatePerUnit = (quantity, obj) => {
    if (quantity <= 1000) {
      return obj ? obj.to1000 : 0;
    } else if (quantity >= 1001 && quantity <= 2001) {
      return obj ? obj.from1001 : 0;
    } else if (quantity > 2001) {
      return obj ? obj.from2001 : 0;
    } else {
      return 0;
    }
  };

  // Функция для форматирования цены
  const formattedPrice = (price) => {
    const res = price.toString().split("").reverse().join("").match(/.{1,3}/g).reverse().join(" ").replace(/^0+/, '');
    return res;
  };

  // Вынесенная логика для каждого типа упаковки
  const calculatePackage = (itemId, applied) => {
    const selectedPackage = packages ? packages.filter((item) => item.id === itemId && item.applied === applied)[0] : 0;
    return multiplyBoxes(itemsQuantity, selectedPackage, boxQuantity);
  };

  // Функция для вычисления общей стоимости логистики
  const calculateTotalLogistics = () => {
    const checkLogistics = logistics ? logistics.filter((item) => item.applied === true) : 0;
    const logisticsPrices = checkLogistics.map((item) => item.price * boxQuantity).reduce((a, b) => a + b, 0);

    const checkLogisticsFromPackages = packages ? packages.filter((item) => item.all === false && item.applied === true) : 0;
    const logisticsFromPackagesPrices = checkLogisticsFromPackages.map((item) => item.to1000).reduce((a, b) => a + b, 0);

    return logisticsPrices + logisticsFromPackagesPrices;
  };

  // Вычисление общей стоимости упаковки
  const allPackagesTotal =
    calculatePackage(5, true) +
    calculatePackage(6, true) +
    calculatePackage(7, true) +
    calculatePackage(10, true) +
    calculatePackage(13, true) +
    calculatePackage(12, true) +
    calculatePackage(14, true) +
    calculatePackage(15, true);

  // Вычисление общей стоимости логистики
  const totalLogistics = calculateTotalLogistics();

  // Общая стоимость
  const total = allPackagesTotal + totalLogistics;

  return (
    <div className={styles.result}>
      <div className={styles.titleContainer}>
        <div className={styles.titleFlex}>
          <div className={styles.title}>Примерная стоимость</div>
          <div className={styles.price}>{formattedPrice(total)} ₽</div>
        </div>
        <ButtonTransparentDownload buttonText="Скачать прайс-лист" />
      </div>
      <div>
        <div className={styles.subhead}>
          <img src={info} alt="info" />
          <h2>Информация о товаре</h2>
        </div>
        <div className={styles.info}>
          <ResultCard title="Габариты" perUnit="(ДхВхШсм):" value={`${lengthBox}x${height}x${width}`} />
          <ResultCard title="Количество" perUnit="(шт):" value={itemsQuantity} />
          <ResultCard title="Коробки" perUnit="(примерно шт):" value={boxQuantity} />
        </div>
      </div>
      <div>
        <div className={styles.subhead}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={pack} alt="package" />
            <h2>Упаковка </h2>
          </div>
          <div className={styles.priceSeparated}>{formattedPrice(allPackagesTotal)} ₽</div>
        </div>
        <div className={styles.info}>
          {packages
            ? packages
                .filter((item) => item.applied === true && item.all === true)
                .map((item) => (
                  <ResultCard key={item.id} title={item.name} perUnit={`${calculatePerUnit(itemsQuantity, item)} ₽/шт`} value={`${formattedPrice(
                    calculatePackage(item.id, true),
                  )} ₽`}
                />
                ))
            : null}
        </div>
      </div>
      <div>
        <div className={styles.subhead}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={transfer} alt="logistics" />
            <h2>Логистика</h2>
          </div>
          <div className={styles.priceSeparated}>{formattedPrice(totalLogistics)} ₽</div>
        </div>
        <div className={styles.info}>
          {logistics
            ? logistics
                .filter((item) => item.applied === true)
                .map((item) => (
                  <ResultCardWithLogistics
                    key={item.id}
                    title={item.name}
                    price={`${formattedPrice(item.price * boxQuantity)} ₽`}
                    place={item.place}
                  />
                ))
            : null}
          {packages
            ? packages
                .filter((item) => item.all === false && item.applied === true)
                .map((item) => (
                  <ResultCardWithLogistics
                    key={item.id}
                    title={item.nameForCard}
                    price={`${formattedPrice(item.to1000)} ₽`}
                    place={item.place}
                    weight={item.weight}
                    info={item.info}
                  />
                ))
            : null}
        </div>
      </div>
      <ButtonRecalculate link="#calculator" onClick={handleRecalculate}>
        Рассчитать заново
      </ButtonRecalculate>
    </div>
  );
};

export default CalculationResult;
