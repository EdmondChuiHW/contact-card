import React from 'react';
import './PureServer.css';

export const PureServer = ({ isServing = false, rotateRight = false }) => <>
  <div className={'PureServer ' + (isServing ? 'is-serving ' : '') + (rotateRight ? 'rotate-right' : '')}>
    {isServing ? 'SERVING' : <div dangerouslySetInnerHTML={{ __html: '&nbsp;' }}/>}
  </div>
</>;
