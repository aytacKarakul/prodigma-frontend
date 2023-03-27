import "Images/how-the-works-prodigma.png";
import "Images/animation-vectorel.svg";

export function QuadrapleBanner() {
  const pageWrapper = document.querySelector(".page-home");
  var scrollW = document.querySelector(".quadruple-banner-body-right-wrapper");
  var scrollUl = document.querySelector(
    ".quadruple-banner-body-right-wrapper ul"
  );

  if (pageWrapper) {
    var itemsScrolled,
      itemsMax,
      cloned = false;

    var listOpts = {
      itemCount: null,
      itemHeight: null,
      items: [],
    };
    function scrollWrap() {
      itemsScrolled = Math.ceil(
        (this.scrollTop + listOpts.itemHeight / 3) / listOpts.itemHeight
      );

      if (this.scrollTop < 1) {
        itemsScrolled = 0;
      }

      listOpts.items.forEach(function (ele) {
        ele.classList.remove("active");
      });

      if (itemsScrolled < listOpts.items.length) {
        listOpts.items[itemsScrolled].classList.add("active");
      }
    }
    function initItems(scrollSmooth) {
      listOpts.items = [].slice.call(scrollUl.querySelectorAll("li"));
      listOpts.itemHeight = listOpts.items[0].clientHeight;
      listOpts.itemCount = listOpts.items.length;

      if (!itemsMax) {
        itemsMax = listOpts.itemCount;
      }

      if (scrollSmooth) {
        var seamLessScrollPoint = (itemsMax - 4) * listOpts.itemHeight;
        scrollW.scrollTop = seamLessScrollPoint;
      }
    }

    document.addEventListener("DOMContentLoaded", function (event) {
      initItems();
      scrollW.onscroll = scrollWrap;
    });
  }
}
