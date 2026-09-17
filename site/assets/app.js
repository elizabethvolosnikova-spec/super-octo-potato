
function sortTable(btn) {
  var table = btn.closest('table'), tbody = table.tBodies[0];
  var idx = Array.from(btn.parentNode.children).indexOf(btn);
  var asc = btn.dataset.dir !== 'asc';
  var rows = Array.from(tbody.rows);
  rows.sort(function (a, b) {
    var va = a.cells[idx].innerText.trim(), vb = b.cells[idx].innerText.trim();
    var na = parseFloat(va.replace(',', '.')), nb = parseFloat(vb.replace(',', '.'));
    var cmp = (!isNaN(na) && !isNaN(nb)) ? na - nb : va.localeCompare(vb, 'ru');
    return asc ? cmp : -cmp;
  });
  rows.forEach(function (r) { tbody.appendChild(r); });
  btn.dataset.dir = asc ? 'asc' : 'desc';
}
function filterTable(input) {
  var table = document.getElementById(input.dataset.target);
  var q = input.value.toLowerCase();
  Array.from(table.tBodies[0].rows).forEach(function (r) {
    r.style.display = r.innerText.toLowerCase().indexOf(q) > -1 ? '' : 'none';
  });
}
function plotChart(divId, traces, layout) { Plotly.newPlot(divId, traces, layout, {responsive: true}); }
