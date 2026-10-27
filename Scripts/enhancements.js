(() => {
  products.find(p=>p.id==="hub-c").image="https://images.unsplash.com/photo-1760376789487-994070337c76?auto=format&fit=crop&w=1000&q=85";
  products.find(p=>p.id==="hub-slim").image="https://images.unsplash.com/photo-1760376789487-994070337c76?auto=format&fit=crop&w=1000&q=85";
  products.find(p=>p.id==="desk-light").image="https://images.unsplash.com/photo-1733974352470-93abec47a814?auto=format&fit=crop&w=1000&q=85";
  products.find(p=>p.id==="cable-kit").image="https://images.unsplash.com/photo-1711056823627-64e9089d4a82?auto=format&fit=crop&w=1000&q=85";
  products.find(p=>p.id==="speaker-desk").image="https://images.uzum.uz/d1mhtm21146hm2beu5l0/t_product_540_high.jpg";
  products.find(p=>p.id==="stand-aluminum").image="https://theomnidesk.com.au/cdn/shop/files/Stage_Lite_Laptop_Stand.png?v=1776746775";
  products.find(p=>p.id==="wrist-rest").image="https://shopping.c.yimg.jp/lib/sanwadirect/tok-mu3nbk2_4.jpg";
  products.find(p=>p.id==="webcam-cover").image="https://www.kjell.com/cdn-cgi/image/width%3D1400%2Cformat%3Dauto/globalassets/productimages/839397_24010.jpg";
  const catalog = products.slice();
  const baseRender = renderProducts;
  const price = document.querySelector('#price-filter');
  const sale = document.querySelector('#sale-filter');
  const favOnly = document.querySelector('#favorites-filter');
  const favs = favorites;
  let showFavs = false;
  const reviewKey = id => `mach-reviews-${id}`;
  const reviewsFor = id => JSON.parse(localStorage.getItem(reviewKey(id)) || '[]');
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  renderProducts = function () {
    const [min,max] = price.value === 'all' ? [0,Number.MAX_SAFE_INTEGER] : price.value.split('-').map(Number);
    const view = catalog.filter(p => p.price >= min && p.price <= max && (!sale.checked || p.oldPrice > p.price) && (!showFavs || favs.has(p.id)));
    const chosenSort = sortSelect.value;
    if (chosenSort === 'discount') view.sort((a,b) => (b.oldPrice ? (b.oldPrice-b.price)/b.oldPrice : 0) - (a.oldPrice ? (a.oldPrice-a.price)/a.oldPrice : 0));
    products.splice(0,products.length,...view);
    if (chosenSort === 'discount') sortSelect.value = 'featured';
    baseRender();
    sortSelect.value = chosenSort;
    products.splice(0,products.length,...catalog);
    decorateCards();
  };
  function decorateCards() {
    document.querySelectorAll('.product-card[data-product]').forEach(card => {
      const id=card.dataset.product, image=card.querySelector('.product-image');
      if (!image || image.querySelector('[data-favorite]')) return;
      const button=document.createElement('button'); button.type='button'; button.className=`favorite-toggle${favs.has(id)?' is-favorite':''}`; button.dataset.favorite=id; button.textContent=favs.has(id)?'♥':'♡'; button.setAttribute('aria-pressed',String(favs.has(id))); button.setAttribute('aria-label',`${favs.has(id)?'Bỏ':'Thêm'} yêu thích: ${card.querySelector('h3')?.textContent||'sản phẩm'}`); image.append(button);
      const heading=card.querySelector('.product-info h3'); if (heading && !heading.querySelector('[data-detail]')) { const title=heading.textContent.trim(); heading.textContent=''; const link=document.createElement('button'); link.type='button'; link.className='product-detail-link'; link.dataset.detail=id; link.textContent=title; heading.append(link); }
    });
  }
  new MutationObserver(decorateCards).observe(document.querySelector('#product-grid'),{childList:true});
  new MutationObserver(decorateCards).observe(document.querySelector('#featured-grid'),{childList:true}); decorateCards();
  price.addEventListener('change',()=>{currentPage=1;renderProducts()}); sale.addEventListener('change',()=>{currentPage=1;renderProducts()});
  favOnly.addEventListener('click',()=>{showFavs=!showFavs;favOnly.setAttribute('aria-pressed',String(showFavs));favOnly.classList.toggle('is-selected',showFavs);currentPage=1;renderProducts()});
  document.querySelector('#clear-filters').addEventListener('click',()=>{activeCategory='all';currentPage=1;searchInput.value='';price.value='all';sale.checked=false;showFavs=false;favOnly.setAttribute('aria-pressed','false');favOnly.classList.remove('is-selected');sortSelect.value='featured';document.querySelectorAll('.category-button').forEach(b=>{const on=b.dataset.category==='all';b.classList.toggle('is-selected',on);b.setAttribute('aria-pressed',String(on))});renderProducts()});

  const detail=document.querySelector('#product-modal'), shade=document.querySelector('#product-modal-backdrop'), content=document.querySelector('#product-detail-content'); let returnFocus;
  function openDetail(id){const p=catalog.find(x=>x.id===id);if(!p)return;if(!detail.classList.contains("is-open"))returnFocus=document.activeElement;const rs=reviewsFor(id),avg=rs.length?(rs.reduce((n,r)=>n+r.rating,0)/rs.length).toFixed(1):'Chưa có',off=p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;content.innerHTML=`<div class="detail-layout"><div class="detail-image"><img src="${p.image}" alt="${esc(p.name)}" data-fallback="${fallbackIllustrations[p.category]}"></div><div class="detail-copy"><p class="section-kicker">${p.categoryName}</p><h2 id="detail-title">${esc(p.name)}</h2><p>${avg} ★ · ${rs.length} đánh giá</p><p>${esc(p.description)}</p><p class="detail-price"><strong>${formatPrice(p.price)}</strong> ${p.oldPrice?`<del>${formatPrice(p.oldPrice)}</del> <span class="product-badge product-badge-sale">-${off}%</span>`:''}</p><p class="detail-stock">Tình trạng hàng và bảo hành sẽ được xác nhận khi đặt hàng.</p><button class="button button-primary" data-add="${p.id}" type="button">Thêm vào giỏ</button><section class="review-section"><h3>Đánh giá sản phẩm</h3>${rs.length?rs.slice(0,8).map(r=>`<p><strong>${'★'.repeat(r.rating)}</strong> ${esc(r.text)}</p>`).join(''):'<p>Chưa có đánh giá. Hãy chia sẻ cảm nhận đầu tiên.</p>'}<form data-review="${id}"><label>Điểm số <select name="rating"><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select></label><label>Nhận xét <textarea name="text" required maxlength="400"></textarea></label><button type="submit">Gửi đánh giá</button><p class="demo-note">Đánh giá được lưu trên thiết bị này.</p></form></section></div></div>`;addImageFallbacks(content);detail.classList.add('is-open');detail.setAttribute('aria-hidden','false');detail.inert=false;shade.hidden=false;document.body.classList.add('product-is-open');document.querySelector('#close-detail').focus()}
  function closeDetail(){detail.classList.remove('is-open');detail.setAttribute('aria-hidden','true');detail.inert=true;shade.hidden=true;document.body.classList.remove('product-is-open');returnFocus?.focus()}
  const actions=e=>{const f=e.target.closest('[data-favorite]');if(f){const id=f.dataset.favorite;favs.has(id)?favs.delete(id):favs.add(id);localStorage.setItem('mach-favorites',JSON.stringify([...favs]));currentPage=1;renderProducts();return}const d=e.target.closest('[data-detail]');if(d)openDetail(d.dataset.detail)};
  productGrid.addEventListener('click',actions);featuredGrid.addEventListener('click',actions);document.querySelector('#close-detail').addEventListener('click',closeDetail);shade.addEventListener('click',closeDetail);
  content.addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(b){cart.set(b.dataset.add,(cart.get(b.dataset.add)||0)+1);updateCart();cartStatus.textContent='Đã thêm sản phẩm vào giỏ hàng.'}});
  content.addEventListener('submit',e=>{const form=e.target.closest('[data-review]');if(!form)return;e.preventDefault();const id=form.dataset.review, data=new FormData(form), rs=reviewsFor(id);rs.unshift({rating:Number(data.get('rating')),text:String(data.get('text')).trim()});localStorage.setItem(reviewKey(id),JSON.stringify(rs.slice(0,50)));openDetail(id)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&detail.classList.contains('is-open'))closeDetail();if(e.key==='Tab'&&detail.classList.contains('is-open')){const els=[...detail.querySelectorAll('button,input,textarea,select')].filter(x=>!x.disabled);if(e.shiftKey&&document.activeElement===els[0]){e.preventDefault();els.at(-1).focus()}else if(!e.shiftKey&&document.activeElement===els.at(-1)){e.preventDefault();els[0].focus()}}});

  let coupon=localStorage.getItem('mach-coupon')||'';const couponInput=document.querySelector('#coupon-code'),message=document.querySelector('#coupon-message');couponInput.value=coupon;
  const update=updateCart;updateCart=function(){update();const subtotal=[...cart].reduce((n,[id,q])=>n+(catalog.find(p=>p.id===id)?.price||0)*q,0),discount=coupon==='MACH10'?Math.round(subtotal*.1):coupon==='SETUP5'?Math.round(subtotal*.05):0;let row=document.querySelector('#coupon-discount-row');if(!row){row=document.createElement('div');row.id='coupon-discount-row';row.className='cart-total coupon-discount-row';document.querySelector('.cart-total').after(row)}row.hidden=!discount;row.innerHTML=`<span>Ưu đãi ${coupon}</span><strong>−${formatPrice(discount)}</strong>`;document.querySelector('#cart-subtotal').textContent=formatPrice(subtotal);document.querySelector('#cart-total').textContent=formatPrice(subtotal-discount);message.textContent=coupon?`Đã áp dụng ${coupon}, tiết kiệm ${formatPrice(discount)}.`:'Nhập MACH10 để giảm 10% hoặc SETUP5 để giảm 5%.';};
  document.querySelector('#coupon-form').addEventListener('submit',e=>{e.preventDefault();const code=couponInput.value.trim().toUpperCase();if(!['MACH10','SETUP5'].includes(code)){message.textContent='Mã không hợp lệ. Thử MACH10 hoặc SETUP5.';return}coupon=code;localStorage.setItem('mach-coupon',code);updateCart()});

  const checkoutModal=document.querySelector('#checkout-modal'), checkoutBackdrop=document.querySelector('#checkout-backdrop'), checkoutForm=document.querySelector('#checkout-form'), checkoutSuccess=document.querySelector('#checkout-success');
  let checkoutReturnFocus=null, currentOrderCode='';
  function refreshPaymentView(){const bank=checkoutForm.elements.paymentMethod.value==='bank';document.querySelector('#bank-qr-panel').hidden=!bank;document.querySelector('#checkout-total').textContent=document.querySelector('#cart-total').textContent;document.querySelector('#qr-amount').textContent=document.querySelector('#cart-total').textContent;document.querySelector('#qr-reference').textContent=currentOrderCode;document.querySelector('#checkout-submit').textContent=bank?'Xác nhận đã chuyển khoản':'Xác nhận đặt hàng COD'}
  function openCheckout(){if(!cart.size)return;checkoutReturnFocus=document.activeElement;currentOrderCode='MACH-'+Date.now().toString().slice(-8);checkoutForm.reset();checkoutForm.hidden=false;document.querySelector("#checkout-content").hidden=false;checkoutSuccess.hidden=true;checkoutModal.classList.add('is-open');checkoutModal.setAttribute('aria-hidden','false');checkoutModal.inert=false;checkoutBackdrop.hidden=false;document.body.classList.add('checkout-is-open');refreshPaymentView();checkoutModal.querySelector('[name="customerName"]').focus()}
  function closeCheckout(){checkoutModal.classList.remove('is-open');checkoutModal.setAttribute('aria-hidden','true');checkoutModal.inert=true;checkoutBackdrop.hidden=true;document.body.classList.remove('checkout-is-open');checkoutReturnFocus?.focus()}
  document.querySelector('#checkout-link').addEventListener('click',openCheckout);
  document.querySelector('#checkout-close').addEventListener('click',closeCheckout);checkoutBackdrop.addEventListener('click',closeCheckout);
  checkoutForm.querySelectorAll('[name="paymentMethod"]').forEach(input=>input.addEventListener('change',refreshPaymentView));
  checkoutForm.addEventListener('submit',event=>{event.preventDefault();if(!checkoutForm.reportValidity())return;const data=new FormData(checkoutForm),name=String(data.get('customerName')).trim(),method=data.get('paymentMethod'),total=document.querySelector('#cart-total').textContent;const safeName=esc(name);const paymentText=method==='cod'?'Thanh toán khi nhận hàng (COD)':'Chuyển khoản ngân hàng · đang chờ cửa hàng đối soát';sessionStorage.setItem('mach-last-order',JSON.stringify({code:currentOrderCode,total,method,createdAt:new Date().toISOString()}));checkoutSuccess.innerHTML='<p class="section-kicker">Đặt hàng</p><h2>Đã tạo yêu cầu đặt hàng</h2><p class="order-code">Mã đơn <strong>'+currentOrderCode+'</strong></p><p>Cảm ơn '+safeName+'. Phương thức: <strong>'+paymentText+'</strong>.</p><p>Tổng thanh toán: <strong>'+total+'</strong></p><p class="order-local-note">Mã đơn được giữ trong phiên trình duyệt này. Website chưa kết nối máy chủ để gửi thông tin nhận hàng đến cửa hàng; vui lòng liên hệ cửa hàng để xác nhận.</p><button class="button button-primary" id="finish-checkout" type="button">Hoàn tất</button>';document.querySelector("#checkout-content").hidden=true;checkoutSuccess.hidden=false;cart.clear();updateCart();checkoutSuccess.querySelector('#finish-checkout').focus()});
  checkoutSuccess.addEventListener('click',event=>{if(event.target.closest('#finish-checkout')){closeCheckout();setCartOpen(false)}});
  document.addEventListener('keydown',event=>{if(!checkoutModal.classList.contains('is-open'))return;if(event.key==='Escape'){closeCheckout();return}if(event.key==='Tab'){const focusables=[...checkoutModal.querySelectorAll('button:not([disabled]),input:not([disabled]),textarea:not([disabled])')].filter(el=>!el.closest('[hidden]'));if(event.shiftKey&&document.activeElement===focusables[0]){event.preventDefault();focusables.at(-1).focus()}else if(!event.shiftKey&&document.activeElement===focusables.at(-1)){event.preventDefault();focusables[0].focus()}}});
  updateCart();
})();
