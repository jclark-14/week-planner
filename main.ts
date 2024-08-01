const $showModal = document.querySelector('a.new-event') as HTMLAnchorElement;
const $dialog = document.querySelector('dialog') as HTMLDialogElement;
const $cancel = document.querySelector('a.cancel') as HTMLAnchorElement;
const $confirm = document.querySelector('a.confirm') as HTMLAnchorElement;
const $selectTime = document.querySelector(
  'select.modal-select-time',
) as HTMLSelectElement;
const $selectDay = document.querySelector(
  'select.modal-select-day',
) as HTMLSelectElement;
const $eventNotes = document.querySelector(
  'textarea.notes',
) as HTMLTextAreaElement;
const $tbody = document.querySelector('tbody') as HTMLTableSectionElement;
const $dayPicker = document.querySelector('select#day-picker') as HTMLSelectElement;
const $modalForm = document.querySelector('form#modal-form') as HTMLFormElement;

function renderInfo(info: EventInfo): HTMLTableRowElement {
  const $tr = document.createElement('tr') as HTMLTableRowElement;
  const $tdTime = document.createElement('td') as HTMLTableCellElement;
  const $tdNotes = document.createElement('td') as HTMLTableCellElement;
  const $tdActions = document.createElement('td') as HTMLTableCellElement;

  const $editAnchor = document.createElement('a') as HTMLAnchorElement;
  const $deleteAnchor = document.createElement('a') as HTMLAnchorElement;

  $editAnchor.className = 'edit';
  $editAnchor.textContent = 'Edit';
  $deleteAnchor.className = 'delete';
  $deleteAnchor.textContent = 'Delete';

  $tr.setAttribute('data-day', info.day);

  $tbody.appendChild($tr);
  $tdTime.textContent = info.time;
  $tdNotes.textContent = info.notes;
  $tdActions.append($editAnchor, $deleteAnchor);

  $tr.append($tdTime, $tdNotes, $tdActions);

  return $tr;
}

if (
  !$showModal ||
  !$dialog ||
  !$cancel ||
  !$confirm ||
  !$selectTime ||
  !$selectDay ||
  !$eventNotes ||
  !$dayPicker
)
  throw new Error('the query failed');

$showModal.addEventListener('click', (): void => {
  $dialog.showModal();
});

$cancel.addEventListener('click', function () {
  $dialog.close();
});

$confirm.addEventListener('click', function () {
  const info = {
    time: $selectTime.value,
    day: $selectDay.value,
    notes: $eventNotes.value,
  };

  data.events.push(info);
  $tbody.append(renderInfo(info));
  writeJSON(data);

  $modalForm.reset();
  $dialog.close();
});

document.addEventListener('DOMContentLoaded', (): void => {
  for (let i = 0; i < data.events.length; i++) {
    renderInfo(data.events[i]);
  }
});

$dayPicker.addEventListener('input', function(){
  data.dayOfTheWeek = $dayPicker.value;
})
