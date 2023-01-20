import React from 'react';
import PropTypes from 'prop-types';

const ReadingStatus = (props) => {
  const { id } = props;
  return (
    <div>
      <p>Current Chapter</p>
      <p>
        Third Chapter
        {id}
      </p>
      <button type="button">Update Progress</button>
    </div>
  );
};

ReadingStatus.propTypes = {
  id: PropTypes.string,
};

ReadingStatus.defaultProps = {
  id: '',
};

export default ReadingStatus;
