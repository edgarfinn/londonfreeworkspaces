function selfcheck(clicked_id) {
  if (document.getElementById(clicked_id).checked == false) {
    document.getElementById(clicked_id).checked = true;
  }
   else if (document.getElementById(clicked_id).checked == true) {
    document.getElementById(clicked_id).checked = false;
  }
}
// 
