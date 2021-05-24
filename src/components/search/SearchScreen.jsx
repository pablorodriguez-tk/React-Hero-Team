import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../hero/HeroCard';
import * as Yup from 'yup';
import { useLocation } from 'react-router';
import { searchHero } from '../../helpers/fetch';

export const SearchScreen = ({ history }) => {
  const [loading, setLoading] = useState(true);
  const [HeroSearch, setHeroSearch] = useState([]);
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  useEffect(() => {
    let mounted = true;

    const get = async () => {
      const heroName = q;
      if (mounted) {
        const response = await searchHero(heroName);
        setLoading(false);
        if (response) {
          setHeroSearch(response);
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

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <Formik
        //TODO: In production, this initial form must be a empty string
        initialValues={{ search: '' }}
        validationSchema={Yup.object({
          search: Yup.string().required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <div>
            <h1>Search Heroes</h1>
            <hr />
            <div className="row animate__animated animate__fadeIn animate__faster ">
              <div className="col-3">
                <h4>Search Form</h4>
                <hr />
                <form onSubmit={formik.handleSubmit}>
                  <div className="input-group mb-1">
                    <input
                      placeholder="Hero name"
                      className="form-control"
                      id="search"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps('search')}
                    />
                  </div>

                  <div className="input-group mb-4">
                    {formik.touched.search && formik.errors.search ? (
                      <div className="error">{formik.errors.search}</div>
                    ) : null}
                  </div>

                  <button className="btnSubmit mb-3" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div className="col-9">
                <h4>Results</h4>
                <hr />
                {q === '' && (
                  <div className="alert alert-info">Search a hero</div>
                )}
                {q !== '' && HeroSearch.length === 0 && (
                  <div className="alert alert-danger">
                    There is no a hero with {q}
                  </div>
                )}
                <div className="container">
                  {HeroSearch.map((hero) => (
                    <HeroCard
                      cta={'Click to add to team'}
                      key={hero.id}
                      {...hero}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
