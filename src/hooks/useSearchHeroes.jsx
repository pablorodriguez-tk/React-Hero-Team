import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { searchHero } from '../helpers/fetch';

export const useSearchHeroes = (history) => {
  const [loading, setLoading] = useState(true);
  const [HeroSearch, setHeroSearch] = useState([]);
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  useEffect(() => {
    let mounted = true;

    const get = async () => {
      const heroName = q;
      if (mounted) {
        try {
          const { results } = await searchHero(heroName);
          setLoading(false);
          if (results) {
            setHeroSearch(results);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    if (q) {
      get();
    } else {
      setLoading(false);
    }

    return () => {
      mounted = false;
    };
  }, [q]);

  const handleSubmit = (search, { setSubmitting }) => {
    setSubmitting(false);
    history.push(`?q=${search.search}`);
  };

  return { loading, handleSubmit, q, HeroSearch };
};
