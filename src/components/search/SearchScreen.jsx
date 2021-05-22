import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSearch } from '../../actions/heroes';
import { HeroCard } from '../hero/HeroCard';
import * as Yup from 'yup';

export const SearchScreen = () => {
  const { heroSearch } = useSelector((state) => state.heroes);
  const { badHero, goodHero, neutralHero } = useSelector(
    (state) => state.validation
  );

  const totalHeroes = badHero + goodHero + neutralHero;
  const dispatch = useDispatch();

  const handleSubmit = async (search, { setSubmitting }) => {
    setSubmitting(false);
    const heroName = search.search;
    await dispatch(startSearch(heroName));
  };

  return (
    <>
      <Formik
        //TODO: In production, this initial form must be a empty string
        initialValues={{ search: '' }}
        validationSchema={Yup.object({
          search: Yup.string()
            .min(3, 'Hero name must be at least 3 characters')
            .required('Required'),
        })}
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
          </div>
        )}
      </Formik>
      <div className="card container" style={{ width: '19rem' }}>
        <p>Find your 6 favorite heroes to build the team</p>
        <p>
          Maximum 3 heroes of good orientation and 3 heroes of bad orientation
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Total Heroes Selected: {totalHeroes} (Max 6)
          </li>
          <li className="list-group-item">Bad Heroes: {badHero} (Max 3)</li>
          <li className="list-group-item">Good Heroes: {goodHero} (Max 3)</li>
          <li className="list-group-item">Neutral Heroes: {neutralHero}</li>
        </ul>
      </div>
      <div className="container">
        {heroSearch.map((hero) => (
          <HeroCard cta={'Click to add to team'} key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};
