import { useState, useEffect } from 'react';

const PAGE_SIZE = 10;

const HorizantalScrollProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${PAGE_SIZE}&_page=${currentPage}`);
    const data = await response.json();
    setProducts(data);
    setIsLoading(false);
    setTotalPages(Math.ceil(response.headers.get('x-total-count') / PAGE_SIZE));
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleAddToCartClick = (product) => {
    console.log(`Added ${product.title} to cart!`);
  };

  const handleViewDetailsClick = (product) => {
    console.log(`Viewing details for ${product.title}`);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product) => (
              <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">{product.title}</h5>
                            $40.00
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" onClick={() => handleViewDetailsClick(product)}>View Detail</a></div>
                    </div>
                </div>
            </div>


              // <div className="col-4 mb-4" key={product.id}>
              //   <div className="card">
              //   <img src={`https://picsum.photos/id/${product.id + 10}/200`}  alt={product.title} className="card-img-top img-fluid" style={{ height: 'auto'}} />
              //     <div className="card-body">
              //       <h5 className="card-title" style={{ fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.title}</h5>
              //       {/* <p className="card-text">{product.body}</p> */}
              //       <p className="card-text"><strong>Price:</strong> $15.99</p>
              //       <p className="card-text"><strong>Discount:</strong> 10%</p>
              //       <div className="d-grid gap-2">
              //         <button className="btn btn-primary" onClick={() => handleAddToCartClick(product)}>Add to Cart</button>
              //         <button className="btn btn-link" onClick={() => handleViewDetailsClick(product)}>View Details</button>
              //       </div>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
          <div>
            <button disabled={currentPage === 1} onClick={handlePrevClick}>
              Prev
            </button>
            <span className="mx-2">
              Page {currentPage} of {totalPages}
            </span>
            <button disabled={products.length < PAGE_SIZE} onClick={handleNextClick}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizantalScrollProductList;


