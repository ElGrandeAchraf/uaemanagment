$(document).ready(function() {
    
    "use strict";
    
    new Chart(document.getElementById("chart1"),{"type":"line","data":{"labels":["January","February","March","April","May","June","July"],"datasets":[{"label":"My First Dataset","data":[65,59,80,81,56,55,40],"fill":false,"borderColor":"rgb(99, 203, 137)","lineTension":0.1}]},"options":{}});
    
    new Chart(document.getElementById("chart2"),{"type":"bar","data":{"labels":["January","February","March","April","May","June","July"],"datasets":[{"label":"My First Dataset","data":[65,59,80,81,56,55,40],"fill":false,"backgroundColor":["rgba(236, 94, 105, 0.2)","rgba(255, 159, 64, 0.2)","rgba(241, 194, 5, 0.2)","rgba(99, 203, 137, 0.2)","rgba(0, 112, 224, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],"borderColor":["rgb(236, 94, 105)","rgb(255, 159, 64)","rgb(241, 194, 5)","rgb(99, 203, 137)","rgb(0, 112, 224)","rgb(153, 102, 255)","rgb(201, 203, 207)"],"borderWidth":1}]},"options":{"scales":{"yAxes":[{"ticks":{"beginAtZero":true}}]}}});
    
    new Chart(document.getElementById("chart3"),{"type":"radar","data":{"labels":["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],"datasets":[{"label":"My First Dataset","data":[65,59,90,81,56,55,40],"fill":true,"backgroundColor":"rgba(236, 94, 105, 0.2)","borderColor":"rgb(236, 94, 105)","pointBackgroundColor":"rgb(236, 94, 105)","pointBorderColor":"#fff","pointHoverBackgroundColor":"#fff","pointHoverBorderColor":"rgb(236, 94, 105)"},{"label":"My Second Dataset","data":[28,48,40,19,96,27,100],"fill":true,"backgroundColor":"rgba(0, 112, 224, 0.2)","borderColor":"rgb(0, 112, 224)","pointBackgroundColor":"rgb(0, 112, 224)","pointBorderColor":"#fff","pointHoverBackgroundColor":"#fff","pointHoverBorderColor":"rgb(0, 112, 224)"}]},"options":{"elements":{"line":{"tension":0,"borderWidth":3}}}});
    
    new Chart(document.getElementById("chart4"),{"type":"doughnut","data":{"labels":["Red","Blue","Yellow"],"datasets":[{"label":"My First Dataset","data":[300,50,100],"backgroundColor":["rgb(236, 94, 105)","rgb(0, 112, 224)","rgb(241, 194, 5)"]}]}});
    
});