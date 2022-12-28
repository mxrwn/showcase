<script lang="ts" setup>
import loadData from '~~/composables/API';

const route = useRoute();
const imageUrl = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/';
const list = await $fetch(`/api/list/${route.params.url}`);
const reactiveMovies = reactive({
  data: list?.movies,
});
const query = ref('');
let movies: never[] = [];
const addMovie = async (movie, e) => {
  e.target.value = 'Movie Added';
  const request = await $fetch('/api/movie', {
    method: 'POST',
    body: JSON.stringify({
      title: movie.title,
      image: movie.poster_path,
      list_id: list?.id,
    }),
  });
  const tmp = {
    id: request.id,
    title: request.title,
    image: request.image,
  };
  reactiveMovies.data?.push(tmp);
  console.log(request);
};

const deleteMovie = async (movie) => {
  await $fetch('/api/movie', {
    method: 'DELETE',
    body: JSON.stringify({
      id: movie.id,
    }),
  });
  if (reactiveMovies.data) {
    reactiveMovies.data.splice(
      reactiveMovies.data.findIndex((m) => m.id === movie.id),
      1
    );
  }

  console.log(list?.movies);
};

watch(query, async () => {
  if (query.value !== '') {
    const response = await loadData(query.value);
    movies = response;
    console.log(movies);
  } else {
    movies = [];
  }
});
// console.log(query.value);
</script>

<template>
  <div class="list">
    <div class="list-header flex justify-between">
      <h1 v-if="list" class="text-2xl font-bold">{{ list.url }}</h1>
      <div class="form-control">
        <div class="input-group">
          <input
            v-model="query"
            type="text"
            placeholder="Search…"
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
        v-for="media in movies.results"
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
            <input
              class="btn btn-primary"
              type="button"
              value="Add Movie"
              @click="(e) => addMovie(media, e)"
            />
          </div>
        </div>
      </div>
      <div class="list-movies flex flex-wrap gap-2">
        <div
          v-for="media in reactiveMovies.data"
          :key="media.id"
          class="card w-30 bg-base-100 shadow-xl image-full"
        >
          <figure>
            <img
              class="object-cover"
              :src="`${imageUrl}/${media.image}`"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ media.title }}</h2>
            <div class="card-actions justify-end">
              <input
                class="btn btn-primary"
                type="button"
                value="Delete"
                @click="(e) => deleteMovie(media)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
