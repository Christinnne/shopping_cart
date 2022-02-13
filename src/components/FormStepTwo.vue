<template>
  <div class="form-part">
    <p class="form-part-title">運送方式</p>
    <div class="shippings-wrapper">
      <div class="shippings">
        <div class="shipping-radio">
          <input
            v-model="user.shippingFee"
            name="shipping"
            type="radio"
            value="0"
          />
        </div>
        <label for="" class="shipping">標準配送</label>
        <h4 class="shipping-details">約3 ~ 7個工作天</h4>
        <h4 class="shipping-cost">免費</h4>
      </div>
      <div class="shippings">
        <div class="shipping-radio">
          <input
            v-model="user.shippingFee"
            name="shipping"
            type="radio"
            value="500"
          />
        </div>
        <label for="" class="shipping">DHL 貨運</label>
        <h4 class="shipping-details">48小時內送達</h4>
        <h4 class="shipping-cost">$500</h4>
      </div>
    </div>
    <div class="panel-buttons d-flex justify-content-end" id="btn-control">
      <button class="panel-button button-back" @click.stop.prevent="preStep">
        上一步
      </button>
      <button class="panel-button button-next" @click.stop.prevent="nextStep">
        下一步
      </button>
    </div>
  </div>
</template>

<script>
// import { submitData } from "./../utils/formSubmit";
export default {
  // mixins: [submitData],
  data() {
    return {
      user: {
        shippingFee: "",
      },
      step: 0,
    };
  },
  watch: {
    user: {
      handler: function (newValue) {
        this.$emit("change-shipping", newValue);
      },
      deep: true,
    },
  },
  props: {
    initialStep: {
      type: Number,
      required: true,
    },
  },
  methods: {
    nextStep() {
      this.step = this.initialStep + 1;
      this.$emit("change-step", this.step);
      this.$emit("emit-data", this.user);
    },
    preStep() {
      if (this.initialStep <= 1) return;
      this.step = this.initialStep - 1;
      this.$emit("change-step", this.step);
    },
  },
};
</script>

