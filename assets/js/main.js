window.onload = function() {
  setTimeout(function() {
    $("#loading").fadeOut(1000);
  }, 2000);
};
var max_elem = 16,
  min_elem = 0;
$(document).ready(function() {
  $("#logo").hover(
    function() {
      $("#header_logo").animate({ left: "50px" }, 1000);
      $("#header_logotxt").fadeIn(2500);
    },
    function() {
      $("#header_logotxt").hide();
      $("#header_logo").animate({ left: "0px" }, 1000);
    }
  );

  $(".title_box").click(function() {
    $(this).toggleClass("open");
    $(this)
      .next(".list_link")
      .toggleClass("open");
  });

  $("#dropbox").click(function() {
    $("#cart_box").toggleClass("open");
    $("body").css("overflow-y","hidden");
  });

  $("#arrow").click(function() {
    $("#cart_box").toggleClass("open");
    $("body").css("overflow-y","auto");
  });

  if (document.documentElement.clientWidth > 1138) {
    $("#search").focusin(function() {
      $("#search-box").css("width", "235px");
    });
    $("#search").focusin(function() {
      $("#search").css("width", "200px");
    });
    $("#search").focusout(function() {
      $("#search-box").css("width", "145px");
    });
    $("#search").focusout(function() {
      $("#search").css("width", "110px");
    });
  }
  if (document.documentElement.clientWidth < 995) {
    $(".nav").css("display", "none");
    $(".menu-icon-wrapper").click(function() {
      document.querySelector(".menu-icon").classList.toggle("menu-icon-active");
      $(".nav").slideToggle(500);
    });
  }

  $(".modal").each(function() {
    $(this).wrap('<div class="overlay"></div>');
  });

  $(".open-modal").on("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
      modal = $($this).data("modal");

    $(modal)
      .parents(".overlay")
      .addClass("open");
    setTimeout(function() {
      $(modal).addClass("open");
    }, 350);

    $(document).on("click", function(e) {
      var target = $(e.target);

      if ($(target).hasClass("overlay")) {
        $(target)
          .find(".modal")
          .each(function() {
            $(this).removeClass("open");
          });
        setTimeout(function() {
          $(target).removeClass("open");
        }, 350);
      }
    });
  });

  $(".close-modal").on("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
      modal = $($this).data("modal");

    $(modal).removeClass("open");
    setTimeout(function() {
      $(modal)
        .parents(".overlay")
        .removeClass("open");
    }, 350);
  });
  //Сортировка
  var f = [1, 1, 1, 1, 1, 1, 1];
  var flag = 0;

  $(".link").click(function() {
    var str = $(this).text(),
      j = 0;
    switch (str) {
      case "Adidas":
        {
          if (flag >= 1 && f[0] == 1) {
            flag++;
            $(".model").each(function() {
              if ($(this).text() == str) {
                $(this)
                  .closest(".box")
                  .css("display", "block");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(0)").toggleClass("check");
            f[0] = 0;
            break;
          }
          if (flag > 1 && f[0] == 0) {
            flag--;
            $(".model").each(function() {
              if ($(this).text() == str) {
                $(this)
                  .closest(".box")
                  .css("display", "none");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(0)").toggleClass("check");
            f[0] = 1;
            break;
          }
          if (flag == 0 && f[0] == 1) {
            flag++;
            $(".model").each(function() {
              if ($(this).text() != str) {
                $(this)
                  .closest(".box")
                  .css("display", "none");
                j++;
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(0)").toggleClass("check");
            if (j < 16) {
              $(".next-product").css("display", "none");
            }
            f[0] = 0;
            break;
          }
          if (flag == 1 && f[0] == 0) {
            flag--;
            $(".model").each(function() {
              j++;
              if ($(this).text() != str) {
                $(this)
                  .closest(".box")
                  .css("display", "block");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(0)").toggleClass("check");
            if (j == 16) {
              $(".next-product").css("display", "flex");
            }
            f[0] = 1;
            break;
          }
        }
        break;
      case "Nike":
        {
          if (flag >= 1 && f[1] == 1) {
            flag++;
            $(".model").each(function() {
              if ($(this).text() == str) {
                $(this)
                  .closest(".box")
                  .css("display", "block");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(3)").toggleClass("check");
            f[1] = 0;
            break;
          }
          if (flag > 1 && f[1] == 0) {
            flag--;
            $(".model").each(function() {
              if ($(this).text() == str) {
                $(this)
                  .closest(".box")
                  .css("display", "none");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(3)").toggleClass("check");
            f[1] = 1;
            break;
          }
          if (flag == 0 && f[1] == 1) {
            flag++;
            $(".model").each(function() {
              if ($(this).text() != str) {
                $(this)
                  .closest(".box")
                  .css("display", "none");
                j++;
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(3)").toggleClass("check");
            if (j < 16) {
              $(".next-product").css("display", "none");
            }
            f[1] = 0;
            break;
          }
          if (flag == 1 && f[1] == 0) {
            flag--;
            $(".model").each(function() {
              j++;
              if ($(this).text() != str) {
                $(this)
                  .closest(".box")
                  .css("display", "block");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(3)").toggleClass("check");
            if (j == 16) {
              $(".next-product").css("display", "flex");
            }
            f[1] = 1;
            break;
          }
        }
        break;
      case "Puma":
        {
          if (flag >= 1 && f[2] == 1) {
            flag++;
            $(".model").each(function() {
              if ($(this).text() == str) {
                $(this)
                  .closest(".box")
                  .css("display", "block");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(4)").toggleClass("check");
            f[2] = 0;
            break;
          }
          if (flag > 1 && f[2] == 0) {
            flag--;
            $(".model").each(function() {
              if ($(this).text() == str) {
                $(this)
                  .closest(".box")
                  .css("display", "none");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(4)").toggleClass("check");
            f[2] = 1;
            break;
          }
          if (flag == 0 && f[2] == 1) {
            flag++;
            $(".model").each(function() {
              if ($(this).text() != str) {
                $(this)
                  .closest(".box")
                  .css("display", "none");
                j++;
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(4)").toggleClass("check");
            if (j < 16) {
              $(".next-product").css("display", "none");
            }
            f[2] = 0;
            break;
          }
          if (flag == 1 && f[2] == 0) {
            flag--;
            $(".model").each(function() {
              j++;
              if ($(this).text() != str) {
                $(this)
                  .closest(".box")
                  .css("display", "block");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(4)").toggleClass("check");
            if (j == 16) {
              $(".next-product").css("display", "flex");
            }
            f[2] = 1;
            break;
          }
        }
        break;
      case "Jordan":
        {
          if (flag >= 1 && f[3] == 1) {
            flag++;
            $(".model").each(function() {
              if ($(this).text() == str) {
                $(this)
                  .closest(".box")
                  .css("display", "block");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(1)").toggleClass("check");
            f[3] = 0;
            break;
          }
          if (flag > 1 && f[3] == 0) {
            flag--;
            $(".model").each(function() {
              if ($(this).text() == str) {
                $(this)
                  .closest(".box")
                  .css("display", "none");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(1)").toggleClass("check");
            f[3] = 1;
            break;
          }
          if (flag == 0 && f[3] == 1) {
            flag++;
            $(".model").each(function() {
              if ($(this).text() != str) {
                $(this)
                  .closest(".box")
                  .css("display", "none");
                j++;
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(1)").toggleClass("check");
            if (j < 16) {
              $(".next-product").css("display", "none");
            }
            f[3] = 0;
            break;
          }
          if (flag == 1 && f[3] == 0) {
            flag--;
            $(".model").each(function() {
              j++;
              if ($(this).text() != str) {
                $(this)
                  .closest(".box")
                  .css("display", "block");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(1)").toggleClass("check");
            if (j == 16) {
              $(".next-product").css("display", "flex");
            }
            f[3] = 1;
            break;
          }
        }
        break;
      case "NBalance":
        {
          if (flag >= 1 && f[4] == 1) {
            flag++;
            $(".model").each(function() {
              if ($(this).text() == "New Balance") {
                $(this)
                  .closest(".box")
                  .css("display", "block");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(2)").toggleClass("check");
            f[4] = 0;
            break;
          }
          if (flag > 1 && f[4] == 0) {
            flag--;
            $(".model").each(function() {
              if ($(this).text() == "New Balance") {
                $(this)
                  .closest(".box")
                  .css("display", "none");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(2)").toggleClass("check");
            f[4] = 1;
            break;
          }
          if (flag == 0 && f[4] == 1) {
            flag++;
            $(".model").each(function() {
              if ($(this).text() != "New Balance") {
                $(this)
                  .closest(".box")
                  .css("display", "none");
                j++;
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(2)").toggleClass("check");
            if (j < 16) {
              $(".next-product").css("display", "none");
            }
            f[4] = 0;
            break;
          }
          if (flag == 1 && f[4] == 0) {
            flag--;
            $(".model").each(function() {
              j++;
              if ($(this).text() != "New Balance") {
                $(this)
                  .closest(".box")
                  .css("display", "block");
              }
            });
            $(".title_box:eq(0)").toggleClass("open");
            $(".title_box:eq(0)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(2)").toggleClass("check");
            if (j == 16) {
              $(".next-product").css("display", "flex");
            }
            f[4] = 1;
            break;
          }
        }
        break;
      case "Мужчины":
        {
          if (f[5]) {
            $(".sex").each(function() {
              if ($(this).text() != "Man") {
                $(this)
                  .closest(".box")
                  .css("display", "none");
                j++;
              }
            });
            $(".title_box:eq(1)").toggleClass("open");
            $(".title_box:eq(1)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(5)").toggleClass("check");
            if (j < 16) {
              $(".next-product").css("display", "none");
            }
            f[5] = 0;
          } else {
            $(".sex").each(function() {
              j++;
              if ($(this).text() != "Man") {
                $(this)
                  .closest(".box")
                  .css("display", "block");
              }
            });
            $(".title_box:eq(1)").toggleClass("open");
            $(".title_box:eq(1)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(5)").toggleClass("check");
            if (j == 16) {
              $(".next-product").css("display", "flex");
            }
            f[5] = 1;
          }
        }
        break;
      case "Женщины":
        {
          if (f[6]) {
            $(".sex").each(function() {
              if ($(this).text() != "Woman") {
                $(this)
                  .closest(".box")
                  .css("display", "none");
                j++;
              }
            });
            $(".title_box:eq(1)").toggleClass("open");
            $(".title_box:eq(1)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(6)").toggleClass("check");
            if (j < 16) {
              $(".next-product").css("display", "none");
            }
            f[6] = 0;
          } else {
            $(".sex").each(function() {
              j++;
              if ($(this).text() != "Woman") {
                $(this)
                  .closest(".box")
                  .css("display", "block");
              }
            });
            $(".title_box:eq(1)").toggleClass("open");
            $(".title_box:eq(1)")
              .next(".list_link")
              .toggleClass("open");
            $(".link:eq(6)").toggleClass("check");
            if (j == 16) {
              $(".next-product").css("display", "flex");
            }
            f[6] = 1;
          }
        }
        break;
    }
  });
});

function Open(key)
{
    $.getJSON("assets/json/main.json", function(data){
        var out='';
        out+='<div class="box-open">';
        out+='<div class="sneaker">';
        out+='<img id="img-s" src="'+data[key].images+'" />';
        out+='<div class="text-s">';
        out+='<p class="model-s">'+data[key]['brand']+'</p>';
        out+='<h2>'+data[key]['model']+'</h2>';
        out+='<p class="price-s">$'+data[key]['price']+'</p>';
        out+='<div class="list_box" onclick="OpenL()">';
        out+='<div class="title_box">';
        out+='<p>РАЗМЕР</p>';
        out+='<img src="assets/images/svg_1.svg" />';
        out+='</div>'
        out+='<div class="list_link">';
        for(var i in data[key].sizes)
        {
            switch(data[key].sizes[i])
            {
                case 7.5:out+='<li><label class="check">7.5 US<input type="checkbox"></input><span class="checkmark"></span></label></li>';break;
                case 8:out+='<li><label class="check">8 US<input type="checkbox"></input><span class="checkmark"></span></label></li>';break;
                case 8.5:out+='<li><label class="check">8.5 US<input type="checkbox"></input><span class="checkmark"></span></label></li>';;break;
                case 9:out+='<li><label class="check">9 US<input type="checkbox"></input><span class="checkmark"></span></label></li>';break;
                case 9.5:out+='<li><label class="check">9.5 US<input type="checkbox"></input><span class="checkmark"></span></label></li>';break;
                case 10:out+='<li><label class="check">10 US<input type="checkbox"></input><span class="checkmark"></span></label></li>';break;
                case 10.5:out+='<li><label class="check">10.5 US<input type="checkbox"></input><span class="checkmark"></span></label></li>';break;
                case 11:out+='<li><label class="check">11 US<input type="checkbox"></input><span class="checkmark"></span></label></li>';break;
            }
        }
        out+='</div>';
        out+='</div>'
        out+='</div>';
        out+='<i id="close-s" class="fas fa-times" onclick="CloseS()"></i>'
        out+='<buttom class="basket-product" onclick="AddBasket('+key+')">Добавить в корзину</buttom>'
        out+='</div>';
        out+='</div>';
        $("body").prepend(out);
    })
    
}

function OpenL(){
    $(".title_box:hover").toggleClass("open");
    $(".title_box:hover")
      .next(".list_link")
      .toggleClass("open");
}

function CloseS(){
    $('.box-open').remove();
}

function AddBasket(key){
    $.getJSON("assets/json/main.json", function(data){
        var out='';
        out+='<div class="basket-box">';
        out+='<div class="text-box-basket">';
        out+='<p class="model-basket">'+data[key]['brand']+'</p>';
        out+='<h2>'+data[key]['model']+'</h2>';
        out+='<p class="price-basket">$'+data[key]['price']+'</p>';
        out+='</div>';
        out+='<div class="delet" onclick="DeletP()">';
        out+='<i class="fas fa-times"></i>';
        out+='</div>';
        out+='</div>';
        $(".cart-list").append(out);
        $('.box-open').remove();
    })
}

function DeletP(){
  $('.basket-box:hover').remove();
}