// import dotenv from "dotenv";
// dotenv.config();
export const apiFetchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TOKEN,
  },
};

export const base_url = "http://image.tmdb.org/t/p/w500";
export const still_92 = "http://image.tmdb.org/t/p/w92";
export const still_182 = "http://image.tmdb.org/t/p/w185";
export const still_300 = "http://image.tmdb.org/t/p/w300";
export const still_original = "http://image.tmdb.org/t/p/w500";
export const base_urlBg = "http://image.tmdb.org/t/p/original";
export const apiURL = "https://api.themoviedb.org/3";

export async function getPopularTv() {
  const response = await fetch(apiURL + `/tv/popular`, apiFetchOptions);
  const data = await response.json();
  return data;
}

export async function getDiscoverMovies(arg: string) {
  const response = await fetch(
    apiURL + `/discover/movie?${arg}`,
    apiFetchOptions
  );
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getDiscoverTV(arg: string) {
  const response = await fetch(apiURL + `/discover/tv?${arg}`, apiFetchOptions);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getPopular(page?: number) {
  if (page != undefined) {
    const response = await fetch(
      apiURL + `/movie/popular?language=en_US&page=${page}`,
      apiFetchOptions
    );
    const data = await response.json();
    return data;
  } else {
    const response = await fetch(apiURL + `/movie/popular`, apiFetchOptions);
    const data = await response.json();
    return data;
  }
}

export async function getTrending(week = false) {
  if (week === false) {
    const response = await fetch(apiURL + `/trending/all/day`, apiFetchOptions);
    const data = await response.json();
    return data;
  } else {
    const response = await fetch(
      apiURL + `/trending/all/week`,
      apiFetchOptions
    );
    const data = await response.json();
    return data;
  }
}

export async function getUpcoming(page?: number) {
  if (page != undefined) {
    const response = await fetch(
      apiURL + `/movie/upcoming?language=en_US&page=${page}`,
      apiFetchOptions
    );
    const data = await response.json();
    return data;
  } else {
    const response = await fetch(apiURL + `/movie/upcoming`, apiFetchOptions);
    const data = await response.json();
    return data;
  }
}
export async function getNowPlaying(page?: number) {
  if (page != undefined) {
    const response = await fetch(
      apiURL + `/movie/now_playing?language=en_US&page=${page}`,
      apiFetchOptions
    );
    const data = await response.json();
    return data;
  } else {
    const response = await fetch(
      apiURL + `/movie/now_playing`,
      apiFetchOptions
    );
    const data = await response.json();
    return data;
  }
}
export async function getTopRated(page?: number) {
  if (page != undefined) {
    const response = await fetch(
      apiURL + `/movie/top_rated?language=en_US&page=${page}`,
      apiFetchOptions
    );
    const data = await response.json();
    return data;
  } else {
    const response = await fetch(apiURL + `/movie/top_rated`, apiFetchOptions);
    const data = await response.json();
    return data;
  }
}

/* Fetch FUNCITOs */

export async function getKeywords<T>(id: T) {
  const response = await fetch(
    apiURL + `/movie/${id}/keywords`,
    apiFetchOptions
  );
  return response.json();
}

export async function getVideos<T>(id: T) {
  const response = await fetch(apiURL + `/movie/${id}/videos`, apiFetchOptions);
  return response.json();
}

export async function getAltTitles<T>(id: T) {
  const response = await fetch(
    apiURL + `/movie/${id}/alternative_titles`,
    apiFetchOptions
  );
  return response.json();
}

export async function getTranslations<T>(id: T) {
  const response = await fetch(
    apiURL + `/movie/${id}/translations`,
    apiFetchOptions
  );
  return response.json();
}

export async function getMovieSimilar<T>(id: T) {
  const response = await fetch(
    apiURL + `/movie/${id}/similar`,
    apiFetchOptions
  );
  return response.json();
}

export async function getMovieReviews<T>(id: T) {
  const response = await fetch(
    apiURL + `/movie/${id}/reviews`,
    apiFetchOptions
  );
  return response.json();
}

export async function getMovieReleaseDate<T>(id: T) {
  const response = await fetch(
    apiURL + `/movie/${id}/release_dates`,
    apiFetchOptions
  );
  return response.json();
}

export async function getWatchProviders<T>(id: T) {
  const response = await fetch(
    apiURL + `/movie/${id}/watch/providers`,
    apiFetchOptions
  );
  return response.json();
}

export async function getRecommendations<T>(id: T) {
  const response = await fetch(
    apiURL + `/movie/${id}/recommendations`,
    apiFetchOptions
  );
  return response.json();
}

export async function getLists<T>(id: T) {
  const response = await fetch(apiURL + `/movie/${id}/lists`, apiFetchOptions);
  return response.json();
}

export async function getImages<T>(id: T) {
  const response = await fetch(apiURL + `/movie/${id}/images`, apiFetchOptions);
  return response.json();
}

export async function getExternalIds<T>(id: T) {
  const response = await fetch(
    apiURL + `/movie/${id}/external_ids`,
    apiFetchOptions
  );
  return response.json();
}

export async function getCredits<T>(id: T) {
  const response = await fetch(
    apiURL + `/movie/${id}/credits`,
    apiFetchOptions
  );
  return response.json();
}

export async function getChanges<T>(id: T) {
  const response = await fetch(
    apiURL + `/movie/${id}/changes`,
    apiFetchOptions
  );
  return response.json();
}
