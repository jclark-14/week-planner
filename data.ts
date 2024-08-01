interface EventInfo {
  time: string;
  day: string;
  notes: string;
}

interface Data {
  events: EventInfo[];
  dayOfTheWeek: string;
}

let data: Data = {
  events: [] as EventInfo[],
  dayOfTheWeek: 'Sunday',
};

function writeJSON(data: Data): string {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data-storage', dataJSON);
  return JSON.stringify(data);
}
function readJSON(){
  const returnJSON = localStorage.getItem('data-storage');
  if (returnJSON) {
    data = JSON.parse(returnJSON);
  }
}

readJSON();
