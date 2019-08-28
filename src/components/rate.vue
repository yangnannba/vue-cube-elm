<template>
  <div class="rate">
    <cube-rate v-model="myscore" :disabled="disabled" :justify="justify"></cube-rate>

  </div>
</template>

<script>

export default {
  name: 'rate',
  props:["myscore","disabled","justify"],
  data () {
    return {
      
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../common/style/styles.scss";

</style>
