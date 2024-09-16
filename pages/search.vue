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
        <div v-for="product in fakeResults"
          class="result m-2 p-4 bg-white flex flex-row justify-center align-middle rounded ">
          <NuxtLink :to="`/products/${product.id}`" class="size-48 bg-black mr-4">
            <img src="https://placecats.com/192/192" alt="" srcset="">
          </NuxtLink>
          <div class="w-1/2">
            <h2 class="font-bold text-2xl">{{ product.name }}</h2>
            <h3 class="font-bold text-lg">{{ product.location }}</h3>
            <p class="text-md line-clamp-5">{{ product.description }}</p>
          </div>
          <div class="flex flex-col justify-center align-middle ml-auto">
            <NuxtLink :to="`/products/${product.id}/order`">
              <button class="px-4 py-2 w-36 m-2 rounded bg-blue-500 border border-blue-500">
                Order
              </button>
            </NuxtLink>
            <NuxtLink :to="`/products/${product.id}`">
              <button class="px-4 py-2 w-36 m-2 rounded border border-black">
                See Details
              </button>
            </NuxtLink>
          </div>

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
      { name: 'Apple', id: 1, location: "nowhere", description: "Lorem proident aute elit dolore exercitation ullamco. Sit anim duis excepteur occaecat reprehenderit ullamco. Dolor aute id duis veniam. Consectetur minim in consectetur sunt sint esse id culpa qui dolor." },
      { name: 'Banana', id: 2, location: "nowhere", description: "Quis proident esse irure do incididunt reprehenderit aliquip proident amet officia. Sint esse qui reprehenderit quis consectetur qui mollit velit duis tempor nostrud eiusmod. Elit culpa laboris aute consequat cillum pariatur mollit occaecat duis. Et ipsum ex deserunt eiusmod. Ad eiusmod sunt deserunt esse fugiat nisi elit sunt. Duis adipisicing nulla ad pariatur." },
      { name: 'Canteloupe', id: 3, location: "nowhere", description: "Eiusmod culpa ex id cupidatat fugiat laborum reprehenderit mollit ex nulla velit adipisicing. Cillum exercitation excepteur aliquip veniam laborum tempor aliquip. Qui duis laboris id eu voluptate quis culpa esse dolor excepteur nisi proident deserunt pariatur. Adipisicing esse in sint fugiat. Velit deserunt duis commodo nulla eu est Lorem deserunt duis aliquip anim minim quis." },
      { name: 'Daikon', id: 4, location: "nowhere", description: "Proident laboris enim minim officia in adipisicing consequat culpa aute quis. Ea ut ea do ea officia adipisicing proident anim amet ut incididunt laboris. Sint sit et pariatur do cupidatat proident minim eiusmod." },
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