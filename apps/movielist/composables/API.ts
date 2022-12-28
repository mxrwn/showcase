const AAPPIIKKEEYY = '1d8f20450cc46ebb7ea8f674d3f63016';

const baseUrl = 'https://api.themoviedb.org/3';

export default async function loadData(query: string): Promise<[]> {
  const search = (await $fetch(
    `${baseUrl}/search/movie?api_key=${AAPPIIKKEEYY}&query=${query}`
  )) as any;

  return search;
}

export function debounce(
  func: (query: any) => void,
  timeout: number | undefined
) {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(args), timeout);
  };
}
