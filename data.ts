interface EventInfo {
  time: string;
  day: string;
  notes: string;
}

interface Data {
  events: EventInfo[];
  dayOfTheWeek: string;
}

const data: Data = {
  events: [] as EventInfo[],
  dayOfTheWeek: '',
};

function writeJSON(data: Data): string {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data-storage', dataJSON);
  return JSON.stringify(data);
}
function readJSON(): Data {
  const returnJSON = localStorage.getItem('data-storage');
  if (returnJSON) {
    data = JSON.parse(returnJSON);
  } else {
    return data;
  }
}

readJSON();
console.log('data', data);
