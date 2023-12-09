import styles from './Map.module.scss'
const Map = () => {

    return (
        <section className={styles.map}>
            <h1 className={styles.title}>Ждем вас по адресу</h1>
    <div className={styles.wrapper}><iframe className={styles.iframe} src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=222765858330"  frameBorder="0" allowFullScreen={true}></iframe></div>
        </section>
    )
}

export default Map