$(function () {
  // loading
  var webStorage = function () {
    if (sessionStorage.getItem("access")) {
      $("#splash").fadeOut(function () {
        $(".splashbg").addClass("pageAnime");
        $(".wrapper").addClass("wrapActive");
      });
      $(".loading").addClass("loadActive");
    } else {
      sessionStorage.setItem("access", "true");
      $(".loading__animation").addClass("loadAnimeActive");
      setTimeout(function () {
        $(".loading").addClass("loadActive");
        $(".loading__animation").removeClass("loadAnimeActive");
        $("#splash").fadeOut(function () {
          $(".splashbg").addClass("pageAnime");
          $(".wrapper").addClass("wrapActive");
        });
      }, 3000);
    }
  };
  webStorage();

  // mouse stolker
  const stalker = $("#mouse");

  $(document).on("mousemove", function (e) {
    $(document).on("mousemove", function (e) {
      stalker.css({
        transform: "translate(" + e.clientX + "px, " + e.clientY + "px)",
      });
    });
  });

  // mouse hover
  $(".stkr-target").on({
    mouseenter: function () {
      stalker.addClass("mouseActive");
    },
    mouseleave: function () {
      stalker.removeClass("mouseActive");
    },
  });

  $(".stkr-target-txt").on({
    mouseenter: function () {
      stalker.addClass("mouseActive-txt");
    },
    mouseleave: function () {
      stalker.removeClass("mouseActive-txt");
    },
  });

  // smooth scroll
  $("a").on("click", function () {
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const targetPos = $(target).offset().top - 50;

    $("html, body").animate(
      {
        scrollTop: targetPos,
      },
      500
    );

    return false;
  });

  // nav
  $("#btn").on("click", function () {
    $("#gnav").toggleClass("gnavActive");
    $("#btn span").toggleClass("btnActive");
    $(".btn__top").toggleClass("rotate-top");
    $(".btn__middle").toggleClass("rotate-middle");
    $(".btn__bottom").toggleClass("rotate-bottom");
    $(".header__logo, #btn").toggleClass("headerActive");
    $("body").toggleClass("noScroll");
  });

  $(".gnav__link").on("click", function () {
    $("#gnav").removeClass("gnavActive");
    $("#btn span").removeClass("btnActive");
    $(".btn__top").removeClass("rotate-top");
    $(".btn__middle").removeClass("rotate-middle");
    $(".btn__bottom").removeClass("rotate-bottom");
    $(".header__logo, #btn").removeClass("headerActive");
    $("body").removeClass("noScroll");
  });

  //section color change
  $(window).on("scroll load", function () {
    if (
      $(window).scrollTop() > $("#mv").offset().top + 300 &&
      $(window).scrollTop() < $("#int").offset().top - 200
    ) {
      $("#wrapper").css({
        "background-color": "#fff5f0",
        color: "#000",
      });
      $(".gnav__link").css({
        color: "#000",
      });
      $("#btn span, #mouse").css({
        "background-color": "#000",
      });

      $(".mv__scroll").css({
        opacity: "0",
      });
    } else {
      $("#wrapper").css({
        "background-color": "#000",
        color: "#fff5f0",
      });
      $(".gnav__link").css({
        color: "#fff5f0",
      });
      $("#btn span, #mouse").css({
        "background-color": "#fff5f0",
      });

      $(".mv__scroll").css({
        opacity: "1",
      });
    }
  });

  $(window).scroll(function () {
    // section number
    if (
      $(window).scrollTop() > $("#about").offset().top - 500 &&
      $(window).scrollTop() < $("#work").offset().top - 200
    ) {
      $("#secScroll").css({
        opacity: "1",
      });
      $(".secScroll__top").text("01");
    } else if (
      $(window).scrollTop() > $("#work").offset().top - 200 &&
      $(window).scrollTop() < $("#skill").offset().top - 200
    ) {
      $("#secScroll").css({
        opacity: "0",
      });
      $(".secScroll__top").text("02");
    } else if (
      $(window).scrollTop() > $("#skill").offset().top - 300 &&
      $(window).scrollTop() < $("#int").offset().top - 200
    ) {
      $("#secScroll").css({
        opacity: "1",
      });
      $(".secScroll__top").text("03");
    } else if (
      $(window).scrollTop() > $("#int").offset().top - 200 &&
      $(window).scrollTop() < $("#footer").offset().top - 200
    ) {
      $("#secScroll").css({
        opacity: "1",
      });
      $(".secScroll__top").text("04");
    } else if ($(window).scrollTop() > $("#footer").offset().top - 200) {
      $("#secScroll").css({
        opacity: "1",
      });
      $(".secScroll__top").text("05");
    } else
      $("#secScroll").css({
        opacity: "0",
      });

    // skill fadeIn
    if (
      $(window).scrollTop() > $("#skill").offset().top - 300 &&
      $(window).scrollTop() < $("#int").offset().top + 100
    ) {
      $(".skill__box").addClass("fadeIn");
    } else {
      $(".skill__box").removeClass("fadeIn");
    }

    // text slide scroll
    const aboutTop = $("#about").offset().top - 800;
    const intTop = $("#int").offset().top - 500;
    const ST = $(this).scrollTop();

    if (ST > aboutTop) {
      const slideX = ST - aboutTop - 500;
      $(".stroke__about").css({
        transform: "translateX(" + -slideX + "px)",
        transition: ".2s",
        "transition-timing-function": "cubic-bezier(0,1.01,1,.91)",
      });
    }

    if (ST > intTop) {
      const slideX = ST - intTop - 500;
      $(".stroke__int").css({
        transform: "translateX(" + -slideX + "px)",
        transition: ".2s",
        "transition-timing-function": "cubic-bezier(0,1.01,1,.91)",
      });
    }

    // form txt
    if ($(window).scrollTop() > $("#footer").offset().top - 500) {
      $(".fadeUp").addClass("fadeUp-isActive");
    }
  });

  //works hover
  if (window.matchMedia("(min-width: 1024px)").matches) {
    $(".work__item").hover(
      function () {
        const target = $(this).data("target");

        $(".work__item, #workScroll").not(this).stop().css("opacity", "0.2");
        $(".work__huge").addClass("workBgActive");
        $(target).addClass("workBgActive");
      },
      function () {
        $(".work__item, #workScroll").not(this).stop().css("opacity", "1");
        $(".work__huge").removeClass("workBgActive");
        $(".work__bg").removeClass("workBgActive");
      }
    );
  }

  // footer message
  $("#form").submit(function (event) {
    var formData = $("#form").serialize();
    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLScOjSpbU6B4s734c1mqIOLM8m0gQugQQX7hX8L68_kOVhvKUw/viewform?usp=sf_link",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".form__message").slideDown();
          $(".form__submit").fadeOut();
        },
        200: function () {
          $(".form__false").slideDown();
        },
      },
    });
    event.preventDefault();
  });

  // mail copy
  $(".footer__mail").on("click", function () {
    const text = $(".footer__txtCopy").text();
    $(this).append(
      '<textarea class="clipboard__textarea">' + text + "</textarea>"
    );
    $(".clipboard__textarea").select();
    document.execCommand("copy");
    $(".clipboard__textarea").remove();
    alert("メールアドレスをコピーしました");
  });
});

// work gsap
const listWrapperEl = document.querySelector(".work__sideScroll");
const listEl = document.querySelector(".work__list");

gsap.to(listEl, {
  x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".work",
    start: "top top",
    end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});

// interest pic swiper
const swiperPic = new Swiper(".swiper-pic", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  slidesPerView: 1,
  shortSwipes: false,
  longSwipes: false,
  speed: 500,
});

// interest txt swiper
const swiperTxt = new Swiper(".swiper-txt", {
  direction: "horizontal",
  loop: true,
  effect: "slide",
  slidesPerView: 1,

  speed: 400,

  pagination: {
    el: ".swiper-txt__pagination",
    type: "fraction",
  },

  navigation: {
    prevEl: ".swiper-txt__prev",
    nextEl: ".swiper-txt__next",
  },

  thumbs: {
    swiper: swiperPic,
  },
});

//svg
window.addEventListener("load", function () {
  deSVG(
    ".header__logo, .mv__img, .stroke__Fimg, .stroke__Bimg, .work__img",
    true
  );
});

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// three.js
window.addEventListener("DOMContentLoaded", init);

async function init() {
  const width = window.innerWidth;
  const height = window.innerHeight * 0.8;

  // レンダラーを作成
  const canvasElement = document.querySelector("#mv_canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.001, 10000);
  // カメラの初期座標を設定
  camera.position.set(2, 0, 0);
  scene.add(camera);

  // カメラコントローラーを作成
  const controls = new OrbitControls(camera, canvasElement);
  controls.target.set(0, 0, 0);
  controls.update();

  // 平行光源を作成
  // // 上から照らす
  // const directionalLight = new THREE.DirectionalLight(0xffffff);
  // directionalLight.position.set(1, 1, 1);
  // scene.add(directionalLight);

  // // 横からテラス
  // const directionalLight2 = new THREE.DirectionalLight(0xffffff);
  // directionalLight2.position.set(1, 0, 1);
  // scene.add(directionalLight2);
  const light = new THREE.DirectionalLight("#fff5f0", 10);
  light.position.set(1, 0.5, 0.5);
  scene.add(light);

  const ambientLight = new THREE.AmbientLight();
  ambientLight.color = new THREE.Color(0xffffff);
  ambientLight.intensity = 0.5;
  ambientLight.position.x = 2;
  scene.add(ambientLight);

  // GLTF形式のモデルデータを読み込む
  const loader = new GLTFLoader();
  // GLTFファイルのパスを指定
  const objects = await loader.loadAsync("./images/3d/mv_huge_3d.glb");
  // 読み込み後に3D空間に追加
  const model = objects.scene;
  // model.position.set(0, 0.1, 0.5);
  model.scale.set(4, 4, 4); // 大きさ30倍に拡大
  scene.add(model);

  //ブラウザのリサイズに対応
  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
  });

  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {
    // レンダリング
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
}
