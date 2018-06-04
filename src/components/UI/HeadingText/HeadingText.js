import React from 'react';
import { Text, Stylesheet } from 'react-native';

const headingText = (props) => (
  <Text {...props} style={[styles.textHeading, props.styles]}>{props.children}</Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 28,
    fontWeight: 'bold'
  },
})