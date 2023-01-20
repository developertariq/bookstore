import React from 'react';
import PropTypes from 'prop-types';
import { MdDataUsage } from 'react-icons/md';

const ReadingProgress = (props) => {
  const { id } = props;
  return (
    <div>
      <button type="button">
        <MdDataUsage />
      </button>
      <p>
        {id}
        75%
      </p>
      <p>Completed</p>
    </div>
  );
};

ReadingProgress.propTypes = {
  id: PropTypes.string,
};

ReadingProgress.defaultProps = {
  id: '',
};

export default ReadingProgress;
