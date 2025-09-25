import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        if (!cancelled) setProducts(res.data);
      } catch (err) {
        if (!cancelled) setError('Failed to load products');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchProducts();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Products</h1>
          {loading && <p>Loading products…</p>}
          {error && <p className={styles.error}>{error}</p>}
          {!loading && !error && (
            <section className={styles.grid}>
              {products.map(p => <ProductCard key={p.id} product={p} />)}
            </section>
          )}
        </div>
      </main>
    </>
  );
}