import { createContext, useContext, useReducer } from 'react';

const QuoteContext = createContext();

const initialState = {
  selectedProducts: [],
  selectedVariants: [],
  selectedVariant: null, // Add selectedVariant state
};
const quoteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_QUOTE':
      const existingProductIndex = state.selectedProducts.findIndex(
        (product) => product.name === action.product.name
      );
      if (existingProductIndex !== -1) {
        const updatedProducts = [...state.selectedProducts];
        updatedProducts[existingProductIndex].quantity += action.quantity; // Use action.quantity
        return {
          ...state,
          selectedProducts: updatedProducts,
        };
      } else {
        return {
          ...state,
          selectedProducts: [
            ...state.selectedProducts,
            { ...action.product, quantity: action.quantity }, // Set quantity in the new product
          ],
        };
      }
    
    case 'ADD_VARIANT_TO_QUOTE':
      const existingVariantIndex = state.selectedVariants.findIndex(
        (variant) => variant.var_name === action.variant.var_name
      );
      if (existingVariantIndex !== -1) {
        const updatedVariants = [...state.selectedVariants];
        updatedVariants[existingVariantIndex].quantity += action.quantity;
        return {
          ...state,
          selectedVariants: updatedVariants,
        };
      } else {
        return {
          ...state,
          selectedVariants: [
            ...state.selectedVariants,
            { ...action.variant, quantity: action.quantity  },
          ],
        };
      }
      case 'DELETE_FROM_QUOTE':
        const updatedProducts = state.selectedProducts.filter(product => product.name !== action.productName);
        const updatedVariants = state.selectedVariants.filter(variant => variant.var_name !== action.variantName);
        return {
          ...state,
          selectedProducts: updatedProducts,
          selectedVariants: updatedVariants,
        };
      
    case 'SET_SELECTED_VARIANT':
        return {
          ...state,
          selectedVariant: action.variant,
        };
      default:
        return state;
    }
};

const QuoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quoteReducer, initialState);

  const addToQuote = (product, quantity) => {
    dispatch({ type: 'ADD_TO_QUOTE', product, quantity });
  };
  
  const addVariantToQuote = (variant, quantity) => {
    dispatch({ type: 'ADD_VARIANT_TO_QUOTE', variant , quantity});
  };

  const setSelectedVariant = (variant) => {
    dispatch({ type: 'SET_SELECTED_VARIANT', variant });
  };


  const deleteFromQuote = (productName, variantName) => {
    dispatch({ type: 'DELETE_FROM_QUOTE', productName, variantName });
  };
  

  return (
    <QuoteContext.Provider value={{ state, addToQuote, addVariantToQuote, setSelectedVariant, deleteFromQuote }}>  
    {children}
    </QuoteContext.Provider>
  );
};

const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};

export { QuoteProvider, useQuote };
