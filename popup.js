document.addEventListener('DOMContentLoaded', function() {

  var d = new Date();
  var date = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  var date = `${date}/${month + 1}/${year}`;
  document.getElementById('date').innerHTML = date;

});
