var $showModal = document.querySelector('a.new-event');
var $dialog = document.querySelector('dialog');
var $cancel = document.querySelector('a.cancel');
var $confirm = document.querySelector('a.confirm');
var $selectTime = document.querySelector('select.modal-select-time');
var $selectDay = document.querySelector('select.modal-select-day');
var $eventNotes = document.querySelector('textarea.notes');
var $tbody = document.querySelector('tbody');
function renderInfo(info) {
    var $tr = document.createElement('tr');
    var $tdTime = document.createElement('td');
    //let $tdDay = document.createElement('td') as HTMLTableCellElement;
    var $tdNotes = document.createElement('td');
    var $tdActions = document.createElement('td');
    $tdTime.textContent = info.time;
    //$tdDay.textContent = info.day;
    $tdNotes.textContent = info.notes;
    $tdActions.textContent = 'edit delete';
    $tr.append($tdTime, $tdNotes, $tdActions);
    return $tr;
}
if (!$showModal ||
    !$dialog ||
    !$cancel ||
    !$confirm ||
    !$selectTime ||
    !$selectDay ||
    !$eventNotes)
    throw new Error('the query failed');
$showModal.addEventListener('click', function () {
    $dialog.showModal();
});
$cancel.addEventListener('click', function () {
    $dialog.close();
});
$confirm.addEventListener('click', function (event) {
    // adds stuff here
    var info = {
        time: $selectTime.value,
        day: $selectDay.value,
        notes: $eventNotes.value,
    };
    console.log(info);
    data.events.push(info);
    $tbody.append(renderInfo(info));
    $dialog.close();
});
