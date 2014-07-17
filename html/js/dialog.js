$(document).ready(function(){
$( "#dialog" ).dialog({
 autoOpen: false,
 width: 400,
 buttons: [
  {
   text: "Ok",
   click: function() {
    $( this ).dialog( "close" );
   }
  },
  {
   text: "Cancel",
   click: function() {
    $( this ).dialog( "close" );
   }
  }
 ]
});

// Link to open the dialog
$( "#button" ).click(function( event ) {
 $( "#dialog" ).dialog( "open" );
 event.preventDefault();
});
});
