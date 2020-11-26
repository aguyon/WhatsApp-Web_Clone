import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import '../imports/ui/elements/icons/icons';

import App from '../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    const userReady: boolean = Meteor.subscribe('users.all').ready();
    if (userReady) {
      ReactDOM.render(<App />, document.getElementById('root'));
    } else {
      console.log('User not ready');
    }
  });
});
