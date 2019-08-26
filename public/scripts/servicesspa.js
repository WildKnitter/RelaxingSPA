"use strict";

// This script contains code to dynamically create information on different SPA services from a JSON file.
// This is a Single Page Application.
// Author:  Pam Belknap

/*
Key for understanding the fields in the JSON file:
service
service.length
service[i].ServiceID
service[i].ServiceName
service[i].Description
service[i].Price
service[i].Minutes
service[i].CategoryName

category
category.length
categtory[i].Category
categegory[i].Value

/api/categories
/api/services
/api/services/:id
/api/services/bycategory/:id
*/

$(function() {
    $("#dropdownMenuButton").hide();
    $("#categoryName").hide();
    $("#serviceCard").hide();
    // VIEW SERVICES CLICK
    $("#viewCategories").on("click", () => {
        getCategories();
        $("#viewCategories").prop("disabled", true);
        $("#dropdownMenuButton").show();
        $(".transbox").hide();
    });
});

// getCategories Function to fill the first dropdown VIEW SERVICES
function getCategories() {
    $("#categoryName").html("&nbsp;");
    //    let categoryList = $("#categoryList");
    $.getJSON('/api/categories/', (categories) => {
            $.each(categories, (index, category) => {
                    $("#categoryList").append(
                        $("<a />")
                        .attr("class", "dropdown-item")
                        .text(category.Category)
                        .attr("data-code", category.Value)
                        .attr("href", "#")
                        // SELECT A CATEGORY CLICK
                        .on("click", (e) => {
                                e.preventDefault();
                                $("#categoryName").text(category.Category);
                                getServices(category.Value);
                            } // end of e function
                        ) // end of .on parenthesis
                    ); // end of categoryList append parenthesis
                } // end of categoriies function
            ); // end of the .each (for each)
            $("#categoryContainer").show();
        } // end of categories function
    ); // end of .getJSON
} // end of the getCategories function

// getServices Function to fill the second dropdown SELECT A CATEGORY
function getServices(category) {
    $("#serviceCard").hide();
    let servicesList = $("#servicesList");
    servicesList.html("");

    //NOTE: the code below concatenates the category ID to the path
    $.getJSON(`/api/services/bycategory/${category}`, (services) => {
            $.each(services, (index, service) => {
                    $("#servicesList").append($("<li />")
                        .attr("class", "dropdown-item")
                        .text(service.ServiceName)
                        // CATEGORY CLICK
                        .on("click", (e) => {
                                e.preventDefault();
                                getServiceCard(service.ServiceID);
                            } // end of e function
                        ) // end of .on parenthesis
                    ); // end of servicesList append parenthesis
                } // end of the .each (for each)
            ); // end of services parenthesis
            $("servicesContainer").show();
            $("#categoryName").show();
        } // end of services function
    ); // end of .getJSON
} // end of the getServices function

// getServiceCard Function to fill the card
//NOTE: the code below concatenates the service ID to the path
function getServiceCard(serviceID) {
    $.getJSON(`/api/services/${serviceID}`, (service) => {
            let cardTitle = $("#cardTitle");
            cardTitle.html(service.ServiceName);
            $(".card-body").append(
                $("<p />")
                .attr("class", "card-text")
                .attr("id", "cardtext1")
                .html(service.Description)
            ); // end of cardtext1 append parenthesis
            $(".card-body").append(
                $("<p />")
                .attr("class", "card-text")
                .attr("id", "cardtext2")
                .html(service.Minutes + " minutes")
            ); // end of cardtext2 append parenthesis
            $(".card-body").append(
                $("<p />")
                .attr("class", "card-text")
                .attr("id", "cardtext3")
                .html("$" + Number(service.Price).toFixed(2))
            ); // end of cardtext3 append parenthesis
            $("#serviceCard").show();
        } // end of the services function
    ); // end of .getJSON
} // end of getServiceCard function