// withRandomData.js
import React from 'react';
import { useRandomData } from '../components/RandomDataContext';

const withRandomData = (WrappedComponent) => {
  return (props) => {
    const randomDataContext = useRandomData();
    return <WrappedComponent {...props} randomDataContext={randomDataContext} />;
  };
};

export default withRandomData;
