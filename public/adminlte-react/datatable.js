$(function () {
  $("#clientesTable").DataTable({
    "responsive": true, "lengthChange": false, "autoWidth": false,
    "buttons": ["copy", "pdf", "colvis"]
  }).buttons().container().appendTo('#clientesTable_wrapper .col-md-6:eq(0)');
});
$(function () {
  $("#barberosTable").DataTable({
    "responsive": true, "lengthChange": false, "autoWidth": false,
    "buttons": ["copy", "pdf", "colvis"]
  }).buttons().container().appendTo('#barberosTable_wrapper .col-md-6:eq(0)');
});
$(function () {
  $("#serviciosTable").DataTable({
    "responsive": true, "lengthChange": false, "autoWidth": false,
    "buttons": ["copy", "pdf", "colvis"]
  }).buttons().container().appendTo('#serviciosTable_wrapper .col-md-6:eq(0)');
});
$(function () {
  $("#categoriasTable").DataTable({
    "responsive": true, "lengthChange": false, "autoWidth": false,
    "buttons": ["copy", "pdf", "colvis"]
  }).buttons().container().appendTo('#categoriasTable_wrapper .col-md-6:eq(0)');
});
$(function () {
  $("#usuariosTable").DataTable({
    "responsive": true, "lengthChange": false, "autoWidth": false,
    "buttons": ["copy", "pdf", "colvis"]
  }).buttons().container().appendTo('#usuariosTable_wrapper .col-md-6:eq(0)');
});
$(function () {
  $("#citasTable").DataTable({
    "responsive": true, "lengthChange": false, "autoWidth": false,
    "buttons": ["copy", "pdf", "colvis"]
  }).buttons().container().appendTo('#citasTable_wrapper .col-md-6:eq(0)');
});