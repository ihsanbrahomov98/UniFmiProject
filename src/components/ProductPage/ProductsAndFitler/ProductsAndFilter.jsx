import React from "react";
import Filter from "./Filter/Filter";
import Products from "./Products/Products";
const ProductsAndFilter = ({ cat }) => {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-2">
            <Filter />
          </div>
          <div className="col-10">
            <Products cat={cat} />
          </div>
        </div>
      </div>
      <div style={{ height: "100px" }}>s</div>
      <div className="container d-flex justify-content-center mt-4 mb-2">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ProductsAndFilter;
