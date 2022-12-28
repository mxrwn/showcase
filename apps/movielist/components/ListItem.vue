<script setup lang="ts">
defineProps(['list', 'deleteList']);

// const deleteMovie = async (list) => {
//   console.log(list);
//   await $fetch('/api/list', {
//     method: 'DELETE',
//     body: JSON.stringify({
//       id: list.id,
//     }),
//   });
//   window.location.reload();
// };
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl bg-secondary">
    <div class="card-body">
      <h2 class="card-title">{{ list.url }}</h2>
      <div class="card-actions justify-end">
        <button
          type="button"
          class="btn btn-primary"
          @click="() => deleteList(list)"
        >
          Delete List
        </button>
        <a :href="`/list/${list.url}`">
          <button type="button" class="btn btn-primary">Go To List</button>
        </a>
      </div>
    </div>
  </div>
</template>
