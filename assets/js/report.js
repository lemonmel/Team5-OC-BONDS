/* Build modal form */
function buildReportForm() {
    console.log("building modal...")
    $('#ModalBody').empty() //clear the html first
    newBody =
        `<form id="form">
        <div class="mb-3">
            <label for="location" class="col-form-label">Your Unit Number:</label>
            <input type="text" class="form-control" id="location" pattern="[A-Z]{1}-[0-9]{2}-[0-9a-zA-Z]{2}" placeholder="X-XX-XX" required>
        </div>
        <div class="mb-3">
            <label for="name" class="col-form-label">Details:</label>
            <select class="select" id="details" reuqired>
                <option value="Pipe repairment">Pipe repairment</option>
                <option value="Wiring repairment">Wiring repairment</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Neighbourhood issue">Neighbourhood issue</option>
                <option value="Others">Others</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="description" class="col-form-label">Description: </label>
            <textarea class="form-control" id="description" rows="3" cols="30" required></textarea>
        </div>
        <input type="submit"  class="me-lg-3 btn btn_mygreen" id="submit">
    </form> `
    $('#ModalBody').append(newBody)

}

function submitReportForm() {
    console.log("SUBMIT called")

    //building and showing modal
    buildReportForm();
    $('#Modal').on('show.bs.modal', function () {
        $('#AddModalLabel').text('Report Problem: ');
    });
    $('#Modal').modal('show');

    //initialize value in form
    $('#Modal input[id="location"]').val("A-10-13")
    $('#Modal input[id="location"]').prop("disabled",true)

    $("#form").submit(function (e) {
        $("#form").trigger("reset");
        $('#Modal').modal('hide');
        $('#alertModal').modal('show');
        e.preventDefault();
    })
}


