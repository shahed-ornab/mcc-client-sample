// Generated by CoffeeScript 1.6.2
(function() {
  var date, day, month, year;

  date = new Date();

  month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;

  day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

  year = date.getYear() % 100;

  $('#date').text(month + '/' + day + '/' + year + '  ' + date.toLocaleTimeString());

  $.ajax({
    url: "./options.php",
    success: function(data) {
      var begin, element, selectCampaigns, t, _i, _len, _ref;

      selectCampaigns = [];
      _ref = data['selectCampaigns'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        element = _ref[_i];
        selectCampaigns += '<option>' + element + '</option>';
      }
      $('#select-campaigns').html(selectCampaigns);
      t = data['time'] * 1000;
      begin = new Date(t);
      return setInterval(function() {
        month = begin.getMonth() + 1 < 10 ? '0' + (begin.getMonth() + 1) : begin.getMonth() + 1;
        day = begin.getDate() < 10 ? '0' + begin.getDate() : begin.getDate();
        year = begin.getYear() % 100;
        $('#date').text(month + '/' + day + '/' + year + '  ' + begin.toLocaleTimeString());
        return begin.setTime(begin.valueOf() + 1000);
      }, 1000);
    },
    dataType: "json"
  });

  $('#sectionA').on('click', '#settings', function() {
    return $('#settingsPopup').show();
  });

  $('#options').on('hover', function() {
    $('#options').toggleClass('darkBlue');
    return $('#optionsPopup').toggle();
  });

  $('#optionsPopup').on('hover', 'a', function() {
    $('#options').toggleClass('darkBlue');
    $('#optionsPopup').toggle();
    return $(this).toggleClass('darkBlue');
  });

  $('#settingsPopup').on('click', 'a.close', function() {
    return $('#settingsPopup').hide();
  });

  $('#activeResourcesForm').on('click', 'a.close', function() {
    return $('#activeResourcesForm').hide();
  });

}).call(this);