<template>
  <div class="cart">
    <div class="cart-title">購物籃</div>
    <div class="cart-items">
      <div class="cart-item" v-for="product in products" :key="product.id">
        <div class="item-image">
          <img :src="product.image" alt="" />
        </div>
        <div class="item-name">{{ product.name }}</div>
        <div class="item-counter">
          <div
            class="item-minus"
            @click="deleteItem(product.id, product.amount)"
          >
            -
          </div>
          <span class="item-number">{{ product.amount }}</span>
          <div class="item-plus" @click="addItem(product.id)">+</div>
        </div>
        <div class="item-price">${{ product.price }}</div>
      </div>
    </div>
    <div class="cart-checkout d-flex flex-column align-items-center">
      <div class="checkout checkout-shipping d-flex justify-content-between">
        <div class="checkout-shipping-title">運費</div>
        <div class="checkout-shippingfee">
          {{ shipping === 500 ? "$500" : "免費" }}
        </div>
      </div>
      <div class="checkout checkout-sum d-flex justify-content-between">
        <div class="checkout-sum-title">小計</div>
        <div class="checkout-sum-end">${{ totalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = {
  products: [
    {
      name: "破壞補丁修身牛仔褲",
      price: 3999,
      image: "https://i.imgur.com/RqUqDdu.png",
      amount: 1,
      id: 1,
    },
    {
      name: "刷色直筒牛仔褲",
      price: 1299,
      image: "https://i.imgur.com/sBqwY45.png",
      amount: 1,
      id: 2,
    },
  ],
};
export default {
  data() {
    return {
      products: [],
    };
  },
  props: {
    shipping: {
      type: Number,
      require: true,
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.products = [...dummyData.products];
    },
    addItem(id) {
      this.products = this.products.map((item) => {
        if (item.id === id) {
          item.amount++;
          return item;
        } else return item;
      });
    },
    deleteItem(id, amount) {
      if (amount <= 1) return;
      this.products = this.products.map((item) => {
        if (item.id === id) {
          item.amount--;
          return item;
        } else return item;
      });
    },
    calTotalPrice() {
      let productsFee = 0;
      for (let i in this.products) {
        productsFee += this.products[i].amount * this.products[i].price;
      }
      return this.shipping + productsFee;
    },
  },
  computed: {
    totalPrice() {
      return this.calTotalPrice();
    },
  },
};
</script>
