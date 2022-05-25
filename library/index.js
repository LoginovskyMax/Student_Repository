function drawRectangle(a,b){
    for(let i = 0;i<a;i++){
        let x= ""
        for(let z = 0;z<b;z++){
            x+="*"
        }
        console.log(x,"\n")
    }
}
drawRectangle(4,8)

function drawTriangle(a){
    let x= ""
    for(let i = 0;i<a;i++){
        x+="*"
        console.log(x,"\n")
    }
}
drawTriangle(4)

function drawSimpleTriangle(a){
    let y = 0;
    let b = a-2
    if(a==3){
        b=2
    }
    for(let q=0;q<b;q++){
        let x= ""
        if(y!=0){
            for(let i = 0;i<y;i++){x+=" "}
        }
        for(let z = 0;z<a;z++){x+="*"}
        y++
        a-=2
        console.log(x,"\n")
    }
}
drawSimpleTriangle(7)

function drawRomb(a){
    if(a%2==0)return console.log("Введите нечетное число")
    let y = ((a+1)/2)-1
    let b = 1
    for(let q=0;q<a;q++){
        if(y==0){
    let y = 0;
    let b = a-2
    if(a==3)b=2
    for(let q=0;q<b;q++){
        let x= ""
        if(y!=0){
        for(let i = 0;i<y;i++){x+=" "}
        }
        for(let z = 0;z<a;z++){x+="*"}
        y++
        a-=2
        console.log(x,"\n")
    }
        }else{
            let x= ""
            for(let i = 0;i<y;i++){x+=" "}
            for(let z = 0;z<b;z++){x+="*"}
            y--
            b+=2
            console.log(x,"\n")
        }
    }
}
drawRomb(7)

exports.draw = drawRectangle()