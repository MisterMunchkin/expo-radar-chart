import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoRadarChartViewProps } from './ExpoRadarChart.types';

const NativeView: React.ComponentType<ExpoRadarChartViewProps> =
  requireNativeView('ExpoRadarChart');

export default function ExpoRadarChartView(props: ExpoRadarChartViewProps) {
  return <NativeView {...props} />;
}
