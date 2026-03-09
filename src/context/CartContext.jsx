import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.selectedSize === action.payload.selectedSize)
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

const getInitialState = () => {
  try {
    const saved = localStorage.getItem('nike-cart');
    return saved ? JSON.parse(saved) : { items: [] };
  } catch {
    return { items: [] };
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, null, getInitialState);

  useEffect(() => {
    localStorage.setItem('nike-cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product, selectedSize) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, selectedSize } });
  };

  const removeFromCart = (id, selectedSize) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, selectedSize } });
  };

  const updateQuantity = (id, selectedSize, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, selectedSize, quantity } });
  };

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const cartTotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        cartTotal,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
