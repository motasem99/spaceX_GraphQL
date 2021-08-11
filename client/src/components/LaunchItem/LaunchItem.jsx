import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { useHistory } from 'react-router-dom';

const LaunchItem = ({ launch }) => {
  const history = useHistory();
  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-m-9'>
          <h4>
            Mission:{' '}
            <span
              className={classNames({
                'text-success': launch.launch_success,
                'text-danger': !launch.launch_success,
              })}
            >
              {launch.mission_name}
            </span>
          </h4>
          <p>
            Date:{' '}
            <Moment format='YYYY-MM-DD HH:MM'>
              {launch.launch_date_local}
            </Moment>
          </p>
        </div>
        <div className='col-md-3'>
          <button
            className='btn btn-secondary'
            onClick={() => {
              history.push({
                pathname: '/launch',
                search: `?number=${launch.flight_number}`,
              });
            }}
          >
            Launch Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
