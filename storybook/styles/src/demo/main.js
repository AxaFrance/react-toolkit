import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App/App';

require.context('../../docs/', true, /.*/);

ReactDOM.render(<App />, document.getElementById('app'));
