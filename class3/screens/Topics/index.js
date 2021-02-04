import React from 'react';

import {
    View,
    Text,
} from 'react-native';

import {
  Route,
  Link,
} from 'react-router-native';

import Topic from '../../components/Topic';
import styles from './styles';


function Topics({ match }) {
  return (
    <View>
      <Text style={styles.header}>Topics</Text>
      <View>
        <Link
          to={`${match.url}/rendering`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Rendering with React</Text>
        </Link>
        <Link
          to={`${match.url}/components`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Components</Text>
        </Link>
        <Link
          to={`${match.url}/props-v-state`}
          style={styles.subNavItem}
          underlayColor="#f0f4f7"
        >
          <Text>Props v. State</Text>
        </Link>
      </View>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => (
          <Text style={styles.topic}>Please select a topic.</Text>
        )}
      />
    </View>
  );
}

export default Topics;
