/*********************************************************************************
* WEB422 – Assignment 03
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Elliot Maude Student ID: 032830127 Date: 6/14/18
*
********************************************************************************/ 

let ViewModel = {
    teams: ko.observableArray([]),
    employees: ko.observableArray([]),
    projects: ko.observableArray([])
};

function showGenericModal(title, message) {
    $(".modal-header").html(title);
    $(".modal-body").html(message);
    $('#genericModal').modal({});
}

function initalizeTeams() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://localhost:8081/teams-raw",
            type: "GET",
            contentType: "application/json"
        }).done(function (data) {
            ko.mapping.fromJS(data, {}, ViewModel.teams);
            resolve();
        }).fail(function (err) {
            reject("Error loading the team data");
        });
    });
}

function initalizeEmployees() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://localhost:8081/employees",
            type: "GET",
            contentType: "application/json"
        }).done(function (data) {
            ko.mapping.fromJS(data, {}, ViewModel.employees);
            resolve();
        }).fail(function (err) {
            reject("Error loading the employee data");
        });
    });
}

function initalizeProjects() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "http://localhost:8081/projects",
            type: "GET",
            contentType: "application/json"
        }).done(function (data) {
            ko.mapping.fromJS(data, {}, ViewModel.projects);
            resolve();
        }).fail(function (err) {
            reject("Error loading the project data");
        });
    });
}

$(function () { //DOM Ready
    initalizeTeams()
        .then(initalizeEmployees)
        .then(initalizeProjects)
        .then(
            function () {
                ko.applyBindings(ViewModel);
                $(".multiple").multipleSelect({ filter: true });
                $(".single").multipleSelect({ single: true, filter: true });
            }).catch(function (err) {
                showGenericModal("Error", err);
            });
});

ViewModel.save = function saveTeam() {
    let currentTeam = ko.mapping.toJS(this);
    console.log(currentTeam._id);
    $.ajax({
        url: "http://localhost:8081/team/" + currentTeam._id,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify({
            Projects: currentTeam.Projects,
            Employees: currentTeam.Employees,
            TeamLead: currentTeam.TeamLead
        }),
        success: function(res){
            console.log(res);
        }
    }).done(function () {
        showGenericModal("Success", currentTeam.TeamName + " Updated");
    }).fail(function (err) {
        showGenericModal("Error", "Error updating the team information");
    });
}