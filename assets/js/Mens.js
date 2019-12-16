$(document).ready(function(){
    loadProduct();

    $(".next-product").click(function(){max_elem+=16;min_elem+=16;loadProduct();});
})

function loadProduct(){
    $.getJSON("assets/json/main.json", function(data){
        var i=0,f=0;
        var out='';
        for(var key in data){
            if(i<max_elem && i>=min_elem){
                if(data[key].sex=='Man'){
                    f++;
                    out+='<div class="box">';
                    out+='<a class="product" onclick="Open('+key+')">';
                    out+='<div class="div_product">';
                    out+= '<img id="img-p" src="'+data[key].images+'" />';
                    out+='</div>';
                    out+='<div class="text-box">';
                    out+='<p class="model">'+data[key]['brand']+'</p>';
                    out+='<h2>'+data[key]['model']+'</h2>';
                    out+='<p class="price">$'+data[key]['price']+'</p>';
                    out+='<p class="sex" style="display:none">'+data[key]['sex']+'</p>';
                    out+='</div>';
                    out+='</a>';
                    out+='</div>';
                    }
                }
                i++;
            }
        if(f<16){
            $(".next-product").css("display","none");
        }
        $(".list-product").append(out);
    })
}