import { NativeModule, requireNativeModule } from 'expo';

import { ExpoRadarChartModuleEvents } from './ExpoRadarChart.types';

declare class ExpoRadarChartModule extends NativeModule<ExpoRadarChartModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoRadarChartModule>('ExpoRadarChart');
