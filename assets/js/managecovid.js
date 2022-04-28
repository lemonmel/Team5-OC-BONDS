//GLOBAL VARIABLE
function getDate(){
    return new Date().toLocaleDateString('en-uk', {  month:"short", day:"numeric"})
}

function getDateTime(){
    return new Date().toLocaleDateString('en-uk', { month:"short", day:"numeric",hour:"numeric", minute:"numeric"})
}

var editHistories=[]


//////////////////////////////////
//DATA 
//////////////////////////////////

//resident data
var residents = [
    {
        unit: "A-01-01",
        name: "Lei Zhi Guang",
        age: 18,
        vaccine: "First Dose",
        covid: "Negative",
        updated: "1 Apr, 11:11",
        contact: "013-6247251",
    },
    {
        unit: "B-02-02",
        name: "Chin Chin",
        age: 16,
        vaccine: "Second Dose",
        covid: "Close Contact",
        updated: "13 Apr, 02:05",
        contact: "016-4219470",
    },
    {
        unit: "C-03-03",
        name: "Mr Suddenly",
        age: 21,
        vaccine: "Not Vaccinated",
        covid: "Positive",
        updated: "11 Apr, 11:02",
        contact: "016-6030616",
    },
    {
        unit: "D-04-04",
        name: "Thunder Light ",
        age: 35,
        vaccine: "Booster 1",
        covid: "Negative",
        updated: "17 Apr, 06:02",
        contact: "019-6521805",
    },
]

// Reports Data
var reports =  [
    {
        reportId:1,
        unit: "D-04-04",
        name: "Thunder Light",
        type: "covid",
        image: "https://cdn.pixabay.com/photo/2021/08/02/18/11/testing-6517477_1280.jpg",
        status:"Positive",
        description:"I went to gym, cafe2",
        date: "20/04/2022, 00:02",
    },
    {
        reportId:3,
        unit: "A-01-01",
        name: "Lei Zhi Guang",
        type: "vaccine",
        image: "https://cdn.pixabay.com/photo/2021/10/28/11/26/self-test-6749424_1280.png",
        status:"Completed 2nd Dose",
        description:"-",
        date: "19/04/2022, 16:02",
    },
    {
        reportId:4,
        unit: "B-02-02",
        name: "Chin Chin",
        type: "vaccine",
        image: "https://cdn.pixabay.com/photo/2021/01/31/15/38/corona-test-5967548_1280.jpg",
        status:"Booster 1",
        description:"-",
        date: "17/04/2022, 07:12",
    },
    {
        reportId:10,
        unit: "C-03-03",
        name: "Mr Suddenly",
        type: "covid",
        image: "https://cdn.pixabay.com/photo/2022/02/15/05/53/covid-19-7014303_1280.jpg",
        status:"Negative",
        description:"-",
        date: "21/04/2022, 00:16",
    },
]
//////////////////////////////////
//DATA END
//////////////////////////////////

    var datatable; //initialize datatable variable

    //when page load
    $(document).ready( function () {
        
        buildCovidTableContent() //build covid table content
        
        buildCovidTable() //initialize datatable vendor
        
        buildReportTable() //build report table

        buildHistory()
        
        
    } )

//////////////////////////////////
//BUILD FUNCTION
//////////////////////////////////

    function buildCovidTable(){
        //initialize datatable
        datatable = $('#covidtable').DataTable({
            "scrollX": "100%",
            "scrollCollapse": true,
            language: {
                paginate: {
                next: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
                previous: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>' 
                }
            }
        })
    }

    function rebuildCovidTable(){
        $('#covidtable').DataTable().destroy();
            buildCovidTableContent()
            buildCovidTable()
    }
    
    function buildCovidTableContent(){
        $('#covid_table_body').empty()

        for (resident of residents){
            var residentRow =
            `<tr>
                <td>${resident.unit}</td>
                <td>${resident.name}</td>
                <td>${resident.age}</td>
                <td><a href="tel:${resident.contact}">${resident.contact}</a>
                <td>${getBadge(resident.vaccine)}</td>
                <td>
                    ${getBadge(resident.covid)}
                </td>
                <td>${resident.updated}</td>
                <td>
                    <button class="btn px-0" title="Update Vaccine" onclick="editStatus('${resident.unit}','${resident.name}','${resident.vaccine}','vaccine')">
                        <i class="fa-solid fa-syringe text-primary fs-4"></i>
                    </button>
                    <button class="btn px-0" title="Update Covid" onclick="editStatus('${resident.unit}','${resident.name}','${resident.covid}','covid')">
                        <i class="fa-solid fa-virus-covid text-danger fs-4"></i>
                    </button>
                   
                </td>												
            </tr>
            `
            $('#covid_table_body').append(residentRow)
        }
    }

    function getSelectInput(type){
        if(type==="covid"){
            return `
            <option value="Negative">Negative</option>
            <option value="Close Contact">Close Contact</option>
            <option value="Positive">Positive</option>
            `
        }else if(type==="vaccine"){
            return `
                <option value="Not Vaccinated">Not Vaccinated</option>
                <option value="First Dose">First Dose</option>
                <option value="Second Dose">Second Dose</option>
                <option value="Booster 1">Booster 1</option>
            `
        }
    }

    //to show the modal to edit covid or vaccine
    function editStatus(unit,name,status,editType,reportId=0){

        var thisResident = getResidentByUnit(unit)
        var oldStatus = thisResident[editType]
        
        $('#UpdateModal').modal('show')

        var editCovidContent = 
        `
        <div class="modal-header">
            <h5 class="modal-title">Update ${editType} status for <strong>${name}</strong></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class='d-flex align-items-center mb-2'>
                <p class="my-0 me-2">Current ${editType} Status: </p> ${getBadge(oldStatus)}
            </div>
            <div class='d-flex align-items-center mb-2'>
                <p class="my-0 me-2">Update To: </p> 
                <select id='status-select' class="form-select w-75" aria-label="Default select example">
                    ${getSelectInput(editType)}
                </select>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" onclick="updateStatus('${unit}','${editType}','${reportId}')">Update</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        </div>
        `

        $('#UpdateModal .modal-content').empty()
        $('#UpdateModal .modal-content').append(editCovidContent)              
    }

    //confirm and make the update
    function updateStatus(unit,editType,reportId=0){
        let attribute = editType
        var newStatus = $('#status-select :selected').val()
        
        for (resident of residents){
            if(resident.unit === unit){

                //create change history
                //If this is called from the report case, mark completed and delete the request
                if(reportId!=0){
                    deleteReport(reportId);
                    createCompletedHistory(reportId,editType,resident.name,resident.unit,resident[attribute],newStatus)
                }else{
                    createChangedHistory(editType,resident.name,resident.unit,resident[attribute],newStatus)
                }

                resident[attribute] = newStatus
                resident.updated = getDateTime() //Format: '19 Apr 2022'
                rebuildCovidTable()
                buildHistory()

            $('#UpdateModal').modal('hide') //hide update modal
            }
        }
            
            
    }

    //When admin change without receiving report
    // <div class="alert alert-primary">Updated Feature of Name(Room No) from [] to [] 19 Apr 2022</div>
    function createChangedHistory(changeType,name,unit,fromStatus,toStatus){

        var thisHistory = "<div class='alert alert-primary'>Admin updated " + changeType+ 
            " status of <strong>"+name+"("+unit+
            ")</strong> from <strong>"+fromStatus+
            "</strong> to <strong>"+toStatus+
            "</strong> at <small class='text-muted'>"+ getDateTime()
            +"</small></div>"
               
        editHistories.push(thisHistory)

        // TODO Make it More Dynamic
        var title = "Updated "+ changeType+ " status"
        var body = "Updated " + changeType+ " status of "+name+"("+unit+") from <strong>"+fromStatus+"</strong> to <strong>"+toStatus
        var color = "primary"
        createToastr(title,body,color)
    }

    function createDeletedHistory(reportId,name,unit){
        var thisHistory = "<div class='alert alert-danger'><strong> Deleted Report(#"+reportId+")</strong> from <strong>"+name+"("+unit+")</strong> at <small class='text-muted'>"+getDateTime()+"</small> </div>"
        editHistories.push(thisHistory)
        //show delete toastr

        var title = "Deleted Report(#"+reportId+")"
        var body = "Deleted Report(#"+reportId+") from "+name+"("+unit+")"
        var color = "danger"
        createToastr(title,body,color)

        // editHistories.pop();

    }

    function createCompletedHistory(reportId,changeType,name,unit,fromStatus,toStatus){
        var thisHistory = "<div class='alert alert-success'><strong>Completed Report(#"+reportId+
        "</strong>) Admin updated " + changeType+ 
            " status of <strong>"+name+"("+unit+
            ")</strong> from <strong>"+fromStatus+
            "</strong> to <strong>"+toStatus+
            "</strong> at <small class='text-muted'>"+getDateTime()
            +"</small></div>"

        editHistories.push(thisHistory)

        var title = "Completed Report(#"+reportId+")"
        var body = "Updated " + changeType+ " status of "+name+"("+unit+") from <strong>"+fromStatus+"</strong> to <strong>"+toStatus
        var color = "success"
        createToastr(title,body,color)
    }

    function createToastr(title,body,color){
        $('.toast-container').empty()
        var toastr = `
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="6000">
                <div class="toast-header">
                    <span class="bg-${color} px-2 rounded">&nbsp;</span>
                    <strong class="me-auto ms-2">${title}</strong>
                    <small>${getDateTime()}</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    ${body}
                <button class="btn text-decoration-underline text-muted" onclick="alert('Undo Clicked')">UNDO</button>
                </div>
            </div>
        `
        
        $('.toast-container').append(toastr)
        $('.toast').toast('show');
    }

    function buildHistory(){
        $('#history_container').empty()

        for(myhistory of editHistories.reverse()){
            $('#history_container').append(myhistory)
        }
        editHistories.reverse()//reverse back the list
    }

    function getColor(text){
        switch(text){
            case "covid":
                return "primary"
            case "vaccine":
                return "success"
        }
    }

    function getBadge(status) {
        switch(status){
            //success
            case "Negative":
            case "Second Dose":
                return `<span class="badge rounded-pill bg-opacity-75 bg-success">${status}</span>`
            //warning
            case "Close Contact":
            case "vaccine":
            case "First Dose":
                return `<span class="badge rounded-pill bg-opacity-75 bg-warning">${status}</span>`
            //danger
            case "Positive":
            case "covid":
            case "Not Vaccinated":
                return `<span class="badge rounded-pill bg-opacity-75 bg-danger">${status}</span>`
            case "Booster 1":
            default:
                return `<span class="badge rounded-pill bg-opacity-75 bg-primary">${status}</span>`
        }
    }
    
    function buildModalContent(content){
        $('#CovidModal').modal('show')
        
        $('#CovidModal .modal-content').empty()
        $('#CovidModal .modal-content').append(content)
    }

//////////////////////////////////
//BUILD FUNCTION END
//////////////////////////////////


//////////////////////////////////
//HELPER FUNCTION
//////////////////////////////////


function getReportById(reportId){
    for(report of reports){
        if(report.reportId == reportId){
            return report
        }
    }
}

function getResidentByUnit(unit){
    for(resident of residents){
        if(resident.unit === unit){
            return resident
        }
    }
}


//////////////////////////////////
//HELPER FUNCTION END
//////////////////////////////////
    
    function buildReportTable(){

        $('#report_count').text(reports.length)

        $('#report_table').empty()

        for(report of reports){
            var reportRow = 
                `<tr onclick="showReportDetail(${report.reportId})">
                    <th scope="row">${report.reportId}</th>
                    <td>${report.unit}</td>
                    <td>${report.name}</td>
                    <td>
                        ${getBadge(report.type)}
                    </td>
                    <td><button class="btn btn-primary" onclick="showReportDetail(${report.reportId})">View</button></td>
                </tr>`;

            $('#report_table').append(reportRow)
            
            
            
        }
        if(reports.length==0){
            $('#report_table').append("<h4 class='text-center'>Currently there is no reports</h4>")
        }
    }

    function showReportDetail(reportId){

        event.stopPropagation()

        var report = getReportById(reportId)

        var covidModalContent = 
         `
            <div class="modal-header">
                <h5 class="modal-title" >View Report Of ${report.name}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Report Id: <span class='h6'>${report.reportId}</span> </p>
                <p>Name: <span class='h6'>${report.name}</span> </p>
                <p>Unit: <span class='h6'>${report.unit}</span> </p>
                <p>Report Type: <span class='h6'>${getBadge(report.type)}</span> </p>
                <p>Reporting For: <span class='h6'>${getBadge(report.status)}</span> </p>
                <p>Description: <span class='h6'>${report.description}</span> </p>
                <p>Date: <span class='h6'>${report.date}</span> </p>
                <p>Image: </p>
                
                <img src="${report.image}" alt="image" width='200'>
            </div>
            <div class="modal-footer">
                ${getButton(report.unit, report.name, report.status,report.type, report.reportId)}
                <button type="button" class="btn btn-danger" onclick="sweetConfirm('${report.reportId}','${report.name}','${report.unit}')">Delete Report</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
        `
        buildModalContent(covidModalContent)                    
    }


    //get button when view detail
    function getButton(unit,name,status,reportType,reportId){
        switch(reportType){
            case "covid":
                return `<button class="btn btn-primary" title="Update Covid" onclick="editStatus('${unit}','${name}','${status}','covid',${reportId})">
                            Update Covid Status
                        </button>`
            case "vaccine":
                return `<button class="btn btn-primary" title="Update Vaccine" onclick="editStatus('${unit}','${name}','${status}','vaccine',${reportId})">
                            Update Vaccine Status
                        </button>`
        }
    }

    function updateCovidReport(unit,name,reportId){
        editCovid(unit,name)
    }

    function adminDeleteReport(id,name,unit){
        createDeletedHistory(id,name,unit)
        deleteReport(id)
        buildHistory()
    }

    function deleteReport(id) {
        reports.forEach(function(report, index) {

            if (report.reportId == id) {
                reports.splice(index, 1);
            }
        });
        $('#CovidModal').modal('hide')
        buildReportTable()
    }


    //BS Button to put inside Sweet Confirm
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-primary mx-1',
          cancelButton: 'btn btn-danger mx-1'
        },
        buttonsStyling: false
    })

    //trigger sweet Alert
    function sweetConfirm(id,name,unit){
        swalWithBootstrapButtons.fire({
          title: 'Are you sure to delete this report?',
          text: "You might not be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                  'Deleted!',
                  'The Report(#'+id+') of '+name+'('+unit+') has been deleted.',
                  'success'
            )
            adminDeleteReport(id,name,unit)
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'No Action is Performed :)',
              'error'
            )
          }
          return false
        })
    }

    // ***************************
    // ChatJS
    
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['23/Apr/2022','22/Apr/2022','23/Apr/2022','24/Apr/2022','25/Apr/2022','26/Apr/2022'],
        datasets: [{
            label: '# of Cases',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const monthlyCasesChart = document.getElementById('monthlyCasesChart').getContext('2d');
const monthlyChart = new Chart(monthlyCasesChart, {
    type: 'bar',
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26'],
        datasets: [{
            label: '# of Cases',
            data: [12,2,4,6,2,7,8,2,6,5,12,16,5,3,4,8,9,6,5,6,4,3,4,8,6,2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(13, 110, 253, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(13, 110, 253, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});