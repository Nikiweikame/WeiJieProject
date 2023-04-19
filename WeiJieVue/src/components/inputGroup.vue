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
function clickTest() {
  console.log(inputValue.value);
}
</script>
<style lang="scss" scoped></style>
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
        <select class="form-control" v-model="inputValue.serveItem">
          <option disabled value="">諮詢服務項目（必選）</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
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
          <select class="form-control" v-model="inputValue.gender">
            <option disabled value="">性別稱謂</option>
            <option value="先生">先生</option>
            <option value="女士">女士</option>
          </select>
        </div>
        <div class="col-6">
          <select class="form-control" v-model="inputValue.type">
            <option disabled value="">空間類型</option>
            <option value="AA">AA</option>
            <option value="BB">BB</option>
            <option value="CC">CC</option>
          </select>
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
      <div class="form-group">
        <p class="btn btn-primary" @click="clickTest">送出</p>
      </div>
    </form>
  </div>
</template>
