var allProducts = [];

function formatCategory(category) {
  // replace dashes with spaces and capitalize first letter of each word
  return category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

function createProductCard(product) {
  const { category, price, code, filename } = product;
  return `<div class="border px-2 py-2 rounded-xl shadow-xl">
            <div class="text-center">
              <a href="images/${category}/${filename}" data-lightbox="image-1" data-title="${code} - ($${price})">
                <img src="images/${category}/${filename}" alt="${code}" class="w-[200px] mx-auto" />
              </a>
            </div>
            <div class="text-center py-2">
                <div class="text-[16px] mb-2">${code}</div>
                <div class="font-bold">$${price}</div>
            </div>
        </div>`;
}

function fetchCategoryProducts(category) {
  $("#productGrid").empty();
  allProducts.forEach((item) => {
    if (item.category === category) {
      $("#productGrid").append(createProductCard(item));
    }
  });
}

$(document).ready(function () {
  const categories = [];
  $.getJSON("data/data.json", function (data) {
    allProducts = data;

    data.forEach((item, index) => {
      const { category, price, code, filename } = item;
      const categoryName = formatCategory(category);
      if (!categories.includes(categoryName)) {
        categories.push(categoryName);
        $("#categoryTabs").append(
          `<div class="tab min-w-[150px] px-2 py-2 text-center btn-category" data-id="${category}" >
                <span class="text-[14px]" >${categoryName}</span>
            </div>`
        );
      }

      if (index === 0) {
        fetchCategoryProducts(category);
        $(".btn-category").first().addClass("active");
      }
    });
  });

  $("body").on("click", ".btn-category", function () {
    $(this).addClass("active").siblings().removeClass("active");
    const category = $(this).data("id");
    fetchCategoryProducts(category);
  });

  lightbox.option({
    alwaysShowNavOnTouchDevices: true,
  });
});
