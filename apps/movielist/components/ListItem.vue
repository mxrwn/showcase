<script setup lang="ts">
defineProps(['list']);
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <a :href="`/list/${list.url}`">
      <div class="card-body">
        <h2 class="card-title">{{ list.title }}</h2>
        <div class="card-actions justify-end">
          <button type="button" class="btn btn-primary">Go to list</button>
        </div>
      </div>
    </a>
  </div>
</template>
