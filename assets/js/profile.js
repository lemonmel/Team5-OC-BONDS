/* Building the modal content */
function buildEditAlert() {
  $('.alert').empty() 
  newBody = `<p>Confirm Edit?</p>`
  $('.alert').append(newBody)
}

function buildDeleteAlert() {
  $('.alert').empty() 
  newBody = `
    <p>Are you sure you want to delete your account?</p>
    <important style="color: red; font-size:10px;">⁕Once delete, you will have to request for account
    activation from admin of Bonds!!</important><br>`
  $('.alert').append(newBody)
}

function buildFooter(){
  $('.modal-footer').empty()
  newFooter=`
    <button type="button" class="btn btn_mygreen" data-bs-dismiss="modal" id="yes-button" onclick="">Yes</button>
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
  `
  $('.modal-footer').append(newFooter)
}

function buildChangeImg() {
  $('.alert').empty() 
  newBody = `
    <h5 class="message">Change Profile Picture?</h5>
    <form id="formChangeProfile">
      <input type="file" class="form-control" name="" id="" onchange="loadNewImage()" required />
      <br>
      <input type="submit"  class="me-lg-3 btn btn_mygreen" id="submit">
    </form>
  `
  $('.alert').append(newBody)

  $('.modal-footer').empty()
  newFooter=`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="buildFooter()">Cancel</button>`
  $('.modal-footer').append(newFooter)
}

/* Changing Profile Image */
function changeProfileImage() {
  buildChangeImg();
  $('#alert-modal').modal('show');

  $("#formChangeProfile").submit(function (event) {
    event.preventDefault();
    confirmChange()
    $("#Modal").modal('hide');
  })
}

var tempImg = "";
function loadNewImage() {
  tempImg = URL.createObjectURL(event.target.files[0]);
}

function confirmChange() {
  var image = document.getElementById("profile-image");
  image.src = tempImg;
  $('#alert-modal').modal('hide');
  buildFooter();
}

/* Edit information */
function edit() {
  var allitem = document.getElementById("mainForm").querySelectorAll("input")
  for (var i = 0; i < allitem.length; i++) {
    allitem[i].disabled = false;
  }
  var allitemselect = document.querySelectorAll("select");
  for (var i = 0; i < allitemselect.length; i++) {
    allitemselect[i].disabled = false;
  }
  document.getElementById("editBtn").style.display = "none";
  document.getElementById("editValidationBtn").innerHTML =
    " <input type='submit' class='btn btn_mygreen w-25 mt-4' value='Confirm'/><button type='button' class='btn btn-danger w-25 mt-4' onclick='cancelEdit()' style='margin-left:3%;'>Cancel</button>";
  document.getElementById("editSuggestion").innerHTML = "<p style='color:red;'>⁕Edit the details inside the text box</p>"
}

function cancelEdit() {
  document.getElementById("editBtn").style.display = "";
  document.getElementById("editValidationBtn").innerHTML = "";
  document.getElementById("editSuggestion").innerHTML = "";

  var allitem = document.getElementById("mainForm").querySelectorAll("input")
  for (var i = 0; i < allitem.length; i++) {
    allitem[i].disabled = true;
  }
  var allitemselect = document.querySelectorAll("select");
  for (var i = 0; i < allitemselect.length; i++) {
    allitemselect[i].disabled = true;
  }
  location.reload();
}

function handleEdit(event) {
  console.log(document.getElementById("profile-firstName").value);
}

var confirmed = false;

function confirmEdit() {
  if (!confirmed) {
    buildEditAlert()
    $('#alert-modal').modal('show');
    $('#yes-button').attr('onClick', 'confirmed = true; document.getElementById("mainForm").submit();');
    return false;
  } else {
    return true;
  }
}

/* Deletion of Account */
function confirmDelete() {
  buildDeleteAlert()
  $('#alert-modal').modal('show');
  $('#yes-button').attr('onClick', 'deleteAccount();');
}

function deleteAccount() {
  // further deletion of account in database
  console.log("delete");
}

/* Toggle Sidebar */
var initialTogglestate = true
if (initialTogglestate) {
  document.getElementById("toggleSideButton").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-chevron-compact-down' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z'/></svg>"
}

function toggleSide() {
  console.log("lol")
  if (initialTogglestate) {
    document.getElementById("profileSideBar").style.display = "none"
    document.getElementById("minimizeProfileSide").style.display = "flex"
  }
  else {
    document.getElementById("minimizeProfileSide").style.display = "none"
  }
  initialTogglestate = !initialTogglestate
}
