const $showModal = document.querySelector('a.new-event') as HTMLAnchorElement;
const $dialog = document.querySelector('dialog') as HTMLDialogElement;
const $cancel = document.querySelector('a.cancel') as HTMLAnchorElement;
const $confirm = document.querySelector('a.confirm') as HTMLAnchorElement;
const $selectTime = document.querySelector('select.modal-select-time') as HTMLSelectElement;
const $selectDay = document.querySelector('select.modal-select-day') as HTMLSelectElement;
const $eventNotes = document.querySelector('textarea.notes') as HTMLTextAreaElement;
const $tbody = document.querySelector('tbody') as HTMLTableSectionElement;

function renderInfo(info: EventInfo): HTMLTableRowElement{
  let $tr = document.createElement('tr') as HTMLTableRowElement;
  let $tdTime = document.createElement('td') as HTMLTableCellElement;
  //let $tdDay = document.createElement('td') as HTMLTableCellElement;
  let $tdNotes = document.createElement('td') as HTMLTableCellElement;
  let $tdActions = document.createElement('td') as HTMLTableCellElement;

  $tdTime.textContent = info.time;
  //$tdDay.textContent = info.day;
  $tdNotes.textContent = info.notes;
  $tdActions.textContent = 'edit delete';

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
  !$eventNotes
  ) throw new Error('the query failed');

$showModal.addEventListener('click', (): void => {
  $dialog.showModal();
});

$cancel.addEventListener('click', function(){
  $dialog.close();
})

$confirm.addEventListener('click', function(event: Event){
  // adds stuff here

  let info = {
    time:  $selectTime.value,
    day: $selectDay.value,
    notes: $eventNotes.value,
  }
  console.log(info);

  data.events.push(info);
  $tbody.append(renderInfo(info));

  $dialog.close();
})
