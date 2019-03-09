// from data.js
// Get references to the elements of the DOM
var $tbody = document.querySelector("tbody");
var $dateTimeInput = document.querySelector("#date_time");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $recordCounter = document.querySelector("#recordCounter");
var $pages = document.querySelector("#pages");
var $loadBtn = document.querySelector("#load");
var $nextBtn = document.querySelector("#next");
var $prevBtn = document.querySelector("#prev");

// Add event listeners
$searchBtn.addEventListener("click", handleSearchButtonClick);
$loadBtn.addEventListener("click", handleReloadButtonClick);
$nextBtn.addEventListener("click", handleNextButtonClick);
$prevBtn.addEventListener("click", handlePrevButtonClick);
$pages.addEventListener("change", handlePagesChange);

// / Initialize global variables
var filteredData = dataSet;
var count = 0;

