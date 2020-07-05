<template>
  <div>
    <div class="flex a-center">
      <div class="num flex a-center j-center">
        <slot name="num"></slot>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div></div>
    </div>

    <div class="flex">
      <div>
        <div class="pic0">
          <img :src="floor1[0].image" alt class="w100p" />
        </div>
        <div class="pic1">
          <img :src="floor1[1].image" alt class="w100p" />
        </div>
      </div>
      <div>
        <div class="pic2">
          <img :src="floor1[2].image" alt class="w100p" />
        </div>
        <div class="pic3">
          <img :src="floor1[3].image" alt class="w100p" />
        </div>
        <div class="pic4">
          <img :src="floor1[4].image" alt class="w100p" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor1: {
      type: Array
    },
    floor2: {
      type: Array
    },
    floor3: {
      type: Array
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.floor1);
  },
  watch: {},
  computed: {}
};
</script>