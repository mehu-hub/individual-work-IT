export type TrainStatus = "on-time" | "delayed" | "cancelled" | "arrived";

export interface Train {
  id: string;
  number: string;
  name: string;
  type: "IC" | "Regional" | "Express" | "Local";
  status: TrainStatus;
}

export interface Station {
  id: string;
  name: string;
  code: string;
  city: string;
  platforms: number;
}

export interface Route {
  id: string;
  origin: Station;
  destination: Station;
  distance: number; // km
  durationMinutes: number;
}

export interface ScheduleEntry {
  id: string;
  train: Train;
  route: Route;
  departure: Date;
  arrival: Date;
  platform: string;
  delay: number; // minutes
  status: TrainStatus;
}

export interface Platform {
  id: string;
  number: string;
  stationId: string;
  length: number; // metres
  accessible: boolean;
}

export interface Carriage {
  id: string;
  number: string;
  type: "First" | "Second" | "Sleeper" | "Dining";
  seats: number;
}
