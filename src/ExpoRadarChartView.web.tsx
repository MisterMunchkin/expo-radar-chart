import * as React from 'react';

import { ExpoRadarChartViewProps } from './ExpoRadarChart.types';

export default function ExpoRadarChartView(props: ExpoRadarChartViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
