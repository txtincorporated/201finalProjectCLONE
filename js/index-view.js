MAXOVERDUES = 4;
populateOverdues(0); // Starts the population process.

function populateOverdues(positionNum) {
  if (positionNum < MAXOVERDUES && positionNum < listOverdues().length) {
    var singleBubble = labelMaker(listOverdues()[positionNum], 'overdueTray');
    singleBubble.style.opacity = 1 - (positionNum / 4);
    document.getElementById('overdueCtcts').appendChild(singleBubble);
    window.setTimeout(populateOverdues, 100, positionNum + 1);
  } else if (positionNum == MAXOVERDUES){
    var overdueLink = document.createElement('a');
    overdueLink.setAttribute('href', 'overdue.html');
    var doubleArrow = document.createElement('i');
    doubleArrow.setAttribute('class', 'fa fa-angle-double-right');
    doubleArrow.setAttribute('id', 'doubleRight');
    overdueLink.appendChild(doubleArrow);
    var chevronDiv = document.createElement('div');
    chevronDiv.appendChild(overdueLink);
    chevronDiv.setAttribute('class', 'ctctLabels slideinleft');
    chevronDiv.setAttribute('id', 'doubleRightDiv');
    document.getElementById('overdueCtcts').appendChild(chevronDiv);
  }
}

//bigButton appears if there's nothing in localStorage
if (localStorage.length == 0) {
  document.getElementById('bigButton').setAttribute('style','display: flex');
  document.getElementById('footer').setAttribute('style','margin-top: 400px');
} else {
  document.getElementById('bigButton').setAttribute('display','none');
}

document.onkeydown = function(e) {
  // Hitting the Equal key on the index page will generate demo contacts.
  if (e.code == 'Equal') {
    addDemoContacts();
    window.location.reload(true);
  }
  // Hitting the minus key clears storage
  if (e.code == 'Minus') {
    localStorage.clear();
    window.location.reload(true);
  }
};
