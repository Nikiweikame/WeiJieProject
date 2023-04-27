<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
function sendAPI() {
  // console.log(inputValue.value)
  counterStore.APIshoot(inputValue.value);
}
const inputValue = ref({
  name: "",
  phone: "",
  mail: "",
  serveItem: "",
  address: "",
  gender: "",
  type: "",
  budget: "",
  other: "",
});
const serveGroup = ref([
  "設計規劃",
  "工程管理",
  "土地開發",
  "物業管家",
  "資產標售",
]);
const typeGroup = ref([
  "大樓住宅（有電梯）",
  "公寓（無電梯）",
  "辦公空間",
  "一般商家",
  "其他",
]);
function clickTest() {
  console.log(inputValue.value);
}
</script>
<style lang="scss" scoped>
label {
  position: absolute;
  margin: 0;
  top: 11.5px;
  right: 10px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: right;
  color: #373f41;
}
.budget-unit {
  position: relative;
}
.form-control {
  font-family: "Noto Sans TC";
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 12px;
  border: 1px solid #d9d9d9;
  &input::placeholder {
    color: #373f41;
  }
}
.gform {
  margin-top: -20px;
  textarea.form-control {
    height: 150px;
  }
}
.form-group {
  margin: 20px 0 0;
  &.row {
    margin: 0px -15px;
    > div {
      margin-top: 20px;
    }
  }
}
.btn {
  width: 165px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 138% */
  color: #ffffff;
  margin-bottom: 0;
  background: #903439;
  padding: 12px 45px 11px;
}
.select-content {
  padding-right: 15px;
  border: 1px solid #d9d9d9;
  height: 45px;
  select.form-control {
    border: 0;
    height: 19px;
    height: -webkit-fill-available;
  }
}
.btn-container {
  text-align: center;
}
.money-unit {
  background-color: #fff;
}
@media screen and (min-width: 1200px) {
  .btn-container {
    text-align: start;
  }

  .input-textarea {
    margin-top: 34px;
  }
}
</style>
<template>
  <div>
    <form @submit.prevent="sendAPI" class="gform">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="您的姓名（必填）"
          v-model="inputValue.name"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="聯絡電話（必填）"
          v-model="inputValue.phone"
          required
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          placeholder="電子信箱"
          v-model="inputValue.mail"
        />
      </div>
      <div class="form-group">
        <div class="select-content">
          <select class="form-control" required v-model="inputValue.serveItem">
            <option disabled value="">諮詢服務項目（必選）</option>
            <option v-for="typeValue in serveGroup" :value="typeValue">
              {{ typeValue }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="物件地址（必填）"
          v-model="inputValue.address"
          required
        />
      </div>
      <div class="form-group row">
        <div class="col-12 col-xl-6">
          <div class="select-content">
            <select class="form-control" v-model="inputValue.gender">
              <option disabled value="">性別稱謂</option>
              <option value="先生">先生</option>
              <option value="女士">女士</option>
            </select>
          </div>
        </div>
        <div class="col-12 col-xl-6">
          <div class="select-content">
            <select class="form-control" v-model="inputValue.type">
              <option disabled value="">空間類型</option>
              <option v-for="typeValue in typeGroup" :value="typeValue">
                {{ typeValue }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-group budget-unit">
        <input
          type="number"
          class="form-control"
          placeholder="預算"
          v-model.number="inputValue.budget"
        />
        <label class="money-unit">萬元</label>
      </div>
      <div class="form-group input-textarea">
        <textarea
          class="form-control"
          rows="5"
          placeholder="其他備註需求（可填寫電話方便聯繫的時間）"
          v-model="inputValue.other"
        ></textarea>
      </div>
      <div class="form-group btn-container">
        <button type="submit" class="btn btn-primary">送出</button>
      </div>
    </form>
  </div>
</template>
