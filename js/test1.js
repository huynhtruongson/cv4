//var a="welcome back";
//var a=5+'6';
//alert(a);
//console.log(a)
/*var a=5;
function divi(b,c) {
    var d=b+c+a;
    return d;
}
alert(divi(5,5));*/
/*var  str  ="to keep me yours 'to keep you mine' ";
var str1=str.split(" ");
alert(Number(true));*/

/*var a= prompt('input fisrt number:');
var b =prompt('input second number:');
a=Number(a);
b=Number(b);
if(a>b)
    console.log(a+'lớn hơn'+b);
else if(a<b)
    console.log(a+' bé hơn '+b);
else
    console.log(a+'bằng'+b);
console.log(typeof(a)); */

 /* function factorial(n) {
    var s=1;
    for(var i=1;i<=n;i++) {
        s*=i;
    }
    return s;
} */
 /*var d = new Date();
console.log(d.getHours());
var obj = document.getElementById("line2");
//obj.setAttribute("id","line1_1");
obj.setAttribute('style','color:red'); */

/*function calculate (num1,num2) {
    this.num1=num1;
    this.num2=num2;
    this.Tong = function() {
        return this.num1+this.num2;
    }
    this.Tru = function() {
        if(this.num1>this.num2)
            return this.num1-this.num2;
        else    
            return this.num2-this.num1;
    }
}
var a= new calculate(6,10);
console.log(a.Tong());
console.log(a.Tru()); */
function SetUpEventForDiv1() {

}
function F1() {
    var obj = document.getElementById("div1");
    obj.setAttribute("style","transform:rotate")
}

var str ='{"name":"Huynh Truong Son","age":20,"skill":["code",231,{"other":"findInfo"}],"more":{"languge":"java","number":23}}'
var prt = JSON.parse(str);
console.log(prt.name,prt.age);

