<template>
  <div>
    <p>1-30 of XXX results for ( {{ query }} )</p>
    <div class="flex">
      <div class="filtersBar">
        Filters
        <div class="h-1 bg-black"></div>
        <div class="category" v-for="[name, category] of Object.entries(fakeCategories)">
          <p>{{ name }}</p>
          <ul>
            <li v-for="item of category"><input type="checkbox" />{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class=" resultsArea">
        <div v-for="product in fakeResults" class="result m-2 p-2 bg-white">
          {{ product.id }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { query } = useRoute().query
    const fakeCategories = {
      Iron: [
        'a', 'b', 'c', 'd'
      ],
      Copper: [
        'a', 'b', 'c', 'd'
      ],
      Steel: [
        'a', 'b', 'c', 'd'
      ],
      Zinc: [
        'a', 'b', 'c', 'd'
      ],
    }
    const fakeResults = [
      { name: 'a', id: 1, location: "nowhere", description: "none" },
      { name: 'b', id: 2, location: "nowhere", description: "none" },
      { name: 'c', id: 3, location: "nowhere", description: "none" },
      { name: 'd', id: 4, location: "nowhere", description: "none" },
    ]

    return { fakeResults, fakeCategories, query }
  }
})
</script>

<style scoped>
.filtersBar {
  width: 200px;
  background-color: lightblue;
}

.resultsArea {
  width: calc(100% - 200px);
  background-color: lightgreen;
}
</style>