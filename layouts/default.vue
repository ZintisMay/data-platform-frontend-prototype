<!-- layout pages help you compose different page structures. When arriving at a "page" component, you can define the layout by name -->

<template>
  <div class="container mx-auto">

    <header class="shadow-sm w-full">
      <nav class="mx-auto p-6 flex justify-between items-center h-16 m-0 w-full text-white">
        <NuxtLink to="/" class="font-bold flex items-center"><img class="mr-3" src="https://placecats.com/50/50" />
          HELPFUL
        </NuxtLink>
        <div class="relative">
          <input class="h-8 w-96 p-1 text-black" type="text" v-model="searchValue" v-on:keydown.enter="search" />
          <div class="searchIcon">
            <button class="" v-on:click="search"><img src="https://placecats.com/25/25"></button>
          </div>
        </div>
        <NuxtLink to="/About" class="font-bold">About</NuxtLink>
        <NuxtLink to="/Contact" class="font-bold">Contact</NuxtLink>
        <NuxtLink to="/SignIn" class="font-bold">SignIn</NuxtLink>
        <NuxtLink to="/Register" class="font-bold bg-blue-500 py-2 px-4 rounded">Register</NuxtLink>
      </nav>
    </header>

    <main class="container mx-auto p-4">
      <slot />
    </main>

  </div>
</template>

<script setup>

let searchValue = ""

const pages = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "People", href: "/people" },
];

async function search() {
  const searchTerm = searchValue.trim()
  if (searchTerm.length !== 0) {
    await navigateTo(`/search?query=${searchTerm.split(" ").join(",")}`)
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: rgb(217, 217, 217);
}

nav {
  background: #2A3952;
}

.searchIcon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

.router-link-exact-active {
  color: white;
}
</style>
