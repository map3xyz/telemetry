import { TelemetrySource, TelemetryCategory, TelemetryAction } from "./types";
import { v4 } from '@lukeed/uuid/secure';
import axios from 'axios';

export * from "./types";

const url = 'https://console.map3.xyz/api/telemetry';

export function track(
    source: TelemetrySource,
    category: TelemetryCategory,
    action: TelemetryAction,
    label?: string,
    clientId?: string,
  ): void {

    if(!clientId) { 
      clientId = v4();
    }
    
    // console.log("sendEvent", source, category, action, label, clientId);

    axios.post(url, {
      source,
      category,
      action,
      label,
      clientId
    }).then(
      // ignore successful response
    ).catch(error => {
      console.error('Telemetry Error ' +  error.message);
    });
}