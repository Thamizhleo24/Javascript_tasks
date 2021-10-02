let w = "Hey There"
var splited = w.split(" ");
let temp = "";
let result = "";
for(i=0;i<splited.length;i++){
    var split1 = splited[i];
    for(j=split1.length-1;j>=0;j--){
        temp = temp + split1.chartAt(j);
    }
    let w = "Hey There"
var splited = w.split(" ");
let temp = "";
let result = "";
for(i=0;i<splited.length;i++){
    var split1 = splited[i];
    for(j=split1.length-1;j>=0;j--){
        temp = temp + split1.chartAt(j);
    };
    console.log(temp)
    temp=""
};
};
