let ViewModel = {
    teams: ko.observable([]),
    employees: ko.observable([]),
    projects: ko.observable([]),
};

function showGenericModal(title,message)
{
    $(".modal-title").html(title);
    $(".modal-body").html(message);
    $('#genericModal').modal({});
}

function initalizeTeams()
{
    return new Promise(function(resolve, reject){
        $.ajax({
            url: "http://localhost:8081/teams-raw",
            type:"GET",
            contentType: "application/json"
        }).done(function(data) {
            ViewModel.teams = ko.mapping.fromJS(data);
            resolve();
        }).fail(function(err){
            reject("Error loading the team data");
        });
    });
}

function initalizeEmployees()
{
    return new Promise(function(resolve, reject){
        $.ajax({
            url: "http://localhost:8081/employees",
            type:"GET",
            contentType: "application/json"
        }).done(function(data) {
            ViewModel.employees = ko.mapping.fromJS(data);
            resolve();
        }).fail(function(err){
            reject("Error loading the employee data");
        });
    });
}

function initalizeProjects()
{
    return new Promise(function(resolve, reject){
        $.ajax({
            url: "http://localhost:8081/projects",
            type:"GET",
            contentType: "application/json"
        }).done(function(data) {
            ViewModel.projects = ko.mapping.fromJS(data);
            resolve();
        }).fail(function(err){
            reject("Error loading the project data");
        });
    });
}

$(function(){ //DOM Ready
    initalizeTeams()
    .then(initalizeEmployees())
    .then(initalizeProjects())
    .then(function(){
        ko.applyBindings(ViewModel);
        $(".multiple").multipleSelect({ filter: true });
        $(".single").multipleSelect({ single: true, filter: true });
    }).catch(function(err){
        showGenericModal("Error", err);
    });
});

function saveTeam()
{
    let currentTeam = this;
    $.ajax({
        url: "http://localhost:8081/team/:" + currentTeam._id,
        type:"PUT",
        dataType: "json",
        data: JSON.stringify({
            Projects: currentTeam.projects,
            Employees: currentTeam.employees,
            TeamLead: currentTeam.TeamLead
        })
    }).done(function() {
        showGenericModal("Success", currentTeam.TeamName + " Updated" );
    }).fail(function(err){
        showGenericModal("Error", "Error updating the team information");
    });
}