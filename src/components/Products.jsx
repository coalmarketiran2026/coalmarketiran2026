import products from "../data/products";
import ProductCard from "./ProductCard";

function Products() {

  return (

    <section
      id="products"
      className="products"
    >

      <div className="section-title">

        <h2>محصولات ما</h2>

        <p>

          زغال‌سنگ باکیفیت ایران برای صنایع فولاد، سیمان، ریخته‌گری و صادرات

        </p>

      </div>

      <div className="cards">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>

  );

}

export default Products;