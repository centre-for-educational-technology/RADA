/******/ (() => { // webpackBootstrap
/*!**********************************************!*\
  !*** ./resources/assets/js/qr_code_modal.js ***!
  \**********************************************/
$(function () {
  var qrCodeModal = $('#qr-code-modal');
  qrCodeModal.on('show.bs.modal', function (event) {
    var element = $(event.relatedTarget);
    var modalBody = $(this).find('.modal-body');

    var downloadQrCode = function downloadQrCode() {
      window.open(element.data('download-url'), '_blank');
    };

    $(this).find('.modal-title').text(element.data('title'));
    $.get(element.data('api-url'), function (data, textStatus, jqXHR) {
      modalBody.html(data.qrcode);
      modalBody.find('svg').on('click', downloadQrCode);
    });
    $(this).find('.modal-footer > button').on('click', downloadQrCode);
  });
  qrCodeModal.on('hidden.bs.modal', function () {
    $(this).find('.modal-title').html('');
    $(this).find('.modal-body').html('');
    $(this).find('.modal-footer > button').off('click');
  });
});
/******/ })()
;