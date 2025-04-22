import { requireNativeView } from 'expo';
import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { OnLoadEventPayload } from '../build/ExpoRadarChart.types';

export type ExpoRadarChartViewProps = {
  url: string;
  onLoad: (event: { nativeEvent: OnLoadEventPayload }) => void;
  style?: StyleProp<ViewStyle>;
};

const NativeView: React.ComponentType<ExpoRadarChartViewProps> =
  requireNativeView('ExpoRadarChart');

export default function ExpoRadarChartView(props: ExpoRadarChartViewProps) {
  return <NativeView {...props} />;
}
