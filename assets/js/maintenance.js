
/* call this function when window load */
$(document).ready(function () {
    buildMaintenanceContent('#MaintenanceTableBody')
    buildRequestContent('#RequestTableBody')
    buildComplainContent('#ComplainTableBody')

    buildTable('#MaintenanceTable')
    buildTable('#RequestTable')
    buildTable('#ComplainTable')
})

/* Requests array */
var requests = [
    { location: "A-11-11", name: "Loh", contact: "012-4358723",  date: "2022-04-19T13:00", details: "Wiring repairment", description: "weird sounds when turning on lights" },
    { location: "D-10-09", name: "Loo Ming Ming", contact: "018-4379713", date: "2022-04-18T13:21", details: "Pipe repairment", description: "leakage of water in kitchen" },
]

/* Schedules array */
var schedules = [
    { location: "A-03-S1", type: "facility", company: "Jojo Sdn Bhd", contact: "016-2394546", date: "2022-04-27T13:00", details: "Maintenance", description: "swimming pool monthly cleaning", status: "ongoing" },
    { location: "A-03-G1", type: "facility", company: "Koi Sdn Bhd", contact: "04-9327546", date: "2022-04-27T13:00", details: "Maintenance", description: "gym facilities maintenance", status: "ongoing" },
    { location: "B-03-G2", type: "facility", company: "Koi Sdn Bhd", contact: "04-9327546", date: "2022-04-29T13:00", details: "Maintenance", description: "gym facilities maintenance", status: "reserved" }
]

/* Complaints array */
var complains = [
    { location: "A-01-13", name: "Booi Jia Min", contact: "012-1238472",  date: "2022-04-19T13:00", description: "Upstair always party at night, causing disturbance." },
    { location: "D-03-12", name: "Adif", contact: "019-2693012", date: "2022-04-18T13:21", description: "My umbrella left in gym is stolen. I suspect the naughthy kids." },
    { location: "A-02-13", name: "Ahmad Ali", contact: "012-2348472",  date: "2022-04-18T13:00", description: "Upstair always party at night, causing disturbance." },
    { location: "D-04-12", name: "Chong Mun", contact: "019-2343012", date: "2022-04-20T13:21", description: "My umbrella left in gym is stolen. I suspect the naughthy kids." },
    { location: "A-05-13", name: "Siti Sofia", contact: "012-3458472",  date: "2022-04-21T13:00", description: "Upstair always party at night, causing disturbance." },
    { location: "D-06-12", name: "Lim Ming Ming", contact: "019-3453012", date: "2022-04-22T13:21", description: "My umbrella left in gym is stolen. I suspect the naughthy kids." },
    { location: "A-07-13", name: "Abang Adam", contact: "012-4568472",  date: "2022-04-23T13:00", description: "Upstair always party at night, causing disturbance." },
    { location: "D-08-12", name: "Kakak Fatimah", contact: "019-4563012", date: "2022-04-24T13:21", description: "My umbrella left in gym is stolen. I suspect the naughthy kids." },
    { location: "A-09-13", name: "Vuringgam", contact: "012-1458472",  date: "2022-04-25T13:00", description: "Upstair always party at night, causing disturbance." },
    { location: "D-10-12", name: "Mikasa", contact: "019-5673012", date: "2022-04-26T13:21", description: "My umbrella left in gym is stolen. I suspect the naughthy kids." },
    { location: "B-01-13", name: "Levi", contact: "012-5678472",  date: "2022-04-27T13:00", description: "Upstair always party at night, causing disturbance." },
    { location: "C-03-12", name: "Santa", contact: "019-26967812", date: "2022-04-27T13:21", description: "My umbrella left in gym is stolen. I suspect the naughthy kids." },
    { location: "B-02-13", name: "Kim Soo Hyun", contact: "012-1267872",  date: "2022-04-19T13:00", description: "Upstair always party at night, causing disturbance." }
]

/* Building table functions */
function buildTable(tableID) {
    //initialize datatable
    $(tableID).DataTable({
        // "scrollX": "100%", 这个我用了我的table不align去 我改成下面这个就ok了
        "initComplete": function (settings, json) {
            $(tableID).wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");
        },
        "scrollCollapse": true,
        language: {
            paginate: {
                next: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
                previous: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>'
            }
        }
    })
}

function rebuildTable(tableID) {
    $(tableID).DataTable().destroy();
    console.log(tableID)
    if (tableID === '#MaintenanceTable') {
        buildMaintenanceContent('#MaintenanceTableBody')
    } else if (tableID === '#RequestTable') {
        buildRequestContent('#RequestTableBody')
    } else{
        buildComplainContent('#ComplainTableBody')
    }
    buildTable(tableID)
}


function buildMaintenanceContent(tableBody) {
    $(tableBody).empty() //clear the html first
    console.log(schedules.length)
    var index = 1;
    for (schedule of schedules) {
        //用template literal (``) 来一次过include所有html 和 string. 用${} 来写 variable
        newRow =
            `<tr onclick="editRow('${schedule.location}','${schedules}')">
                <td> ${index} </td>
                <td> ${schedule.location} </td>
                <td> ${schedule.type} </td>
                <td> ${schedule.contact} </td>
                <td> ${schedule.date} </td>                    
                <td> ${schedule.details} </td>
                <td> ${getBadge(schedule.status)} </td>
                <td>
                <button type="button" class="btn" onclick="editRow('${schedule.location}','${schedules}')"><i class="bi bi-pencil-square text-primary"></i></button>
                <button type="button" class="btn" onclick="deleteSchedule('${schedule.location}')"><i class="bi bi-trash3 text-danger"></i></button>
                </td>
            </tr>
            `
        $(tableBody).append(newRow)
        index++;
    }
}

function getBadge(status) {
    switch(status){
        //warning
        case "reserved":
            return `<span class="badge rounded-pill bg-opacity-75 bg-warning">${status}</span>`
        //danger
        case "ongoing":
            return `<span class="badge rounded-pill bg-opacity-75 bg-danger">${status}</span>`
        //success
        case "completed":
            return `<span class="badge rounded-pill bg-opacity-75 bg-success">${status}</span>`
    }
}


function buildRequestContent(tableBody) {
    $(tableBody).empty() //clear the html first
    console.log(requests.length)
    for (request of requests) {
        //用template literal (``) 来一次过include所有html 和 string. 用${} 来写 variable
        newRow =
            `<tr onclick="approveRequest('${request.location}')">
                <td> ${request.location} </td>
                <td> ${request.name} </td>
                <td> ${request.contact} </td>
                <td> ${request.date} </td>
                <td> ${request.details} </td>                   
                <td><button type="button" class="btn" onclick="approveRequest('${request.location}')"><i class="bi bi-check-square text-primary"></i></button>
                <button type="button" class="btn" onclick="rejectRequest('${request.location}')"><i class="bi bi-x-octagon-fill text-danger"></i></i></button>
                </td>
            </tr>
            `
        $(tableBody).append(newRow)
    }
}

function buildComplainContent(tableBody) {
    $(tableBody).empty() //clear the html first
    for (complain of complains) {
        //用template literal (``) 来一次过include所有html 和 string. 用${} 来写 variable
        newRow =
            `<tr onclick="viewComplain('${complain.location}')">
                <td> ${complain.location} </td>
                <td> ${complain.name} </td>
                <td> ${complain.contact} </td>
                <td> ${complain.date} </td>                
                <td><button type="button" class="btn" onclick="settleComplain('${complain.location}')"><i class="bi bi-check-square text-primary"></i></button>
                </td>
            </tr>
            `
        $(tableBody).append(newRow)
    }
}

/* Building modal functions */
function buildModal() {
    console.log("building modal...")
    $('#ModalBody').empty() //clear the html first
    newBody =
        `<form id="form">
        <div class="mb-3">
            <label for="location" class="col-form-label">Location:</label>
            <input type="text" class="form-control" id="location" pattern="[A-Z]{1}-[0-9]{2}-[0-9a-zA-Z]{2}" placeholder="A-10-G1" required>
        </div>
        <div class="mb-3">
            <label for="name" class="col-form-label">Type:</label>
            <select class="select" id="type">
                <option value="facility">Facility</option>
                <option value="unit">Unit</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="name" class="col-form-label">Details:</label>
            <select class="select" id="details" reuqired>
                <option value="Pipe repairment">Pipe repairment</option>
                <option value="Wiring repairment">Wiring repairment</option>
                <option value="Maintenance">Maintenance</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="description" class="col-form-label">Description: </label>
            <textarea class="form-control" id="description" rows="3" cols="30"></textarea>
        </div>
        </div>
            <div class="mb-3">
            <label for="date-scheduled" class="col-form-label">Date Scheduled:</label>
            <input type="datetime-local" class="form-control" id="date-scheduled" required>
        </div>
        <div class="mb-3">
            <label for="company" class="col-form-label">Company:</label>
            <input type="text" class="form-control" id="company" required>
        </div>
        <div class="mb-3">
            <label for="contact" class="col-form-label">Company Contact Number:</label>
            <input type="text" class="form-control" id="contact" required>
        </div>
        <div class="mb-3">
            <label for="name" class="col-form-label">Status:</label>
            <select class="select" id="status" reuqired>
                <option value="reserved">Reserved</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
            </select>
        </div>
        <input type="submit"  class="me-lg-3 btn btn-primary" id="submit">
    </form> `
    $('#ModalBody').append(newBody)
}

function viewComplain(unit){
    //build modal body
    $('#ModalBody').empty()
    newBody =`
    <form id="form">
        <div class="mb-3">
            <label for="location" class="col-form-label">Unit Number:</label>
            <input type="text" class="form-control" id="location" required>
        </div>
        <div class="mb-3">
            <label for="name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" id="name" required>
        </div>
        <div class="mb-3">
            <label for="contact" class="col-form-label">Contact Number:</label>
            <input type="text" class="form-control" id="contact" required>
        </div>
        <div class="mb-3">
            <label for="description" class="col-form-label">Description: </label>
            <textarea class="form-control" id="description" rows="3" cols="30"></textarea>
        </div>
    </form> `
    $('#ModalBody').append(newBody)

    //show the modal
    $('#Modal').on('show.bs.modal', function () {
        $('#AddModalLabel').text('View Complaint Details: ');
    });
    $('#Modal').modal('show');
    
    //fixing values into form
    for (complain of complains) {
        if (complain.location === unit) {
            $('#Modal input[id="location"]').val(complain.location)
            $('#Modal input[id="name"]').val(complain.name)
            $('#Modal input[id="contact"]').val(complain.contact)
            $('#Modal textarea[id="description"]').val(complain.description)
            $('#Modal input').prop("disabled", true)
            $('#Modal textarea').prop("disabled", true)
        }
    }
}

function buildAlert(action, unit, string) {
    $('#alert-content').empty() 
    $('#alert-footer').empty() 
    if(action==="update"){ //update modal alert
        newBody= `
        <div class="modal-body d-flex flex-column align-items-center">
            <div class="mx-auto">
                <img src="https://cdn.dribbble.com/users/251873/screenshots/9289747/13540-sign-for-success-alert.gif"
                    alt="success-image" width="200">
            </div>
            <div class="alert" role="alert">
                Schedule updated!
            </div>
        </div>`

        newFooter = `
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Yes</button>
        `
    }else{ //delete modal alert
        newBody= `
        <div class="modal-body d-flex flex-column align-items-center">
            <p> ${string} ${unit} ?</p>
        </div>`

        newFooter = `
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="confirm">Yes</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        `
    }
    $('#alert-content').append(newBody) 
    $('#alert-footer').append(newFooter) 
}   

/* Initialize modal form  */
function editRowDisplay(location, arrays) {
    console.log(arrays)
    for (array of arrays) {
        if (array.location === location) {
            console.log("editRowDisplay called : "+array.location)
            $('#Modal input[id="location"]').val(array.location)
            $('#Modal input[id="location"]').prop("disabled", true)
            $('#Modal input[id="date-scheduled"]').val(array.date)
            $('#Modal select[id="type"]').prop("disabled", true)
            $('#Modal select[id="details"]').val(array.details)
            $('#Modal select[id="details"]').prop("disabled", true)
            $('#Modal textarea[id="description"]').val(array.description)
            $('#Modal textarea[id="description"]').prop("disabled", true)
            if (arrays === requests) {
                $('#Modal select[id="type"]').val("unit") 
            } else {
                $('#Modal select[id="type"]').val(array.type)
                $('#Modal input[id="company"]').val(array.company)
                $('#Modal input[id="contact"]').val(array.contact)
                $('#Modal select[id="status"]').val(array.status)
            }
        }
    }
}

/* CRUD functions : update, delete, add */
function editRow(location) {
    event.stopPropagation();

    //building and showing modal
    buildModal();
    $('#Modal').on('show.bs.modal', function () {
        $('#AddModalLabel').text('Update Facility Work: ');
    });
    $('#Modal').modal('show');

    //show 本来的value
    console.log("EDIT ROW called")
    editRowDisplay(location, schedules);

    $("#form").submit(function (e) {
        console.log("editRow called")
        updateResident(location)
        e.preventDefault();
        $("#Modal").modal('hide');
    })
}

function updateResident(location) {
    var date = $('#Modal input[id="date-scheduled"]').val();
    var company = $('#Modal input[id="company"]').val()
    var contact = $('#Modal input[id="contact"]').val()
    var status = $('#Modal select[id="status"]').val();
    
    for (schedule of schedules) {

        if (schedule.location === location) {
            schedule.date = date,
            schedule.company = company,
            schedule.contact = contact,
            schedule.status = status

            buildAlert("update",null,null)
            $('#alertModal').modal('show')

            rebuildTable('#MaintenanceTable')
        }
    }
}

function addSchedule() {
    console.log("ADDSCHEDULE called")

    //building and showing modal
    buildModal();
    $('#Modal').on('show.bs.modal', function () {
        $('#AddModalLabel').text('Add New Facility Work:');
    });

    $('#Modal').modal('show');
    addRow();

    $("#form").submit(function (e) {
        $("#form").trigger("reset");
    })
}

function settleComplain(location){
    event.stopPropagation();
    buildAlert(null,location,"Settle complaints for :")
    $('#alertModal').modal('show')
    $('#confirm').click(function(){
        deleteRow(location, complains, '#ComplainTable')
    });
}

function deleteSchedule(location) {
    event.stopPropagation();
    buildAlert(null,location,"Cancel schedule for :")
    $('#alertModal').modal('show')
    $('#confirm').click(function(){
        deleteRow(location, schedules, '#MaintenanceTable')
    });
}

function rejectRequest(location) {
    event.stopPropagation();
    buildAlert(null,location,"Reject request for :")
    $('#alertModal').modal('show')
    $('#confirm').click(function(){
        deleteRow(location, requests, '#RequestTable')
    });
}

function approveRequest(location) {
    event.stopPropagation();
    console.log("APPROVE called")
    //building and showing modal
    buildModal();
    $('#Modal').on('show.bs.modal', function () {
        $('#AddModalLabel').text('Assign Facility Work: ');
    });
    $('#Modal').modal('show');

    //show 本来的value
    console.log(requests)
    editRowDisplay(location, requests)
    
    addRow()
    $("#form").submit(function (e) {
        deleteRow(location, requests, '#RequestTable')
        $("#Modal").modal('hide');
    })
}

function deleteRow(location, array, tableID) {
    event.stopPropagation();//stop the propagation (按了editbuton后，不会再trigger Row 的onclick)
    console.log(array);
    array.forEach(function (object, index) {
        console.log('index:' + index + ' resident' + object.location);
        if (object.location === location) {
            array.splice(index, 1); //remove the object from array
            rebuildTable(tableID)
        }
    });
}

function addRow() {
    console.log("addRow called")
    // Submit Form
    $("#form").submit(function (e) {
        var newSchedule = {}

        var location = $('#Modal input[id="location"]').val()
        var type = $('#Modal select[id="type"]').val() 
        var company = $('#Modal input[id="company"]').val()
        var contact = $('#Modal input[id="contact"]').val()
        var details = $('#details').val() 
        var description = $('#Modal textarea[id="description"]').val(); 
        var status = $('#Modal select[id="status"]').val();
        var date = $('#Modal input[id="date-scheduled"]').val()

        newSchedule = {
            location: location,
            type: type,
            company: company,
            contact: contact,
            date: date,
            details: details,
            description: description,
            status: status
        }

        //insert into main list
        schedules.push(newSchedule)
        //call build row
        rebuildTable('#MaintenanceTable')

        e.preventDefault();

        return true;
    })
}
