import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../components/Productcollection.css'; // Import CSS file for styling
import Wiremeshimg from "../img/BANNER/wiremess.jpg";
import ConcealLockimg from "../img/BANNER/CONCEAL_LOCK.jpg";
import AcrylicFoamTapeSpacerTape from "../img/BANNER/Acrylic_Foam_Tape_&_Spacer_Tape.jpg";
import DomalAccessoriesimg from "../img/BANNER/Domal_Accessories.jpg";
import FiberBiddingimg from "../img/BANNER/Fiber-Bidding.jpg";
import Friction_Stay from "../img/BANNER/Friction_Stay.jpg"
import gun from "../img/BANNER/gun.jpg";
import Louver_s from "../img/BANNER/Louver_s(Fiber&Aluminium).jpg"
import PVC_Gasket from "../img/BANNER/PVC_Gasket.jpg";
import Roller from "../img/BANNER/Roller.jpg";
import Screw from "../img/BANNER/SCREW-GT-2024-25-PRODUCT.jpg";
import Wool from "../img/BANNER/Wool-1.jpg";
import SiliconeSealant from "../img/BANNER/SiliconeSealant_1.jpg";
import Floor_Spring_Door_Closer from "../img/BANNER/Floor_Spring_Door_Closer1.jpg"

const ProductCollection = () => {
    return(
    
        <div id="homepage-collection-grid-container" style={{backgroundColor: '#d9d9ff', paddingTop:'10%'}}>
          <h2 className="mb-5" style={{ textAlign: 'center' }}>
                  Our Products
                </h2>
        <div className="collection-row-1" style={{ display: 'flex' }}>
          {/* Column 1 */}
          <div style={{ width: '50%', display: 'flex' }}>
            {/* Product 1 */}
            <Link to="/wiremesh" className="image-container">
              {/* Product Image */}
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={Wiremeshimg} alt="" style={{ width: '100%' }} />
                {/* Overlay */}
                <div className="overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="https://cdn.shopify.com/s/files/1/0820/7718/8388/files/arrow_forward.png?v=1698098719" alt="" style={{ width: '40px', height: 'auto' }} />
                </div>
                {/* Overlay Text */}
                <div style={{ position: 'absolute', top: '20px', left: '40px' }} className="overlay-text">
                  <h2 style={{ marginBottom: '0px', color: 'black', fontSize: '1.2rem' }}>Wiremesh</h2>
                </div>
              </div>
            </Link>
            {/* Product 2 */}
            <Link to="/conceal_lock" className="image-container">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={ConcealLockimg} alt="" style={{ width: '100%' }} />
                <div className="overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="https://cdn.shopify.com/s/files/1/0820/7718/8388/files/arrow_forward.png?v=1698098719" alt="" style={{ width: '40px', height: 'auto' }} />
                </div>
                <div style={{ position: 'absolute', top: '20px', left: '40px' }} className="overlay-text">
                  <h2 style={{ marginBottom: '0px', color: 'black', fontSize: '1.2rem' }}>Conceal Lock</h2>
                </div>
              </div>
            </Link>
            {/* Add more products here */}
          </div>
          {/* Column 2 */}
          <div style={{ width: '50%', display: 'flex' }}>
            {/* Product 3 */}
            <Link to="/wool_pipe" className="image-container">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={Wool} alt="" style={{ width: '100%' }} />
                <div className="overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="https://cdn.shopify.com/s/files/1/0820/7718/8388/files/arrow_forward.png?v=1698098719" alt="" style={{ width: '40px', height: 'auto' }} />
                </div>
                <div style={{ position: 'absolute', top: '20px', left: '40px' }} className="overlay-text">
                  <h2 style={{ marginBottom: '0px', color: 'black', fontSize: '1.2rem' }}>Wool Pipe</h2>
                </div>
              </div>
            </Link>
            {/* Product 4 */}
            <Link to="/sliding_window_roller" className="image-container">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={Roller} alt="" style={{ width: '100%' }} />
                <div className="overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="https://cdn.shopify.com/s/files/1/0820/7718/8388/files/arrow_forward.png?v=1698098719" alt="" style={{ width: '40px', height: 'auto' }} />
                </div>
                <div style={{ position: 'absolute', top: '20px', left: '40px' }} className="overlay-text">
                  <h2 style={{ marginBottom: '0px', color: 'black', fontSize: '1.2rem' }}>Sliding Window Roller</h2>
                </div>
              </div>
            </Link>
            {/* Add more products here */}
          </div>
        </div>
        <div className="collection-row-2" style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ width: '50%' }}>
          <div style={{ width: '100%', display: 'flex' }}>
            {/* Product 1 */}
            <Link to="/louvers" className="image-container">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={Louver_s} alt="" style={{ width: '100%' }} />
                <div className="overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="https://cdn.shopify.com/s/files/1/0820/7718/8388/files/arrow_forward.png?v=1698098719" alt="" style={{ width: '40px', height: 'auto' }} />
                </div>
                <div style={{ position: 'absolute', top: '20px', left: '40px' }} className="overlay-text">
                  <h2 style={{ marginBottom: '0px', color: 'black', fontSize: '1.2rem' }}>Louver's</h2>
                  <h2 style={{ marginTop: '0px', color: 'black' }}></h2>
                </div>
              </div>
            </Link>
            {/* Product 2 */}
         <Link to="/pvc_gasket" className="image-container">
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={PVC_Gasket} alt="" style={{ width: '100%' }} />
                    <div className="overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="https://cdn.shopify.com/s/files/1/0820/7718/8388/files/arrow_forward.png?v=1698098719" alt="" style={{ width: '40px', height: 'auto' }} />
                    </div>
                    <div style={{ position: 'absolute', top: '20px', left: '40px' }} className="overlay-text">
                        <h2 style={{ marginBottom: '0px', color: 'black', fontSize: '1.2rem' }}>PVC Gasket</h2>
                    </div>
            </div>
        </Link>

          </div>
          <div style={{ width: '100%' }}>
            <div style={{ padding: '5px 5px 5px 5px' }}>
              {/* Product 3 */}
              <Link to="/domal_accessories" className="image-container" style={{ width: '100%' }}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img src={DomalAccessoriesimg} alt="" style={{ width: '100%' }} />
                  <div className="overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <img src="https://cdn.shopify.com/s/files/1/0820/7718/8388/files/arrow_forward.png?v=1698098719" alt="" style={{ width: '40px', height: 'auto' }} />
                  </div>
                  <div style={{ position: 'absolute', top: '20px', left: '40px' }} className="overlay-text">
                    <h2 style={{ marginBottom: '0px', color: 'black', fontSize: '1.2rem' }}>Domal Accessories</h2>
                    <h2 style={{ marginTop: '0px', color: 'black' }}></h2>
                  </div>
                </div>
              </Link>
              {/* Add more products here */}
            </div>
          </div>
        </div>
        
        <div style={{ width: '50%' }}>
      <div style={{ width: '100%' }}>
        <div style={{ padding: '5px' }}>
          <Link to="/silicone_sealant" className="image-container" style={{ width: '100%' }}>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img src={SiliconeSealant} alt="" style={{ width: '100%' }} />
              <div className="overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <img src="https://cdn.shopify.com/s/files/1/0820/7718/8388/files/arrow_forward.png?v=1698098719" alt="" style={{ width: '40px', height: 'auto' }} />
              </div>
              <div style={{ position: 'absolute', top: '20px', left: '40px' }} className="overlay-text">
                <h2 style={{ marginBottom: '0px', color: 'black', fontSize: '1.2rem' }}>Silicone Sealant</h2>
                <h2 style={{ marginTop: '3px', color: 'black' }}></h2>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex' }}>
      <Link to="/friction_stay" className="image-container">
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={Friction_Stay} alt="" style={{ width: '100%' }} />
          <div className="overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="https://cdn.shopify.com/s/files/1/0820/7718/8388/files/arrow_forward.png?v=1698098719" alt="" style={{ width: '40px', height: 'auto' }} />
          </div>
          <div style={{ position: 'absolute', top: '20px', left: '40px' }} className="overlay-text">
            <h2 style={{ marginBottom: '0px', color: 'black', fontSize: '1.2rem' }}>Friction Stay</h2>
          </div>
        </div>
      </Link>
      <Link to="/floor_spring_&_door_closer" className="image-container">
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={Floor_Spring_Door_Closer} alt="" style={{ width: '100%' }} />
          <div className="overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="https://cdn.shopify.com/s/files/1/0820/7718/8388/files/arrow_forward.png?v=1698098719" alt="" style={{ width: '40px', height: 'auto' }} />
          </div>
          <div style={{ position: 'absolute', top: '20px', left: '40px' }} className="overlay-text">
            <h2 style={{ marginBottom: '0px', color: 'black', fontSize: '1.2rem' }}>Floor Spring & Door Closer</h2>
            <h2 style={{ marginTop: '3px', color: 'black' }}></h2>
          </div>
        </div>
      </Link>
    </div>


    </div>


      </div>
      <div className="collection-row-1" style={{ display: 'flex' }}>
        <div style={{ width: '50%', display: 'flex' }}>
          {/* Product 4 */}
          <Link to="/Acrylic_Foam_Tape_&_Spacer_Tape" className="image-container">
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img src={AcrylicFoamTapeSpacerTape} alt="" style={{ width: '100%' }} />
              <div className="overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://cdn.shopify.com/s/files/1/0820/7718/8388/files/arrow_forward.png?v=1698098719" alt="" style={{ width: '40px', height: 'auto' }} />
              </div>
              <div style={{ position: 'absolute', top: '20px', left: '40px' }} className="overlay-text">
                <h2 style={{ marginBottom: '0px', color: 'black', fontSize: '1.2rem' }}>Acrylic Foam Tape & Spacer Tape</h2>
              </div>
            </div>
          </Link>
          <Link to="/Fiber_Bidding" className="image-container">
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={FiberBiddingimg} alt="" style={{ width: '100%' }} />
        <div className="overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="https://cdn.shopify.com/s/files/1/0820/7718/8388/files/arrow_forward.png?v=1698098719" alt="" style={{ width: '40px', height: 'auto' }} />
        </div>
        <div style={{ position: 'absolute', top: '20px', left: '40px' }} className="overlay-text">
          <h2 style={{ marginBottom: '0px', color: 'black', fontSize: '1.2rem' }}>Fiber Bidding</h2>
          <h2 style={{ marginTop: '3px', color: 'black' }}></h2>
        </div>
      </div>
    </Link>
        </div>
        <div style={{ width: '50%', display: 'flex' }}>
      <Link to="/nails" className="image-container">
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={Screw} alt="" style={{ width: '100%' }} />
          <div className="overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="https://cdn.shopify.com/s/files/1/0820/7718/8388/files/arrow_forward.png?v=1698098719" alt="" style={{ width: '40px', height: 'auto' }} />
          </div>
          <div style={{ position: 'absolute', top: '20px', left: '40px' }} className="overlay-text">
            <h2 style={{ marginBottom: '0px', color: 'black', fontSize: '1.2rem' }}>Nails</h2>
            <h2 style={{ marginTop: '3px', color: 'black' }}></h2>
          </div>
        </div>
      </Link>
     <Link to="/guns" className="image-container">
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src={gun} alt="" style={{ width: '100%' }} />
          <div className="overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white'}}>
            <img src="https://cdn.shopify.com/s/files/1/0820/7718/8388/files/arrow_forward.png?v=1698098719" alt="" style={{ width: '40px', height: 'auto' }} />
          </div>
          <div style={{ position: 'absolute', top: '20px', left: '40px' }} className="overlay-text">
            <h2 style={{ marginBottom: '0px', color: 'black', fontSize: '1.2rem' }}>Gun</h2>
            {/* <h2 style={{ marginTop: '3px', color: 'black' }}>GUN</h2> */}
          </div>
        </div>
      </Link> 
    </div>
      </div>

      </div>
    );
  };
       
  export default ProductCollection;