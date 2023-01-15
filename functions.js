let a="toat";
function init(str){
    
console.log(str);    
}

function hex2dec(h){
    c="0123456789ABCDEF";
    t=0;
    for (var i=0;i<h.length;i++){
        t=t*16;
        x=c.indexOf(h[i].toUpperCase());
        t+=(x>0) ? x:0;
    }
    return t;
}
function hexStreamToDecArray(str){
    

}
init("ABC");