/* eslint-disable */
<template>
  <section class="container panel d-flex flex-column">
    <div class="panel-title">結帳</div>
    <Stepper :currentStep="currentStep" />
    <div class="panel-form">
      <form id="a-form" action="">
        <div class="form-content">
          <FormStepOne
            v-show="currentStep === 1"
            :initialStep="currentStep"
            @change-step="changeStep"
            @emit-data="getFormData"
          />
          <FormStepTwo
            v-show="currentStep === 2"
            @change-shipping="changeShipping"
            :initialStep="currentStep"
            @change-step="changeStep"
            @emit-data="getFormData"
          />
          <FormStepThree
            v-show="currentStep === 3"
            :initialStep="currentStep"
            @change-step="changeStep"
            @emit-data="getFormData"
            @form-submit="submitData"
          />
        </div>
      </form>
    </div>
    <div class="panel-cart">
      <Cart :shipping="shippingFee" />
    </div>
  </section>
</template>

<script>
import Stepper from "./../components/Stepper";
import FormStepOne from "./../components/FormStepOne";
import FormStepTwo from "./../components/FormStepTwo";
import FormStepThree from "./../components/FormStepThree";
import Cart from "./../components/Cart";

export default {
  components: {
    Stepper,
    FormStepOne,
    FormStepTwo,
    FormStepThree,
    Cart,
  },
  data() {
    return {
      currentStep: 1,
      data: {},
      shippingFee: 0,
    };
  },
  methods: {
    changeStep(step) {
      this.currentStep = step;
    },
    getFormData(form) {
      this.data = {
        ...this.data,
        ...form,
      };
    },
    changeShipping(fee) {
      this.shippingFee = Number(fee.shippingFee);
    },
    submitData() {
      console.log(this.data);
    },
  },
};
</script>


