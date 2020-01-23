
function btnClick(el){
    let e=document.getElementById(el);
    $(e).remove();
}
$(function () {
    async function load() {
    
        let url = `https://poloniex.com/public?command=returnCurrencies`;
        let response = await fetch(url).then(
            successResponse => {
                if (successResponse.status != 200) {
                    console.log(successResponse.status);
                    return null;
                } else {
                    return successResponse.json();
                }
            },
            failResponse => {               
                return null;
            });




        let res =response;
        let r = Object.keys(res).map(i => res[i]);
        let s = Object.keys(res);
        
        
        for (let index = 0; index < r.length; index++) {
            let num = +r[index].txFee;
            body.innerHTML += `<tr id="${r[index].id}">
                <td>${s[index]}</td>
                <td name=name>${r[index].name}</td>
                <td>${num.toFixed(5)}</td>
                <td>${r[index].humanType}</td>
                <td>${r[index].currencyType}</td>
                <td>${r[index].minConf}</td>           
                <td><button type="button" onclick="btnClick(${r[index].id})" class="btn btn-danger">Delete</button></td>
            </tr>`;
    
        }
    }
    load();
    
    $("button").on("click",function () {
        alert("$(this)");
    });

    $("#search").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        $("#body tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

});