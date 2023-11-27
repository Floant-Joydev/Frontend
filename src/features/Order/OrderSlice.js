import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { logoutUser } from "../auth/authSlice";

import { createOrder, createSubscription, fetchOrder, fetchSubscription } from "./OrderAPI";


const initialState = {
  allOrders: null,
  allSubscription: [],
  subcription: {},
  loadingStatus: "idle",
  products: [],
  address: null,
  totalAmount: 0,
  status: "pending",
  paymentMethod: null,
  latestOrderId: null,
};

export const logoutUser = createAction('auth/logout');

export const createOrderAsync = createAsyncThunk(
  'order/createOrder',
  async( orderData ) => {
    console.log('run before')
    const res = await createOrder(orderData);

    // console.log( 'run after')
    // const cart = useSelector(selectCart);
    // let flag = true;
    // console.log( cart)

    //Checking the order data is same as cart or not 
    // for( let i=0; i<orderData.products.length; i++){
    //   console.log('run');
    //   if( orderData.products[0].product !== cart[i].product._id ){
    //     flag = false;
    //     break;
    //   }
    // }

    return res.data;
  }
)
export const createSubscriptionAsync = createAsyncThunk(
  'order/createSubscription',
  async( orderData ) => {
    
    const res = await createSubscription(orderData);

    return res.data;
  }
)

export const fetchOrderAsync = createAsyncThunk(
  'order/fetchOrder',
  async() => {
    const res = await fetchOrder();

    return res.data;
  }
)
export const fetchSubscriptionAsync = createAsyncThunk(
  'order/fetchSubscription',
  async() => {
    const res = await fetchSubscription();

    return res.data;
  }
)

export const setAmount = createAction("order/setAmount");
export const setProducts = createAction("order/setProducts");
export const setAddress = createAction("order/setAddress");
export const setPaymentMethod = createAction("order/setPaymentMethod");
export const resetLastOrder = createAction("order/resetLastOrder");

export const setSubscriptionProduct = createAction('order/setSubProduct');
export const resetLastSubscription = createAction("order/resetLastSubscription");


export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    increment: (state) => {
      state.loggedinUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.loadingStatus = 'loading'
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.latestOrderId = action.payload.order.orders[action.payload.order.orders.length-1]._id;
        state.allOrders = action.payload.order.orders;
        state.loadingStatus = 'idle'
      })
      .addCase(fetchOrderAsync.pending, (state) => {
        state.loadingStatus = 'loading'
      })
      .addCase(fetchOrderAsync.fulfilled, (state, action) => {
        // console.log(action.payload.orders)
        const all = action.payload?.orders[0]?.orders || [];
        state.allOrders = all;
        state.loadingStatus = 'idle'
      })
      .addCase(fetchSubscriptionAsync.pending, (state) => {
        state.loadingStatus = 'loading'
      })
      .addCase(fetchSubscriptionAsync.fulfilled, (state, action) => {
        state.allSubscription = action.payload.subscription;
        state.loadingStatus = 'idle'
      })
      .addCase(setAmount, (state, action) => {
        state.totalAmount = action.payload;
      })
      .addCase(setProducts, (state, action) => {
        state.products = action.payload;
      })
      .addCase(setAddress, (state, action) => {
        state.address = action.payload;
      })
      .addCase(setPaymentMethod, (state, action) => {
        state.paymentMethod = action.payload;
      })
      .addCase(resetLastOrder, (state) => {
        state.latestOrderId = null;
      })
      .addCase(setSubscriptionProduct, (state, action) => {
        state.subcription = action.payload;
      })
      .addCase(createSubscriptionAsync.pending, (state, action) => {
        state.loadingStatus = "loading";
      })
      .addCase(createSubscriptionAsync.fulfilled, (state, action) => {
        state.loadingStatus = "idle";
        state.allSubscription.push(action.payload.subscription);
        state.latestOrderId = action.payload.subscription._id;
      })
      .addCase(resetLastSubscription, (state, action) => {
        state.latestOrderId = null;
        state.subcription = {};
      })
      
      .addCase(logoutUser, (state, action) => {
        state.subcription = {};
        state.allSubscription = null;
        state.allOrders = null;
        state.loadingStatus = "idle";
        state.products = [];
        state.address = null;
        state.totalAmount = 0;
        state.status = "pending";
        state.paymentMethod = null;
        state.latestOrderId = null;
      });
  },
});

export const { increment } = OrderSlice.actions;

export const selectAllOrders = (state) => state.order.allOrders;
export const selectAddress = (state) => state.order.address;
export const selectProducts = (state) => state.order.products;
export const selectTotalAmount = (state) => state.order.totalAmount;
export const selectPamentMethod = (state) => state.order.paymentMethod;
export const selectStatus = (state) => state.order.status;
export const selectLoading = (state) => state.order.loadingStatus;
export const selectLastOrderId = (state) => state.order.latestOrderId;
export const selectSubscription = (state) => state.order.subcription;
export const selectAllSubscription = (state) => state.order.allSubscription;

export default OrderSlice.reducer;
