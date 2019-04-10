import * as React from 'react';
import { MapContext } from 'react-mapbox-gl/lib-esm/context'; // https://github.com/alex3165/react-mapbox-gl/issues/691#issuecomment-481450427

/**
 * Small component to showcase how to use react-mapbox-gl's React Context
 * (which holds the Map instance).
 * @see https://github.com/alex3165/react-mapbox-gl/pull/619
 */
export class ContextUsage extends React.Component {
  static contextType = MapContext;

  componentDidMount() {
    const map = this.context;

    console.log('Map is correctly defined in context:', map);
  }

  render() {
    return null;
  }
}
