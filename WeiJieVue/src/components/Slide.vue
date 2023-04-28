<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const AA = defineProps({
  slideDate: {
    type: Object,
  },
});
// const CC = ref(AA.slideDate.indexID);
// onMounted(() => {
//   document.querySelector(".tp-caption.NotGeneric-SubTitle").style.fontSize =
//     "16px";
// });

onMounted(() => {
  const script2 = document.createElement("script");
  script2.type = "text/javascript";
  script2.src = "js/jquery.min.js";
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "js/revslider.js";
  document.body.appendChild(script);
  document
    .querySelectorAll(".RouterLink")
    .forEach((item) => (item.onclick = (e) => e.stopPropagation()));
});
</script>
<style lang="scss" scoped>
.RouterLink {
  margin: -15px -40px;
  padding: 15px 40px;
  z-index: 9;
  color: #f7bd1f;
  white-space: nowrap;
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  cursor: pointer;
  font-family: Oswald;
  letter-spacing: 1px;
  text-decoration: none;
}
:deep(.tp-splitted.tp-charsplit) {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 52px;
  letter-spacing: 0.2px;
}
:deep(.tp-caption.NotGeneric-SubTitle) {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 500;
  font-size: 16px !important;
  line-height: 23px;
  letter-spacing: 0.2px;
  color: #ffffff;
}

@media screen and (max-width: 480) {
  :deep(.tp-parallax-wrap){
    left: 0;
    right:0;
  }
}

</style>
<template>
  <li
    :data-index="slideDate.indexID"
    data-transition="zoomout"
    data-slotamount="default"
    data-hideafterloop="0"
    data-hideslideonmobile="off"
    data-easein="Power4.easeInOut"
    data-easeout="Power4.easeInOut"
    data-masterspeed="2000"
    :data-thumb="slideDate.background"
    data-height="900px"
    data-rotate="0"
    data-fstransition="fade"
    data-fsmasterspeed="1500"
    data-fsslotamount="7"
    data-saveperformance="off"
    data-title="Intro"
    data-param1=""
    data-param2=""
    data-param3=""
    data-param4=""
    data-param5=""
    data-param6=""
    data-param7=""
    data-param8=""
    data-param9=""
    data-param10=""
    data-description=""
  >
    <!-- MAIN IMAGE -->
    <img
      :src="slideDate.background"
      alt=""
      data-bgposition="center center"
      data-bgfit="cover"
      data-bgrepeat="no-repeat"
      data-bgparallax="10"
      data-bgheight="900"
      class="rev-slidebg"
      data-no-retina
      style="height: 900px"
    />

    <!-- LAYER NR. 1 -->
    <div
      class="tp-caption NotGeneric-Title tp-resizeme"
      id="slide-3045-layer-133"
      data-x="['left','left','left','center']"
      data-hoffset="['105','105','60','0']"
      data-y="['middle','middle','middle','middle']"
      data-voffset="['-30','-30','-30','-25']"
      data-fontsize="['48','48','44','25']"
      data-lineheight="['70','70','70','50']"
      data-width="none"
      data-height="none"
      data-whitespace="nowrap"
      data-type="text"
      data-responsive_offset="on"
      data-frames='[{"from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1000,"split":"chars","splitdelay":0.05,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
      data-textAlign="['left','left','left','left']"
      data-paddingtop="[10,10,10,10]"
      data-paddingright="[0,0,0,30]"
      data-paddingbottom="[10,10,10,10]"
      data-paddingleft="[0,0,0,30]"
      style="z-index: 5; white-space: nowrap; text-transform: left"
    >
      {{ slideDate.title }}
    </div>

    <!-- LAYER NR.2 -->
    <div
      class="tp-caption NotGeneric-SubTitle tp-resizeme"
      id="slide-3045-layer-4"
      data-x="['left','left','left','center']"
      data-hoffset="['105','110','60','0']"
      data-y="['middle','middle','middle','center']"
      data-voffset="['55','55','55','40']"
      data-width="none"
      data-height="none"
      data-fontsize="['18','18','18','14']"
      data-lineheight="['31','31','31','19']"
      data-whitespace="nowrap"
      data-type="text"
      data-responsive_offset="on"
      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
      data-textAlign="['left','left','left','left']"
      data-paddingtop="[0,0,0,0]"
      data-paddingright="[0,0,0,90]"
      data-paddingbottom="[0,0,0,0]"
      data-paddingleft="[0,0,0,90]"
      style="z-index: 6; white-space: nowrap; text-transform: left"
    >
      {{ slideDate.subTitle }}
    </div>

    <!-- LAYER NR. 3 -->
    <div
      class="tp-caption NotGeneric-CallToAction rev-btn"
      id="slide-1699-layer-7"
      data-x="['left','left','left','center']"
      data-hoffset="['105','107','60','0']"
      data-y="['middle','middle','middle','middle']"
      data-voffset="['144','144','144','125']"
      data-width="none"
      data-height="none"
      data-whitespace="nowrap"
      data-type="button"
      data-actions='[{"event":"click","action":"scrollbelow","offset":"0px","delay":""}]'
      data-responsive_offset="on"
      data-responsive="off"
      data-frames='[{"from":"y:50px;opacity:0;","speed":1500,"to":"o:1;","delay":1250,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[175%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
      data-textAlign="['left','left','left','left']"
      data-paddingtop="[15,15,15,15]"
      data-paddingright="[40,40,40,40]"
      data-paddingbottom="[15,15,15,15]"
      data-paddingleft="[40,40,40,40]"
      style="
        z-index: 9;
        color: #f7bd1f;
        white-space: nowrap;
        text-transform: left;
        outline: none;
        box-shadow: none;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        cursor: pointer;
        font-family: Oswald;
        letter-spacing: 1px;
      "
    >
      <RouterLink class="RouterLink" :to="slideDate.path">
        {{ slideDate.button }}
      </RouterLink>
    </div>
  </li>
</template>
