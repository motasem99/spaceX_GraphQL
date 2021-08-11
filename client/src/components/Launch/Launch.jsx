import React, { Fragment } from 'react';
import * as qs from 'query-string';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = () => {
  let { number } = qs.parse(window.location.search);
  number = parseInt(number);

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number: number },
  });
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Fragment>
      <div>
        <h1 className='display-4 my-3'>
          <span className='text-dark'>Mission: </span>
          {data.launch.mission_name}
        </h1>
      </div>
    </Fragment>
  );
};

export default Launch;
