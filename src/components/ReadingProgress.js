import React from 'react';
import PropTypes from 'prop-types';

const ReadingProgress = (props) => {
  const { id } = props;
  return (
    <div>
      <button type="button">Progress%</button>
      <p>Current Chapter</p>
      <p>{id}</p>
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
