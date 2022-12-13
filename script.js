const chngPic = (className, idName) => {
  $(className).hide(1000);
  $(idName).show(1000);
}

const toggleAns = (ansId, btnId) => {
  if($(ansId).css('display') == 'none') {
    $(ansId).show(500);
    $(btnId).html("Show Less");
  } else {
    $(ansId).hide(500);
    $(btnId).html("Show More");
  }
}
