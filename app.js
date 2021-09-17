var input = document.querySelector("#input");
var submit = document.querySelector("#submit");
var output = document.querySelector("#output");
var inc = document.querySelector("#inc");
var dec = document.querySelector("#dec");

function passwordCheck(e)
{
    var length = input.value.length ;
    input.style.color = "red";

    if(length<10 || length >20)
    {
        output.style.color = "red";
        output.innerText = "Sorry! Password must be between 10 and 20";
        
        submit.disabled = true;
    }

    else
    {
        output.style.color = "green";
        output.innerText ="Password looks good."
        submit.disabled = false;
    }
}

function increasefontSize()
{
    style = window.getComputedStyle(output, null).getPropertyValue('font-size');
    var size = parseFloat(style);

    console.log(size);
    output.style.fontSize = (size+2) + 'px';
}


function decreasefontSize()
{
    style = window.getComputedStyle(output, null).getPropertyValue('font-size');
    var size = parseFloat(style);

    console.log(size);
    output.style.fontSize = (size-2) + 'px';
}

input.addEventListener("change", passwordCheck);

inc.addEventListener('click', increasefontSize);

dec.addEventListener('click', decreasefontSize)




