<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>


<style lang="scss">
/* 載入字型 */
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500&display=swap");

/* reset css */ /* basic settings*/
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Noto Sans TC", sans-serif;
}

.container {
  width: 90%;
  margin: 3rem auto;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0px;
  padding: 0px;
}

ul,
ol,
li {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

a,
a:hover,
a:focus,
a:visited {
  text-decoration: none;
  color: #333333;
  font-weight: 500;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

.btn,
button,
button:focus,
input:focus,
textarea:focus,
select,
select:focus,
a:focus {
  outline: 0px !important;
}

/* Sass */

$white: #ffffff;
$fashion-pink: #f67599;
$light-gray: #f0f0f5;
$sky-gray: #e5e5e5;
$steel-gray: #afb1bd;
$koala-gray: #999999;
$dark-gray: #808080;
$footer-gray: #f6f7f8;
$black: #000000;
$almost-black: #2a2a2a;
$fashion-black: #333333;

$sizes: (
  25: 25%,
  50: 50%,
  75: 75%,
  100: 100%,
);
@each $prop, $abbrev in (width: w, height: h) {
  @each $num, $val in $sizes {
    .#{$abbrev}-#{$num} {
      #{$prop}: $val;
    }
  }
}
$spacer: 1rem;
$spacers: (
  0: 0,
  1: (
    $spacer * 0.25,
  ),
  2: (
    $spacer * 0.5,
  ),
  3: (
    $spacer * 0.75,
  ),
  4: $spacer,
  5: (
    $spacer * 1.25,
  ),
  6: (
    $spacer * 1.5,
  ),
  7: (
    $spacer * 1.75,
  ),
  8: (
    $spacer * 2,
  ),
);
@each $prop, $abbrev in (margin: m, padding: p) {
  @each $num, $val in $spacers {
    .#{$abbrev}-#{$num} {
      #{$prop}: $val;
    }
    .#{$abbrev}t-#{$num} {
      #{$prop}-top: $val;
    }
    .#{$abbrev}r-#{$num} {
      #{$prop}-right: $val;
    }
    .#{$abbrev}b-#{$num} {
      #{$prop}-bottom: $val;
    }
    .#{$abbrev}l-#{$num} {
      #{$prop}-left: $val;
    }
    .#{$abbrev}x-#{$num} {
      #{$prop}-left: $val;
      #{$prop}-right: $val;
    }
    .#{$abbrev}y-#{$num} {
      #{$prop}-top: $val;
      #{$prop}-bottom: $val;
    }
  }
}

@mixin getStepNums($num) {
  @for $i from 1 through $num {
    &:nth-child(#{$i}) .circle-container::after {
      content: "#{$i}";
    }
  }
}

%input-style {
  font-size: 16px;
  border: 1px solid $light-gray;
  border-radius: 5px;
  padding: 1em;
  &:hover,
  &:focus {
    border: 1px solid $dark-gray;
  }
}

@mixin BtnStyle($background-color, $color) {
  background-color: $background-color;
  border: none;
  border-radius: 0.5rem;
  color: $color;
  font-size: 1rem;
  cursor: pointer;
  padding: 1rem;
}

button[disabled] {
  display: none;
}

input {
  padding: 1rem;
}

input:required {
  box-shadow: none;
}

input:invalid {
  box-shadow: none;
}

.d-none {
  display: none;
}

.d-inline {
  display: inline;
}

.d-inline-block {
  display: inline-blockt;
}

.d-block {
  display: block;
}

.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}
.justify-content-start {
  justify-content: flex-start;
}
.justify-content-end {
  justify-content: flex-end;
}
.justify-content-center {
  justify-content: center;
}
.justify-content-between {
  justify-content: space-between;
}
.justify-content-around {
  justify-content: space-around;
}
.align-content-start {
  align-content: flex-start;
}
.align-content-end {
  align-content: flex-end;
}
.align-content-center {
  align-content: center;
}
.align-items-start {
  align-items: flex-start;
}
.align-items-end {
  align-items: flex-end;
}
.align-items-center {
  align-items: center;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.text-left {
  text-align: left;
}
.cursor-pointer {
  cursor: pointer;
}

/*Main Header*/

header {
  z-index: 200;
}

.nav-toggle {
  visibility: hidden;
}

.nav-toggle:checked ~ .nav-menu {
  display: block;
  transform: scale(1, 1);
}

.nav-toggle-label {
  margin-left: $spacer;
  display: flex;
  align-items: center;
  .nav-vector {
    position: absolute;
    width: 15px;
    height: 3px;
    background: $almost-black;
  }
  .nav-vector::before {
    width: 10px;
    height: 3px;
    background: $almost-black;
  }
  .nav-vector::after {
    width: 20px;
    height: 3px;
    background: $almost-black;
  }
  .nav-vector::before,
  .nav-vector::after {
    position: absolute;
    content: "";
  }
  .nav-vector::before {
    top: 0.5rem;
  }
  .nav-vector::after {
    bottom: 0.5rem;
  }
}

.nav-logo {
  display: flex;
  justify-content: center;
  height: 3rem;
  min-width: 17rem;
}

.nav-menu {
  position: absolute;
  width: 100%;
  transition: transform 0.7s ease-out;
  transform-origin: top;
  transform: scale(1, 0);
  background-color: $white;
}

.nav-items {
  flex-direction: column;
  align-items: center;

  .nav-item {
    border-bottom: 2px solid $sky-gray;
    width: 100%;
    text-align: center;
    padding: 1rem;
  }
}

.nav-menu-logo {
  display: none;
}

.nav-icons {
  display: flex;
  justify-content: center;

  .nav-icon {
    margin: 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
  }
}

/* Panel Section */

.panel {
  z-index: 100;
  color: $almost-black;

  .panel-title {
    text-align: left;
    height: 5rem;
    line-height: 5rem;
    font-size: 1.8rem;
    font-weight: 700;
  }

  .panel-stepper {
    height: 3rem;
    .steps-container {
      width: 100%;
      .step {
        z-index: -1;
        flex: 1;
        text-align: center;
        color: $white;
        position: relative;

        @include getStepNums(3);

        .circle-container {
          height: 2rem;
          width: 2rem;
          line-height: 1.8rem;
          background-color: $steel-gray;
          border: 1px solid $steel-gray;
          border-radius: 50%;
          color: white;
          margin: 0 auto;
        }

        &.checked {
          .circle-container {
            background-color: $almost-black;
            border-color: $almost-black;
            color: $white;
          }
        }

        &.active {
          .circle-container {
            background-color: $white;
            border-color: $almost-black;
            color: $almost-black;
          }
        }

        &.checked .circle-container::after {
          content: "\2714";
        }
      }
      .connect-line {
        position: absolute;
        display: block;
        top: 1rem;
        right: calc(50% + 2rem);
        left: calc(-50% + 2rem);
        height: 2px;
        background-color: $light-gray;
      }
      .label-container {
        display: none;
      }
    }
  }

  form {
    input {
      @extend %input-style;
      &[type="radio"] {
        -webkit-appearance: none; /* Safari and Chrome */
        border-radius: 50%;
        margin-top: 10px;
        padding: 12px;
        cursor: pointer;
        ~ label {
          display: inline-block;
          font-weight: normal;
          //padding: 20px;
        }
        &:hover {
          border-color: $dark-gray;
        }
        &:checked {
          box-shadow: inset 0px 0px 0px 7px black;
        }
      }
      &[type="text"] {
        cursor: pointer;
        width: 100%;
        &:invalid {
          color: $koala-gray;
        }
      }
      &[type="number"] {
        width: 100%;
      }
    }
    .select-wrapper {
      position: relative;
      z-index: 0;
      &::after {
        content: "\25BE";
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
        z-index: -1;
      }
    }
    select {
      @extend %input-style;
      width: 100%;
      -webkit-appearance: none;
      cursor: pointer;
      background-color: transparent;
      &:invalid {
        color: $koala-gray;
      }
    }

    .form-group {
      display: grid;
      grid-template-columns: repeat (6, 1fr);
      grid-gap: 1em;
    }
    .prefix {
      grid-column: 1 / 3;
    }
    .name {
      grid-column: 3 / 7;
    }
    .card-holder,
    .card-number {
      grid-column: 1 / 7;
    }
    .valid {
      grid-column: 1 / 4;
    }
    .cvc-ccv {
      grid-column: 4 / 7;
    }
    .form-row {
      margin-bottom: 24px;
      > label {
        display: block;
        margin-bottom: 6px;
        font-weight: 500;
      }
    }
  }

  .panel-form {
    text-align: left;
    .form-content {
      .form-part-title {
        height: 5rem;
        line-height: 5rem;
        font-size: 1.8rem;
        font-weight: 700;
      }
      .shippings-wrapper {
        .shippings {
          display: grid;
          //grid-gap: 1px;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: repeat(2, 1fr);
          border: 1px solid $almost-black;
          border-radius: 0.25rem;
          margin: 5% 0;
          //width: 95%;
          padding: 0.8rem 3rem;
          justify-self: center;
        }

        .shipping-radio {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
        }

        .shipping {
          grid-column: 2 / 6;
          grid-row: 1 / 2;
        }

        .shipping-details {
          grid-column: 2 / 6;
          grid-row: 2 / 3;
        }

        .shipping-cost {
          grid-column: 6 / 7;
          grid-row: 1 / 2;
        }
      }
    }
  }

  .panel-cart {
    height: 100%;

    .cart {
      display: grid;
      grid-template-rows: 70% 30%;
      padding-top: 1rem;
      border: 1px solid $sky-gray;
      border-radius: 0.5rem;
      height: 95%;

      .cart-title {
        display: none;
        padding-left: 1rem;
      }
      .cart-items {
        grid-row: 1 / 2;
        .cart-item {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          //grid-gap: 1px;
          height: 8rem;
          padding-top: 1px;

          .item-image {
            grid-column: 1 / 2;
            grid-row: 1 / 4;
            padding: 0.5rem 0 0.5rem 1rem;
            height: 8rem;
            width: 8rem;
            justify-self: center;
          }

          .item-name,
          .item-counter,
          .item-price {
            grid-column: 2 / 4;
            justify-self: end;
            padding-top: 1%;
            padding-right: 10%;
          }

          .item-name {
            grid-row: 1 / 2;
          }

          .item-counter {
            grid-row: 2 / 3;
            width: 100%;
            font-weight: bold;
            display: flex;
            justify-content: end;
          }

          .item-price {
            grid-row: 3 / 4;
            font-weight: bold;
          }

          .item-minus,
          .item-plus {
            width: 1.7rem;
            height: 1.7rem;
            line-height: 1.5rem;
            margin-left: 1rem;
            background-color: $light-gray;
            border-radius: 50%;
            text-align: center;
            font-size: 1.3rem;
          }

          .item-number {
            width: 2rem;
            height: 1.5rem;
            line-height: 1.5rem;
            margin-left: 1rem;
            text-align: center;
          }
        }
      }
      .cart-checkout {
        grid-row: 2 / 3;
        .checkout {
          border-top: 1px solid $light-gray;
          height: 5rem;
          width: 90%;
          padding: 3% 5%;

          .checkout-shippingfee {
            font-weight: bold;
          }
          .checkout-sum-end {
            font-weight: bold;
          }
        }
      }
    }
  }
}

.panel-buttons {
  border-top: 1px solid $light-gray;
  margin-top: 2rem;
  .button-back {
    @include BtnStyle($white, $black);
  }

  .button-next {
    @include BtnStyle($fashion-pink, $white);
  }
}

.panel-button {
  flex: 1;
  margin: 2rem 0;
}

footer {
  display: none;
}

/*  電腦版  */

@media screen and (min-width: 768px) {
  /*Main Header*/
  .nav-toggle,
  .nav-toggle-label,
  .nav-logo {
    display: none;
  }
  .nav-menu {
    all: unset;
    display: grid;
    grid-template-columns: 4.5fr 5.5fr;
    position: relative;
  }
  .nav-menu-logo {
    display: block;
    position: absolute;
    top: 5px;
    left: 45%;
    height: 2rem;
    width: 12rem;
    margin: 1rem;
  }
  .nav-items {
    flex-direction: row;
    margin-left: 30px;
    .nav-item {
      border-bottom: none;
    }
  }
  .nav-icons {
    display: flex;
    justify-content: flex-end;
    margin-right: 1.6rem;
    align-items: center;
  }

  /* Panel Section */
  .panel {
    display: grid;
    grid-template-columns: 3fr 3fr 1fr 5fr;
    grid-template-rows: repeat(6, auto);
    grid-template-areas:
      "title title . ."
      "stepper stepper . cart"
      "form form . cart"
      "form form . cart"
      "form form . cart"
      "button button . cart";

    .panel-title {
      grid-area: title;
    }
    .panel-stepper {
      grid-area: stepper;

      .step {
        position: relative;

        .circle-container {
          position: absolute;
          left: -0.5rem;
        }

        .connect-line {
          position: absolute;
          display: block;
          top: 1rem;
          right: calc(100% + 1rem);
          left: calc(-40% + 1rem);
        }

        .label-container {
          position: absolute;
          display: block;
          top: 0.3rem;
          left: 2.1rem;
          color: $almost-black;
        }
      }
    }
    .panel-form {
      grid-area: form;
      .form-part {
        min-height: 400px;
        .phone {
          grid-column: 1 / 4;
        }
        .email {
          grid-column: 4 / 7;
        }
        .city {
          grid-column: 1 / 3;
        }
        .address {
          grid-column: 3 / 7;
        }
        .card-holder,
        .card-number {
          grid-column: 1 / 5;
        }
      }
    }

    .panel-cart {
      grid-area: cart;
      .cart {
        grid-template-rows: 10% 60% 30%;
        .cart-title {
          display: block;
          grid-row: 1 / 2;
          padding-left: 5%;
          font-size: 20px;
          font-weight: bold;
        }
        .cart-items {
          grid-row: 2 / 3;
          .cart-item {
            display: grid;
            grid-template-columns: 1fr 2.5fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            height: 8rem;
            padding-top: 1px;

            .item-image {
              grid-column: 1 / 2;
              grid-row: 1 / 4;
              padding: 0.5rem 0 0.5rem 1rem;
              height: 8rem;
              width: 8rem;
              justify-self: center;
            }

            .item-name {
              grid-column: 2 / 3;
              grid-row: 1 / 2;
              padding-left: 1rem;
              justify-self: left;
            }
            .item-counter {
              grid-column: 2 / 3;
              grid-row: 2 / 3;
              display: flex;
              justify-content: start;
            }

            .item-price {
              grid-column: 3 / 4;
              grid-row: 1 / 2;
              justify-self: left;
            }

            .item-minus,
            .item-plus {
              width: 1.7rem;
              height: 1.7rem;
              line-height: 1.5rem;
              margin-left: 1rem;
              background-color: $light-gray;
              border-radius: 50%;
              text-align: center;
              font-size: 1.3rem;
            }

            .item-number {
              width: 2rem;
              height: 1.5rem;
              line-height: 1.5rem;
              margin-left: 1rem;
              text-align: center;
            }
          }
        }
        .cart-checkout {
          grid-row: 3 / 4;
          .checkout {
            border-top: 1px solid $light-gray;
            height: 5rem;
            width: 90%;
            padding: 3% 1%;

            .checkout-shippingfee {
              font-weight: bold;
            }
            .checkout-sum-end {
              font-weight: bold;
            }
          }
        }
      }
    }
  }

  .panel-buttons {
    grid-area: button;
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;
    grid-template-areas: "button-back . button-next";

    .button-back {
      grid-area: button-back;
    }
    .button-next {
      grid-area: button-next;
    }
  }

  /* Footer Section */
  footer {
    display: block;

    .footer-container {
      padding: 2rem;
      background-color: $footer-gray;
    }

    .footer-logo {
      width: 230px;
      height: auto;
    }

    .service-title,
    .about-title,
    .info-title,
    .social-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 1rem 0;
    }

    .service-link,
    .about-link,
    .info-link,
    .social-phone {
      color: $dark-gray;
    }

    .social-link {
      width: 32px;
      height: 28px;
      margin-top: 3px;
      margin-right: 3px;
    }
  }
}
</style>

