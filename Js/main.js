$(document).ready(function () {
  $(window).scroll(function () {
    let scrollposition = window.scrollY;
    if (scrollposition > 1) {
      $("header").css({
        "background-color": "white",
        "box-shadow": "0px 0px 10px #ddd",
      });
    } else {
      $("header").css({
        "background-color": "transparent",
        "box-shadow": "none",
      });
    }
  });

  $(".link").click(function () {
    if ($(".mega-menu").css("display") == "none") {
      megamenu.style = "z-index: 100; display:flex; top: 100%;";
    } else {
      megamenu.style = "z-index: -1; display: none; top: calc(100% + 100px);";
    }
  });

  $(window).scroll(function () {
    $(".title").each(function () {
      var titlePosition = $(this).offset().top;
      var scrollPosition = $(window).scrollTop() + 500;
      if (scrollPosition > titlePosition + $(this).height()) {
        $(this).addClass("scroll-active");
        $(this).css({
          color: "white",
          border: "solid var(--main-color) 2px",
          "transition-delay": "0.5s",
        });
      } else {
        $(this).removeClass("scroll-active");
        $(this).css({
          color: "black",
          border: "solid black 2px",
          "transition-delay": "0s",
        });
      }
    });
  });

  $(".featurs-btn").click(function () {
    if ($(this).html() == "More") {
      $(this).closest(".box").find(".hid-text").css("display", "block");
      $(this).html("Less");
    } else {
      $(this).closest(".box").find(".hid-text").css("display", "none");
      $(this).html("More");
    }
  });
});

$(window).scroll(function () {
  $(".bar").each(function () {
    let progress = $(this).attr("data-width");
    let barposition = $(".progress-bar").offset().top;
    let scrollposition = $(window).scrollTop() + 500;
    if (scrollposition > barposition + $(".progress-bar").height()) {
      $(this).css({ width: progress });
    } else {
      $(this).css({ width: 0 });
    }
  });
});

setInterval(function () {
  const countdown = new Date("Novemeber 28,2023 02:30:00").getTime();
  const now = new Date().getTime();
  const remaintime = countdown - now;
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  const textday = Math.floor(remaintime / day);
  const texthour = Math.floor((remaintime % day) / hour);
  const textmin = Math.floor((remaintime % hour) / min);
  const textsec = Math.floor((remaintime % min) / sec);

  $(".day").html(textday) > 0 ? textday : 0;
  $(".hour").html(texthour) > 0 ? texthour : 0;
  $(".min").html(textmin) > 0 ? textmin : 0;
  $(".sec").html(textsec) > 0 ? textsec : 0;
}, 1000);

let countersAnimated = false;

$(window).scroll(function () {
  let offset = $(".stots").offset().top;
  let position = $(window).scrollTop() + 500;

  if (position > offset + $(".stots").height() && !countersAnimated) {
    countersAnimated = true;
    animateCounter(150, ".stat-cli", 15);
    animateCounter(135, ".stat-pro", 15);
    animateCounter(50, ".stat-coun", 35);
    animateCounter(500, ".stat-money", 3);
  } else if (position <= offset + $(".stots").height() && countersAnimated) {
    countersAnimated = false;
    resetCounters();
  }
});

function animateCounter(targetValue, selector, delay) {
  let currentValue = parseInt($(selector).html()) || 0;

  function update() {
    if (currentValue <= targetValue) {
      $(selector).html(currentValue);
      currentValue++;
      setTimeout(update, delay);
    }
  }

  update();
}

function resetCounters() {
  $(".stat-cli").html("0");
  $(".stat-pro").html("0");
  $(".stat-coun").html("0");
  $(".stat-money").html("0");
}
