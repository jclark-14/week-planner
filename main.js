var $showModal = document.querySelector('.new-event');
var $dialog = document.querySelector('dialog');
if (!$showModal || !$dialog)
    throw new Error('the query failed');
$showModal.addEventListener('click', function () {
    $dialog.showModal();
});
