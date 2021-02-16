/******/ (() => { // webpackBootstrap
/*!*********************************************!*\
  !*** ./resources/assets/js/manage_users.js ***!
  \*********************************************/
$(function () {
  var apiUrl = Laravel.apiUrl;
  $('.mdi-close-circle-outline').on('click', function () {
    var _this = $(this);

    var confirmation = confirm(_this.data('confirm'));

    if (confirmation) {
      var user = _this.data('user-id'),
          role = _this.data('role-id');

      $.ajax({
        cache: false,
        method: 'DELETE',
        url: apiUrl + '/manage/users/' + user + '/roles/' + role,
        success: function success(data, textStatus, jqXHR) {
          _this.parent().fadeOut('medium', function () {
            $(this).remove();
          });

          $('#user-' + user).find('button').data('user-roles', data.roles);
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          _this.parent().addClass('animated shake');

          setTimeout(function () {
            _this.parent().removeClass('animated shake');
          }, 1000);
        }
      });
    }
  });
  $('#rolesModal').on('show.bs.modal', function (e) {
    var form = $(this).find('form'),
        button = $(e.relatedTarget),
        userId = button.data('user-id'),
        userName = button.data('user-name'),
        userRoles = button.data('user-roles');
    form.attr('action', form.data('action-base') + '/' + userId);
    $(this).find('h4.modal-title > strong').text(userName);

    if (userRoles) {
      _.each(userRoles, function (role) {
        form.find('input[type="checkbox"][name="roles[]"][value="' + role.id + '"]').prop('checked', true);

        if (role.zoo) {
          form.find('select[name="role_' + role.id + '_zoo"]').val(role.zoo);
        }
      });
    }
  });
  $('#rolesModal').on('hidden.bs.modal', function (e) {
    var form = $(this).find('form');
    form.trigger('reset');
    form.attr('action', '');
    $(this).find('h4.modal-title > strong').text('');
  }); // Delete button comnfirmation and consequent POST

  $('button[data-toggle="action"]').on('click', function (e) {
    e.preventDefault();

    var _this = $(this);

    if (confirm(_this.data('confirm'))) {
      var form = $('<form>', {
        method: 'POST',
        action: _this.data('action')
      });
      form.append($('<input>', {
        type: 'hidden',
        name: '_method',
        value: _this.data('method').toUpperCase()
      }));
      form.append($('<input>', {
        type: 'hidden',
        name: '_token',
        value: window.Laravel.csrfToken
      }));
      form.appendTo('body');
      form.submit();
    } else {
      _this.trigger('blur');
    }
  });
});
/******/ })()
;