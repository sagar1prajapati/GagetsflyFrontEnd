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
          <div className="row pt-2 gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-left">
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
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" onClick={() => handleViewDetailsClick(product)}>View More</a></div>
                    </div>
                </div>
            </div>
            ))}
          </div>
          <div class="d-flex justify-content-center">
            <button className='btn btn-dark' disabled={currentPage === 1} onClick={handlePrevClick}>
              Prev
            </button>
            <span className="mx-2">
              Page {currentPage} of {totalPages}
            </span>
            <button className='btn btn-dark' disabled={products.length < PAGE_SIZE} onClick={handleNextClick}>
              Next
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default HorizantalScrollProductList;


