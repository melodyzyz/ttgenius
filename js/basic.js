var box=document.getElementById('display');

function show(x)
{
    box.value += x;
    if (x=='c')
    {
        box.value=''; 
    }
}

function result()
{
    x=box.value;
    x=eval(x);
    box.value=x;
}

function delone()
{
    var num=box.value;
    var len=num.length-1;
    var newnum=num.substring(0,len);
    box.value = newnum;

}

function power(y)
{
    x=box.value;
    x=Math.pow(x,y);
    box.value=x;
}