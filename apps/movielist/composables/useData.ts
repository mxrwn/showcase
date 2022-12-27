const apiKey = '1d8f20450cc46ebb7ea8f674d3f63016';

const baseUrl = 'https://api.themoviedb.org/3';

export default function useData(query: void) {
  const dataState = reactive({
    data: [],
  });

  async function loadData() {
    const search = (await $fetch(
      `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`
    )) as any;
    dataState.data = search.results;
  }

  watch(() => query, loadData, { immediate: true });

  return dataState;
}
