"use strict";
// googleBtn: HTMLButtonElement;
// appleBTN: HTMLButtonElement;
// teslaBTN: HTMLButtonElement;
// googleChart: HTMLCanvasElement;
// appleChart:HTMLCanvasElement;
// teslaChart:HTMLCanvasElement;
// let googleBtn = document.getElementById("googleBtn") as HTMLButtonElement;
// let div1 = document.getElementById("googleDiv") as HTMLDivElement;
// googleBtn.addEventListener("click", () => {
//   if (div1.style.display === "none") {
//     div1.style.display = "block";
//   } else {
//     div1.style.display = "none";
//   }
// });
// let stockx: any = [];
// let stocky: any = [];
// const API_KEY = "4KD50A3YMN0QXYH7";
// const API_URL =
//   "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOGL&outputsize=compact&apikey=API_KEY";
// async function getAPI() {
//   fetch(API_URL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (let key in data["Time Series (Daily)"]) {
//         stockx.push(key);
//         stocky.push(data["Time Series (Daily)"][key]["1. open"]);
//       }
//     });
// }
// async function gChart() {
//   await fetch(API_URL);
//   let googleChart =<HTMLCanvasElement>document.getElementById("googleChart");
//   let ctx = googleChart.getContext("2d");
//   //let Chart:any;
//   let myChart = new Chart(googleChart, {
//     type: "line",
//     data: {
//       labels: stockx.reverse(),
//       datasets: [
//         {
//           label: "GOOGLE STOCK",
//           data: stocky.reverse(),
//           borderColor: "red",
//         },
//       ],
//     },
//     options: {},
//   });
// }
// let appleBtn = document.getElementById("appleBtn")as HTMLButtonElement;
// let div2 = document.getElementById("appleDiv")as HTMLDivElement;
// appleBtn.addEventListener("click", () => {
//   if (div2.style.display === "none") {
//     div2.style.display = "block";
//   } else {
//     div2.style.display = "none";
//   }
// });
// let stock1x: any= [];
// let stock1y: any= [];
// const aAPI_URL =
//   "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=compact&apikey=API_KEY";
// async function getAppleAPI() {
//   fetch(aAPI_URL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (let key in data["Time Series (Daily)"]) {
//         stock1x.push(key);
//         stock1y.push(data["Time Series (Daily)"][key]["1. open"]);
//       }
//     });
// }
// async function aChart() {
//   await fetch(aAPI_URL);
//   let appleChart = <HTMLCanvasElement>document.getElementById("appleChart");
//   let ctx1= appleChart.getContext("2d");
//   let myChart2 = new Chart(appleChart, {
//     type: "line",
//     data: {
//       labels: stock1x.reverse(),
//       datasets: [
//         {
//           label: "APPLE STOCK",
//           data: stock1y.reverse(),
//           borderColor: "blue",
//         },
//       ],
//     },
//     options: {},
//   });
// }
// let teslaBtn = document.getElementById("teslaBtn")as HTMLButtonElement;
// let div3 = document.getElementById("teslaDiv")as HTMLDivElement;
// teslaBtn.addEventListener("click", () => {
//   if (div3.style.display === "none") {
//     div3.style.display = "block";
//   } else {
//     div3.style.display = "none";
//   }
// });
// let stock2x:any = [];
// let stock2y:any = [];
// const tAPI_URL =
//   "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&outputsize=compact&apikey=API_KEY";
// async function getTeslaAPI() {
//   fetch(tAPI_URL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (let key in data["Time Series (Daily)"]) {
//         stock2x.push(key);
//         stock2y.push(data["Time Series (Daily)"][key]["1. open"]);
//       }
//     });
// }
// async function tChart() {
//   await fetch(tAPI_URL);
//   let teslaChart = <HTMLCanvasElement>document.getElementById("teslaChart")
//   let ctx2 = teslaChart.getContext("2d");
//   let myChart = new Chart(teslaChart, {
//     type: "line",
//     data: {
//       labels: stock2x.reverse(),
//       datasets: [
//         {
//           label: "TESLA STOCK",
//           data: stock2y.reverse(),
//           borderColor: "green",
//         },
//       ],
//     },
//     options: {},
//   });
// }
// gChart();
// getAPI();
// aChart();
// getAppleAPI();
// tChart();
// getTeslaAPI();
// /*btn:HTMLButtonElement;
// const btn=document.getElementById('test') as HTMLButtonElement;
// function add(n1:number,n2 : number){
//   console.log(n1+n2);
// }
// btn.addEventListener('click',()=>add(5,5));*/
