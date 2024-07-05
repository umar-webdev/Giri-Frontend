
import { useQuote } from './QuoteContext';
import { FaStar, FaTimes, FaMoneyBill, FaEdit, FaTrashAlt } from 'react-icons/fa';
import Spinner from './Spinner'; // Import the Spinner component
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

const QuotePages = () => {
  const { state, deleteFromQuote } = useQuote();
  const { selectedProducts, selectedVariants } = state;
  const [showInvoice, setShowInvoice] = useState(false);
  const [loading, setLoading] = useState(false); // State to track loading state
  
  

  const handleEditProduct = () => {
    // Logic to handle editing the product at the given index
  };
  
  // const handleDeleteProduct = (productName, variantName) => {
  //   deleteFromQuote(productName, variantName);
  // };

  const handleDeleteProduct = (productName, variantName) => {
    if (productName) {
      // Delete product logic
      deleteFromQuote(productName, null); // Assuming your deleteFromQuote function handles null for variantName
    } else if (variantName) {
      // Delete variant logic
      deleteFromQuote(null, variantName); // Assuming your deleteFromQuote function handles null for productName
    }
  };
  

  // Function to get user email from the JWT token
  const getUserEmailFromToken = () => {
    const userToken = localStorage.getItem('userToken');
    console.log('User Token:', userToken);
    if (userToken) {
      try {
        const decodedToken = jwtDecode(userToken);
        console.log('Decoded Token:', decodedToken);
        return decodedToken.userEmail;
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  };
  const handleGetFinalQuotes = async () => {
    try {
      console.log('Attempting to get final products...');
      setLoading(true); // Set loading state to true before fetch
      const userEmail = getUserEmailFromToken();
      console.log('User Email from token:', userEmail);
      if (!userEmail) {
        // User is not logged in, show a toast message or handle the error
        alert('Please log in first to get the final products');
        setLoading(false); // Set loading state to false after handling the error
        return;
      }
      // Construct the request payload
      const requestData = {
        userEmail,
        products: selectedProducts.filter(
          (product) =>
            !isNaN(product.rate) && !isNaN(product.quantity) && product.name
        ),
        variants: selectedVariants.filter(
          (variant) =>
            !isNaN(variant.var_tdis_price) && !isNaN(variant.quantity) && variant.var_name
        ),
      };
      // Make the fetch request
      const response = await fetch('http://localhost:5000/sendQuotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${localStorage.getItem('userToken')}`,
        },
        body: JSON.stringify(requestData),
      });
      const result = await response.json();
      console.log('Response from server:', result);
      if (response.ok) {
        // Handle success response, e.g., show success message or update UI
        alert('products sent successfully');
        setShowInvoice(true); // Show the invoice modal after successful sending
      } else {
        // Handle error response, e.g., show error message or handle specific errors
        console.error('Error sending products:', result.error);
       alert('Login first!!!');
      }
    } catch (error) {
      console.error('Error in handleGetFinalQuotes:', error);
      alert('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false); // Ensure loading state is updated regardless of success or error
    }
  };
  // Calculate the total price of selected products
  const totalProducts = selectedProducts.reduce(
    (total, product) => total + parseFloat(product.var_tdis_price) * parseInt(product.quantity, 10),
    0
  );
  // Calculate the total price of selected variants
  const totalVariants = selectedVariants.reduce(
    (total, variant) => total + parseFloat(variant.var_tdis_price) * parseInt(variant.quantity, 10),
    0
  );
  // Calculate GST (18%)
  const GSTPercentage = 18;
  const GSTAmount = (totalProducts + totalVariants) * (GSTPercentage / 100);
  const totalWithoutGST = totalProducts + totalVariants;
  // Calculate total including GST
  const totalWithGST = totalProducts + totalVariants + GSTAmount;
  return (
    <section className="block product-block" style={{ padding: '8%' }}>
      <div className="container">
        <div className="title-holder">
          <h2>Your products</h2>
        </div>
        <div className="row">
          {/* Show selected main products */}
          {selectedProducts.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="image-container">
                  <img
                    src={product.image}
                    className="img-fluid rounded thumbnail-image"
                    alt={product.name}
                    style={{marginRight: '80%'}}
                  />
                   {/* Add Edit and Update icons
    <div className="edit-update-icons">
      <FaEdit className="edit-icon" onClick={() => handleEditProduct()} />
      {selectedProducts.map((product, index) => (
  <div key={index}>

    <FaTrashAlt className="delete-icon" onClick={() => handleDeleteProduct(product.name, product.variantName)} />
  </div>
))}

    </div> */}
                </div>
                <div className="product-detail-container p-3" style={{}}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="product-name" style={{fontSize:'0.95rem'}}>{product.name}</h3>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-2">
                    {/* <div>
                      <FaStar className="rating-star" />
                      <span className="rating-number">{product.rating}</span>
                    </div> */}
                    <div className="quantity-container">
                      <span className="quantity-number">Qty: </span>
                      <span className="quantity-number">{product.quantity}</span>
                      <FaTimes className="quantity-icon" />
                   
                      <div className="d-flex justify-content-between align-items-center pt-2">
                    <div className="money-container">
                    <span className="description-text">PACKING: {product.MOQ}</span><br/>
                      <span className="description-text">Original Price: {product.Original_Price} INR per item</span><br/>
                      <span className="description-text">Discounted Price: {product.Discounted_Price} INR per item</span>
                    </div>
                  </div>
                    </div>
                  </div>
                 
                  <div className="d-flex justify-content-between align-items-center pt-2">
                    <div className="money-container">
                      {/* <FaMoneyBill className="money-icon" /> */}
                      <span style={{fontSize: 'smaller', color:'red' }} className="rate">Original Price: {product.var_total_price}INR</span><br/>
                      <span style={{fontSize: 'smaller', color:'green', fontWeight:'bold' }} className="rate">Discounted Price: {product.var_tdis_price}INR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Show selected variants */}
          {selectedVariants.map((variant, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="image-container">
                  <img
                    src={variant.var_img}
                    className="img-fluid rounded thumbnail-image"
                    alt={variant.var_name}
                      style={{marginRight: '80%'}}
                  />
               {/* <div className="edit-update-icons">
      <FaEdit className="edit-icon" onClick={() => handleEditProduct()} />
{selectedVariants.map((variant, index) => (
  <div className="col-md-4 mb-4" key={index}>
   
    <FaTrashAlt className="delete-icon" onClick={() => handleDeleteProduct(null, variant.var_name)} />
  </div>
))}
</div> */}

                </div>
                <div className="product-detail-container p-3" style={{}}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="product-name" style={{fontSize:'0.95rem'}}>{variant.var_name}</h3>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-2">
                    <div className="quantity-container">
                      <span className="quantity-number">Qty: </span>
                      <span className="quantity-number">{variant.quantity}</span>
                      <FaTimes className="quantity-icon" />
                      <div className="d-flex justify-content-between align-items-center pt-2">
                    <div className="money-container">
                    <span className="description-text">PACKING: {variant.var_moq}</span><br/>
                      <span className="description-text">Original Price: {variant.Original_Price} INR per item</span><br/>
                      <span className="description-text">Discounted Price: {variant.Discounted_Price} INR per item</span>
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-2">
                    <div className="money-container">
                      <FaMoneyBill className="money-icon" />
                      <span className="rate" style={{ fontSize: 'smaller', color:'red'}}>Original Price: {variant.var_total_price}INR</span><br/>
                      <span className="rate" style={{fontSize: 'smaller', color:'green', fontWeight:'bold' }}>Discounted Price: {variant.var_tdis_price}INR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-md-12">
      <button className="learn-more-button text-center Quote-button" onClick={handleGetFinalQuotes}>
              Get Final Quote
            </button>
      </div>
      {loading && <Spinner />} {/* Show spinner while loading */}

      {showInvoice && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{
            display: 'block',
            paddingTop:'5%',
            backgroundImage: `url('https://images.unsplash.com/photo-1466781783364-36c955e42a7f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Invoice</h5>
                <button type="button" className="btn-close" onClick={() => setShowInvoice(false)}></button>
              </div>
              <div className="modal-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProducts.map((product, index) => (
                      <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.var_tdis_price}</td>
                        <td>{(product.quantity * parseFloat(product.var_tdis_price)).toFixed(2)}</td>
                      </tr>
                    ))}
                    {/* Include selected variants in the invoice */}
                    {selectedVariants.map((variant, index) => (
                      <tr key={`variant-${index}`}>
                        <td>{variant.var_name}</td>
                        <td>{variant.quantity}</td>
                        <td>{variant.var_tdis_price}</td>
                        <td>{(variant.quantity * parseFloat(variant.var_tdis_price)).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Display total without GST, GST amount, and total with GST */}
                <p>Total (excluding GST): {totalWithoutGST} INR</p>
                <p>GST ({GSTPercentage}%): {GSTAmount.toFixed(2)} INR</p>
                <p>Total (including GST): {totalWithGST.toFixed(2)} INR</p>
              </div>
              <div className="modal-footer">
                <div className="col-md-12">
                  <button
                    type="button"
                    className="learn-more-button text-center Quote-button"
                    onClick={() => setShowInvoice(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default QuotePages;
