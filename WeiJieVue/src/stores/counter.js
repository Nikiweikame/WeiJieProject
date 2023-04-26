import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  // test page
  // const token =
  //   "patkn10QKod0GpMVT.e73c2dafb90ad03a72f37e72b840555c25914191d1bd7f02734274c25768ec5f";
  // const table = `appDjTmSMY5jvzqiZ`;
  // my token
  const token =
    "patPsbteoemPG9Pi0.d71cb57b4e0a2d6d618191fd5167660c74dc8d3569e8f833932b76412ce6072c";
  const table = `appwxd1kO1icocyoH`;
  function showAlert(text) {
    const alertElement = document.querySelector(".alert.alert-danger");
    alertElement.innerHTML = text;
    // 將警告彈窗添加到頁面上
    alertElement.classList.toggle("show");
    setTimeout(() => {
      alertElement.classList.toggle("show");
      alertElement.innerHTML = "";
    }, 3000);
  }
  function APIshoot(content) {
    const page = "%E8%81%AF%E7%B5%A1%E6%88%91%E5%80%91";
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "brw=brwNJctjsRJ49Zc6S; AWSALB=C/dMumgQyVsVkVkuMjM5oR5txCsc+PShnFswSr5CXF4p+IlPPuuJC/vj/yB9uGN5eq1BGK2PYpmsjNRg7qDZwA1BoUcmRClb1LL2XP4PWi+uhqBAeGbE3mQrV7h7; AWSALBCORS=C/dMumgQyVsVkVkuMjM5oR5txCsc+PShnFswSr5CXF4p+IlPPuuJC/vj/yB9uGN5eq1BGK2PYpmsjNRg7qDZwA1BoUcmRClb1LL2XP4PWi+uhqBAeGbE3mQrV7h7"
    );
    // console.log(content);
    var raw = JSON.stringify({
      fields: {
        "您的姓名（必填）": content.name,
        "聯絡電話（必填）": content.phone,
        電子信箱: content.mail,
        "諮詢服務項目（必選）": content.serveItem,
        "物件地址（必填）": content.address,
        性別稱謂: content.gender,
        空間類型: content.type,
        預算: content.budget !== "" ? content.budget : 0,
        其他備註需求: content.other,
      },
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`https://api.airtable.com/v0/${table}/${page}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // console.log(result);
        showAlert(`表單已送出，感謝${content.name}${content.gender}`);
      })
      .catch((error) => console.log("error", error));
  }
  const serveitem = ref({
    design: [],
    manage: [],
    develop: [],
    property: [],
    auction: [],
  });
  serveAPI();
  function serveAPI() {
    const page = "%E6%9C%8D%E5%8B%99%E9%A0%85%E7%9B%AE";
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append(
      "Cookie",
      "brw=brwNJctjsRJ49Zc6S; AWSALB=2eMNzt8SkPublfrM3U6W6Z+y/LDSaAk31Esx2cq49vtgM9q8BjOjlhfmosTeJSHE3JwBuFPBO/16kPVpvoAfrTdIGRHa4zhnCy/F0RLKAlUD2lkr7U1C/0pudpfC; AWSALBCORS=2eMNzt8SkPublfrM3U6W6Z+y/LDSaAk31Esx2cq49vtgM9q8BjOjlhfmosTeJSHE3JwBuFPBO/16kPVpvoAfrTdIGRHa4zhnCy/F0RLKAlUD2lkr7U1C/0pudpfC"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://api.airtable.com/v0/${table}/${page}?view=Grid%20view`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        result.records?.forEach((element) => {
          if (element.fields["設計規劃"]) {
            serveitem.value.design.push(element.fields["設計規劃"]);
          }
          if (element.fields["工程管理"]) {
            serveitem.value.manage.push(element.fields["工程管理"]);
          }
          if (element.fields["土地開發"]) {
            serveitem.value.develop.push(element.fields["土地開發"]);
          }
          if (element.fields["物業管家"]) {
            serveitem.value.property.push(element.fields["物業管家"]);
          }
          if (element.fields["資產標售"]) {
            serveitem.value.auction.push(element.fields["資產標售"]);
          }
        });
      })
      .catch((error) => console.log("error", error));
  }
  const basicInformation = ref({
    mail: "",
    phone: "",
    address: "",
    googleMap: "",
    iframeMap: "",
  });
  basicInformationAPI();
  function basicInformationAPI() {
    const page = "%E5%9F%BA%E7%A4%8E%E8%B3%87%E8%A8%8A";
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append(
      "Cookie",
      "brw=brwNJctjsRJ49Zc6S; AWSALB=2eMNzt8SkPublfrM3U6W6Z+y/LDSaAk31Esx2cq49vtgM9q8BjOjlhfmosTeJSHE3JwBuFPBO/16kPVpvoAfrTdIGRHa4zhnCy/F0RLKAlUD2lkr7U1C/0pudpfC; AWSALBCORS=2eMNzt8SkPublfrM3U6W6Z+y/LDSaAk31Esx2cq49vtgM9q8BjOjlhfmosTeJSHE3JwBuFPBO/16kPVpvoAfrTdIGRHa4zhnCy/F0RLKAlUD2lkr7U1C/0pudpfC"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://api.airtable.com/v0/${table}/${page}?view=Grid%20view`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        basicInformation.value.mail = result.records[0].fields["信箱"];
        basicInformation.value.phone = result.records[0].fields["電話"];
        basicInformation.value.address = result.records[0].fields["地址"];
        basicInformation.value.googleMap =
          result.records[0].fields["google map"];
        basicInformation.value.iframeMap = result.records[0].fields["嵌入網址"]
          ? result.records[0].fields["嵌入網址"].split(`"`)[1]
          : "";
      })
      .catch((error) => console.log("error", error));
  }
  // designSample
  const designSampleArray = ref([]);
  const designSampleDescriptionArray = ref([]);
  const designSampleDateArray = ref([]);
  const designSampleOtherUrlArray = ref([]);
  designSampleAPI();
  function designSampleAPI() {
    const page = "%E8%A8%AD%E8%A8%88%E6%A1%88%E4%BE%8B";
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append(
      "Cookie",
      "brw=brwNJctjsRJ49Zc6S; AWSALB=2eMNzt8SkPublfrM3U6W6Z+y/LDSaAk31Esx2cq49vtgM9q8BjOjlhfmosTeJSHE3JwBuFPBO/16kPVpvoAfrTdIGRHa4zhnCy/F0RLKAlUD2lkr7U1C/0pudpfC; AWSALBCORS=2eMNzt8SkPublfrM3U6W6Z+y/LDSaAk31Esx2cq49vtgM9q8BjOjlhfmosTeJSHE3JwBuFPBO/16kPVpvoAfrTdIGRHa4zhnCy/F0RLKAlUD2lkr7U1C/0pudpfC"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://api.airtable.com/v0/${table}/${page}?view=Grid%20view`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        result.records.forEach((item) => {
          const designSample = {
            name: item.fields["案例名稱"] ? item.fields["案例名稱"] : "",
            title: item.fields["案例名稱"] ? item.fields["案例名稱"] : "",
            imgUrl: item.fields["封面圖"]
              ? item.fields["封面圖"][0]["url"]
              : "",
          };
          item.fields["案例名稱"] && designSampleArray.value.push(designSample);
          designSampleDescriptionArray.value.push(
            item.fields["詳細介紹"] ? item.fields["詳細介紹"].split("\n") : ""
          );
          designSampleDateArray.value.push(
            item.fields["日期"] ? `DATE: ${item.fields["日期"]}` : ""
          );
          designSampleOtherUrlArray.value.push(
            item.fields["其他圖片"]
              ? item.fields["其他圖片"].map((element) => element["url"])
              : ""
          );
        });
      })
      .catch((error) => console.log("error", error));
  }
  // projectSample
  const projectSampleArray = ref([]);
  const projectSampleDescriptionArray = ref([]);
  const projectSampleDateArray = ref([]);
  const projectSampleOtherUrlArray = ref([]);
  projectSampleAPI();
  function projectSampleAPI() {
    const page = "%E5%B7%A5%E7%A8%8B%E6%A1%88%E4%BE%8B";
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append(
      "Cookie",
      "brw=brwNJctjsRJ49Zc6S; AWSALB=2eMNzt8SkPublfrM3U6W6Z+y/LDSaAk31Esx2cq49vtgM9q8BjOjlhfmosTeJSHE3JwBuFPBO/16kPVpvoAfrTdIGRHa4zhnCy/F0RLKAlUD2lkr7U1C/0pudpfC; AWSALBCORS=2eMNzt8SkPublfrM3U6W6Z+y/LDSaAk31Esx2cq49vtgM9q8BjOjlhfmosTeJSHE3JwBuFPBO/16kPVpvoAfrTdIGRHa4zhnCy/F0RLKAlUD2lkr7U1C/0pudpfC"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://api.airtable.com/v0/${table}/${page}?view=Grid%20view`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        result.records.forEach((item) => {
          const projectSample = {
            name: item.fields["案例名稱"] ? item.fields["案例名稱"] : "",
            title: item.fields["案例名稱"] ? item.fields["案例名稱"] : "",
            imgUrl: item.fields["封面圖"]
              ? item.fields["封面圖"][0]["url"]
              : "",
          };
          item.fields["案例名稱"] &&
            projectSampleArray.value.push(projectSample);
          projectSampleDescriptionArray.value.push(
            item.fields["詳細介紹"] ? item.fields["詳細介紹"].split("\n") : ""
          );
          projectSampleDateArray.value.push(
            item.fields["日期"] ? `DATE: ${item.fields["日期"]}` : ""
          );
          projectSampleOtherUrlArray.value.push(
            item.fields["其他圖片"]
              ? item.fields["其他圖片"].map((element) => element["url"])
              : ""
          );
        });
      })
      .catch((error) => console.log("error", error));
  }
  const designStep = ref([]);
  const manageStep = ref([]);
  const developStep = ref([]);
  const propertyStep = ref([]);
  const auctionStep = ref([]);
  const designPage = "%E8%A8%AD%E8%A8%88%E8%A6%8F%E5%8A%83%E6%B5%81%E7%A8%8B";
  const managePage = "%E5%B7%A5%E7%A8%8B%E7%AE%A1%E7%90%86%E6%B5%81%E7%A8%8B";
  const developPage = "%E5%9C%9F%E5%9C%B0%E9%96%8B%E7%99%BC%E6%B5%81%E7%A8%8B";
  const propertyPage = "%E7%89%A9%E6%A5%AD%E7%AE%A1%E7%90%86%E6%B5%81%E7%A8%8B";
  const auctionPage = "%E8%B3%87%E7%94%A2%E6%A8%99%E5%94%AE%E6%B5%81%E7%A8%8B";
  serveProcessStepAPI(designStep, designPage);
  serveProcessStepAPI(manageStep, managePage);
  serveProcessStepAPI(developStep, developPage);
  serveProcessStepAPI(propertyStep, propertyPage);
  serveProcessStepAPI(auctionStep, auctionPage);
  function serveProcessStepAPI(elementStep, page) {
    // const page =
    //   "%E6%9C%8D%E5%8B%99%E9%A0%85%E7%9B%AE%E7%9A%84%E5%90%84%E9%A0%85%E6%B5%81%E7%A8%8B";
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append(
      "Cookie",
      "brw=brwNJctjsRJ49Zc6S; AWSALB=2eMNzt8SkPublfrM3U6W6Z+y/LDSaAk31Esx2cq49vtgM9q8BjOjlhfmosTeJSHE3JwBuFPBO/16kPVpvoAfrTdIGRHa4zhnCy/F0RLKAlUD2lkr7U1C/0pudpfC; AWSALBCORS=2eMNzt8SkPublfrM3U6W6Z+y/LDSaAk31Esx2cq49vtgM9q8BjOjlhfmosTeJSHE3JwBuFPBO/16kPVpvoAfrTdIGRHa4zhnCy/F0RLKAlUD2lkr7U1C/0pudpfC"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://api.airtable.com/v0/${table}/${page}?view=Grid%20view`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.records?.length !== 0) {
          result.records.forEach((item) => {
            const step = {
              stepContent: item.fields["流程"]
                ? item.fields["流程"].replaceAll("\n", "<br>")
                : "",
              ps: item.fields["附註"] ? item.fields["附註"].split("\n") : "",
            };
            item.fields["流程"] && elementStep.value.push(step);
          });
        }
      })
      .catch((error) => console.log("error", error));
    // console.log(elementStep);
  }
  const design = ref();
  const manage = ref({
    name: "",
    subImg: "",
  });
  const develop = ref({
    name: "",
    subImg: "",
  });
  const property = ref({
    name: "",
    subImg: "",
  });
  const auction = ref({
    name: "",
    subImg: "",
  });
  const serveItemArray = [design, manage, develop, property, auction];
  serveImgAPI();
  function serveImgAPI() {
    const page = "%E6%9C%8D%E5%8B%99%E9%A0%85%E7%9B%AE%E5%9C%96%E7%89%87";
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append(
      "Cookie",
      "brw=brwNJctjsRJ49Zc6S; AWSALB=2eMNzt8SkPublfrM3U6W6Z+y/LDSaAk31Esx2cq49vtgM9q8BjOjlhfmosTeJSHE3JwBuFPBO/16kPVpvoAfrTdIGRHa4zhnCy/F0RLKAlUD2lkr7U1C/0pudpfC; AWSALBCORS=2eMNzt8SkPublfrM3U6W6Z+y/LDSaAk31Esx2cq49vtgM9q8BjOjlhfmosTeJSHE3JwBuFPBO/16kPVpvoAfrTdIGRHa4zhnCy/F0RLKAlUD2lkr7U1C/0pudpfC"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://api.airtable.com/v0/${table}/${page}?view=Grid%20view`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        result.records.forEach((item, index) => {
          serveItemArray[index].value = {
            name: item.fields["項目"],
            subImg: item.fields["圖片"][0]["url"],
          };
        });
      })
      .catch((error) => console.log("error", error));
  }
  const link = ref({
    FB: "https://www.facebook.com/profile.php?id=100086936292165",
    IG: "https://www.instagram.com/wjrealestate111/",
    Line: "https://lin.ee/oo2iWUk",
  });
  const IGDataArray = ref([]);

  IGDataAPI();
  function IGDataAPI() {
    const page = "IG%E8%B3%87%E8%A8%8A";
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append(
      "Cookie",
      "brw=brwNJctjsRJ49Zc6S; AWSALB=2eMNzt8SkPublfrM3U6W6Z+y/LDSaAk31Esx2cq49vtgM9q8BjOjlhfmosTeJSHE3JwBuFPBO/16kPVpvoAfrTdIGRHa4zhnCy/F0RLKAlUD2lkr7U1C/0pudpfC; AWSALBCORS=2eMNzt8SkPublfrM3U6W6Z+y/LDSaAk31Esx2cq49vtgM9q8BjOjlhfmosTeJSHE3JwBuFPBO/16kPVpvoAfrTdIGRHa4zhnCy/F0RLKAlUD2lkr7U1C/0pudpfC"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://api.airtable.com/v0/${table}/${page}?view=Grid%20view`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        result.records.forEach((item) => {
          const IGDataSample = {
            name: item.fields["名稱"] ? item.fields["名稱"] : "",
            src: item.fields["圖片"] ? item.fields["圖片"][0]["url"] : "",
            link: item.fields["連結"] ? item.fields["連結"] : "",
          };
          item.fields["名稱"] && IGDataArray.value.push(IGDataSample);
        });
      })
      .catch((error) => console.log("error", error));
  }
  return {
    APIshoot,
    // submitData,
    serveitem,
    basicInformation,
    designSampleArray,
    designSampleDescriptionArray,
    designSampleDateArray,
    designSampleOtherUrlArray,
    projectSampleArray,
    projectSampleDescriptionArray,
    projectSampleDateArray,
    projectSampleOtherUrlArray,
    designStep,
    manageStep,
    developStep,
    propertyStep,
    auctionStep,
    design,
    manage,
    develop,
    property,
    auction,
    link,
    IGDataArray,
  };
});
