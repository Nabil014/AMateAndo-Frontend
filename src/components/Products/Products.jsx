import { useEffect } from "react";
import { useProductStore } from "../../store/store";
import Card from "../Card/Card";

export function Products () {
  const { products } = useProductStore((state) => ({
    products: state.products
  }))
  const { getProducts } = useProductStore()
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <div className="justify-around gap-3 pt-5 pb-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 sm:justify-items-center">
        {
          products?.map(product => (
            <Card
              key={product._id}
              id={product._id}
              title={product.title}
              unit_price={product.unit_price}
              picture={product.picture}
              stock={product.stock}

            />
          ))
        }
      </div>
    </div>
  )
}
