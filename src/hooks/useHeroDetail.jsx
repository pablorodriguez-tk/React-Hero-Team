import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getHeroById } from '../helpers/fetch';

export const useHeroDetail = (props) => {
  const { pathname } = useLocation();
  const [hero, setHero] = useState();
  const [mounted, setMounted] = useState(true);
  const [loading, setLoading] = useState(true);

  const idFromUrl = pathname.split('/')[2];
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack('/');
  };

  useEffect(() => {
    const get = async () => {
      const data = await getHeroById(idFromUrl);

      if (data.response === 'error') {
        history.push('/');
      }
      if (mounted) {
        setHero(data);
      }
      setLoading(false);
    };

    if (!props) {
      get();
    } else {
      setLoading(false);
    }

    return () => {
      setMounted(false);
    };
  }, [idFromUrl, history, mounted, props]);

  const fullName = hero?.biography['full-name'];
  const image = hero?.image.url;
  const weight = hero?.appearance.weight[1];
  const height = hero?.appearance.height[1];
  const aliases = hero?.biography.aliases.join(' - ');
  const work = hero?.work.occupation;
  const eyeColor = hero?.appearance['eye-color'];

  return {
    image,
    fullName,
    aliases,
    weight,
    height,
    work,
    eyeColor,
    handleGoBack,
    loading,
  };
};
