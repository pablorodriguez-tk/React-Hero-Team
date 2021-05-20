import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSearch } from '../../actions/heroes';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  const { heroSearch } = useSelector((state) => state.heroes);
  const dispatch = useDispatch();

  const handleSubmit = (search, { setSubmitting }) => {
    setSubmitting(false);
    const heroName = search.search;
    dispatch(startSearch(heroName));
  };

  return (
    <>
      <Formik
        //TODO: In production, this initial form must be a empty string
        initialValues={{ search: '' }}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <div className="container login-container-search animate__animated animate__fadeIn animate__faster ">
            <div className="col-md-12 login-form">
              <h3>Search a hero</h3>
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

                <button className="btnSubmit mb-3" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        )}
      </Formik>
      <div className="container">
        {heroSearch.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};
