<script lang="ts" setup>
type List = {
  url: string;
  title: string;
};
let lists: List[] = [];
let localData;
if (process.client) {
  localData = localStorage.getItem('lists');
}
if (localData) {
  lists = JSON.parse(localData);
}
async function creatingList() {
  const request = await $fetch('/api/list', {
    method: 'POST',
  });
  lists.push(request as List);
  if (process.client) {
    localStorage.setItem('lists', JSON.stringify(lists));
  }
}
</script>

<template>
  <section class="p-2">
    <div class="list-header flex justify-between">
      <h1 class="text-2xl font-bold">My Lists</h1>
      <button class="btn btn-primary" type="button" @click="creatingList">
        Create List
      </button>
    </div>
    <DashboardList>
      <ListItem v-for="list in lists" :key="list.url" :list="list" />
      <!-- <ListItem />
      <ListItem /> -->
    </DashboardList>
  </section>
</template>
