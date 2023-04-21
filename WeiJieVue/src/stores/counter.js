import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const token =
    "patkn10QKod0GpMVT.e73c2dafb90ad03a72f37e72b840555c25914191d1bd7f02734274c25768ec5f";
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  function APIshoot(content) {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer patkn10QKod0GpMVT.e73c2dafb90ad03a72f37e72b840555c25914191d1bd7f02734274c25768ec5f"
    );
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "brw=brwNJctjsRJ49Zc6S; AWSALB=C/dMumgQyVsVkVkuMjM5oR5txCsc+PShnFswSr5CXF4p+IlPPuuJC/vj/yB9uGN5eq1BGK2PYpmsjNRg7qDZwA1BoUcmRClb1LL2XP4PWi+uhqBAeGbE3mQrV7h7; AWSALBCORS=C/dMumgQyVsVkVkuMjM5oR5txCsc+PShnFswSr5CXF4p+IlPPuuJC/vj/yB9uGN5eq1BGK2PYpmsjNRg7qDZwA1BoUcmRClb1LL2XP4PWi+uhqBAeGbE3mQrV7h7"
    );
    console.log(content);
    var raw = JSON.stringify({
      fields: {
        "您的姓名（必填）": content.name,
        "聯絡電話（必填）": content.phone,
        "電子信箱": content.mail,
        "諮詢服務項目（必選）": content.serveitem,
        "物件地址": content.address,
        "性別稱謂": content.gender,
        "空間類型": content.type,
        "預算": content.budget,
        "其他備註需求": content.other,
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://api.airtable.com/v0/appDjTmSMY5jvzqiZ/%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert(`感謝您的意見`);
      })
      .catch((error) => console.log("error", error));
  }
  return { count, doubleCount, increment, APIshoot };
});
