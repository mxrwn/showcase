<script lang="ts" setup>
const route = useRoute();

const list = await $fetch(`/api/list/${route.params.url}`);

console.log(list);

async function creatingMovie() {
  console.log('');
}
</script>

<template>
  <div class="list">
    <div class="list-header flex justify-between">
      <h1 class="text-2xl font-bold">My Lists</h1>
      <label for="my-modal-4" class="btn">Add movie</label>
    </div>
    <input id="my-modal-4" type="checkbox" class="modal-toggle" />
    <label for="my-modal-4" class="modal cursor-pointer">
      <label class="modal-box relative" for="">
        <input
          type="text"
          placeholder="Search for a movie"
          class="input w-full max-w-xs"
        />
        <div class="dropdown dropdown-open">
          <label tabindex="0" class="btn m-1">Button</label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 h-52"
          >
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </label>
    </label>
  </div>
</template>
