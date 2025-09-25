import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>₹{(product.price * 82).toFixed(0)}</p>
        <button className={styles.btn}>View</button>
      </div>
    </article>
  );
}