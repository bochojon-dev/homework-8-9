import React, { useState } from "react";
import "../products/Products.css";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../context/api/productAPI";
import { Link } from "react-router-dom";
import { Box, Pagination } from "@mui/material";

const perPageCount = 6;

const Products = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetProductsQuery({
    limit: perPageCount,
    page,
  });
  const [deledeProduct] = useDeleteProductMutation();
  const handleDeleteProductById = (id) => {
    deledeProduct(id);
  };

  return (
    <div className="container">
      <div className="product_title">
        <h4>Find your favourite smart watch.</h4>
        <h2>Our Latest Products</h2>
      </div>
      <div className="products">
        {!isLoading ? (
          data?.data?.products?.map((product) => (
            <div className="product" key={product.id}>
              <img
                src={product.urls[0]}
                height={250}
                style={{ backgroundSize: "contain", padding: 30 }}
                width={250}
                alt={product.title}
              />
              <Link to={`/product/${product.id}`}>
                <h3>{product.title}</h3>
              </Link>
              <button onClick={() => handleDeleteProductById(product.id)}>
                delete
              </button>
            </div>
          ))
        ) : (
          <>
            <h2>Loading...</h2>
          </>
        )}
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "120px",
        }}
      >
        <Pagination
          page={page}
          onChange={(_, value) => setPage(value)}
          count={10}
        />
      </Box>
    </div>
  );
};

export default Products;
