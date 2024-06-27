import React, { useState } from "react";
import "../products/Products.css";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../context/api/productAPI";
import { Box, Grid, Pagination, Skeleton } from "@mui/material";
import rating from "../../assets/rating.svg";
import icon1 from "../../assets/add-cart.svg";
import icon2 from "../../assets/add-heart.svg";
import defaultImage from "../../assets/defaultImage.webp";

const Products = () => {
  const [perPageCount, setPerPageCount] = useState(
    +localStorage.getItem("page") || 6
  );
  const [page, setPage] = useState(+sessionStorage.getItem("page-count") || 1);
  const { data, isLoading, isFetching } = useGetProductsQuery({
    limit: perPageCount,
    page,
  });
  console.log(data?.data?.count);
  const totalPagination = Math.ceil(data?.data?.count / perPageCount);
  const [deledeProduct] = useDeleteProductMutation();
  const handleDeleteProductById = (id) => {
    deledeProduct(id);
  };
  const handleChangePagination = (_, value) => {
    setPage(value);
    sessionStorage.setItem("page-count", value);
  };
  const handleChangePage = (e) => {
    let value = e.target.value;
    setPerPageCount(value);
    localStorage.getItem("page", value);
    let result = Math.ceil((page * perPageCount) / value);
    setPage(result);
    sessionStorage.setItem("page-count", result);
  };

  return (
    <div className="container">
      <div className="product_title">
        <h4>Find your favourite smart watch.</h4>
        <h2>Our Latest Products</h2>
      </div>
      {/* <Grid sx={{ display: "flex", gap: "24px" }} container>
        {new Array(perPageCount).fill("").map((_, inx) => (
          <Grid key={inx} lg={2} item>
            <Skeleton variant="rectangular" width={300} height={250} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid> */}
      <div className="products" spacing={2}>
        {isFetching ? <h2>Loading...</h2> : <></>}
        {!isLoading ? (
          data?.data?.products?.map((product) => (
            <div className="product" key={product.id}>
              <img
                src={product.urls[0] ? product.urls[0] : defaultImage}
                height={250}
                style={{ backgroundSize: "contain", padding: 30 }}
                width={250}
                alt={product.title}
              />
              <div className="icons">
                <img src={icon1} alt="cart" />
                <img src={icon2} alt="heart" />
              </div>
              <h3>{product.title}</h3>
              <img
                style={{ textAlign: "center", width: "115px" }}
                width={115}
                src={rating}
                alt="rating"
              />
              <p>
                ${product.price} <span>${product.price * 0.9}</span>
              </p>
              <button
                style={{ opacity: 0 }}
                onClick={() => handleDeleteProductById(product.id)}
              >
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
          onChange={handleChangePagination}
          count={+totalPagination}
        />
      </Box>
      <Box sx={{ margin: "-132px 0 36px" }}>
        <InputLabel id="demo-select-small-label">Count</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={perPageCount}
          label="Count"
          onChange={handleChangePage}
        >
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </Box>
    </div>
  );
};

export default Products;
