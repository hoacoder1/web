document.querySelectorAll('.form-check-input').forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    filterProductsByPrice();
  });
});

function filterProductsByPrice() {
  // Lấy tất cả sản phẩm
  const products = document.querySelectorAll('.card.col-lg-3.col-md-4.col-sm-6');
  
  // Lấy các checkbox đã được chọn
  const selectedRanges = Array.from(document.querySelectorAll('.form-check-input:checked')).map(cb => cb.value);

  // Duyệt qua từng sản phẩm và ẩn/hiện theo giá
  products.forEach(function(product) {
    const productPrice = parseInt(product.getAttribute('data-price')); // Lấy giá của sản phẩm
    let isVisible = false; // Mặc định ẩn sản phẩm

    // Duyệt qua các khoảng giá đã chọn
    selectedRanges.forEach(function(range) {
      const [min, max] = range.split('-').map(Number); // Tách khoảng giá thành min và max
      if (productPrice >= min * 1000 && productPrice <= max * 1000) {
        isVisible = true; // Nếu giá nằm trong khoảng, hiển thị sản phẩm
      }
    });

    // Hiển thị hoặc ẩn sản phẩm
    product.style.display = isVisible || selectedRanges.length === 0 ? 'block' : 'none';
  });
}

document.querySelectorAll('.form-check-input-g').forEach(function(checkboxg) {
  checkboxg.addEventListener('change', function() {
    filterProductsByGenres();
  });
});

function filterProductsByGenres() {
  const productsg = document.querySelectorAll('.card.col-lg-3.col-md-4.col-sm-6');
  const selectedGenres = Array.from(document.querySelectorAll('.form-check-input-g:checked')).map(cb => cb.value);

  productsg.forEach(function(productg) {
    const productGenres = productg.getAttribute('data-genres'); 
    let isVisibleg = false; 

    selectedGenres.forEach(function(rangeg) {
      const genresArray = rangeg.split('-');
      if (genresArray.includes(productGenres)) {
        isVisibleg = true; 
      }
    });

   
    productg.style.display = isVisibleg || selectedGenres.length === 0 ? 'block' : 'none';
  });
}





document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
    
    if (toggleButton) {
        toggleButton.addEventListener("click", function(event) {
            event.preventDefault();

            var content = document.getElementById("continue-disable");

            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block"; 
                this.innerHTML = 'Thu gọn <i class="fa-solid fa-angle-up ms-2"></i>'; 
            } else {
                content.style.display = "none";
                this.innerHTML = 'Xem thêm <i class="fa-solid fa-angle-down ms-2"></i>'; 
            }
        });
    } else {
        console.error("Element with id 'toggleButton' not found");
    }
});

