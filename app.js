

function noifx(){
    var nietos = [];
    var obj = {};
    obj["x"] = new Date();
    obj["y"] = "000";
    nietos.push(obj);
    
    obj["x"] = new Date();
    obj["y"] = "3000";
    nietos.push(obj);
    //console.log(nietos);

    getready();
    getUpdatedData();
    getUpdatesDialy();
    DailyReportofCountries();
   indianTotalCases();
   
    
}



async function DailyReportofCountries(){
    const resp = await fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ba2786a8fbmshc8e2bb00a0cdfcfp192bedjsne79d060f20c2",
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
        }
    });
    const respData = await resp.json();
    console.log(respData);
    showDailyReportofCountries(respData);
}

function showDailyReportofCountries(respDatas){
    const{countries_stat}=respDatas;
    var arr=[];
    var arra=[];
    var array=[];
    countries_stat.forEach(country=>{
        var obj={};
        var a;
        var b;
        obj['label']=country.country_name;

        a=country.new_cases;
        a=a.replace(/,/g,"");
        obj['y']=parseInt(a);
        
        
        arr.push(obj);
    });

    countries_stat.forEach(country=>{
        var obj={};
        var a;
        var b;
        obj['label']=country.country_name;

        a=country.new_deaths;
        a=a.replace(/,/g,"");
        obj['y']=parseInt(a);
        
        
        arra.push(obj);
    });
    countries_stat.forEach(country=>{
        var obj={};
        var a;
        var b;
        obj['label']=country.country_name;

        a=country.serious_critical;
        a=a.replace(/,/g,"");
        obj['y']=parseInt(a);
        
        
        array.push(obj);
    });
    //console.log(arr);
    //console.log(arra);
   // console.log(array);
    var chart = new CanvasJS.Chart("chartContainerCountriesDialy", {
        
        animationEnabled: true,
        title:{
            text: "Today's Cases - All Countries"
        },
        axisY :{
            includeZero: true,
            prefix: ""
        },
        toolTip: {
            shared: true
        },
        legend: {
            fontSize: 13
        },
        data: [
        
        {
            type: "splineArea", 
            showInLegend: true,
            name: "New-Cases",
            yValueFormatString: "###0",     
            dataPoints: arr,
         },
         {
            type: "splineArea", 
            showInLegend: true,
            name: "New-Deaths",
            yValueFormatString: "###0",     
            dataPoints: arra,
         },
         {
            type: "splineArea", 
            showInLegend: true,
            name: "Critical-Cases",
            yValueFormatString: "###0",     
            dataPoints: array,
         }
        ]
    });
    chart.render();


}
async function getready() {
    const getson = await fetch("https://api.covid19india.org/data.json");
    const ref = await getson.json();
    //console.log(ref);
    showe(ref);
}


function showe(fer) {
    var arr=[];
    var arra=[];
    var array=[];
    const{statewise}=fer;
    
    statewise.forEach(state=>{
       // console.log(state);
        
        
    });

    for(var i=0;i<statewise.length;i++) {
        var obj={};
       // console.log(statewise[i].state);
        obj['label']= statewise[i].state;
        obj['y']=parseInt(statewise[i].confirmed);
        arr.push(obj);
    }
    for(var i=0;i<statewise.length;i++) {
        var obj={};
       // console.log(statewise[i].state);
        obj['label']= statewise[i].state;
        obj['y']=parseInt(statewise[i].recovered);
        arra.push(obj);
    }
    for(var i=0;i<statewise.length;i++) {
        var obj={};
        //console.log(statewise[i].state);
        obj['label']= statewise[i].state;
        obj['y']=parseInt(statewise[i].deaths);
        array.push(obj);
    }
    //console.log(fed);
    //dfef.push(fed);
    
    arr.shift();
    arra.shift();
    array.shift();
   // console.log(arr);

    var chart = new CanvasJS.Chart("chartContainer", {
        
        animationEnabled: true,
        title:{
            text: "Total Cases-India"
        },
        axisY :{
            includeZero: true,
            prefix: ""
        },
        toolTip: {
            shared: true
        },
        legend: {
            fontSize: 13
        },
        data: [
        
        {
            type: "splineArea", 
            showInLegend: true,
            name: "Confirmed",
            yValueFormatString: "###0",     
            dataPoints: arr,
         },
         {
            type: "splineArea", 
            showInLegend: true,
            name: "Recovered",
            yValueFormatString: "###0",     
            dataPoints: arra,
         },
         {
            type: "splineArea", 
            showInLegend: true,
            name: "Deaths",
            yValueFormatString: "###0",     
            dataPoints: array,
         }
        ]
    });
    chart.render();
}

async function getUpdatedData() {
    const resp = await fetch("https://api.covid19api.com/summary");
    const respData = await resp.json();
    //console.log(respData);
    ShowUpdatedData(respData);
}

function ShowUpdatedData(responseData){
   // console.log(responseData);
    const{Global}= responseData;
    //console.log(Global.TotalConfirmed);
    //console.log(Global.TotalRecovered);
    //console.log(Global.TotalDeaths);

    var arre1=[];
    var arre2=[];
    var arre3=[];
    var obje={};
    var ob={};
    var obj={};

    obje['label']="TotalConfirmed";
    obje['y']=parseInt(Global.TotalConfirmed);
    
    //obje['exploded']=true;

    arre1.push(obje);

    ob['label1']="TotalRecovered";
    ob['y']=parseInt(Global.TotalRecovered);
    
    arre2.push(ob);


    obj['label2']="TotalDeaths";
    obj['y']=parseInt(Global.TotalDeaths);
    
    arre3.push(obj);

    //console.log(arre1);
    //console.log(arre2);
    //console.log(arre3);

    var chart = new CanvasJS.Chart("chartContainerWorld", {
        animationEnabled: true,
        theme: "dark2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "World Total"
        },
        axisY: {
           title:"Total-Cases per latest data axes"
        },
        
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "#87CEEB",
            legendText: "Confirmed",
            dataPoints: arre1
        },
        {        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "#228B22",
            legendText: "Recovered",
            dataPoints: arre2
        },
        {        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "#FFC0CB",
            legendText: "Deaths",
            dataPoints: arre3
        },
    
    ]
    });
    chart.render();
    
    
}

async function getUpdatesDialy(){
    const upd = await fetch("https://api.covid19api.com/summary");
   
    const upds = await upd.json();
    //console.log(upds);
    showUpdatesDialy(upds);
}

function showUpdatesDialy(red){
    
    //console.log(red);
    const {Global}=red;
    //console.log(Global);
    var arre1=[];
    var arre2=[];
    var arre3=[];
    var obje={};
    var ob={};
    var obj={};

    obje['label']="New-Confirmed";
    obje['y']=parseInt(Global.NewConfirmed);
    
    

    arre1.push(obje);

    ob['label']="New-Recovered";
    ob['y']=parseInt(Global.NewRecovered);
    

    arre2.push(ob);


    obj['label']="New-Deaths";
    obj['y']=parseInt(Global.NewDeaths);
    
    arre3.push(obj);

    //console.log(arre3);
    var chart = new CanvasJS.Chart("chartContainerWorldDialy", {
        animationEnabled: true,
        title: {
            text: "Frequent Updated World Data (Daily)"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: parseInt(Global.NewConfirmed), label: "Confirmed"},
                {y: parseInt(Global.NewRecovered), label: "Recovered"},
                {y: parseInt(Global.NewDeaths), label: "Deaths"},
                
            ]
        }
    ]
    });
    chart.render();


}


async function indianTotalCases(){
    const histAPI = await fetch("https://api.covid19api.com/total/country/india");

    const jsonHist = await histAPI.json();
    console.log(jsonHist);
    showHistoryCases(jsonHist);
}

function showHistoryCases(jsonHists){
//console.log(jsonHists.length);
var arr=[];
for(var i=0;i<jsonHists.length;i++){
    var obj={}
    //console.log(jsonHists[i].Date.slice(0,10));
    //console.log(jsonHists[i].Confirmed);
    obj['label'] = jsonHists[i].Date.slice(0,10);
    obj['y'] = jsonHists[i].Confirmed;
    arr.push(obj);
}
//console.log(arr);
var chart = new CanvasJS.Chart("chartContainerIndiaHistory", {
        
    animationEnabled: true,
    title:{
        text: "Analysis - Indian Cases from Day 1 reports"
    },
    axisY :{
        includeZero: true,
        prefix: ""
    },
    toolTip: {
        shared: true
    },
    legend: {
        fontSize: 13
    },
    data: [
    
    {
        type: "splineArea", 
        showInLegend: true,
        name: "Total-Confirmed",
        yValueFormatString: "###0",     
        dataPoints: arr,
     }
     
    ]
});
chart.render();

}