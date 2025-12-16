document.addEventListener('DOMContentLoaded', function() {
  const cartProducts = document.querySelector('.cart__products');

  
  function findCartProduct(productId) {
    return cartProducts.querySelector(`[data-id="${productId}"]`);
  }

  
  function updateCartQuantity(cartProduct, newQuantity) {
    const countElement = cartProduct.querySelector('.cart__product-count');
    countElement.textContent = newQuantity;
  }

  
  document.querySelectorAll('.product').forEach(product => {
    const productId = product.dataset.id;
    const imageSrc = product.querySelector('.product__image').src;

    
    const controls = product.querySelector('.product__quantity-controls');
    const valueElement = product.querySelector('.product__quantity-value');

    
    controls.addEventListener('click', function(e) {
      if (!e.target.classList.contains('product__quantity-control')) return;

      let currentQuantity = parseInt(valueElement.textContent);

      if (e.target.classList.contains('product__quantity-control_inc')) {
        currentQuantity++;
      } else if (e.target.classList.contains('product__quantity-control_dec')) {
        currentQuantity = Math.max(1, currentQuantity - 1); 
      }

      valueElement.textContent = currentQuantity;
    });

    
    const addButton = product.querySelector('.product__add');
    addButton.addEventListener('click', function() {
      const quantity = parseInt(valueElement.textContent);
      const existingCartProduct = findCartProduct(productId);

      if (existingCartProduct) {
       
        const currentCount = parseInt(
          existingCartProduct.querySelector('.cart__product-count').textContent
        );
        updateCartQuantity(existingCartProduct, currentCount + quantity);
      } else {
        
        const cartProduct = document.createElement('div');
        cartProduct.className = 'cart__product';
        cartProduct.dataset.id = productId;

        const img = document.createElement('img');
        img.className = 'cart__product-image';
        img.src = imageSrc;

        const count = document.createElement('div');
        count.className = 'cart__product-count';
        count.textContent = quantity;

        cartProduct.append(img);
        cartProduct.append(count);
        cartProducts.append(cartProduct);
      }
    });
  });
});
