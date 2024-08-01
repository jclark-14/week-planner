var $showModal = document.querySelector('a.new-event');
var $dialog = document.querySelector('dialog');
var $cancel = document.querySelector('a.cancel');
var $confirm = document.querySelector('a.confirm');
var $selectTime = document.querySelector('select.modal-select-time');
var $selectDay = document.querySelector('select.modal-select-day');
var $eventNotes = document.querySelector('textarea.notes');
var $tbody = document.querySelector('tbody');
var $dayPicker = document.querySelector('select#day-picker');
var $modalForm = document.querySelector('form#modal-form');
function renderInfo(info) {
    var $tr = document.createElement('tr');
    var $tdTime = document.createElement('td');
    var $tdNotes = document.createElement('td');
    var $tdActions = document.createElement('td');
    var $editAnchor = document.createElement('a');
    var $deleteAnchor = document.createElement('a');
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
if (!$showModal ||
    !$dialog ||
    !$cancel ||
    !$confirm ||
    !$selectTime ||
    !$selectDay ||
    !$eventNotes ||
    !$dayPicker)
    throw new Error('the query failed');
$showModal.addEventListener('click', function () {
    $dialog.showModal();
});
$cancel.addEventListener('click', function () {
    $dialog.close();
});
$confirm.addEventListener('click', function (event) {
    var info = {
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
document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < data.events.length; i++) {
        renderInfo(data.events[i]);
    }
});
$dayPicker.addEventListener('input', function (event) {
    var $eventTarget = event.target;
    data.dayOfTheWeek = $dayPicker.value;
});
