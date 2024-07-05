// VariantGrid.js
import React from 'react';
import Image from 'react-bootstrap/Image';

function VariantGrid({ variants, handleSelectVariant }) {
  return (
    <div className="variant-grid">
      {variants.map((variant, index) => (
        <div key={index} className="variant-item" onClick={() => handleSelectVariant(variant)}>
          <Image src={variant.var_img} alt="Variant" />
          <div className="variant-info">
            <p>Name: {variant.var_name}</p>
            <p>Color: {variant.var_color}</p>
            <p>Code: {variant.var_code}</p>
          </div>
          <button onClick={() => handleSelectVariant(variant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default VariantGrid;
