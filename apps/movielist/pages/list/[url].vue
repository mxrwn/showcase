<script lang="ts" setup>
const route = useRoute();
const imageUrl = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/';
const list = await $fetch(`/api/list/${route.params.url}`);
const movies = useData('chainsaw');
</script>

<template>
  <div class="list">
    <div class="list-header flex justify-between">
      <h1 v-if="list" class="text-2xl font-bold">{{ list.title }}</h1>
      <div class="form-control">
        <div class="input-group">
          <input
            type="text"
            placeholder="Search…"
            :value="text"
            @input="(event) => searchingMovies(event)"
            class="input input-bordered"
          />
          <button class="btn btn-square" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap gap-10">
      <div
        v-for="media in movies"
        :key="media.id"
        class="card w-96 bg-base-100 shadow-xl"
      >
        <figure>
          <img :src="`${imageUrl}/${media.poster_path}`" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ media.original_title }}</h2>
          <p>{{ media.overview }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" type="button">Add Movie</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
