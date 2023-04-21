<script setup>
import { ref } from "vue";
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
.select-content {
  padding-right: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  .form-control {
    border: 0;
  }
}
.btn-container{
  text-align: center;
}
@media screen and (min-width: 1200px) {
  .btn-container{
  text-align: start;
}
}
</style>
<template>
  <div>
    <form class="gform">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="您的姓名（必填）"
          v-model="inputValue.name"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="聯絡電話（必填）"
          v-model="inputValue.phone"
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
          <select class="form-control" v-model="inputValue.serveItem">
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
          placeholder="物件地址"
          v-model="inputValue.address"
        />
      </div>
      <div class="form-group row">
        <div class="col-6">
          <div class="select-content">
            <select class="form-control" v-model="inputValue.gender">
              <option disabled value="">性別稱謂</option>
              <option value="先生">先生</option>
              <option value="女士">女士</option>
            </select>
          </div>
        </div>
        <div class="col-6">
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
      <div class="form-group last-input">
        <input
          type="number"
          class="form-control"
          placeholder="預算"
          v-model="inputValue.budget"
        />
      </div>
      <div class="form-group">
        <textarea
          class="form-control"
          rows="5"
          placeholder="其他備註需求"
        ></textarea>
      </div>
      <div class="form-group btn-container">
        <p class="btn btn-primary" @click="clickTest">送出</p>
      </div>
    </form>
  </div>
</template>
