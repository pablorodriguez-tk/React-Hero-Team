import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { HeroCard } from '../../components/hero/HeroCard';
import { useSearchHeroes } from '../../hooks/useSearchHeroes';

export const SearchScreen = ({ history }) => {
  const { loading, handleSubmit, q, HeroSearch } = useSearchHeroes(history);

  if (loading) return <h1 data-testid="loading">Loading</h1>;

  return (
    <div>
      <Formik
        //TODO: In production, this initial form must be a empty string
        initialValues={{ search: '' }}
        validationSchema={Yup.object({
          search: Yup.string().required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <div className="animate__animated animate__fadeIn animate__faster">
            <h1 data-testid="resolved">Search Heroes</h1>
            <hr />
            <div className="row ">
              <div className="col-md-3">
                <h4>Search Form</h4>
                <hr />
                <form onSubmit={formik.handleSubmit} data-testid="searchForm">
                  <div className="input-group mb-1">
                    <input
                      placeholder="Hero name"
                      className="form-control"
                      id="search"
                      type="text"
                      autoComplete="off"
                      data-testid="input-search"
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
              <div className="col-md-9">
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
                      data-testid="heroCard"
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
    </div>
  );
};
