const $showModal = document.querySelector('.new-event');
const $dialog = document.querySelector('dialog');
if (!$showModal || !$dialog) throw new Error('the query failed');

$showModal.addEventListener('click', (): void => {
  $dialog.showModal();
});
