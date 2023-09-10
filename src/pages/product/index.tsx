import { useRouter } from "next/router";
import { Key, useEffect, useState } from "react";


type ProdutType = {
    [x: string]: any;
    id: number 
    name: string 
    price: number
}


const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState<ProdutType | null>(null);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => {
        console.log('ini datanya vid', data.data[0][0])
        setProducts(data.data);
      });
  }, []);
  
  if (!products){
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>Product Page</h1>
      {/* <h1>{products[0]? products[0].id : ''}</h1> */}
      {products.map((product: any) => 
      <ul key={product[0].id}>
        <li>{`Product Name : ${product[0].name} - Price : ${product[0].price}`}</li>
      </ul>
      )}
    </div>
  );
};

export default ProductPage;
