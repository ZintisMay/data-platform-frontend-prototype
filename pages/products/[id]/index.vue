<template>
  <div>
    Products
    <p>Product ID: {{ id }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  setup() {
    const { id = "no id" } = useRoute().params

    return { id }
  }
})
</script>

<style scoped></style>