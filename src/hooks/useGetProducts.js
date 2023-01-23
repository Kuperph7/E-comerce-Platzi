import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  async function fetch() {
    const response = await axios(API);
    setProducts(response.data);
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  return products;
};

export default useGetProducts;
