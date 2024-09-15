<!-- Component is not used so far; should replace the NuxtLinks on the main page at some point. Will need to pass item props in -->
<!-- https://stackoverflow.com/questions/73038032/cannot-dynamically-pass-a-prop-to-a-component-within-a-v-for-loop-in-vue-js -->

<template>
  <NuxtLink :to="`/products/${item.id}`" class="item">
    <img src="https://placecats.com/100/100" alt="" srcset="">
    <h6>{{ item.name }}</h6>
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const props = defineProps({
      item: {
        type: Object,
        required: true
      }
    })
    const { item = {} } = props;

    return { item }
  }
})
</script>

<style scoped>
.item {
  height: 100px;
  width: 100px;
  background-color: gray;
  margin-bottom: 15px;
}
</style>