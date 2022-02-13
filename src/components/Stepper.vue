<template>
  <div class="panel-stepper">
    <div id="step-control" class="steps-container d-flex">
      <div class="step" :class="stepOneStyle">
        <div class="circle-container"></div>
        <span class="connect-line"></span>
        <div class="label-container">寄送地址</div>
      </div>
      <div class="step" :class="stepTwoStyle">
        <div class="circle-container"></div>
        <span class="connect-line"></span>
        <div class="label-container">運送方式</div>
      </div>
      <div class="step" :class="stepThreeStyle">
        <div class="circle-container"></div>
        <span class="connect-line"></span>
        <div class="label-container">付款資訊</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      require: true,
    },
  },
  computed: {
    stepOneStyle: function () {
      let result = "";
      switch (this.currentStep) {
        case 1:
          return (result = "active");
        case 2:
          return (result = "checked");
        case 3:
          return (result = "checked");
      }
      return result;
    },
    stepTwoStyle: function () {
      let result = "";
      switch (this.currentStep) {
        case 1:
          return (result = "");
        case 2:
          return (result = "active");
        case 3:
          return (result = "checked");
      }
      return result;
    },
    stepThreeStyle: function () {
      let result = "";
      switch (this.currentStep) {
        case 1:
          return (result = "");
        case 2:
          return (result = "");
        case 3:
          return (result = "active");
      }
      return result;
    },
  },
};
</script>