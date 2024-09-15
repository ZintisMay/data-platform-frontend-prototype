<template>
  <div>
    Products
    <p>Product ID: {{ id }}</p>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'


export default defineComponent({
  setup() {
    const { id = "no id" } = useRoute().params

    return { id }
  }
})
</script>

<style scoped></style>