<template>
  <div>
    <h1 class="text-center">Helpful Tagline / Description</h1>

    <div class="flex flex-wrap justify-between">
      <div class="card p-4 bg-white m-4">
        <h2 class="text-center">Trending: items</h2>
        <div class="itemGrid">
          <NuxtLink :to="`/products/${item.id}`" class="item" v-for="item of items.slice(0, 4)">{{ item.id }}</NuxtLink>
        </div>
      </div>
      <div class="card p-4 bg-white m-4">
        <h2 class="text-center">Trending: items</h2>
        <div class="itemGrid">
          <NuxtLink :to="`/products/${item.id}`" class="item" v-for="item of items.slice(0, 4)">{{ item.id }}</NuxtLink>
        </div>
      </div>
      <div class="card p-4 bg-white m-4">
        <h2 class="text-center">Trending: items</h2>
        <div class="itemGrid">
          <NuxtLink :to="`/products/${item.id}`" class="item" v-for="item of items.slice(0, 4)">{{ item.id }}</NuxtLink>
        </div>
      </div>
    </div>

    <div class=" p-4 bg-white m-4 w-full">
      <h2 class="text-center">Related Items you've viewed</h2>
      <div class="itemGrid">
        <NuxtLink :to="`/products/${item.id}`" class="item" v-for="item of items">{{ item.id }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {

    const items = [
      { name: "thing1", id: 1 },
      { name: "thing2", id: 2 },
      { name: "thing3", id: 3 },
      { name: "thing4", id: 4 },
      { name: "thing5", id: 5 },
      { name: "thing6", id: 6 },
    ]


    return { items }
  }
})
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}

.card {
  width: 280px;
}

.itemGrid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}

.item {
  height: 100px;
  width: 100px;
  background-color: gray;
  margin-bottom: 15px;
}
</style>