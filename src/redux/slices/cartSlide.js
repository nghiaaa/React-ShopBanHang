import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  totalQuanlity: 0,
};

const cartSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      // const itemIdx = tempData.findIndex(item =>  item.id === newItem.id)
      if (existingItem >= 0) {
        state.cart[existingItem] = {
          ...state.cart[existingItem],
          cartQuantity: state.cart[existingItem].cartQuantity + 1,
        };
      } else {
        let tempProductItem = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.cart.push(tempProductItem);
      }
    },
    decreaseProduct: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;
      } else if (state.cart[itemIndex].cartQuantity === 1) {
        const nextCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = nextCart;
      }
    },
    deleteProduct: (state, action) => {
      const nextCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = nextCart;
    },
    getTotals(state, action) {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addProduct, decreaseProduct, getTotals, deleteProduct } =
  cartSlide.actions;

export default cartSlide.reducer;
