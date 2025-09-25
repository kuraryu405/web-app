export interface Timetable {
  [key: string]: string[];
}

export interface FreeTimeSlot {
  day: string;
  period: number;
  periodName: string;
}

export interface TimetableData {
  id: string;
  name: string;
  data: Timetable;
}
