import { Movie } from "../pages/Home/ContentBlock";

export type MovieWithMedaType = Movie & {
  media_type: string;
};
export type TVProps = {
  page: number;
  results: TVbase[];
  total_pages: number;
  total_results: number;
};

export type TVbase = Movie;
export type MovieDetails = {
  adult: boolean;
  backdrop_path: null | string;
  belongs_to_collection: null | {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string | boolean;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieKeywords = {
  id: number;
  keywords: string[];
};

export type MovieVideos = {
  id: number;
  results: {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: true;
    published_at: string;
    id: string;
  }[];
};

export type MovieImages<
  T = {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }
> = {
  backdrops: T[];
  id: number;
  logos: T[];
  posters: T[];
};

export type MovieAltTitles = {
  id: number;
  titles: {
    iso_3166_1: string;
    title: string;
    type: string;
  }[];
};
export type MovieTranslations = {
  id: number;
  translations: {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: {
      homepage: string;
      overview: string;
      runtime: number;
      tagline: string;
      title: string;
    };
  }[];
};

export type MovieSimilar = {
  page: number;
  results: Movie[];
};

export type MovieReviews = {
  id: number;
  page: number;
  results: {
    author: string;
    author_details: {
      name: "";
      username: string;
      avatar_path: null | string;
      rating: null | number;
    };
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
  }[];
};

export type MovieReleaseDate = {
  id: number;
  results: {
    iso_3166_1: string;
    release_dates: {
      certification: string;
      descriptors: string[];
      iso_639_1: string;
      note: string;
      release_date: string;
      type: number;
    }[];
  }[];
};
export type MovieWatchProviders = {
  id: number;
  results: {
    [key: string]: {
      link: string;
      rent: {
        logo_path: string;
        provider_id: number;
        provider_name: string;
        display_priority: number;
      }[];
    };
  };
};
export type MovieRecommendations = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MovieLists = {
  id: number;
  page: number;
  resurts: {
    description: string;
    favorite_count: number;
    id: number;
    item_count: number;
    iso_639_1: string;
    list_type: string;
    name: string;
    poster_path: null | string;
  }[];
};

export type MovieExternalId = {
  id: number;
  imdb_id: string;
  wikidata_id: null | string;
  facebook_id: null | string;
  instagram_id: null | string;
  twitter_id: null | string;
};

export type MovieCredits<
  T = {
    adult: false;
    gender: 1;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }
> = {
  id: number;
  cast: T[];
  crew: T[];
};

export type MovieChanges = {
  changes: {
    key: string;
    items: {
      id: string;
      action: string;
      time: string;
      iso_639_1: string;
      iso_3166_1: string;
      original_value?: {
        // cast_id: number;
        // character: string;
        // credit_id: string;
        // order: number;
        // person_id: string;
        [x: string]: unknown;
      };
      value?: {
        [x: string]: unknown;
      };
    }[];
  }[];
};
