
/*********************************************************************************
*  WEB422 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Elliot Maude Student ID: 032830127 Date: 5/31/18
*
*
********************************************************************************/ 

let employeesModel = [];

$(function(){
    initializeEmployeeModel();

    $("#employee-search").keyup(function(){
        let emp = getFilteredEmployeesModel($("#employee-search").val());
        refreshEmployeeRows(emp);
    });

    $("#employees-table").on("click", '.body-row', function(){
        event.preventDefault();
        let id = $(this).data('id');
        let emp = getEmployeeModelById(id);

        if(emp != null)
        {
            let mDate = moment(emp.HireDate);
            emp.HireDate = mDate.format("MMMM D, YYYY");

            let temp = _.template(  "<strong>Address:</strong> <%- emp.AddressStreet %> <%- emp.AddressState %> <%- emp.AddressCity %> <%- emp.AddressZip %> <br>" + 
                                    "<strong>Phone Number:</strong><%- emp.PhoneNum %> <br>" +
                                    "<strong>Hire Date:</strong> <%- emp.HireDate %>");

            let res = temp({'emp' : emp});
            showGenericModal( emp.FirstName + " " + emp.LastName, res);
        }
        else
        {
            showGenericModal("Error", "Id not found in database");
        }
    });

    $("#teams-menu").on("click",function(event){
        event.preventDefault();

        $.ajax({
            url: "http://localhost:8081/teams",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty().html("<h3>Teams</h3>").append(JSON.stringify(data));
        });
    });

    $("#employees-menu").on("click",function(event){
        event.preventDefault();
        
        $.ajax({
            url: "http://localhost:8081/employees",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty().html("<h3>Employees</h3>").append(JSON.stringify(data));
        });
    });

    $("#projects-menu").on("click",function(event){
        event.preventDefault();
        
        $.ajax({
            url: "http://localhost:8081/projects",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty().html("<h3>Projects</h3>").append(JSON.stringify(data));
        });
    });

    $("#positions-menu").on("click",function(event){
        event.preventDefault();
        
        $.ajax({
            url: "http://localhost:8081/positions",
            type: "GET",
            contentType: "application/json"
        })
        .done(function (data) {
            $("#data").empty().html("<h3>Positions</h3>").append(JSON.stringify(data));
        });
    });

});

function initializeEmployeeModel(){
    $.ajax({
        url: "http://localhost:8081/employees",
        type: "GET",
        contentType: "application/json"
    })
    .done(function(data){
        employeesModel = data;
        refreshEmployeeRows(employeesModel);
    }).fail(function(){
        showGenericModal('Error', 'Unable to get Employees');
    });
}

function showGenericModal(title, message){
    console.log("Title: " + title + " Message: " + message);
    $(".modal-title").html(title);
    $(".modal-body").html(message);
    $("#genericModal").modal('show');    
}

function refreshEmployeeRows(employees)
{
    let empTemplate = _.template('<% _.forEach(employees, function(employee) { %>' +
                                    '<div class="row body-row" data-id="<%- employee._id %>">' +
                                        '<div class="col-xs-4 body-column"><%- employee.FirstName %></div>' +
                                        '<div class="col-xs-4 body-column"><%- employee.LastName %></div>' +
                                        '<div class="col-xs-4 body-column"><%- employee.Position.PositionName %></div>' +
                                    '</div>' + 
                                '<% }); %>');

    let employeeshtml = empTemplate({'employees' : employees});
    $("#employees-table").empty();
    $("#employees-table").append(employeeshtml);
}

function getFilteredEmployeesModel(filterString)
{
    filterString = filterString.toLowerCase();
    let Searchfilter = _.filter(employeesModel, function(employee){
        return (employee.FirstName.toLowerCase().includes(filterString) || employee.LastName.toLowerCase().includes(filterString) || employee.Position.PositionName.toLowerCase().includes(filterString));
    });
    return Searchfilter;
}

function getEmployeeModelById(id)
{    
   let index = _.findIndex(employeesModel, function(employee) {   
       return employee._id == id;
   });

   let obj = null
   if(index >= 0)
   {
       obj = _.cloneDeep(employeesModel[index]);
   }
   return obj
}
