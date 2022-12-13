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

const createModalHtml = (imgIdArr, imgNameArr) => {

  let modalTitleArr = [];
  let modalBody = "";

  for (let i = 0; i < imgIdArr.length; i++) {
    modalTitleArr.push(`<span class="chngPic" onclick="chngPic('.c-sharp-1', '#${imgIdArr[i]}')">Example ${i+1}</span>`);
  }
  $('#modalTitle').html(modalTitleArr.join(" | "));

  for (let j = 0; j < imgNameArr.length; j++) {
    let display = j == 0 ? '' : ' style="display: none;"';
    modalBody += `<img class="modal-content c-sharp-1" id="${imgIdArr[j]}" src="img/${imgNameArr[j]}" ${display}/>`
  }
  $('#modalBody').html(modalBody);

  $('#myModal1').modal('show');
}
