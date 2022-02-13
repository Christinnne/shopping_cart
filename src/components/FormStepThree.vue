<template>
  <div class="form-part">
    <p class="form-part-title">付款資訊</p>
    <div class="form-group">
      <div class="form-row card-holder">
        <label for="">持卡人姓名</label>
        <input
          v-model="user.cardName"
          id="card-holder"
          type="text"
          placeholder="John Doe"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="form-row card-number">
        <label for="">卡號</label>
        <input
          v-model="user.cardNo"
          id="card-number"
          type="number"
          placeholder="1111 2222 3333 4444"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="form-row valid">
        <label for="">有效期限</label>
        <input
          v-model="user.expDate"
          id="valid"
          type="number"
          placeholder="MM/YY"
        />
      </div>
      <div class="form-row cvc-ccv">
        <label for="">CVC/CCV</label>
        <input
          v-model="user.cvc"
          id="cvc-ccv"
          type="number"
          placeholder="123"
        />
      </div>
    </div>
    <div class="panel-buttons d-flex justify-content-end" id="btn-control">
      <button class="panel-button button-back" @click.stop.prevent="preStep">
        上一步
      </button>
      <button class="panel-button button-next" @click.stop.prevent="submitData">
        確認下單
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
        cardName: "",
        cardNo: "",
        expDate: "",
        cvc: "",
      },
      step: 0,
    };
  },
  props: {
    initialStep: {
      type: Number,
      required: true,
    },
  },
  methods: {
    submitData() {
      this.$emit("emit-data", this.user);
      this.$emit("form-submit", this.user);
    },
    preStep() {
      if (this.initialStep <= 1) return;
      this.step = this.initialStep - 1;
      this.$emit("change-step", this.step);
    },
  },
};
</script>