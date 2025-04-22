import { registerWebModule, NativeModule } from 'expo';

import { ExpoRadarChartModuleEvents } from './ExpoRadarChart.types';

class ExpoRadarChartModule extends NativeModule<ExpoRadarChartModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoRadarChartModule);
