interface EventInfo{
  time: string;
  day: string;
  notes: string;
}

interface Data{
  events: EventInfo[];
  dayOfTheWeek: string;
}

let data: Data = {
  events: [] as EventInfo[],
  dayOfTheWeek: '',
}
