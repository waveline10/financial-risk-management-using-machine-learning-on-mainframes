/*
 * @author : Alexis Chretienne
 * @email : alexis.chretienne@fr.ibm.com
 * 
 * Sample code allowing to understand how to code API in Javascript
 * 
 * @doc : https://github.com/IBM/Financial-risk-management-using-machine-learning-on-zSystems 
 */

//The API Developer Portal URL
var url_api_devloper_portal = "https://api.us.apiconnect.ibmcloud.com/spbodieusibmcom-prod/developer-contest/mplbank";

// Your API ClientID
var IBM_CLIENT_ID = "YOUR_CLIENT_ID_HERE";

// Your API ClientSecret
var IBM_CLIENT_SECRET = "YOUR_CLIENT_SECRET_HERE";

/*
 * JQUERY ready
 */
$(document).ready(function() {

	// Loan Approval API
	$("#btnLoanApproval").click(loanApproval);

});

/*
 * Loan Approval - Financial Risk Management Information
 */

/**
 * Function allowing to get a loan approval
 * 
 * @returns a score
 */
function loanApproval() {

	var age = $("#inputAge").val();
	var income = $("#inputIncome").val();
	var numberOfCard = $("#inputNumberOfCard").val();
	var numberOfCarLoan = $("#inputNumberOfCarLoan").val();

	var path = "/customers/loan/calculateScore";
	var queryParamaeter = "?age=" + age + "&income=" + income
			+ "&numberOfCard=" + numberOfCard + "&numberOfCarLoan=" + numberOfCarLoan;

	doGet(path, queryParamaeter);

}

/*
 * Miscellaneous function
 */

/**
 * Function allowing to make a AJAX call using JQuery
 * 
 * @param path :
 *            customized URL path
 * @param parameter :
 *            path parameter + query parameters
 * @returns
 */
function doGet(path, parameter) {

	$.ajax({
		type : 'GET',
		headers : {
			"x-ibm-client-id" : IBM_CLIENT_ID,
			"x-ibm-client-secret" : IBM_CLIENT_SECRET
		},
		async : true,
		crossDomain : true,
		cache : false,
		url : url_api_devloper_portal + path + parameter,
		contentType : "application/json",
		success : function(data) {
			var jsonPretty = JSON.stringify(data, null, 4);
			$("#result").text(jsonPretty);
		},
		error : function(xhr, status, error) {
			$("#result").text(xhr.responseText);
		},
		complete : function() {
			console.log("complete function GET");
		}
	});

}