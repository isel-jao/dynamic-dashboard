export const widgetTypes = [
  "card",
  "lineChart",
  "areaChart",
  "barChart",
  "donutChart",
  "pieChart",
  "table",
  "gauge",
  "video",
] as const;

export const widgetCardTypes = ["text", "telemetry"] as const;

export type Literal = string | number | boolean | null | Date;

export type JsonValue = Literal | JsonArray | JsonObject;

export type JsonArray = JsonValue[];

export type JsonObject = { [key: string]: JsonValue };

export type WidgetType = (typeof widgetTypes)[number];
export type Widget = {
  id: string;
  title: string;
  type: WidgetType;
  description?: string;
  attributes?: JsonObject;
};

export type DateRange = {
  from?: Date;
  to?: Date;
};

export type ChartTelemetry = {
  cameraId: string;
  name: string;
  label?: string;
  unit?: string;
  color?: string;
};

export type GaugeWidgetData = {
  cameraId: string;
  telemetryName: string;
  unit?: string;
  stops: {
    stop: number;
    color: string;
  }[];
};

export type WidgetCardType = (typeof widgetCardTypes)[number];
