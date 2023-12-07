import styles from './CalculationResult.module.scss'
import { ResultCard, ResultCardWithLogistics } from '../UI/Cards/Cards'
import {ButtonRecalculate, ButtonTransparent} from '../UI/Buttons/Buttons'
import info from '../../assets/images/info.svg'
import pack from '../../assets/images/package.svg'
import transfer from '../../assets/images/logistics.svg'
const CalculationResult = ({handleRecalculate, width, height, lengthBox, itemsQuantity,boxQuantity,packages, logistics }) => {
    const multiplyBoxes =(quantity, obj, boxes)=> {
        if (quantity<=1000) {
            return obj?obj.to1000 * boxes:0
        } else if (quantity>=1001 && quantity<=2001) {
            return obj?obj.from1001 * boxes:0
        }
        else if (quantity>2001) {
            return obj?obj.from2001 * boxes:0
        }   
        else {
            return 0
        }
    }
    const calculatePerUnit = (quantity, obj) => {
       if (quantity<=1000) {
            return obj?obj.to1000:0
        } else if (quantity>=1001 && quantity<=2001) {
            return obj?obj.from1001:0
        }
        else if (quantity>2001) {
            return obj?obj.from2001:0
        }   
        else {
            return 0
        } 
    }
    let sorting=packages?packages.filter(item =>item.id===13 && item.applied===true)[0]:0;
    let sortingTotal = multiplyBoxes(itemsQuantity, sorting,boxQuantity);
    let receiving = packages?packages.filter(item =>item.id===12 && item.applied===true)[0]:0;
    let receivingTotal = multiplyBoxes(itemsQuantity, receiving,boxQuantity);
    let marking = packages?packages.filter(item =>item.id===14 && item.applied===true)[0]:0;
    let markingTotal = multiplyBoxes(itemsQuantity, marking,boxQuantity);
    let allBoxes =packages?packages.filter(item =>item.id===15 && item.applied===true)[0]:0;
    let allBoxesTotal = multiplyBoxes(itemsQuantity, allBoxes,boxQuantity);
    let damageCheck = packages?packages.filter(item =>item.id===5 && item.applied===true)[0]:0;
    let damageTotal = multiplyBoxes(itemsQuantity, damageCheck,boxQuantity);
    let zipBox = packages?packages.filter(item =>item.id===6 && item.applied===true)[0]:0;
    let zipTotal = multiplyBoxes(itemsQuantity, zipBox,boxQuantity);
    let bubbleBox = packages?packages.filter(item =>item.id===7 && item.applied===true)[0]:0;
    let bubbleTotal = multiplyBoxes(itemsQuantity, bubbleBox,boxQuantity);
    let additionalPackage = packages?packages.filter(item =>item.id===10 && item.applied===true)[0]:0;
    let additionalPackageTotal = multiplyBoxes(itemsQuantity, additionalPackage,boxQuantity);
    let allPackages = damageTotal + zipTotal + bubbleTotal + additionalPackageTotal+ sortingTotal + receivingTotal + markingTotal + allBoxesTotal;
    let checkLogistics = logistics?logistics.filter(item =>item.applied===true):0;
    let allLogistics= checkLogistics.map(item=>item.price*boxQuantity).reduce((a,b)=>a+b,0) 
    let checkLogisticsFromPackages = packages?packages.filter(item =>item.all===false && item.applied===true):0;
    let allLogisticsFromPackages= checkLogisticsFromPackages.map(item=>item.to1000).reduce((a,b)=>a+b,0)
    let totalLogistics=allLogistics+allLogisticsFromPackages
    let total=allPackages+totalLogistics
    return (
<div className={styles.result}>
    <div className={styles.titleContainer}><div className={styles.titleFlex}><div className={styles.title}>Примерная стоимость</div><div className={styles.price}>{total} ₽</div></div>
    <ButtonTransparent>Скачать прайс-лист</ButtonTransparent>
    </div>
    <div>
    <div className={styles.subhead}><img src={info} alt="info" />
    <h2>Информация о товаре</h2></div>
    <div className={styles.info} >
<ResultCard title='Габариты' perUnit='(ДхВхШсм):' value={`${lengthBox}x${height}x${width}`}/>
<ResultCard title='Количество' perUnit='(шт):' value={itemsQuantity}/>
<ResultCard title='Коробки' perUnit='(примерно шт):' value={boxQuantity}/>
    </div>
    </div>
    <div>
        <div className={styles.subhead}><img src={pack} alt="package" /><h2>Упаковка <span className={styles.priceSeparated}>{allPackages}  ₽</span></h2></div>
    <div className={styles.info}>
{packages?packages.filter(item=>item.applied===true && item.all===true).map((item)=>(<ResultCard key={item.id} title={item.name} perUnit={`${calculatePerUnit(itemsQuantity, item)} ₽/шт`} value={`${multiplyBoxes(itemsQuantity, item,boxQuantity)} ₽`}/>)):null}
    </div>
    </div>
    <div>
        <div className={styles.subhead}><img src={transfer} alt="logistics" /><h2>Логистика <span className={styles.priceSeparated}>{totalLogistics} ₽</span></h2> </div>
    <div className={styles.info}>
    {logistics?logistics.filter(item=>item.applied===true).map((item)=>(<ResultCardWithLogistics key={item.id} title={item.name} price={`${item.price * boxQuantity} ₽`} place={item.place} />)):null}
    {packages?packages.filter(item=>item.all===false && item.applied===true).map((item)=>(<ResultCardWithLogistics key={item.id} title={item.nameForCard} price={`${item.to1000} ₽`} place={item.place} weight={item.weight} info={item.info} />)):null}
    </div>
    </div>
<ButtonRecalculate onClick={handleRecalculate}>Пересчитать</ButtonRecalculate>
</div>
    )
}

export default CalculationResult