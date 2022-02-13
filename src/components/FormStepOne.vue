<template>
  <div class="form-part">
    <p class="form-part-title">寄送地址</p>
    <div class="form-group">
      <div class="form-row prefix">
        <label for="">稱謂</label>
        <div>
          <select v-model="user.salutation" name="prefix" id="prefix">
            <option value="ms" selected>小姐</option>
            <option value="mr">先生</option>
          </select>
        </div>
      </div>
      <div class="form-row name">
        <label for="">姓名</label>
        <input
          v-model="user.username"
          id="name"
          type="text"
          placeholder="請輸入姓名"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="form-row phone">
        <label for="">電話</label>
        <div>
          <input
            v-model="user.phone"
            id="phone"
            type="number"
            placeholder="請輸入行動電話"
          />
        </div>
      </div>
      <div class="form-row email">
        <label for="">Email</label>
        <div>
          <input
            v-model="user.email"
            id="email"
            type="text"
            placeholder="請輸入電子郵件"
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="form-row city">
        <label for="">縣市</label>
        <div class="select-wrapper">
          <select
            v-model="user.city"
            name="a-location"
            id="a-location"
            required
          >
            <option value="" disabled selected>請選擇縣市</option>
            <option>臺北市</option>
            <option>新北市</option>
          </select>
        </div>
      </div>
      <div class="form-row address">
        <label for="">地址</label>
        <div>
          <input
            v-model="user.address"
            id="address"
            type="text"
            placeholder="請輸入地址"
          />
        </div>
      </div>
    </div>
    <div class="panel-buttons d-flex justify-content-end" id="btn-control">
      <button class="panel-button button-next" @click.stop.prevent="nextStep">
        下一步
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        salutation: "",
        username: "",
        phone: "",
        email: "",
        city: "",
        address: "",
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
    nextStep() {
      this.step = this.initialStep + 1;
      this.$emit("change-step", this.step);
      this.$emit("emit-data", this.user);
    },
  },
};
</script>