const defaultCategories = [
  {id:'fashion', name:'ফ্যাশন', image:'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80', active:true, subcategories:[], productIds:[]},
  {id:'beauty', name:'বিউটি', image:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80', active:true, subcategories:[], productIds:[]},
  {id:'home', name:'হোম', image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80', active:true, subcategories:[], productIds:[]},
  {id:'tech', name:'টেক', image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80', active:true, subcategories:[], productIds:[]}
];
const defaultProducts = [
  {id:1,name:'AirFlex Everyday Sneakers',price:1490,old:2190,discount:'-32%',rating:'4.8',category:'ফ্যাশন',stock:24,image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=85',description:'হালকা, আরামদায়ক এবং প্রতিদিনের জন্য তৈরি premium sneakers।'},
  {id:2,name:'Hydra Glow Face Serum',price:680,old:950,discount:'-28%',rating:'4.9',category:'বিউটি',stock:35,image:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=85',description:'ত্বকের hydration ধরে রাখতে lightweight glow serum।'},
  {id:3,name:'Minimal Ceramic Table Lamp',price:1250,old:1750,discount:'-29%',rating:'4.7',category:'হোম',stock:18,image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=85',description:'আপনার ঘরের জন্য নরম আলো আর শান্ত minimalist design।'},
  {id:4,name:'Smart Wireless Headphones',price:2190,old:2990,discount:'-27%',rating:'4.6',category:'টেক',stock:12,image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=85',description:'Deep bass, clear calls এবং দীর্ঘ battery life।'},
  {id:5,name:'Linen Oversized Shirt',price:990,old:1490,discount:'-34%',rating:'4.8',category:'ফ্যাশন',stock:20,image:'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=85',description:'Breathable linen shirt, relaxed fit এবং everyday styling-এর জন্য perfect।'},
  {id:6,name:'Velvet Matte Lip Tint',price:420,old:650,discount:'-35%',rating:'4.7',category:'বিউটি',stock:28,image:'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=85',description:'Long-lasting velvet finish, lightweight feel এবং rich colour payoff।'},
  {id:7,name:'Classic Leather Crossbody',price:1590,old:2290,discount:'-31%',rating:'4.9',category:'ফ্যাশন',stock:16,image:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=85',description:'Minimal shape, premium texture এবং day-to-night crossbody style।'},
  {id:8,name:'Daily Sunscreen SPF 50+',price:760,old:1050,discount:'-28%',rating:'4.8',category:'বিউটি',stock:31,image:'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=85',description:'Lightweight daily sunscreen with broad-spectrum SPF 50+ protection।'}
];
const defaultCoupons = [
  {code:'WELCOME10',type:'percent',value:10,minOrder:500,active:true},
  {code:'SAVE200',type:'fixed',value:200,minOrder:1500,active:true}
];
const defaultAds = [{id:1,title:'Weekend style edit',text:'Fresh looks, better prices.',image:'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',link:'#campaign',productIds:[1,5,7,2,6,8],active:true}];
const defaultHero = {image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1100&q=85'};
const defaultCampaign = {title:'Style refresh,',subtitle:'feel your best.',text:'Fashion আর Beauty-তে special price, limited-time offers এবং নতুন season-এর favourites একসাথে।',image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',discount:'50%',productIds:[]};
const defaultGifts = [];
const defaultShipping = {insideDhaka:60,outsideDhaka:120,freeThreshold:2499};
const bangladeshDistricts = ['ঢাকা','গাজীপুর','নারায়ণগঞ্জ','নরসিংদী','মুন্সিগঞ্জ','মানিকগঞ্জ','টাঙ্গাইল','কিশোরগঞ্জ','ফরিদপুর','গোপালগঞ্জ','মাদারীপুর','রাজবাড়ী','শরীয়তপুর','চট্টগ্রাম','কক্সবাজার','কুমিল্লা','ব্রাহ্মণবাড়িয়া','চাঁদপুর','ফেনী','নোয়াখালী','লক্ষ্মীপুর','খাগড়াছড়ি','রাঙ্গামাটি','বান্দরবান','সিলেট','মৌলভীবাজার','হবিগঞ্জ','সুনামগঞ্জ','রাজশাহী','নাটোর','নওগাঁ','চাঁপাইনবাবগঞ্জ','পাবনা','সিরাজগঞ্জ','বগুড়া','জয়পুরহাট','রংপুর','দিনাজপুর','গাইবান্ধা','কুড়িগ্রাম','লালমনিরহাট','নীলফামারী','পঞ্চগড়','ঠাকুরগাঁও','খুলনা','বাগেরহাট','সাতক্ষীরা','যশোর','নড়াইল','মাগুরা','ঝিনাইদহ','কুষ্টিয়া','চুয়াডাঙ্গা','মেহেরপুর','বরিশাল','ভোলা','ঝালকাঠি','পটুয়াখালী','পিরোজপুর','ময়মনসিংহ','জামালপুর','নেত্রকোণা','শেরপুর'];
const $ = selector => document.querySelector(selector);
const read = (key, fallback) => { try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; } catch { return fallback; } };
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]));
const money = value => `৳${Number(value || 0).toLocaleString('en-IN')}`;
const PRODUCT_MEDIA_BUCKET = 'product-media';
const mediaList = value => Array.isArray(value) ? value.filter(url => typeof url === 'string' && url.trim()) : [];
function normaliseProductMedia(product) { const images = mediaList(product.images); const legacyImage = String(product.image || '').trim(); const allImages = images.length ? images : legacyImage ? [legacyImage] : []; return {...product, image:allImages[0] || '', images:allImages, videos:mediaList(product.videos)}; }
const productImages = product => normaliseProductMedia(product).images;
const productVideos = product => normaliseProductMedia(product).videos;
const primaryProductImage = product => productImages(product)[0] || product.image || '';
let products = read('laiba_products', defaultProducts).map(normaliseProductMedia);
let categories = read('laiba_categories', defaultCategories);
categories = (Array.isArray(categories) ? categories : defaultCategories).map(category => ({
  ...category,
  productIds: Array.isArray(category.productIds)
    ? category.productIds.map(Number)
    : products.filter(product => product.category === category.name).map(product => Number(product.id))
}));
let cart = read('laiba_cart', []);
let coupons = read('laiba_coupons', defaultCoupons);
let ads = read('laiba_ads', defaultAds);
ads = ads.map(ad => ({...ad, productIds:(ad.productIds || []).map(Number)}));
if (ads.length && ads[0].title === 'Weekend style edit' && !ads[0].productIds.length) { ads[0].productIds = defaultAds[0].productIds; write('laiba_ads', ads); }
let heroSettings = read('laiba_hero', defaultHero);
let campaignSettings = read('laiba_campaign', defaultCampaign);
let mallSettings = read('laiba_mall', {productIds:[]});
let gifts = read('laiba_gifts', defaultGifts);
let orders = read('laiba_orders', []);
let reviews = read('laiba_reviews', []);
let shippingSettings = read('laiba_shipping', defaultShipping);
if (shippingSettings.freeThreshold === 999) { shippingSettings = {...shippingSettings, freeThreshold:2499}; write('laiba_shipping', shippingSettings); }
let users = read('laiba_users', [{id:1,name:'Laiba Admin',email:'admin@laiba.shop',phone:'01700000000',password:'admin123',role:'admin',address:''}]);
let currentUser = read('laiba_current_user', null);
let showingAllProducts = false;
let appliedCoupon = null;
let activeModal = null;
let pendingCheckout = false;
let pendingAdmin = false;
let checkoutDraft = {name:'', phone:'', address:'', payment:'cod', district:'ঢাকা'};
let adminOrderLimit = 10;
let editingGiftId = null;
let editingAdId = null;
let pendingDeletedProductIds = new Set();

let cloudSaveQueue = Promise.resolve();

function saveState() {
  write('laiba_products', products);
  write('laiba_categories', categories);
  write('laiba_cart', cart);
  write('laiba_coupons', coupons);
  write('laiba_ads', ads);
  write('laiba_hero', heroSettings);
  write('laiba_campaign', campaignSettings);
  write('laiba_mall', mallSettings);
  write('laiba_gifts', gifts);
  write('laiba_orders', orders);
  write('laiba_reviews', reviews);
  write('laiba_users', users);
  write('laiba_shipping', shippingSettings);

  cloudSaveQueue = cloudSaveQueue
    .then(() => persistCloudState())
    .catch(error => {
      console.error('Cloud save failed:', error);
      showToast(error.message || 'Cloud save failed');
    });

  return cloudSaveQueue;
}

async function savePendingProductChanges() {
  if (!pendingDeletedProductIds.size) {
    return showToast('Save করার মতো কোনো product change নেই');
  }

  const client = window.laibaSupabase;
  if (!client) {
    return showToast('Supabase connection পাওয়া যায়নি — changes Save হয়নি');
  }

  const button = document.querySelector('[data-save-product-changes]');
  if (button) {
    button.disabled = true;
    button.textContent = 'Saving...';
  }

  try {
    const {data: sessionData, error: sessionError} = await client.auth.getSession();

    if (sessionError) {
      throw new Error(`Authentication check failed: ${sessionError.message}`);
    }

    const session = sessionData?.session;
    if (!session?.user) {
      throw new Error('Supabase admin session পাওয়া যায়নি। আবার admin login করুন।');
    }

    const profileResult = await client
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (profileResult.error) {
      throw new Error(`Admin profile check failed: ${profileResult.error.message}`);
    }

    if (profileResult.data?.role !== 'admin') {
      throw new Error('এই Supabase account-এর admin permission নেই।');
    }

    await persistCloudState();

    write('laiba_products', products);
    renderProducts();
    renderAdmin();
    showToast('পণ্য পরিবর্তন সফলভাবে Save হয়েছে ✓');
  } catch (error) {
    console.error('Product changes save failed:', error);
    if (button) {
      button.disabled = false;
      button.textContent = 'Save Changes';
    }
    showToast(error.message || 'Product changes Save হয়নি');
  }
}

async function persistCloudState() {
  const client = window.laibaSupabase;
  if (!client || currentUser?.role !== 'admin') return;

  const settings = [
    {key:'ads',value:ads},
    {key:'categories',value:categories},
    {key:'hero',value:heroSettings},
    {key:'campaign',value:campaignSettings},
    {key:'mall',value:mallSettings},
    {key:'gifts',value:gifts},
    {key:'coupons',value:coupons},
    {key:'shipping',value:shippingSettings}
  ];

  const settingsResult = await client
    .from('store_settings')
    .upsert(settings, {onConflict:'key'});

  if (settingsResult.error) {
    throw new Error(`Settings save failed: ${settingsResult.error.message}`);
  }

  const cloudProducts = products.map(product => ({
    id:Number(product.id),
    name:product.name,
    price:product.price,
    old_price:product.old,
    discount:product.discount || '',
    rating:Number(product.rating || 4.8),
    category:product.category,
    stock:Number(product.stock || 0),
    image:primaryProductImage(product),
    description:product.description || '',
    active:true
  }));

  const existingResult = await client
    .from('products')
    .select('id');

  if (existingResult.error) {
    throw new Error(`Product lookup failed: ${existingResult.error.message}`);
  }

  const staleIds = [...pendingDeletedProductIds]
    .map(Number)
    .filter(id => Number.isFinite(id));

  if (staleIds.length) {
    const deleteResult = await client
      .from('products')
      .delete()
      .in('id', staleIds);

    if (deleteResult.error) {
      throw new Error(`Product delete failed: ${deleteResult.error.message}`);
    }
  }

  if (cloudProducts.length) {
    const upsertResult = await client
      .from('products')
      .upsert(cloudProducts, {onConflict:'id'});

    if (upsertResult.error) {
      throw new Error(`Product save failed: ${upsertResult.error.message}`);
    }
  }

  pendingDeletedProductIds.clear();
}

async function loadCloudState() {
  const client = window.laibaSupabase;
  if (!client) return false;

  const productResult = await client
    .from('products')
    .select('*')
    .eq('active', true)
    .order('created_at', {ascending:false});

  if (productResult.error) {
    throw new Error(`Cloud products load failed: ${productResult.error.message}`);
  }

  products = (productResult.data || []).map(product => normaliseProductMedia({
    id:product.id,
    name:product.name,
    price:Number(product.price),
    old:Number(product.old_price || 0),
    discount:product.discount || '',
    rating:String(product.rating || '4.8'),
    category:product.category,
    stock:product.stock,
    image:product.image,
    images:product.images,
    videos:product.videos,
    description:product.description || ''
  }));

  write('laiba_products', products);

  const settingsResult = await client
    .from('store_settings')
    .select('key,value');

  if (settingsResult.error) {
    throw new Error(`Cloud settings load failed: ${settingsResult.error.message}`);
  }

  settingsResult.data.forEach(setting => {
    if (setting.key === 'ads') ads = setting.value;
    if (setting.key === 'categories') categories = setting.value;
    if (setting.key === 'hero') heroSettings = {...heroSettings,...setting.value};
    if (setting.key === 'campaign') campaignSettings = {...campaignSettings,...setting.value};
    if (setting.key === 'mall') mallSettings = setting.value;
    if (setting.key === 'gifts') gifts = setting.value;
    if (setting.key === 'coupons') coupons = setting.value;
    if (setting.key === 'shipping') shippingSettings = {...shippingSettings,...setting.value};
  });

  renderCategories();
  renderAds();
  renderHero();
  renderCampaignBanner();
  renderGifts();
  renderProducts();
  updateCart();

  return true;
}

async function uploadProductMedia(file, type = 'image') { const client = window.laibaSupabase; if (!client) throw new Error('Supabase connection পাওয়া যায়নি'); if (!file) return ''; const maxSize = type === 'video' ? 100 * 1024 * 1024 : 10 * 1024 * 1024; if (file.size > maxSize) throw new Error(type === 'video' ? 'Video সর্বোচ্চ 100MB হতে পারবে' : 'Image সর্বোচ্চ 10MB হতে পারবে'); if (type === 'video' && !file.type.startsWith('video/')) throw new Error('শুধু video file নির্বাচন করুন'); if (type === 'image' && !file.type.startsWith('image/')) throw new Error('শুধু image file নির্বাচন করুন'); const extension = file.name.split('.').pop()?.toLowerCase() || 'file'; const filePath = `${type === 'video' ? 'videos' : 'images'}/${Date.now()}-${crypto.randomUUID()}.${extension}`; const {error} = await client.storage.from(PRODUCT_MEDIA_BUCKET).upload(filePath, file, {cacheControl:'31536000', contentType:file.type, upsert:false}); if (error) throw new Error(error.message || 'File upload failed'); const {data} = client.storage.from(PRODUCT_MEDIA_BUCKET).getPublicUrl(filePath); if (!data?.publicUrl) throw new Error('Uploaded file-এর URL পাওয়া যায়নি'); return data.publicUrl; }
async function uploadProductMediaFromForm(form) { const imageFiles = [...(form.querySelector('[name="images"]')?.files || [])]; const videoFiles = [...(form.querySelector('[name="videos"]')?.files || [])]; const [images, videos] = await Promise.all([Promise.all(imageFiles.map(file => uploadProductMedia(file, 'image'))), Promise.all(videoFiles.map(file => uploadProductMedia(file, 'video')))]); return {images, videos}; }
function openModal(id) { activeModal = id; document.querySelectorAll('.modal').forEach(modal => { modal.hidden = modal.id !== id; }); decorateAdminForms(); prepareProductMediaInputs(); bindEditorForms(); $('#overlay').hidden = false; }

function closeModal(id = activeModal) { if (id) $(`#${id}`).hidden = true; activeModal = null; if (!document.querySelector('.cart-drawer.open')) $('#overlay').hidden = true; }

function showToast(text) { const toast = $('#toast'); toast.textContent = text; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2400); }

async function handleCloudAuth(data) { const client = window.laibaSupabase; const identifier = data.identifier.toLowerCase().trim(); if (!identifier.includes('@')) return showToast('Supabase login-এর জন্য email ব্যবহার করুন'); const result = data.name ? await client.auth.signUp({email:identifier,password:data.password,options:{data:{name:data.name,phone:data.phone || ''}}}) : await client.auth.signInWithPassword({email:identifier,password:data.password}); if (result.error) return showToast(result.error.message); if (!result.data.user) return showToast('Authentication সম্পন্ন হয়নি'); if (data.name && !result.data.session) return showToast('Email inbox থেকে confirmation দিন'); const profileResult = await client.from('profiles').select('*').eq('id', result.data.user.id).single(); const profile = profileResult.data || {}; currentUser = {id:result.data.user.id,name:profile.name || data.name || identifier,email:identifier,phone:profile.phone || data.phone || '',address:profile.address || '',district:profile.district || '',password:'',role:profile.role || 'customer'}; write('laiba_current_user', currentUser); const shouldOpenAdmin = pendingAdmin; pendingAdmin = false; closeModal('authModal'); showToast(`স্বাগতম, ${currentUser.name}`); if (shouldOpenAdmin) return currentUser.role === 'admin' ? renderAdmin() : showToast('Admin access denied'); if (pendingCheckout) { pendingCheckout = false; return openCheckout(); } if (!data.name && currentUser.role === 'admin') return renderAdmin(); if (!data.name) {
    accountOrderFilter = '';
    return renderCustomerDashboard();
  } }

function decorateAdminForms() { const categoryOptions = '<option value="">ক্যাটাগরি নির্বাচন করুন</option>' + getActiveCategories().map(category => `<option value="${escapeHtml(category.name)}">${escapeHtml(category.name)}</option>`).join(''); document.querySelectorAll('#productForm, #productEditForm').forEach(form => { form.noValidate = true; const field = form.querySelector('[name="category"]'); if (field && field.tagName !== 'SELECT') { const select = document.createElement('select'); select.name = 'category'; select.required = true; select.innerHTML = categoryOptions; select.value = field.value || getActiveCategories()[0]?.name || ''; field.replaceWith(select); } }); document.querySelectorAll('#giftForm, #giftEditForm').forEach(form => { form.noValidate = true; const placeholders = {title:'Gift-এর নাম',image:'Gift image URL',stock:'Gift stock',quantity:'এক অর্ডারে কতটি gift',minQuantity:'কতটি selected product কিনলে gift পাবেন'}; Object.entries(placeholders).forEach(([name, text]) => { const field = form.querySelector(`[name="${name}"]`); if (field) field.placeholder = text; }); if (!form.querySelector('[name="minQuantity"]')) { const input = document.createElement('input'); input.name = 'minQuantity'; input.type = 'number'; input.min = '1'; const giftId = form.querySelector('[name="id"]')?.value; input.value = giftId ? String(gifts.find(gift => gift.id === Number(giftId))?.minQuantity || 1) : '1'; input.placeholder = placeholders.minQuantity; const category = form.querySelector('[name="giftCategory"]'); (category || form.querySelector('[name="expiresAt"]'))?.before(input); } const picker = form.querySelector('.campaign-picker'); const minQuantity = form.querySelector('[name="minQuantity"]'); const giftCategory = form.querySelector('[name="giftCategory"]'); if (picker && minQuantity && giftCategory && !form.querySelector('.gift-rule-fields')) { const rules = document.createElement('div'); rules.className = 'gift-rule-fields'; const quantityLabel = document.createElement('label'); quantityLabel.textContent = 'Minimum order quantity'; quantityLabel.append(minQuantity); const categoryLabel = document.createElement('label'); categoryLabel.textContent = 'Gift category'; categoryLabel.append(giftCategory); rules.append(quantityLabel, categoryLabel);
      const subcategoryField = form.querySelector('[name="giftSubcategory"]');
      if (subcategoryField) rules.append(subcategoryField);
      picker.before(rules); } }); document.querySelectorAll('#adEditForm, #adForm, #campaignForm').forEach(form => { form.noValidate = true; }); }

function prepareProductMediaInputs() { document.querySelectorAll('#productForm, #productEditForm').forEach(form => { const legacyImage = form.querySelector('[name="image"]'); if (!legacyImage || form.querySelector('.product-media-fields')) return; legacyImage.required = false; legacyImage.placeholder = 'Primary image URL (optional)'; legacyImage.insertAdjacentHTML('afterend', '<div class="product-media-fields" style="display:grid;gap:10px;padding:12px 0"><label style="display:grid;gap:6px;font-weight:700">ছবি নির্বাচন করুন (একাধিক দেওয়া যাবে)<input name="images" type="file" accept="image/*" multiple style="display:block;width:100%;padding:8px;border:1px solid #bbb;border-radius:8px;background:#fff"></label><small style="display:block">প্রথম ছবিটি সব product card, cart ও checkout-এ দেখাবে।</small><label style="display:grid;gap:6px;font-weight:700">ভিডিও নির্বাচন করুন (একাধিক দেওয়া যাবে)<input name="videos" type="file" accept="video/*" multiple style="display:block;width:100%;padding:8px;border:1px solid #bbb;border-radius:8px;background:#fff"></label><small style="display:block">Image সর্বোচ্চ 10MB এবং video সর্বোচ্চ 100MB।</small></div>'); }); }

function bindEditorForms() { const productForm = $('#productEditForm'); if (productForm) productForm.onsubmit = event => { event.preventDefault(); event.stopImmediatePropagation(); void saveProductEdit(productForm); }; const campaignForm = $('#adEditForm'); if (campaignForm) campaignForm.onsubmit = event => { event.preventDefault(); event.stopImmediatePropagation(); saveCampaignEdit(campaignForm); }; const giftForm = $('#giftEditForm'); if (giftForm) giftForm.onsubmit = event => { event.preventDefault(); event.stopImmediatePropagation(); saveGiftEdit(giftForm); }; const mallForm = $('#mallForm'); if (mallForm) mallForm.onsubmit = event => { event.preventDefault(); event.stopImmediatePropagation(); saveMallSettings(mallForm); }; }

async function saveProductEdit(form) { const data = Object.fromEntries(new FormData(form)); const product = products.find(item => item.id === Number(data.id)); if (!product) return showToast('Product পাওয়া যায়নি'); const price = Number(data.price); const old = Number(data.old); if (!data.name?.trim() || !data.category || !Number.isFinite(price) || !Number.isFinite(old) || !Number.isFinite(Number(data.stock))) return showToast('Product-এর সব তথ্য পূরণ করুন'); try { const uploaded = await uploadProductMediaFromForm(form); const requestedPrimary = String(data.image || '').trim(); let images = productImages(product); if (requestedPrimary && requestedPrimary !== primaryProductImage(product)) images = [requestedPrimary, ...images.filter(url => url !== requestedPrimary)]; images = [...images, ...uploaded.images]; if (!images.length) return showToast('কমপক্ষে একটি product image দিন'); const videos = [...productVideos(product), ...uploaded.videos]; const previousCategory = product.category; Object.assign(product, normaliseProductMedia({name:data.name.trim(),price,old,discount:old ? `-${Math.round((1 - price / old) * 100)}%` : '',rating:product.rating || '4.8',category:data.category,stock:Number(data.stock),image:images[0],images,videos,description:data.description || ''})); syncProductCategoryMembership(product, previousCategory); saveState(); closeModal('ordersModal'); renderProducts(); renderAdmin(); showToast('Product update হয়েছে'); } catch (error) { showToast(error.message || 'Product media upload হয়নি'); } }

async function createProductFromForm(form) { const data = Object.fromEntries(new FormData(form)); const price = Number(data.price); const old = Number(data.old); if (!data.name?.trim() || !data.category || !Number.isFinite(price) || !Number.isFinite(old) || !Number.isFinite(Number(data.stock))) return showToast('Product-এর সব তথ্য পূরণ করুন'); try { const uploaded = await uploadProductMediaFromForm(form); const manualImage = String(data.image || '').trim(); const images = [...(manualImage ? [manualImage] : []), ...uploaded.images]; if (!images.length) return showToast('কমপক্ষে একটি product image upload বা URL দিন'); const newProduct = normaliseProductMedia({id:Date.now(),name:data.name.trim(),price,old,discount:old ? `-${Math.round((1 - price / old) * 100)}%` : '',rating:'4.8',category:data.category,stock:Number(data.stock),image:images[0],images,videos:uploaded.videos,description:data.description || ''}); products.unshift(newProduct); syncProductCategoryMembership(newProduct); saveState(); renderProducts(); renderAdmin(); showToast('নতুন পণ্য প্রকাশিত হয়েছে'); } catch (error) { showToast(error.message || 'Product media upload হয়নি'); } }

function saveManagedCategoryForm(form) {
  const data = Object.fromEntries(new FormData(form));
  const id = String(data.id || '').trim();
  const name = String(data.name || '').trim();
  const image = String(data.image || '').trim();

  if (!name) return showToast('Category name দিন');

  const duplicate = categories.find(item => item.name === name && String(item.id) !== id);
  if (duplicate) return showToast('এই category আগে থেকেই আছে');

  const selectedProductIds = [...form.querySelectorAll('[name="categoryProducts"]:checked')].map(input => Number(input.value));

  const subcategoryList = [...form.querySelectorAll('[data-subcategory-row]')].map(row => ({
    id: row.dataset.subcategoryId || `sub-${Date.now()}`,
    name: row.querySelector('.category-subcategory-content > b')?.textContent?.trim() || '',
    image: row.querySelector('[data-subcategory-image-input]')?.value?.trim() || '',
    productIds: [...row.querySelectorAll('[data-subcategory-product]:checked')].map(input => Number(input.value))
  })).filter(item => item.name);

  if (id) {
    const category = categories.find(item => String(item.id) === id);
    if (!category) return showToast('Category পাওয়া যায়নি');

    const oldName = category.name;
    Object.assign(category, {
      name,
      image,
      active: data.active === 'on',
      productIds: selectedProductIds,
      subcategories: subcategoryList
    });

    products.forEach(product => {
      if (product.category === oldName) product.category = name;
    });
    ads.forEach(ad => {
      if (ad.targetCategory === oldName) ad.targetCategory = name;
    });
    gifts.forEach(gift => {
      if (gift.giftCategory === oldName) gift.giftCategory = name;
    });
  } else {
    categories.push({
      id: `cat-${Date.now()}`,
      name,
      image,
      active: data.active === 'on',
      subcategories: subcategoryList,
      productIds: selectedProductIds
    });
  }

  saveState();
  renderCategories();
  renderProducts();
  renderAdmin();
  showToast(id ? 'Category update হয়েছে' : 'নতুন category তৈরি হয়েছে');
}

async function persistCloudOrder(order) {
  const client = window.laibaSupabase;
  if (!client || !currentUser?.id || !String(currentUser.id).includes('-')) return;
  if (!order.cloudId) order.cloudId = crypto.randomUUID();

  const result = await client.from('orders').insert({
    id:order.cloudId,
    user_id:currentUser.id,
    customer:order.customer,
    payment:order.payment,
    items:order.items,
    gift:order.gift,
    subtotal:order.subtotal,
    discount:order.discount,
    shipping:order.shipping,
    total:order.total,
    status:order.status,
    status_label:order.statusLabel,
    stock_deducted:Boolean(order.stockDeducted),
    stock_restored:Boolean(order.stockRestored)
  });

  if (result.error) {
    console.error('Cloud order save failed:', result.error);
    showToast(result.error.message || 'Order cloud save হয়নি');
  }
}


async function loadCloudOrders() {
  const client = window.laibaSupabase;

  if (!client || !currentUser?.id || !String(currentUser.id).includes('-')) {
    return false;
  }

  const result = await client
    .from('orders')
    .select('*')
    .order('created_at', {ascending:false});

  if (result.error) {
    console.warn('Cloud orders load failed:', result.error.message);
    return false;
  }

  orders = (result.data || []).map(order => ({
    id: order.id,
    cloudId: order.id,
    userId: order.user_id,
    customer: order.customer || {},
    payment: order.payment || 'cod',
    items: Array.isArray(order.items) ? order.items : [],
    gift: order.gift || null,
    subtotal: Number(order.subtotal || 0),
    discount: Number(order.discount || 0),
    shipping: Number(order.shipping || 0),
    total: Number(order.total || 0),
    status: order.status || 'pending',
    statusLabel: order.status_label || 'অপেক্ষমাণ',
    courierName: order.courier_name || '',
    bookingNumber: order.booking_number || '',
    trackingUrl: order.tracking_url || '',
    stockDeducted: Boolean(order.stock_deducted),
    stockRestored: Boolean(order.stock_restored),
    createdAt: order.created_at
      ? new Date(order.created_at).toLocaleString('bn-BD')
      : ''
  }));

  write('laiba_orders', orders);

  return true;
}

document.addEventListener('submit', event => { if (event.target.id === 'productForm') { event.preventDefault(); event.stopImmediatePropagation(); void createProductFromForm(event.target); } }, true);
function saveCampaignEdit(form) { const data = Object.fromEntries(new FormData(form)); const ad = ads.find(item => item.id === Number(data.id)); if (!ad) return showToast('Campaign পাওয়া যায়নি'); if (!data.title?.trim() || !data.text?.trim() || !data.image?.trim()) return showToast('Campaign-এর title, text ও image দিন'); const selectedProductIds = [...form.querySelectorAll('[name="campaignProducts"]:checked')].map(input => Number(input.value)); Object.assign(ad, {title:data.title.trim(),text:data.text.trim(),image:data.image.trim(),link:data.link || '#campaign',expiresAt:data.expiresAt || '',targetCategory:data.targetCategory || '',productIds:selectedProductIds}); saveState(); closeModal('ordersModal'); renderAds(); renderProducts(); renderAdmin(); showToast(`${selectedProductIds.length}টি product সহ campaign updated`); }
function saveGiftEdit(form) { const data = Object.fromEntries(new FormData(form)); const gift = gifts.find(item => item.id === Number(data.id)); if (!gift) return showToast('Gift campaign পাওয়া যায়নি'); if (!data.title?.trim() || !data.image?.trim()) return showToast('Gift title ও image দিন'); Object.assign(gift, {title:data.title.trim(),image:data.image.trim(),stock:Number(data.stock || 0),quantity:Number(data.quantity || 1),minQuantity:Math.max(1, Number(data.minQuantity || 1)),expiresAt:data.expiresAt || '',giftCategory:data.giftCategory || '',giftSubcategory:data.giftSubcategory || '',productIds:[...form.querySelectorAll('[name="giftProducts"]:checked')].map(input => Number(input.value)),active:Number(data.stock) > 0}); saveState(); closeModal('ordersModal'); renderGifts(); renderAdmin(); showToast('Gift campaign updated'); }
function saveMallSettings(form) { mallSettings = {productIds:[...form.querySelectorAll('[name="mallProducts"]:checked')].map(input => Number(input.value))}; saveState(); renderAdmin(); showToast(`${mallSettings.productIds.length}টি Ziyana Shop product updated`); }
document.addEventListener('submit', event => { if (event.target.id === 'authForm' && window.laibaSupabase) { event.preventDefault(); event.stopImmediatePropagation(); void handleCloudAuth(Object.fromEntries(new FormData(event.target))); } }, true);
document.addEventListener('submit', event => { if (event.target.id === 'checkoutForm' && window.laibaSupabase) setTimeout(() => { const order = orders[orders.length - 1]; if (order && !order.cloudId) order.cloudId = crypto.randomUUID(); if (order) void persistCloudOrder(order); }, 0); }, true);
if (window.laibaSupabase) {
  window.laibaSupabase.auth.onAuthStateChange(() => {
    setTimeout(() => {
      void loadCloudOrders().catch(error => {
        console.warn('Cloud orders refresh failed:', error);
      });
    }, 0);
  });
}
function getActiveCategories() {
  return (Array.isArray(categories) ? categories : defaultCategories)
    .filter(category => category && category.active !== false)
    .map(category => ({
      id: String(category.id || category.name || '').trim(),
      name: String(category.name || '').trim(),
      image: String(category.image || '').trim(),
      subcategories: Array.isArray(category.subcategories) ? category.subcategories : [], productIds: Array.isArray(category.productIds) ? category.productIds.map(Number) : []
    }))
    .filter(category => category.name);
}
function getCategoryByName(name) {
  return getActiveCategories().find(category => category.name === String(name || '').trim());
}
function renderCategorySubcategoryList(category) {
  const list = $('#categorySubcategoryList');
  if (!list) return;

  list.innerHTML = (category?.subcategories || []).map((item, index) => {
    const name = typeof item === 'string' ? item : item?.name || '';
    const image = typeof item === 'object' ? item?.image || '' : '';
    const id = typeof item === 'object' ? (item.id || `sub-${index}`) : `sub-${index}`;
    const selected = new Set((typeof item === 'object' && Array.isArray(item?.productIds) ? item.productIds : []).map(Number));

    return `<div class="admin-list-row category-subcategory-row" data-subcategory-row="${index}" data-subcategory-id="${escapeHtml(id)}" data-subcategory-image="${escapeHtml(image)}">
      <div class="category-subcategory-content">
        <b>${escapeHtml(name)}</b>
        <input type="url" data-subcategory-image-input value="${escapeHtml(image)}" placeholder="Subcategory image URL (optional)">
        <div class="campaign-picker">
          ${products.map(product => `<label><input type="checkbox" data-subcategory-product="${index}" value="${product.id}" ${selected.has(Number(product.id)) ? 'checked' : ''}><span>${escapeHtml(product.name)}</span><small>${money(product.price)}</small></label>`).join('')}
        </div>
      </div>
      <button type="button" class="outline-button danger-button" data-remove-subcategory="${index}">Remove</button>
    </div>`;
  }).join('');
}

function renderCategoryProductPicker(category) {
  const picker = $('#categoryProductPicker');
  if (!picker) return;
  const selected = new Set((category?.productIds || []).map(Number));
  picker.innerHTML = products.map(product => `<label><input type="checkbox" name="categoryProducts" value="${product.id}" ${selected.has(Number(product.id)) ? 'checked' : ''}><span>${escapeHtml(product.name)}</span><small>${escapeHtml(product.category || '')} · ${money(product.price)}</small></label>`).join('');
}

function getSubcategoryProducts(category, subcategoryName) {
  const subcategory = (category?.subcategories || []).find(item =>
    String(typeof item === 'string' ? item : item?.name || '').trim() === String(subcategoryName || '').trim()
  );
  if (!subcategory || typeof subcategory === 'string') return [];
  const ids = new Set((subcategory.productIds || []).map(Number));
  return products.filter(product => ids.has(Number(product.id)));
}

function productMatchesCategory(product, categoryName) {
  const category = getActiveCategories().find(item => item.name === String(categoryName || '').trim());
  if (!category) return false;
  return (category.productIds || []).map(Number).includes(Number(product.id));
}

function productMatchesSubcategory(product, categoryName, subcategoryName) {
  const category = getActiveCategories().find(item =>
    item.name === String(categoryName || '').trim()
  );
  const subcategory = (category?.subcategories || []).find(item =>
    String(typeof item === 'string' ? item : item?.name || '').trim() === String(subcategoryName || '').trim()
  );
  return !!subcategory &&
    Array.isArray(subcategory.productIds) &&
    subcategory.productIds.map(Number).includes(Number(product.id));
}

function getSubcategoryOptions(categoryName, selectedName = '') {
  const category = getActiveCategories().find(item =>
    item.name === String(categoryName || '').trim()
  );
  const subcategories = Array.isArray(category?.subcategories)
    ? category.subcategories
    : [];

  return `<option value="">সব subcategory</option>${subcategories.map(item => {
    const name = typeof item === 'string' ? item : item?.name || '';
    return `<option value="${escapeHtml(name)}" ${name === selectedName ? 'selected' : ''}>${escapeHtml(name)}</option>`;
  }).join('')}`;
}

function getGiftTargetProducts(gift) {
  const selectedIds = new Set((gift.productIds || []).map(Number));

  if (selectedIds.size) {
    return products.filter(product => selectedIds.has(Number(product.id)));
  }

  if (gift.giftSubcategory && gift.giftCategory) {
    return products.filter(product =>
      productMatchesSubcategory(product, gift.giftCategory, gift.giftSubcategory)
    );
  }

  if (gift.giftCategory) {
    return products.filter(product =>
      productMatchesCategory(product, gift.giftCategory)
    );
  }

  return products;
}

function syncProductCategoryMembership(product, previousCategory = '') {
  const productId = Number(product.id);
  if (previousCategory && previousCategory !== product.category) {
    const oldCategory = categories.find(item => item.name === previousCategory);
    if (oldCategory && Array.isArray(oldCategory.productIds)) {
      oldCategory.productIds = oldCategory.productIds.filter(id => Number(id) !== productId);
    }
  }
  const category = categories.find(item => item.name === product.category);
  if (category) {
    category.productIds = Array.isArray(category.productIds) ? category.productIds.map(Number) : [];
    if (!category.productIds.includes(productId)) category.productIds.push(productId);
  }
}

function getCategoryProducts(categoryName) {
  const category = getActiveCategories().find(item => item.name === String(categoryName || '').trim());
  if (!category) return [];

  const ids = Array.isArray(category.productIds) ? category.productIds.map(Number) : [];
  if (ids.length || Array.isArray(category.productIds)) {
    const selected = new Set(ids);
    return products.filter(product => selected.has(Number(product.id)));
  }

  return products.filter(product => String(product.category || '').trim() === String(categoryName || '').trim());
}
function renderCategories() {
  const grid = $('#categoryGrid');
  if (!grid) return;

  grid.innerHTML = getActiveCategories().map(category => `
    <div class="category-menu-item" data-category-hover="${escapeHtml(category.name)}">
      <a class="category-card" href="#category-${escapeHtml(category.id)}" data-category="${escapeHtml(category.name)}">
        <img src="${escapeHtml(category.image)}" alt="${escapeHtml(category.name)}" loading="lazy">
        <b>${escapeHtml(category.name)}</b>
      </a>
    </div>
  `).join('');

  if (!document.querySelector('#categoryFloatingSubmenu')) {
    document.body.insertAdjacentHTML('beforeend', '<div id="categoryFloatingSubmenu" class="category-floating-submenu" hidden></div>');
  }
}

function openCategoryFloatingSubmenu(item) {
  const menu = $('#categoryFloatingSubmenu');
  if (!menu) return;

  const category = getCategoryByName(item.dataset.categoryHover);
  const subcategories = Array.isArray(category?.subcategories) ? category.subcategories : [];
  if (!subcategories.length) {
    menu.hidden = true;
    item.classList.remove('is-submenu-open');
    return;
  }

  menu.innerHTML = subcategories.map(sub => {
    const name = typeof sub === 'string' ? sub : sub?.name || '';
    const image = typeof sub === 'object' ? sub?.image || '' : '';
    return `<button type="button" data-category-subcategory="${escapeHtml(name)}" data-category-id="${escapeHtml(category.id)}">
      ${image ? `<img src="${escapeHtml(image)}" alt="">` : '<span class="subcategory-dot"></span>'}
      <span>${escapeHtml(name)}</span>
    </button>`;
  }).join('');

  const rect = item.getBoundingClientRect();
  menu.hidden = false;

  requestAnimationFrame(() => {
    const width = menu.offsetWidth;
    const left = Math.max(10, Math.min(rect.left, window.innerWidth - width - 10));
    menu.style.left = `${left}px`;
    menu.style.top = `${Math.min(rect.bottom + 8, window.innerHeight - menu.offsetHeight - 10)}px`;
  });

  item.classList.add('is-submenu-open');
}

function closeCategoryFloatingSubmenu() {
  const menu = $('#categoryFloatingSubmenu');
  if (menu) menu.hidden = true;
  document.querySelectorAll('.category-menu-item.is-submenu-open').forEach(item => item.classList.remove('is-submenu-open'));
}

if (!window.__categoryHoverBound) {
  window.__categoryHoverBound = true;
  let hoverTimer;

  document.addEventListener('mouseover', event => {
    const item = event.target.closest('[data-category-hover]');
    if (!item) return;
    clearTimeout(hoverTimer);
    openCategoryFloatingSubmenu(item);
  });

  document.addEventListener('mouseout', event => {
    const item = event.target.closest('[data-category-hover]');
    const menu = $('#categoryFloatingSubmenu');
    if (!item || !menu) return;

    if (menu.contains(event.relatedTarget)) return;

    hoverTimer = setTimeout(() => {
      if (!menu.matches(':hover') && !document.querySelector('[data-category-hover]:hover')) {
        closeCategoryFloatingSubmenu();
      }
    }, 120);
  });

  document.addEventListener('mouseover', event => {
    if (!event.target.closest('#categoryFloatingSubmenu')) return;
    clearTimeout(hoverTimer);
  });

  document.addEventListener('mouseout', event => {
    if (!event.target.closest('#categoryFloatingSubmenu')) return;
    if (event.relatedTarget?.closest?.('[data-category-hover]')) return;
    hoverTimer = setTimeout(closeCategoryFloatingSubmenu, 150);
  });

  window.addEventListener('scroll', () => {
    const openItem = document.querySelector('[data-category-hover].is-submenu-open');
    if (openItem && !$('#categoryFloatingSubmenu')?.hidden) openCategoryFloatingSubmenu(openItem);
  }, {passive:true});
}

function renderCampaignBanner() { const title = $('#campaignBannerTitle'); const subtitle = $('#campaignBannerSubtitle'); const text = $('#campaignBannerText'); const image = $('#campaignBannerImage'); const discount = $('#campaignBannerDiscount'); if (title) title.textContent = campaignSettings.title; if (subtitle) subtitle.textContent = campaignSettings.subtitle; if (text) text.textContent = campaignSettings.text; if (image) { image.src = campaignSettings.image; image.alt = campaignSettings.title; } if (discount) discount.textContent = campaignSettings.discount; }
function renderHero() { const tagTop = $('#heroTagTop'); const tagBottom = $('#heroTagBottom'); const image = $('#heroBannerImage'); const cardTitle = $('#heroCardTitle'); const cardOffer = $('#heroCardOffer'); if (tagTop) tagTop.textContent = heroSettings.tagTop; if (tagBottom) tagBottom.textContent = heroSettings.tagBottom; if (image) { image.src = heroSettings.image; image.alt = heroSettings.cardTitle; } if (cardTitle) cardTitle.textContent = heroSettings.cardTitle; if (cardOffer) cardOffer.textContent = heroSettings.cardOffer; }
function renderAds() { $('#adGrid').innerHTML = ads.filter(ad => ad.active && (!ad.expiresAt || new Date(ad.expiresAt) > new Date())).map(ad => `<article class="ad-card" data-ad-view="${ad.id}"><img src="${escapeHtml(ad.image)}" alt="${escapeHtml(ad.title)}" loading="lazy"><span><small>ZIYANA SHOP CAMPAIGN</small><b>${escapeHtml(ad.title)}</b><em>${escapeHtml(ad.text)}</em></span><strong>↗</strong></article>`).join(''); }
function getPublicGift() { return gifts.find(gift => gift.active && (!gift.expiresAt || new Date(gift.expiresAt) > new Date())); }
function renderGifts() { const gift = getPublicGift(); const stockLabel = gift?.stock > 0 ? `${gift.stock}টি gift stock বাকি` : 'Gift stock শেষ'; $('#giftGrid').innerHTML = gift ? `<article class="gift-card ${gift.stock > 0 ? '' : 'gift-out-of-stock'}" data-gift-view="${gift.id}"><img src="${escapeHtml(gift.image)}" alt="${escapeHtml(gift.title)}"><div><p class="eyebrow">FREE GIFT CAMPAIGN</p><h3>${escapeHtml(gift.title)} × ${gift.quantity || 1}</h3><p>নির্বাচিত campaign, category বা product কিনলে checkout-এ free পাবেন।</p><small>${stockLabel} · বিস্তারিত দেখতে ক্লিক করুন</small></div><strong>↗</strong></article>` : '<p class="empty-state">এই মুহূর্তে কোনো free gift campaign নেই।</p>'; }
function getCampaignProducts() {
  const activeAds = ads.filter(ad => ad.active && (!ad.expiresAt || new Date(ad.expiresAt) > new Date()));
  const ids = new Set(activeAds.flatMap(ad => ad.productIds || []).map(Number));
  const targetCategories = new Set(activeAds.filter(ad => ad.targetCategory).map(ad => ad.targetCategory));
  const selected = products.filter(product => ids.has(Number(product.id)) || [...targetCategories].some(name => productMatchesCategory(product, name)));
  if (ids.size || targetCategories.size) return selected;

  const managed = getActiveCategories().flatMap(category => getCategoryProducts(category.name));
  const unique = new Map(managed.map(product => [Number(product.id), product]));
  return unique.size ? [...unique.values()] : products;
}
function productMarkup(product) { const image = primaryProductImage(product); return `<article class="product-card"><div class="product-image"><img src="${escapeHtml(image)}" alt="${escapeHtml(product.name)}" loading="lazy"><button class="wishlist" aria-label="Add ${escapeHtml(product.name)} to wishlist">♡</button><span class="discount">${escapeHtml(product.discount || '')}</span></div><div class="product-info"><h3>${escapeHtml(product.name)}</h3><div><span class="stars">★★★★★</span><span class="rating">(${escapeHtml(product.rating || '4.8')})</span></div><div class="price"><strong>${money(product.price)}</strong><span class="old-price">${money(product.old)}</span></div><small class="stock-note">${product.stock > 0 ? `${product.stock}টি স্টকে আছে` : 'স্টক শেষ'}</small><div class="product-actions"><button class="add-button" data-add="${product.id}" ${product.stock < 1 ? 'disabled' : ''}>${product.stock > 0 ? 'ব্যাগে যোগ করুন' : 'স্টক শেষ'}</button><button class="buy-now-button add-button" data-buy-now="${product.id}" ${product.stock < 1 ? 'disabled' : ''}>Buy now</button></div></div></article>`; }
function renderNewArrivals() { const selectedIds = new Set((campaignSettings.productIds || []).map(Number)); const selected = products.filter(product => selectedIds.has(Number(product.id))).slice(0, 5); const grid = $('#newArrivalProductGrid'); if (grid) grid.innerHTML = selected.length ? selected.map(productMarkup).join('') : '<p class="empty-state">Admin panel থেকে New arrival products select করুন।</p>'; }
function renderCategoryRows() {
  const container = $('#dynamicCategorySections');
  if (!container) return;

  container.innerHTML = getActiveCategories().map(category => {
    const key = String(category.id).replace(/[^a-zA-Z0-9_-]/g, '-');
    const selectedSubcategory = window[`${key}Subcategory`] || '';
    const list = selectedSubcategory
      ? getSubcategoryProducts(category, selectedSubcategory)
      : getCategoryProducts(category.name);
    const visible = showingAllProducts || window[`${key}ShowingAll`] ? list : list.slice(0, 4);
    const subcategories = Array.isArray(category.subcategories) ? category.subcategories : [];

    return `<section class="category-product-section" id="category-${escapeHtml(category.id)}" data-category-section="${escapeHtml(category.id)}">
      <div class="section-heading deal-heading">
        <div><p class="eyebrow coral">CURATED FOR YOU</p><h2>${escapeHtml(category.name)}</h2></div>
        ${list.length > 4 ? `<button class="see-more-button" data-category-more="${escapeHtml(category.name)}">See more <span>↓</span></button>` : ''}
      </div>
      ${subcategories.length ? `<div class="category-subcategory-filters">
        <button class="${selectedSubcategory ? 'outline-button' : 'primary-button'}" data-category-subcategory="" data-category-id="${escapeHtml(category.id)}">সব</button>
        ${subcategories.map(item => {
          const name = typeof item === 'string' ? item : item?.name || '';
          return `<button class="${selectedSubcategory === name ? 'primary-button' : 'outline-button'}" data-category-subcategory="${escapeHtml(name)}" data-category-id="${escapeHtml(category.id)}">${escapeHtml(name)}</button>`;
        }).join('')}
      </div>` : ''}
      <div class="product-grid" data-category-grid="${escapeHtml(category.id)}">
        ${visible.length ? visible.map(productMarkup).join('') : '<p class="empty-state">এই category-তে কোনো product নেই।</p>'}
      </div>
    </section>`;
  }).join('');
}

function renderProducts(list = getCampaignProducts()) { renderNewArrivals(); renderCategoryRows(); }
function getActiveGift() { return gifts.find(gift => { const selectedIds = new Set((gift.productIds || []).map(Number)); const selectedQuantity = cart.filter(item => selectedIds.has(Number(item.id))).reduce((total, item) => total + item.quantity, 0); const productMatch = selectedIds.size > 0 && selectedQuantity >= Number(gift.minQuantity || 1); const categoryMatch = gift.giftCategory && cart.some(item => productMatchesCategory(item, gift.giftCategory)); const hasTarget = selectedIds.size || gift.giftCategory; const quantityReady = selectedIds.size ? productMatch : categoryMatch; return gift.active && gift.stock > 0 && (!gift.expiresAt || new Date(gift.expiresAt) > new Date()) && (!hasTarget || quantityReady); }); }
function updateCart() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  $('#cartCount').textContent = count; $('#drawerCount').textContent = count; $('#cartTotal').textContent = money(subtotal);
  $('#cartItems').innerHTML = cart.length ? cart.map(item => `<div class="cart-line"><img src="${escapeHtml(primaryProductImage(item))}" alt="${escapeHtml(item.name)}"><div><h4>${escapeHtml(item.name)}</h4><p>${money(item.price)}</p><div class="quantity"><button data-minus="${item.id}">−</button>${item.quantity}<button data-plus="${item.id}">+</button></div></div><button class="remove" data-remove="${item.id}">×</button></div>`).join('') : '<div class="empty-cart"><span>🛍</span><h3>আপনার ব্যাগ খালি</h3><p>পছন্দের পণ্যগুলো এখানে জমা হবে।</p></div>';
  write('laiba_cart', cart);
}
function addToCart(id) {
  const product = products.find(item => item.id === Number(id)); if (!product || product.stock < 1) return showToast('এই পণ্যটি এখন স্টকে নেই');
  const existing = cart.find(item => item.id === product.id); if (existing) { if (existing.quantity >= product.stock) return showToast('স্টকের বেশি যোগ করা যাবে না'); existing.quantity++; } else cart.push({...product, quantity:1});
  updateCart(); showToast('পণ্যটি আপনার ব্যাগে যোগ হয়েছে ✓');
}
function renderAuth(mode = 'login') {
  if (currentUser) { $('#authContent').innerHTML = `<div class="panel-heading"><p class="eyebrow">MY ACCOUNT</p><h2>${escapeHtml(currentUser.name)}</h2><p>${escapeHtml(currentUser.email || currentUser.phone)}</p></div><div class="account-actions"><button class="primary-button" data-action="my-orders">আমার অর্ডার ও রিভিউ</button><button class="outline-button" data-action="change-password">পাসওয়ার্ড পরিবর্তন</button>${currentUser.role === 'admin' ? '<button class="dark-button" data-action="open-admin">অ্যাডমিন প্যানেল</button>' : ''}<button class="outline-button" data-action="logout">লগআউট</button></div>`; return; }
  $('#authContent').innerHTML = `<div class="panel-heading"><p class="eyebrow">WELCOME BACK</p><h2>${mode === 'login' ? 'অ্যাকাউন্টে লগইন করুন' : 'নতুন অ্যাকাউন্ট খুলুন'}</h2><p>${mode === 'login' ? 'ইমেইল অথবা মোবাইল নম্বর দিয়ে লগইন করুন।' : 'কয়েক সেকেন্ডেই আপনার shopping account তৈরি করুন।'}</p></div><form id="authForm" class="stack-form"><input type="hidden" name="authMode" value="${mode}"><input name="name" placeholder="আপনার নাম" ${mode === 'login' ? 'hidden' : 'required'}><input name="identifier" placeholder="ইমেইল অথবা মোবাইল নম্বর" required><input name="phone" placeholder="মোবাইল নম্বর" ${mode === 'login' ? 'hidden' : 'required'}><input name="address" placeholder="ডেলিভারি ঠিকানা" ${mode === 'login' ? 'hidden' : ''}><input name="password" type="password" placeholder="পাসওয়ার্ড" required minlength="6"><button class="primary-button" type="submit">${mode === 'login' ? 'লগইন করুন' : 'রেজিস্টার করুন'} <span>→</span></button></form>${mode === 'login' ? '<button type="button" class="forgot-password-button" data-action="forgot-password">Forgot Password?</button>' : ''}<p class="form-switch">${mode === 'login' ? 'নতুন এখানে?' : 'আগেই অ্যাকাউন্ট আছে?'} <button type="button" data-auth-mode="${mode === 'login' ? 'register' : 'login'}">${mode === 'login' ? 'রেজিস্টার করুন' : 'লগইন করুন'}</button></p>`;
}
function ensureAuthDistrictField() { const form = $('#authForm'); if (!form || form.querySelector('[name="district"]') || form.querySelector('[name="name"]')?.hidden) return; const address = form.querySelector('[name="address"]'); address.insertAdjacentHTML('beforebegin', `<select name="district" required><option value="">জেলা নির্বাচন করুন</option>${bangladeshDistricts.map(district => `<option value="${escapeHtml(district)}" ${currentUser?.district === district ? 'selected' : ''}>${escapeHtml(district)}</option>`).join('')}</select>`); }
function openAuth(mode = 'login') { renderAuth(mode); ensureAuthDistrictField(); openModal('authModal'); }
function renderOrders() {
  const mine = getCustomerOrders();

  const filtered = !accountOrderFilter
    ? mine
    : mine.filter(order => {
        if (accountOrderFilter === 'to-ship') {
          return ['pending', 'confirmed'].includes(order.status);
        }

        if (accountOrderFilter === 'to-receive') {
          return order.status === 'shipped';
        }

        if (accountOrderFilter === 'to-review') {
          return order.status === 'delivered' &&
            order.items?.some(item =>
              !reviews.some(review =>
                review.orderId === order.id &&
                review.productId === Number(item.id)
              )
            );
        }

        if (accountOrderFilter === 'return') {
          return ['returned', 'return_requested'].includes(order.status);
        }

        if (accountOrderFilter === 'cancelled') {
          return ['cancelled', 'cancellation', 'cancellation_requested'].includes(order.status);
        }

        return true;
      });

  const titleMap = {
    '': 'My Orders',
    'to-ship': 'To Ship',
    'to-receive': 'To Receive',
    'to-review': 'To Review',
    'return': 'Return',
    'cancelled': 'Cancellation'
  };

  $('#ordersContent').innerHTML = `
    <div class="panel-heading">
      <p class="eyebrow">MY DASHBOARD</p>
      <h2>${titleMap[accountOrderFilter] || 'My Orders'}</h2>
      <p>${filtered.length}টি order পাওয়া গেছে।</p>
    </div>

    <button
      type="button"
      class="outline-button"
      data-action="my-orders-back"
      style="margin-bottom:14px"
    >← Dashboard</button>

    ${filtered.length
      ? `<div class="order-list">${filtered.slice().reverse().map(order => `
          <article class="order-card">
            <div>
              <b>Order #${escapeHtml(order.id)}</b>
              <small>${escapeHtml(order.createdAt)}</small>
            </div>

            <span class="status ${escapeHtml(order.status)}">
              ${escapeHtml(order.statusLabel)}
            </span>

            <strong>${money(order.total)}</strong>

            <p>
              ${order.items.map(item => {
                const reviewed = reviews.some(review =>
                  review.orderId === order.id &&
                  review.productId === Number(item.id)
                );

                const reviewAction = order.status === 'delivered'
                  ? (reviewed
                      ? ' · Reviewed'
                      : ` <button class="mini-button" data-review-product="${item.id}" data-review-order="${order.id}">Review</button>`)
                  : '';

                return `${escapeHtml(item.name)} × ${item.quantity}${reviewAction}`;
              }).join(', ')}
            </p>

            ${order.trackingUrl
              ? `<a class="tracking-button" href="${escapeHtml(order.trackingUrl)}" target="_blank" rel="noopener">Courier tracking খুলুন</a>`
              : order.bookingNumber
                ? `<small>Courier: ${escapeHtml(order.courierName || 'Manual')} · Booking: ${escapeHtml(order.bookingNumber)}</small>`
                : ''}
          </article>
        `).join('')}</div>`
      : '<div class="empty-state">এই category-তে এখন কোনো order নেই।</div>'
    }
  `;
}

function showGiftDetails(giftId) { const gift = gifts.find(item => item.id === Number(giftId)); if (!gift) return; const selected = products.filter(product => (gift.productIds || []).map(Number).includes(Number(product.id)) || (gift.giftCategory && productMatchesCategory(product, gift.giftCategory))); const cards = selected.map(product => `<article class="product-card"><div class="product-image"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}"><span class="discount">${escapeHtml(product.discount || '')}</span></div><div class="product-info"><h3>${escapeHtml(product.name)}</h3><div class="price"><strong>${money(product.price)}</strong><span class="old-price">${money(product.old)}</span></div><small class="stock-note">${product.stock > 0 ? `${product.stock}টি স্টকে আছে` : 'স্টক শেষ'}</small><div class="product-actions"><button class="add-button" data-add="${product.id}" ${product.stock < 1 ? 'disabled' : ''}>ব্যাগে যোগ করুন</button><button class="buy-now-button add-button" data-buy-now="${product.id}" ${product.stock < 1 ? 'disabled' : ''}>Buy now</button></div></div></article>`).join(''); $('#campaignViewContent').innerHTML = `<div class="campaign-view-header"><p class="eyebrow">FREE GIFT CAMPAIGN</p><h2>${escapeHtml(gift.title)} × ${gift.quantity || 1}</h2><p>এই campaign-এর selected products কিনলে checkout-এ free gift পাবেন।</p></div><div class="campaign-product-grid">${cards || '<p class="empty-state">এই campaign-এ product select করা হয়নি।</p>'}</div>`; openModal('campaignViewModal'); }
function showAdDetails(adId) { const ad = ads.find(item => item.id === Number(adId)); if (!ad) return; const selected = products.filter(product => (ad.productIds || []).map(Number).includes(Number(product.id)) || (ad.targetCategory && productMatchesCategory(product, ad.targetCategory))); const cards = selected.map(productMarkup).join(''); $('#campaignViewContent').innerHTML = `<div class="campaign-view-header"><p class="eyebrow">ZIYANA SHOP CAMPAIGN</p><h2>${escapeHtml(ad.title)}</h2><p>${escapeHtml(ad.text)}</p></div><div class="campaign-product-grid">${cards || '<p class="empty-state">এই campaign-এ product select করা হয়নি।</p>'}</div>`; openModal('campaignViewModal'); }
function showMallProducts() {
  const selectedIds = new Set((mallSettings.productIds || []).map(Number));
  let selected = selectedIds.size
    ? products.filter(product => selectedIds.has(Number(product.id)))
    : getActiveCategories().flatMap(category => getCategoryProducts(category.name));

  const unique = new Map(selected.map(product => [Number(product.id), product]));
  selected = [...unique.values()];

  $('#campaignViewContent').innerHTML = `<div class="campaign-view-header"><p class="eyebrow">ZIYANA SHOP VERIFIED</p><h2>Ziyana Shop products</h2><p>Admin panel থেকে বাছাই করা products দেখুন।</p></div><div class="campaign-product-grid">${selected.map(productMarkup).join('') || '<p class="empty-state">এখনও কোনো Ziyana Shop product select করা হয়নি।</p>'}</div>`;
  openModal('campaignViewModal');
}
function showInfoPage(page) { const content = page === 'returns' ? {eyebrow:'RETURN POLICY',title:'সহজ রিটার্ন, নিশ্চিন্ত শপিং',text:'পণ্য হাতে পাওয়ার ৭ দিনের মধ্যে রিটার্নের অনুরোধ করতে পারবেন। পণ্যটি অব্যবহৃত, অক্ষত এবং মূল packaging-সহ থাকতে হবে।'} : {eyebrow:'HELP CENTER',title:'কীভাবে আমরা সাহায্য করতে পারি?',text:'Order tracking, delivery, payment অথবা return নিয়ে সাহায্যের জন্য Order ID ও mobile number সঙ্গে রাখুন। আমাদের support team আপনার অনুরোধ যাচাই করে দ্রুত উত্তর দেবে।'}; $('#infoContent').innerHTML = `<div class="info-page"><p class="eyebrow">${content.eyebrow}</p><h2>${content.title}</h2><p>${content.text}</p><div class="info-points"><div><b>01</b><span>Order ID দিয়ে status দেখুন</span></div><div><b>02</b><span>প্রয়োজনে support-এ যোগাযোগ করুন</span></div><div><b>03</b><span>সঠিক তথ্য দিয়ে request পাঠান</span></div></div></div>`; openModal('infoModal'); }
function renderOrderTracker() { $('#ordersContent').innerHTML = `<div class="info-page"><p class="eyebrow">ORDER TRACKER</p><h2>আপনার order কোথায়?</h2><p>Order number, mobile অথবা email দিয়ে খুঁজুন।</p><div class="track-row"><input id="publicTrackInput" placeholder="Order ID / mobile / email"><button class="primary-button" data-action="public-track-order">Track order</button></div><div id="publicTrackResult"></div></div>`; openModal('ordersModal'); }
function openOrders() { if (!currentUser) return openAuth('login'); renderOrders(); openModal('ordersModal'); }
function showAdminOrder(orderId) { const order = orders.find(item => item.id === String(orderId)); if (!order) return; const shipping = order.shipping ?? Math.max(0, order.total - order.subtotal + order.discount); $('#ordersContent').innerHTML = `<div class="panel-heading"><p class="eyebrow">ORDER DETAILS</p><h2>Order #${escapeHtml(order.id)}</h2><p>${escapeHtml(order.createdAt)} · ${escapeHtml(order.statusLabel)}</p></div><div class="order-detail-grid"><div><small>Customer name</small><b>${escapeHtml(order.customer.name)}</b></div><div><small>Mobile number</small><b>${escapeHtml(order.customer.phone)}</b></div><div class="order-address"><small>Delivery address</small><b>${escapeHtml(order.customer.address)}</b></div><div><small>Payment</small><b>${escapeHtml(order.payment)}</b></div></div><div class="order-detail-items">${order.items.map(item => `<div><span>${escapeHtml(item.name)} × ${item.quantity}</span><b>${money(item.price * item.quantity)}</b></div>`).join('')}</div><div class="checkout-summary detail-summary"><div><span>Subtotal</span><b>${money(order.subtotal)}</b></div><div><span>Discount</span><b class="discount-text">-${money(order.discount)}</b></div><div><span>Shipping charge</span><b>${shipping ? money(shipping) : 'FREE'}</b></div><div class="total-row"><span>Total</span><strong>${money(order.total)}</strong></div></div>`; openModal('ordersModal'); }
function checkoutTotals() {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = appliedCoupon?.type === 'percent' ? Math.min(Math.round(subtotal * appliedCoupon.value / 100), Number(appliedCoupon.maxDiscount || Infinity)) : appliedCoupon?.type === 'fixed' ? Math.min(Number(appliedCoupon.value || 0), subtotal) : 0;
    const region = checkoutDraft.district === 'ঢাকা' ? 'insideDhaka' : 'outsideDhaka';
    const shipping = appliedCoupon?.type === 'freeShipping' || subtotal >= Number(shippingSettings.freeThreshold || 999) ? 0 : Number(shippingSettings[region] || shippingSettings.insideDhaka);
    /*
    $('#checkoutContent').innerHTML = `<div class="panel-heading"><p class="eyebrow">SECURE CHECKOUT</p>
  */
  return {subtotal, discount:Math.min(discount, subtotal), shipping, total:Math.max(0, subtotal - discount + shipping)};
}
function renderCheckout(draft = checkoutDraft) {
  const totals = checkoutTotals();
  const draftName = draft.name || currentUser?.name || '';
  const draftPhone = draft.phone || currentUser?.phone || '';
  const draftAddress = draft.address || currentUser?.address || '';
  const draftDistrict = draft.district || currentUser?.district || 'ঢাকা';
  const gift = getActiveGift();
  /*
  $('#checkoutContent').innerHTML = `<div class="panel-heading"><p class="eyebrow">SECURE CHECKOUT</p><h2>অর্ডার সম্পন্ন করুন</h2><p>${cart.length}টি পণ্য আপনার ব্যাগে আছে।</p></div><form id="checkoutForm" class="checkout-layout"><div class="stack-form"><input name="name" value="${escapeHtml(draftName)}" placeholder="পুরো নাম" required><input name="phone" value="${escapeHtml(draftPhone)}" placeholder="মোবাইল নম্বর" required><textarea name="address" placeholder="ডেলিভারি ঠিকানা" required>${escapeHtml(draftAddress)}</textarea><select name="district" required>${bangladeshDistricts.map(district => `<option value="${escapeHtml(district)}" ${checkoutDraft.district === district ? 'selected' : ''}>${escapeHtml(district)}</option>`).join('')}</select><select name="payment" required><option value="cod" ${draft.payment === 'cod' ? 'selected' : ''}>Cash on Delivery</option><option value="rocket" ${draft.payment === 'rocket' ? 'selected' : ''}>Rocket</option><option value="card" disabled ${draft.payment === 'card' ? 'selected' : ''}>Card (শীঘ্রই আসছে)</option></select><div class="coupon-row"><input id="couponInput" value="${escapeHtml(appliedCoupon?.code || '')}" placeholder="Coupon code"><button type="button" class="outline-button" data-action="apply-coupon">${appliedCoupon ? 'Change' : 'Apply'}</button>${appliedCoupon ? '<button type="button" class="outline-button danger-button" data-action="remove-coupon">Remove</button>' : ''}</div><p id="couponMessage" class="coupon-message">${appliedCoupon ? `${escapeHtml(appliedCoupon.code)} applied` : 'Try WELCOME10 or SAVE200'}</p></div><aside class="checkout-summary"><h3>Order summary</h3>${cart.map(item => `<div><span>${escapeHtml(item.name)} × ${item.quantity}</span><b>${money(item.price * item.quantity)}</b></div>`).join('')}${gift ? `<div class="gift-summary"><span>Free: ${escapeHtml(gift.title)} × 1</span><b>FREE</b></div>` : ''}<hr><div><span>Subtotal</span><b>${money(totals.subtotal)}</b></div><div><span>Discount</span><b class="discount-text">${totals.discount ? `-${money(totals.discount)}` : '৳০'}</b></div><div><span>Shipping charge</span><b>${totals.shipping ? money(totals.shipping) : 'FREE'}</b></div><div class="total-row"><span>Total</span><strong>${money(totals.total)}</strong></div><button class="primary-button" type="submit">অর্ডার কনফার্ম করুন <span>→</span></button></aside></form>`;
*/
}
function renderCheckout(draft = checkoutDraft) {
  const totals = checkoutTotals();
  const draftName = draft.name || currentUser?.name || '';
  const draftPhone = draft.phone || currentUser?.phone || '';
  const draftAddress = draft.address || currentUser?.address || '';
  const draftDistrict = draft.district || currentUser?.district || 'ঢাকা';
  const districtOptions = bangladeshDistricts.map(district => `<option value="${escapeHtml(district)}" ${draftDistrict === district ? 'selected' : ''}>${escapeHtml(district)}</option>`).join('');
  const itemsMarkup = cart.map(item => `<div class="summary-item"><img src="${escapeHtml(primaryProductImage(item))}" alt="${escapeHtml(item.name)}" loading="lazy"><span>${escapeHtml(item.name)}</span><div class="summary-item-actions"><button type="button" data-summary-minus="${item.id}">−</button><b>${item.quantity}</b><button type="button" data-summary-plus="${item.id}">+</button><strong>${money(item.price * item.quantity)}</strong><button type="button" class="summary-remove" data-summary-remove="${item.id}">×</button></div></div>`).join('');
  const gift = getActiveGift();
  const giftMarkup = gift ? `<div class="gift-summary"><img src="${escapeHtml(gift.image)}" alt="${escapeHtml(gift.title)}"><span><b>Free gift</b>${escapeHtml(gift.title)} x ${gift.quantity || 1}</span><strong>FREE</strong></div>` : '';
  const couponMarkup = appliedCoupon ? '<button type="button" class="outline-button danger-button" data-action="remove-coupon">Remove</button>' : '';
  const couponMessage = appliedCoupon ? `${escapeHtml(appliedCoupon.code)} applied` : 'Try WELCOME10 or SAVE200';
  $('#checkoutContent').innerHTML = `<div class="panel-heading"><p class="eyebrow">SECURE CHECKOUT</p><h2>অর্ডার সম্পন্ন করুন</h2><p>${cart.length}টি পণ্য আপনার ব্যাগে আছে।</p></div><form id="checkoutForm" class="checkout-layout"><div class="stack-form"><input name="name" value="${escapeHtml(draftName)}" placeholder="পুরো নাম" required><input name="phone" value="${escapeHtml(draftPhone)}" placeholder="মোবাইল নম্বর" required><textarea name="address" placeholder="ডেলিভারি ঠিকানা" required>${escapeHtml(draftAddress)}</textarea><select name="district" required>${districtOptions}</select><select name="payment" required><option value="cod" ${draft.payment === 'cod' ? 'selected' : ''}>Cash on Delivery</option><option value="bkash" ${draft.payment === 'bkash' ? 'selected' : ''}>bKash</option><option value="rocket" ${draft.payment === 'rocket' ? 'selected' : ''}>Rocket</option><option value="card" disabled>Card (শীঘ্রই আসছে)</option></select><div class="coupon-row"><input id="couponInput" value="${escapeHtml(appliedCoupon?.code || '')}" placeholder="Coupon code"><button type="button" class="outline-button" data-action="apply-coupon">${appliedCoupon ? 'Change' : 'Apply'}</button>${couponMarkup}</div><p id="couponMessage" class="coupon-message">${couponMessage}</p></div><aside class="checkout-summary"><h3>Order summary</h3>${itemsMarkup}${giftMarkup}<hr><div><span>Subtotal</span><b>${money(totals.subtotal)}</b></div><div><span>Discount</span><b class="discount-text">${totals.discount ? `-${money(totals.discount)}` : '৳০'}</b></div><div><span>Shipping charge</span><b>${totals.shipping ? money(totals.shipping) : 'FREE'}</b></div><div class="total-row"><span>Total</span><strong>${money(totals.total)}</strong></div><button class="primary-button" type="submit">অর্ডার কনফার্ম করুন <span>→</span></button></aside></form>`;
}
function ensureCheckoutRegionField() {}
function openCheckout() { if (!cart.length) return showToast('আগে কিছু পণ্য ব্যাগে যোগ করুন'); $('#cartDrawer').classList.remove('open'); renderCheckout(); ensureCheckoutRegionField(); openModal('checkoutModal'); }
function renderAdmin() {
  if (!currentUser || currentUser.role !== 'admin') { pendingAdmin = true; currentUser = null; write('laiba_current_user', null); return openAuth('login'); }
  const revenue = orders.reduce((sum, order) => sum + order.total, 0);
  $('#adminContent').innerHTML = `<div class="admin-top"><div><p class="eyebrow">ZIYANA SHOP CONTROL ROOM</p><h2>অ্যাডমিন প্যানেল</h2><p>পণ্য, অর্ডার, coupon এবং campaign content এখান থেকে পরিচালনা করুন।</p></div><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="outline-button" data-action="change-password">পাসওয়ার্ড পরিবর্তন</button><button class="outline-button" data-action="admin-logout">লগআউট</button></div></div><div class="admin-stats"><div><b>${products.length}</b><span>পণ্য</span></div><div><b>${orders.length}</b><span>অর্ডার</span></div><div><b>${money(revenue)}</b><span>বিক্রি</span></div><div><b>${coupons.length}</b><span>কুপন</span></div></div><div class="admin-grid"><section class="admin-section"><h3>নতুন পণ্য যোগ করুন</h3><form id="productForm" class="admin-form"><input name="name" placeholder="পণ্যের নাম" required><div class="two-fields"><input name="price" type="number" placeholder="দাম" required><input name="old" type="number" placeholder="আগের দাম" required></div><div class="two-fields"><input name="category" placeholder="ক্যাটাগরি" value="ফ্যাশন"><input name="stock" type="number" placeholder="স্টক" value="10" required></div><input name="image" type="url" placeholder="Image URL" required><textarea name="description" placeholder="পণ্যের বর্ণনা" required></textarea><button class="primary-button" type="submit">পণ্য প্রকাশ করুন</button></form></section><section class="admin-section"><h3>কুপন তৈরি করুন</h3><form id="couponForm" class="admin-form"><input name="code" placeholder="যেমন: EID20" required><div class="two-fields"><select name="type"><option value="percent">Discount in %</option><option value="freeShipping">Free shipping</option></select><input name="value" type="number" placeholder="Discount %" min="1" max="100"></div><div class="two-fields"><input name="maxDiscount" type="number" placeholder="Maximum discount" value="0"><input name="minOrder" type="number" placeholder="Minimum order" value="0"></div><input name="expiresAt" type="datetime-local"><button class="primary-button" type="submit">কুপন সক্রিয় করুন</button></form><div class="admin-list">${coupons.map(coupon => `<div class="admin-list-row"><span><b>${escapeHtml(coupon.code)}</b><small>${coupon.type === 'freeShipping' ? 'Free shipping' : `${coupon.value}% off · max ${money(coupon.maxDiscount || 0)}`} · min ${money(coupon.minOrder)}${coupon.expiresAt ? ` · expires ${escapeHtml(coupon.expiresAt)}` : ''}</small></span><button data-edit-coupon="${escapeHtml(coupon.code)}">Edit</button><button data-delete-coupon="${escapeHtml(coupon.code)}">×</button></div>`).join('')}</div></section></div><section class="admin-section"><div class="section-inline"><h3>পণ্য তালিকা</h3><span>${products.length} items</span></div><div class="admin-list">${products.map(product => `<div class="admin-list-row"><span><b>${escapeHtml(product.name)}</b><small>${money(product.price)} · ${product.stock} stock · ${escapeHtml(product.category)}</small></span><button data-delete-product="${product.id}">×</button></div>`).join('')}</div></section><section class="admin-section"><div class="section-inline"><h3>ক্যাম্পেইন / ad card</h3><button class="outline-button" data-action="toggle-ad-form">নতুন ad card</button></div><form id="adForm" class="admin-form" hidden><input name="title" placeholder="Ad title" required><input name="text" placeholder="Short message" required><input name="image" type="url" placeholder="Image URL" required><input name="link" placeholder="Link, e.g. #campaign" value="#campaign"><fieldset class="campaign-picker"><legend>এই campaign-এ products বাছাই করুন</legend>${products.map(product => `<label><input type="checkbox" name="campaignProducts" value="${product.id}"><span>${escapeHtml(product.name)}</span><small>${money(product.price)}</small></label>`).join('')}</fieldset><button class="primary-button" type="submit">Ad publish করুন</button></form><div class="admin-list">${ads.map(ad => `<div class="admin-list-row"><span><b>${escapeHtml(ad.title)}</b><small>${escapeHtml(ad.text)} · ${(ad.productIds || []).length} products · ${ad.active ? 'Active' : 'Hidden'}</small></span><button data-edit-ad="${ad.id}">Edit</button><button data-delete-ad="${ad.id}">×</button></div>`).join('')}</div></section><section class="admin-section"><div class="section-inline"><h3>সাম্প্রতিক অর্ডার</h3><span>${orders.length} total</span></div><div class="admin-list">${orders.length ? orders.slice().reverse().map(order => `<div class="admin-list-row order-admin-row"><span><b>#${order.id} · ${escapeHtml(order.customer.name)}</b><small>${escapeHtml(order.customer.phone)} · ${money(order.total)}</small></span><button class="outline-button" data-view-order="${order.id}">Full details</button><select data-order-status="${order.id}"><option ${order.status === 'pending' ? 'selected' : ''} value="pending">Pending</option><option ${order.status === 'confirmed' ? 'selected' : ''} value="confirmed">Confirmed</option><option ${order.status === 'shipped' ? 'selected' : ''} value="shipped">Shipped</option><option ${order.status === 'delivered' ? 'selected' : ''} value="delivered">Delivered</option><option ${order.status === 'cancelled' ? 'selected' : ''} value="cancelled">Cancelled</option><option ${order.status === 'returned' ? 'selected' : ''} value="returned">Returned</option></select></div>`).join('') : '<div class="empty-state">এখনও কোনো অর্ডার নেই।</div>'}</div></section>`;
    $('#adminContent').insertAdjacentHTML('afterbegin', '<div class="admin-order-search"><input id="adminOrderSearch" placeholder="Order ID, mobile or email"><button class="outline-button" data-action="admin-search-order">Search order</button></div>');
    document.querySelectorAll('[data-view-order]').forEach(button => button.insertAdjacentHTML('afterend', `<button class="outline-button" data-edit-tracking="${button.dataset.viewOrder}">Courier</button>`));
  $('#adminContent').insertAdjacentHTML('beforeend', `<section class="admin-section"><h3>Free gift campaign</h3><form id="giftForm" class="admin-form"><input name="title" placeholder="Gift title, e.g. Dove Shampoo" required><input name="image" type="url" placeholder="Gift image URL" required><input name="stock" type="number" min="1" placeholder="Gift stock" required><input name="quantity" type="number" min="1" value="1" placeholder="Give quantity"><input name="expiresAt" type="datetime-local"><fieldset class="campaign-picker"><legend>কোন products কিনলে gift যাবে?</legend>${products.map(product => `<label><input type="checkbox" name="giftProducts" value="${product.id}"><span>${escapeHtml(product.name)}</span><small>${money(product.price)}</small></label>`).join('')}</fieldset><button class="primary-button" type="submit">Gift campaign চালু করুন</button></form><div class="admin-list">${gifts.map(gift => `<div class="admin-list-row"><span><b>${escapeHtml(gift.title)}</b><small>Stock ${gift.stock} · ${(gift.productIds || []).length} products · ${gift.active ? 'Active' : 'Out'}</small></span></div>`).join('')}</div></section>`);
  $('#adminContent').insertAdjacentHTML('beforeend', `<section class="admin-section"><h3>Shipping charge settings</h3><form id="shippingForm" class="admin-form"><div class="two-fields"><input name="insideDhaka" type="number" min="0" value="${shippingSettings.insideDhaka}" placeholder="Inside Dhaka"><input name="outsideDhaka" type="number" min="0" value="${shippingSettings.outsideDhaka}" placeholder="Outside Dhaka"></div><input name="freeThreshold" type="number" min="0" value="${shippingSettings.freeThreshold}" placeholder="Free shipping threshold"><button class="primary-button" type="submit">Shipping settings save করুন</button></form></section><section class="admin-section"><div class="section-inline"><h3>User list</h3><span>${users.length} accounts</span></div><div class="admin-list">${users.map(user => `<div class="admin-list-row"><span><b>${escapeHtml(user.name)} <small class="role-label">${escapeHtml(user.role)}</small></b><small>${escapeHtml(user.email || 'No email')} · ${escapeHtml(user.phone || 'No mobile')}</small></span>${user.role !== 'admin' ? `<button class="outline-button" data-reset-user="${user.id}">Reset password</button>` : '<small>Protected admin</small>'}</div>`).join('')}</div></section>`);
  $('#adminContent').insertAdjacentHTML('beforeend', `<section class="admin-section"><h3>New arrival</h3><form id="campaignForm" class="admin-form"><input name="title" value="${escapeHtml(campaignSettings.title)}" placeholder="Banner title" required><input name="subtitle" value="${escapeHtml(campaignSettings.subtitle)}" placeholder="Banner subtitle" required><textarea name="text" placeholder="Banner description" required>${escapeHtml(campaignSettings.text)}</textarea><input name="image" type="url" value="${escapeHtml(campaignSettings.image)}" placeholder="Banner image URL" required><input name="discount" value="${escapeHtml(campaignSettings.discount)}" placeholder="Discount badge, e.g. 50%" required><fieldset class="campaign-picker"><legend>New arrival products tick করুন (সর্বোচ্চ ৫টি)</legend>${products.map(product => `<label><input type="checkbox" name="curatedProducts" value="${product.id}" ${(campaignSettings.productIds || []).includes(product.id) ? 'checked' : ''}><span>${escapeHtml(product.name)}</span><small>${money(product.price)}</small></label>`).join('')}</fieldset><button class="primary-button" type="submit">New arrival save করুন</button></form></section>`);
  $('#adminContent').insertAdjacentHTML('beforeend', `<section class="admin-section"><h3>Hero banner</h3><form id="heroForm" class="admin-form"><input name="tagTop" value="${escapeHtml(heroSettings.tagTop)}" placeholder="Top label" required><input name="tagBottom" value="${escapeHtml(heroSettings.tagBottom)}" placeholder="Bottom label" required><input name="image" type="url" value="${escapeHtml(heroSettings.image)}" placeholder="Hero image URL" required><input name="cardTitle" value="${escapeHtml(heroSettings.cardTitle)}" placeholder="Floating card title" required><input name="cardOffer" value="${escapeHtml(heroSettings.cardOffer)}" placeholder="Offer text" required><button class="primary-button" type="submit">Hero banner save করুন</button></form></section>`);
  $('#adminContent').insertAdjacentHTML('beforeend', `<section class="admin-section"><h3>Ziyana Shop products</h3><form id="mallForm" class="admin-form"><p class="form-help">Ziyana Shop-এ দেখানোর products tick করুন। কোনোটি select না করলে Fashion ও Beauty-এর products দেখাবে।</p><fieldset class="campaign-picker"><legend>Ziyana Shop product selection</legend>${products.map(product => `<label><input type="checkbox" name="mallProducts" value="${product.id}" ${(mallSettings.productIds || []).map(Number).includes(Number(product.id)) ? 'checked' : ''}><span>${escapeHtml(product.name)}</span><small>${money(product.price)}</small></label>`).join('')}</fieldset><button class="primary-button" type="submit">Ziyana Shop update করুন</button></form></section>`);
  $('#adminContent').insertAdjacentHTML('beforeend', `<section class="admin-section"><h3>Category Management</h3><div class="category-admin-tools"><form id="categoryForm" class="admin-form"><input type="hidden" name="id"><input name="name" placeholder="Category name" required><input name="image" type="url" placeholder="Category image URL"><label><input type="checkbox" name="active" checked> Active category</label><div class="category-product-picker"><b>এই category-তে products</b><div id="categoryProductPicker"></div></div><div class="category-subcategory-tools"><b>Subcategories</b><div id="categorySubcategoryList"></div><div class="two-fields"><input name="newSubcategory" placeholder="নতুন subcategory"><input name="newSubcategoryImage" type="url" placeholder="Subcategory image URL (optional)"></div><button class="outline-button" type="button" data-add-subcategory>Add subcategory</button></div><button class="primary-button" type="submit">Category save করুন</button></form><div class="admin-list" id="adminCategoryList">${(Array.isArray(categories) ? categories : defaultCategories).map(category => `<div class="admin-list-row"><span><b>${escapeHtml(category.name)}</b><small>${(category.subcategories || []).length} subcategory · ${Array.isArray(category.productIds) ? category.productIds.length : 0} products · ${category.active === false ? 'Hidden' : 'Active'}</small></span><span class="row-actions"><button class="outline-button" data-edit-category="${escapeHtml(category.id)}">Edit</button><button class="outline-button danger-button" data-delete-category="${escapeHtml(category.id)}">Remove</button></span></div>`).join('')}</div></div></section>`);

  setupAdminWorkspace();
  openModal('adminModal');
}
function setupAdminWorkspace() {
  prepareProductMediaInputs();
  const admin = $('#adminContent');
  const adForm = $('#adForm');
  const giftForm = $('#giftForm');
  const categoryForm = $('#categoryForm');
  if (categoryForm) {
    categoryForm.noValidate = true;
    const saveCategoryButton = categoryForm.querySelector('button[type="submit"]');

    if (saveCategoryButton) {
      saveCategoryButton.onclick = event => {
        event.preventDefault();
        event.stopImmediatePropagation();

        if (!categoryForm.checkValidity()) {
          categoryForm.reportValidity();
          return;
        }

        try {
          saveManagedCategoryForm(categoryForm);
        } catch (error) {
          console.error('Category save failed:', error);
          showToast(error?.message || 'Category save হয়নি');
        }
      };
    }

    categoryForm.onsubmit = event => {
      event.preventDefault();
      event.stopImmediatePropagation();
    };
  }
  const productSection = [...admin.querySelectorAll('.admin-section')].find(section => section.querySelector('h3')?.textContent.includes('পণ্য তালিকা'));
  if (productSection) {
    productSection.classList.add('admin-card');
    productSection.innerHTML = `<div class="section-inline"><div><h3>পণ্য তালিকা</h3><span>${products.length} items</span></div>${pendingDeletedProductIds.size ? '<button class="primary-button" data-save-product-changes>Save Changes</button>' : ''}</div><div class="product-list-tools"><input id="adminProductSearch" placeholder="৩টি অক্ষর লিখে product search করুন"><small>নাম, category বা description দিয়ে খুঁজুন</small></div><div class="admin-list" id="adminProductList"></div>`;
    renderAdminProductList('');
  }
  admin.querySelectorAll('.admin-section').forEach(section => {
    section.classList.add('admin-card');
    const heading = section.querySelector('h3');
    const isProductSection = heading?.textContent.includes('পণ্য তালিকা');
    if (isProductSection) {
      section.classList.remove('is-collapsed');
      section.querySelector('[data-admin-toggle]')?.remove();
      return;
    }
section.classList.add('is-collapsed');
  });
  if (giftForm && !giftForm.querySelector('[name="giftCategory"]')) {
  giftForm.insertAdjacentHTML('beforeend', `<select name="giftCategory"><option value="">সব category</option>${getActiveCategories().map(category => `<option value="${escapeHtml(category.name)}">${escapeHtml(category.name)}</option>`).join('')}</select>`);
  const giftCategory = giftForm.querySelector('[name="giftCategory"]');
  const giftSubcategory = document.createElement('select');
  giftSubcategory.name = 'giftSubcategory';
  giftSubcategory.innerHTML = '<option value="">সব subcategory</option>';
  giftCategory.insertAdjacentElement('afterend', giftSubcategory);
  const refreshGiftTarget = () => {
    giftSubcategory.innerHTML = getSubcategoryOptions(giftCategory.value);
  };
  giftCategory.addEventListener('change', refreshGiftTarget);
  refreshGiftTarget();
}
    if (adForm && !adForm.querySelector('[name="campaignTarget"]')) adForm.insertAdjacentHTML('beforeend', `<select name="campaignTarget"><option value="all">সব campaign products</option><option value="category">Category target</option><option value="product">Selected products</option></select><select name="targetCategory"><option value="">Category select করুন</option>${getActiveCategories().map(category => `<option value="${escapeHtml(category.name)}">${escapeHtml(category.name)}</option>`).join('')}</select>`);
  const orderSection = [...admin.querySelectorAll('.admin-section')].find(section => section.querySelector('h3')?.textContent.includes('সাম্প্রতিক অর্ডার'));
  if (orderSection) {
    const rows = [...orderSection.querySelectorAll('.admin-list-row')];
    rows.forEach((row, index) => { row.hidden = index >= adminOrderLimit; row.dataset.orderSearch = row.textContent.toLowerCase(); });
    if (rows.length > 10) orderSection.insertAdjacentHTML('beforeend', `<button class="see-more-button admin-more" data-action="admin-more-orders">${adminOrderLimit >= rows.length ? 'Show less' : 'See more'} <span>${adminOrderLimit >= rows.length ? '↑' : '↓'}</span></button>`);
  }
  admin.querySelectorAll('.campaign-picker').forEach((picker, index) => {
    picker.insertAdjacentHTML('afterbegin', `<input class="picker-search" data-picker-search="${index}" placeholder="৩টি অক্ষর লিখে product search করুন">`);
    const checkboxName = picker.querySelector('input[type="checkbox"]')?.name;
    const initiallySelected = [...picker.querySelectorAll(`input[name="${checkboxName}"]:checked`)].map(input => input.closest('label')?.querySelector('span')?.textContent || '').filter(Boolean);
    picker.insertAdjacentHTML('afterend', `<div class="selected-products-preview" data-preview-for="${checkboxName}"><b>Selected products: <span>${initiallySelected.length}</span></b><div>${initiallySelected.map(name => `<span>${escapeHtml(name)}</span>`).join('')}</div></div>`);
    const updateSelectedPreview = () => { const selected = [...picker.querySelectorAll(`input[name="${checkboxName}"]:checked`)].map(input => input.closest('label')?.querySelector('span')?.textContent || '').filter(Boolean); const preview = picker.parentElement.querySelector(`[data-preview-for="${checkboxName}"]`); if (preview) { preview.querySelector('b span').textContent = selected.length; preview.querySelector('div').innerHTML = selected.length ? selected.map(name => `<span>${escapeHtml(name)}</span>`).join('') : '<small>কোনো product select করা হয়নি</small>'; } };
    picker.addEventListener('change', event => { if (!event.target.matches('input[type="checkbox"]')) return; const checked = picker.querySelectorAll('input[name="curatedProducts"]:checked'); if (event.target.name === 'curatedProducts' && checked.length > 5) { event.target.checked = false; showToast('New arrival-এ সর্বোচ্চ ৫টি product select করা যাবে'); return; } updateSelectedPreview(); });
    picker.addEventListener('input', event => { if (!event.target.matches('.picker-search')) return; const term = event.target.value.trim().toLowerCase(); picker.querySelectorAll('label').forEach(label => { label.hidden = term.length >= 3 && !label.textContent.toLowerCase().includes(term); }); });
  });
  admin.querySelectorAll('.admin-section').forEach(section => {
    if (section.querySelector('h3')?.textContent.includes('ক্যাম্পেইন / ad card')) section.querySelectorAll('.admin-list-row').forEach((row, index) => { row.dataset.adId = ads[index]?.id || ''; });
    if (section.querySelector('h3')?.textContent.includes('Free gift campaign')) section.querySelectorAll('.admin-list-row').forEach((row, index) => { row.dataset.giftId = gifts[index]?.id || ''; row.insertAdjacentHTML('beforeend', `<span class="row-actions"><button class="outline-button" data-edit-gift="${gifts[index]?.id || ''}">Edit</button><button class="outline-button danger-button" data-delete-gift="${gifts[index]?.id || ''}">Remove</button></span>`); });
  });
}
function renderAdminProductList(term = '') { const list = $('#adminProductList'); if (!list) return; const query = term.trim().toLowerCase(); const matches = query.length < 3 ? products : products.filter(product => `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(query)); list.innerHTML = matches.length ? matches.map(product => `<div class="admin-list-row"><span><b>${escapeHtml(product.name)}</b><small>${money(product.price)} · ${product.stock} stock · ${escapeHtml(product.category)}</small></span><span class="row-actions"><button class="outline-button" data-edit-product="${product.id}">Edit</button><button class="outline-button danger-button" data-delete-product="${product.id}">×</button></span></div>`).join('') : '<div class="empty-state">কোনো product পাওয়া যায়নি।</div>'; }
function searchProducts() { const term = $('#searchInput').value.trim().toLowerCase(); showingAllProducts = Boolean(term); renderProducts(term ? products.filter(item => item.name.toLowerCase().includes(term) || item.category.toLowerCase().includes(term)) : products); $('#searchSuggestions').hidden = true; $('#campaign').scrollIntoView({behavior:'smooth'}); }
function captureCheckoutDraft() { const form = $('#checkoutForm'); if (!form) return checkoutDraft; const data = Object.fromEntries(new FormData(form)); checkoutDraft = {name:data.name || '', phone:data.phone || '', address:data.address || '', payment:data.payment || 'cod', district:data.district || 'ঢাকা'}; return checkoutDraft; }
function applyCoupon() { const input = $('#couponInput'); const code = input.value.trim().toUpperCase(); const coupon = coupons.find(item => item.code === code && item.active); const subtotal = checkoutTotals().subtotal; const draft = captureCheckoutDraft(); if (!coupon) { appliedCoupon = null; $('#couponMessage').textContent = 'এই coupon code পাওয়া যায়নি'; return; } if (coupon.expiresAt && new Date(coupon.expiresAt) <= new Date()) { $('#couponMessage').textContent = 'এই coupon-এর মেয়াদ শেষ'; return; } if (subtotal < coupon.minOrder) { $('#couponMessage').textContent = `Minimum order ${money(coupon.minOrder)}`; return; } appliedCoupon = coupon; checkoutDraft = draft; renderCheckout(draft); ensureCheckoutRegionField(); showToast(`${coupon.code} applied হয়েছে`); }
function placeOrder(data) {
  const totals = checkoutTotals();
  const gift = getActiveGift();

  const order = {
    id:String(Date.now()).slice(-6),
    cloudId:currentUser?.id && String(currentUser.id).includes('-')
      ? crypto.randomUUID()
      : null,
    userId:currentUser?.id || null,
    customer:{
      name:data.name,
      email:currentUser?.email || data.email || '',
      phone:data.phone,
      address:data.address
    },
    payment:data.payment,
    items:cart.map(item => ({
      id:item.id,
      name:item.name,
      price:item.price,
      quantity:item.quantity
    })),
    gift:gift ? {
      id:gift.id,
      title:gift.title,
      quantity:gift.quantity || 1
    } : null,
    subtotal:totals.subtotal,
    discount:totals.discount,
    shipping:totals.shipping,
    total:totals.total,
    status:'pending',
    statusLabel:'অপেক্ষমাণ',
    stockDeducted:false,
    stockRestored:false,
    createdAt:new Date().toLocaleString('bn-BD')
  };

  orders.push(order);

  if (currentUser) {
    currentUser.phone = data.phone;
    currentUser.address = data.address;
    users = users.map(user =>
      user.id === currentUser.id ? currentUser : user
    );
  }

  /*
    IMPORTANT:
    No product stock or free-gift stock is reduced here.
    Inventory changes only through the admin status RPC.
  */
  cart = [];
  appliedCoupon = null;
  checkoutDraft = {
    name:'',
    phone:'',
    address:'',
    payment:'cod',
    district:'ঢাকা'
  };

  saveState();
  updateCart();
  renderGifts();
  closeModal('checkoutModal');
  renderProducts();
  showToast('অর্ডার সফলভাবে নেওয়া হয়েছে ✓');
}
const bindClick = (selector, handler) => {
  const element = $(selector);
  if (element) element.addEventListener('click', handler);
};

bindClick('#closeModal', () => closeModal('productModal'));

bindClick('#cartButton', () => {
  const drawer = $('#cartDrawer');
  const overlay = $('#overlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.hidden = false;
});

bindClick('#closeCart', () => {
  const drawer = $('#cartDrawer');
  const overlay = $('#overlay');
  if (drawer) drawer.classList.remove('open');
  if (!activeModal && overlay) overlay.hidden = true;
});

bindClick('#accountButton', () => {
  renderAuth();
  openModal('authModal');
});

bindClick('#ordersButton', openOrders);

bindClick('.checkout-button', openCheckout);

bindClick('#categoryMenu', () => {
  const categories = $('#categories');
  if (categories) categories.scrollIntoView({behavior:'smooth'});
});
function resetAdminAccount() { const admin = {id:1,name:'Laiba Admin',email:'admin@laiba.shop',phone:'01700000000',password:'admin123',role:'admin',address:''}; users = [admin, ...users.filter(user => user.role !== 'admin')]; currentUser = null; write('laiba_current_user', null); saveState(); }
function handleRoute() { const params = new URLSearchParams(location.search); if (params.get('reset-admin') === '1') resetAdminAccount(); if (location.hash === '#admin-panel' || params.get('view') === 'admin') renderAdmin(); }
handleRoute(); window.addEventListener('hashchange', handleRoute);

function openProductDetails(product) { rememberRecentlyViewed(product.id); const images = productImages(product); const videos = productVideos(product); const productReviews = reviews.filter(review => review.productId === product.id); const imageMarkup = images.map((url, index) => `<img src="${escapeHtml(url)}" alt="${escapeHtml(product.name)} image ${index + 1}" loading="lazy">`).join(''); const videoMarkup = videos.map((url, index) => `<video controls preload="metadata" playsinline aria-label="${escapeHtml(product.name)} video ${index + 1}"><source src="${escapeHtml(url)}">আপনার browser video চালাতে পারছে না।</video>`).join(''); $('#modalContent').innerHTML = `<div class="modal-product"><div class="product-media-gallery">${imageMarkup}${videoMarkup}</div><div><p class="eyebrow">ZIYANA SHOP SELECT</p><h2>${escapeHtml(product.name)}</h2><div><span class="stars">★★★★★</span> <span class="rating">${escapeHtml(product.rating)} / 5</span></div><div class="price"><strong>${money(product.price)}</strong><span class="old-price">${money(product.old)}</span></div><p>${escapeHtml(product.description)}</p><button class="primary-button" data-add="${product.id}">ব্যাগে যোগ করুন</button><div class="product-reviews"><h3>Customer reviews (${productReviews.length})</h3>${productReviews.length ? productReviews.map(review => `<p><b>${'★'.repeat(review.rating)}</b> ${escapeHtml(review.comment)} <small>· ${escapeHtml(review.userName)}</small></p>`).join('') : '<p>এখনও কোনো review নেই।</p>'}</div></div></div>`; openModal('productModal'); }
document.addEventListener('click', event => { const card = event.target.closest('.product-card'); if (!card || event.target.closest('button')) return; const product = products.find(item => item.name === card.querySelector('h3')?.textContent); if (!product) return; event.preventDefault(); event.stopImmediatePropagation(); openProductDetails(product); }, true);

document.addEventListener('click', event => {
  const adminToggle = event.target.closest('[data-admin-toggle]'); if (adminToggle) { const card = adminToggle.closest('.admin-card'); if (card) { card.classList.toggle('is-collapsed'); adminToggle.textContent = card.classList.contains('is-collapsed') ? 'Open' : 'Close'; } return; }
  const add = event.target.closest('[data-add]'); if (add) return addToCart(add.dataset.add);
  const wish = event.target.closest('.wishlist'); if (wish) { wish.classList.toggle('active'); wish.textContent = wish.classList.contains('active') ? '♥' : '♡'; return showToast(wish.classList.contains('active') ? 'উইশলিস্টে যোগ হয়েছে ♥' : 'উইশলিস্ট থেকে সরানো হয়েছে'); }
  const plus = event.target.closest('[data-plus], [data-summary-plus]'); if (plus) { const id = plus.dataset.plus || plus.dataset.summaryPlus; const item = cart.find(entry => entry.id === Number(id)); if (item) { addToCart(item.id); if ($('#checkoutModal') && !$('#checkoutModal').hidden) renderCheckout(captureCheckoutDraft()); } return; }
  const minus = event.target.closest('[data-minus], [data-summary-minus]'); if (minus) { const id = minus.dataset.minus || minus.dataset.summaryMinus; const item = cart.find(entry => entry.id === Number(id)); if (item) { item.quantity--; if (!item.quantity) cart = cart.filter(entry => entry.id !== item.id); updateCart(); if ($('#checkoutModal') && !$('#checkoutModal').hidden) renderCheckout(captureCheckoutDraft()); } return; }
  const remove = event.target.closest('[data-remove], [data-summary-remove]'); if (remove) { const id = remove.dataset.remove || remove.dataset.summaryRemove; cart = cart.filter(item => item.id !== Number(id)); updateCart(); if ($('#checkoutModal') && !$('#checkoutModal').hidden) { if (cart.length) renderCheckout(captureCheckoutDraft()); else closeModal('checkoutModal'); } return; }
  const suggest = event.target.closest('[data-suggest]'); if (suggest) { $('#searchInput').value = suggest.dataset.suggest; searchProducts(); return; }
  const card = event.target.closest('.product-card'); if (card && !event.target.closest('button')) { const product = products.find(item => item.name === card.querySelector('h3').textContent); if (product) { const productReviews = reviews.filter(review => review.productId === product.id); $('#modalContent').innerHTML = `<div class="modal-product"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}"><div><p class="eyebrow">ZIYANA SHOP SELECT</p><h2>${escapeHtml(product.name)}</h2><div><span class="stars">★★★★★</span> <span class="rating">${escapeHtml(product.rating)} / 5</span></div><div class="price"><strong>${money(product.price)}</strong><span class="old-price">${money(product.old)}</span></div><p>${escapeHtml(product.description)}</p><button class="primary-button" data-add="${product.id}">ব্যাগে যোগ করুন</button><div class="product-reviews"><h3>Customer reviews (${productReviews.length})</h3>${productReviews.length ? productReviews.map(review => `<p><b>${'★'.repeat(review.rating)}</b> ${escapeHtml(review.comment)} <small>· ${escapeHtml(review.userName)}</small></p>`).join('') : '<p>এখনও কোনো review নেই।</p>'}</div></div></div>`; openModal('productModal'); } return; }
  if (event.target.closest('[data-close-modal]')) return closeModal(event.target.closest('[data-close-modal]').dataset.closeModal);
  if (event.target.closest('[data-auth-mode]')) { renderAuth(event.target.closest('[data-auth-mode]').dataset.authMode); ensureAuthDistrictField(); return; }
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'logout' || action === 'admin-logout') { currentUser = null; write('laiba_current_user', null); closeModal(); showToast('লগআউট সম্পন্ন হয়েছে'); return; }
  if (action === 'order-tracker') { event.preventDefault(); return renderOrderTracker(); }
  if (action === 'mall-products') { event.preventDefault(); return showMallProducts(); }
  const infoPage = event.target.closest('[data-info-page]'); if (infoPage) { event.preventDefault(); return showInfoPage(infoPage.dataset.infoPage); }
  const buyNow = event.target.closest('[data-buy-now]'); if (buyNow) { event.preventDefault(); event.stopPropagation(); const product = products.find(item => item.id === Number(buyNow.dataset.buyNow)); if (!product || product.stock < 1) return showToast('এই পণ্যটি এখন স্টকে নেই'); addToCart(buyNow.dataset.buyNow); return openCheckout(); }
  if (action === 'open-admin') return renderAdmin(); if (action === 'my-orders') { if (currentUser?.role === 'admin') { accountOrderFilter = ''; renderOrders(); openModal('ordersModal'); return; } return renderCustomerDashboard(); } if (action === 'reset-password') { const password = `Laiba${String(currentUser.id).slice(-4)}`; currentUser.password = password; users = users.map(user => user.id === currentUser.id ? currentUser : user); saveState(); return showToast(`Default password: ${password}`); } if (action === 'toggle-ad-form') { $('#adForm').hidden = !$('#adForm').hidden; return; } if (action === 'apply-coupon') return applyCoupon(); if (action === 'remove-coupon') { appliedCoupon = null; renderCheckout(captureCheckoutDraft()); showToast('Coupon removed'); return; }
  if (action === 'track-order') { const query = $('#trackInput').value.trim().toLowerCase(); const order = orders.find(item => item.id.toLowerCase() === query || item.customer.phone.toLowerCase() === query || users.find(user => user.id === item.userId)?.email?.toLowerCase() === query); if (!order) return showToast('Order পাওয়া যায়নি'); return showAdminOrder(order.id); }
  if (action === 'public-track-order') { const query = $('#publicTrackInput').value.trim().toLowerCase(); const order = orders.find(item => item.id.toLowerCase() === query || item.customer.phone.toLowerCase() === query || item.customer.email?.toLowerCase() === query); if (!order) { $('#publicTrackResult').innerHTML = '<p class="empty-state">এই তথ্য দিয়ে কোনো order পাওয়া যায়নি।</p>'; return; } $('#publicTrackResult').innerHTML = `<article class="order-card tracker-result"><div><b>Order #${escapeHtml(order.id)}</b><small>${escapeHtml(order.createdAt)}</small></div><span class="status ${order.status}">${escapeHtml(order.statusLabel)}</span><strong>${money(order.total)}</strong><p>${order.items.map(item => `${escapeHtml(item.name)} × ${item.quantity}`).join(', ')}</p>${order.trackingUrl ? `<a class="tracking-button" href="${escapeHtml(order.trackingUrl)}" target="_blank" rel="noopener">Courier tracking খুলুন</a>` : '<small>Courier tracking update হলে এখানে দেখা যাবে।</small>'}</article>`; return; }
  if (action === 'admin-search-order') { const query = $('#adminOrderSearch').value.trim().toLowerCase(); const order = orders.find(item => item.id.toLowerCase() === query || item.customer.phone.toLowerCase() === query || users.find(user => user.id === item.userId)?.email?.toLowerCase() === query); if (!order) return showToast('Order পাওয়া যায়নি'); return showAdminOrder(order.id); }
  if (action === 'admin-more-orders') { adminOrderLimit = adminOrderLimit >= orders.length ? 10 : orders.length; renderAdmin(); return; }
  const category = event.target.closest('[data-category]'); if (category) { event.preventDefault(); const managed = getCategoryByName(category.dataset.category); const target = managed ? `#category-${CSS.escape(managed.id)}` : ''; if (target) document.querySelector(target)?.scrollIntoView({behavior:'smooth'}); showToast(`${category.dataset.category} ক্যাটাগরির পণ্য দেখানো হচ্ছে`); return; }
  const adView = event.target.closest('[data-ad-view]'); if (adView) return showAdDetails(adView.dataset.adView);
  const editProduct = event.target.closest('[data-edit-product]'); if (editProduct) { event.preventDefault(); event.stopPropagation(); const product = products.find(item => item.id === Number(editProduct.dataset.editProduct)); if (!product) return; $('#ordersContent').innerHTML = `<div class="panel-heading"><p class="eyebrow">PRODUCT EDITOR</p><h2>${escapeHtml(product.name)}</h2></div><form id="productEditForm" class="stack-form"><input type="hidden" name="id" value="${product.id}"><input name="name" value="${escapeHtml(product.name)}" placeholder="পণ্যের নাম" required><div class="two-fields"><input name="price" type="number" value="${product.price}" placeholder="দাম" required><input name="old" type="number" value="${product.old}" placeholder="আগের দাম" required></div><div class="two-fields"><select name="category" required><option value="">ক্যাটাগরি নির্বাচন করুন</option>${getActiveCategories().map(category => `<option value="${escapeHtml(category.name)}" ${product.category === category.name ? 'selected' : ''}>${escapeHtml(category.name)}</option>`).join('')}</select><input name="stock" type="number" value="${product.stock}" placeholder="স্টক" required></div><input name="image" type="url" value="${escapeHtml(product.image)}" placeholder="Image URL" required><textarea name="description" placeholder="পণ্যের বর্ণনা" required>${escapeHtml(product.description)}</textarea><button class="primary-button" type="submit">Product update করুন</button></form>`; return openModal('ordersModal'); }
  const saveProductChanges = event.target.closest('[data-save-product-changes]');
  if (saveProductChanges) {
    void savePendingProductChanges();
    return;
  }

  const deleteProduct = event.target.closest('[data-delete-product]'); if (deleteProduct) {
    const productId = Number(deleteProduct.dataset.deleteProduct);
    const product = products.find(item => Number(item.id) === productId);
    if (!product) return;

    pendingDeletedProductIds.add(productId);
    products = products.filter(item => Number(item.id) !== productId);

    renderProducts();
    renderAdmin();
    showToast('পণ্যটি মুছে ফেলার জন্য চিহ্নিত হয়েছে — Save Changes চাপুন');
    return;
  }
  const addSubcategory = event.target.closest('[data-add-subcategory]');
  if (addSubcategory) {
    event.preventDefault();
    event.stopPropagation();
    const form = $('#categoryForm');
    const input = form?.elements?.newSubcategory;
    const name = String(input?.value || '').trim();
    const image = String(form?.elements?.newSubcategoryImage?.value || '').trim();
    if (!name) return showToast('Subcategory name দিন');

    const id = String(form?.elements?.id?.value || '').trim();
    if (!id) return showToast('আগে category save করুন');

    const category = categories.find(item => String(item.id) === id);
    if (!category) return showToast('Category পাওয়া যায়নি');

    category.subcategories = Array.isArray(category.subcategories) ? category.subcategories : [];
    if (category.subcategories.some(item => String(typeof item === 'string' ? item : item.name || '').trim().toLowerCase() === name.toLowerCase())) {
      return showToast('এই subcategory আগে থেকেই আছে');
    }

    category.subcategories.push({id:`sub-${Date.now()}`, name, image, productIds:[]});
    input.value = '';
    if (form.elements.newSubcategoryImage) form.elements.newSubcategoryImage.value = '';
    renderCategorySubcategoryList(category);
    showToast('Subcategory যোগ হয়েছে');
    return;
  }

  const editCategory = event.target.closest('[data-edit-category]');
  if (editCategory) {
    event.preventDefault();
    event.stopPropagation();
    const category = categories.find(item => String(item.id) === String(editCategory.dataset.editCategory));
    if (!category) return;
    const form = $('#categoryForm');
    if (!form) return;
    form.elements.id.value = category.id;
    form.elements.name.value = category.name || '';
    form.elements.image.value = category.image || '';
    form.elements.active.checked = category.active !== false;
    renderCategoryProductPicker(category);
    renderCategorySubcategoryList(category);
    form.elements.name.focus();
    showToast(`${category.name} edit mode`);
    return;
  }

  const removeSubcategory = event.target.closest('[data-remove-subcategory]');
  if (removeSubcategory) {
    event.preventDefault();
    event.stopPropagation();
    const form = $('#categoryForm');
    const id = String(form?.elements?.id?.value || '').trim();
    const category = categories.find(item => String(item.id) === id);
    if (!category) return showToast('Category পাওয়া যায়নি');

    const index = Number(removeSubcategory.dataset.removeSubcategory);
    if (!Array.isArray(category.subcategories) || !Number.isInteger(index)) return;

    category.subcategories.splice(index, 1);
    renderCategorySubcategoryList(category);
    showToast('Subcategory remove হয়েছে');
    return;
  }

  const deleteCategory = event.target.closest('[data-delete-category]');
  if (deleteCategory) {
    event.preventDefault();
    event.stopPropagation();
    const category = categories.find(item => String(item.id) === String(deleteCategory.dataset.deleteCategory));
    if (!category) return;

    const linkedProducts = products.filter(product => product.category === category.name);
    if (linkedProducts.length) {
      return showToast(`${linkedProducts.length}টি product আগে অন্য category-তে দিন`);
    }

    categories = categories.filter(item => String(item.id) !== String(category.id));
    ads.forEach(ad => { if (ad.targetCategory === category.name) ad.targetCategory = ''; });
    gifts.forEach(gift => { if (gift.giftCategory === category.name) gift.giftCategory = ''; });

    saveState();
    renderProducts();
    renderAdmin();
    showToast('Category removed');
    return;
  }

  const deleteCoupon = event.target.closest('[data-delete-coupon]'); if (deleteCoupon) { coupons = coupons.filter(coupon => coupon.code !== deleteCoupon.dataset.deleteCoupon); saveState(); renderAdmin(); return; }
  const editCoupon = event.target.closest('[data-edit-coupon]'); if (editCoupon) { const coupon = coupons.find(item => item.code === editCoupon.dataset.editCoupon); if (coupon) { $('#ordersContent').innerHTML = `<div class="panel-heading"><p class="eyebrow">COUPON EDITOR</p><h2>${escapeHtml(coupon.code)}</h2></div><form id="couponEditForm" class="stack-form"><input type="hidden" name="code" value="${escapeHtml(coupon.code)}"><input name="minOrder" type="number" value="${coupon.minOrder || 0}" placeholder="Minimum order"><input name="maxDiscount" type="number" value="${coupon.maxDiscount || 0}" placeholder="Maximum discount"><input name="expiresAt" type="datetime-local" value="${escapeHtml(coupon.expiresAt || '')}"><button class="primary-button" type="submit">Update coupon</button></form>`; openModal('ordersModal'); } return; }
  const deleteAd = event.target.closest('[data-delete-ad]'); if (deleteAd) { ads = ads.filter(ad => ad.id !== Number(deleteAd.dataset.deleteAd)); saveState(); renderAdmin(); return; }
  const editAd = event.target.closest('[data-edit-ad]'); if (editAd) { event.preventDefault(); event.stopPropagation(); const ad = ads.find(item => item.id === Number(editAd.dataset.editAd)); if (ad) { const selectedIds = new Set((ad.productIds || []).map(Number)); const selectedProducts = products.map(product => `<label><input type="checkbox" name="campaignProducts" value="${product.id}" ${selectedIds.has(Number(product.id)) ? 'checked' : ''}><span>${escapeHtml(product.name)}</span><small>${money(product.price)}</small></label>`).join(''); const categoryOptions = getActiveCategories().map(category => `<option value="${escapeHtml(category.name)}" ${ad.targetCategory === category.name ? 'selected' : ''}>${escapeHtml(category.name)}</option>`).join(''); $('#ordersContent').innerHTML = `<div class="panel-heading"><p class="eyebrow">CAMPAIGN EDITOR</p><h2>${escapeHtml(ad.title)}</h2></div><form id="adEditForm" class="stack-form"><input type="hidden" name="id" value="${ad.id}"><input name="title" value="${escapeHtml(ad.title)}" required><input name="text" value="${escapeHtml(ad.text)}" required><input name="image" value="${escapeHtml(ad.image)}" type="url" required><input name="link" value="${escapeHtml(ad.link || '#campaign')}"><input name="expiresAt" value="${escapeHtml(ad.expiresAt || '')}" type="datetime-local"><select name="targetCategory"><option value="">সব category</option>${categoryOptions}</select><fieldset class="campaign-picker"><legend>এই campaign-এ products বাছাই করুন</legend>${selectedProducts}</fieldset><button class="primary-button" type="submit">Update campaign</button></form>`; openModal('ordersModal'); } return; }
  const viewOrder = event.target.closest('[data-view-order]'); if (viewOrder) return showAdminOrder(viewOrder.dataset.viewOrder);
  const editTracking = event.target.closest('[data-edit-tracking]'); if (editTracking) { const order = orders.find(item => item.id === editTracking.dataset.editTracking); if (!order) return; $('#ordersContent').innerHTML = `<div class="panel-heading"><p class="eyebrow">COURIER TRACKING</p><h2>Order #${escapeHtml(order.id)}</h2></div><form id="trackingForm" class="stack-form"><input type="hidden" name="orderId" value="${order.id}"><input name="courierName" value="${escapeHtml(order.courierName || '')}" placeholder="Courier service name" required><input name="bookingNumber" value="${escapeHtml(order.bookingNumber || '')}" placeholder="Booking Number" required><input name="trackingUrl" value="${escapeHtml(order.trackingUrl || '')}" placeholder="Tracking Link (optional)" type="url"><button class="primary-button" type="submit">Tracking update করুন</button></form>`; return openModal('ordersModal'); }
  const editGift = event.target.closest('[data-edit-gift]'); if (editGift) { const gift = gifts.find(item => item.id === Number(editGift.dataset.editGift)); if (!gift) return; const selectedProducts = products.map(product => `<label><input type="checkbox" name="giftProducts" value="${product.id}" ${(gift.productIds || []).includes(product.id) ? 'checked' : ''}><span>${escapeHtml(product.name)}</span><small>${money(product.price)}</small></label>`).join(''); const categoryOptions = getActiveCategories().map(category => `<option value="${escapeHtml(category.name)}" ${gift.giftCategory === category.name ? 'selected' : ''}>${escapeHtml(category.name)}</option>`).join(''); $('#ordersContent').innerHTML = `<div class="panel-heading"><p class="eyebrow">FREE GIFT CAMPAIGN</p><h2>Edit ${escapeHtml(gift.title)}</h2></div><form id="giftEditForm" class="stack-form"><input type="hidden" name="id" value="${gift.id}"><input name="title" value="${escapeHtml(gift.title)}" required><input name="image" value="${escapeHtml(gift.image)}" type="url" required><input name="stock" value="${gift.stock}" type="number" min="0" required><input name="quantity" value="${gift.quantity || 1}" type="number" min="1" required><input name="expiresAt" value="${escapeHtml(gift.expiresAt || '')}" type="datetime-local"><select name="giftCategory"><option value="">সব category</option>${categoryOptions}</select><select name="giftSubcategory">${getSubcategoryOptions(gift.giftCategory, gift.giftSubcategory || '')}</select><fieldset class="campaign-picker"><legend>Gift পেতে products tick করুন</legend>${selectedProducts}</fieldset><button class="primary-button" type="submit">Update gift</button></form>`; return openModal('ordersModal'); }
  const deleteGift = event.target.closest('[data-delete-gift]'); if (deleteGift) { gifts = gifts.filter(item => item.id !== Number(deleteGift.dataset.deleteGift)); saveState(); renderGifts(); renderAdmin(); showToast('Gift campaign removed'); return; }
  const giftView = event.target.closest('[data-gift-view]'); if (giftView) return showGiftDetails(giftView.dataset.giftView);
  const resetUser = event.target.closest('[data-reset-user]'); if (resetUser) { const user = users.find(item => item.id === Number(resetUser.dataset.resetUser)); if (!user) return; user.password = `Laiba${String(user.id).slice(-4)}`; saveState(); renderAdmin(); showToast(`${user.name}-এর default password: ${user.password}`); return; }
  const reviewProduct = event.target.closest('[data-review-product]'); if (reviewProduct) { const product = products.find(item => item.id === Number(reviewProduct.dataset.reviewProduct)); $('#ordersContent').innerHTML = `<div class="panel-heading"><p class="eyebrow">VERIFIED PURCHASE</p><h2>${escapeHtml(product?.name || 'Product review')}</h2></div><form id="reviewForm" class="stack-form"><input type="hidden" name="productId" value="${reviewProduct.dataset.reviewProduct}"><input type="hidden" name="orderId" value="${reviewProduct.dataset.reviewOrder}"><select name="rating"><option value="5">★★★★★</option><option value="4">★★★★</option><option value="3">★★★</option><option value="2">★★</option><option value="1">★</option></select><textarea name="comment" placeholder="আপনার অভিজ্ঞতা লিখুন" required></textarea><button class="primary-button" type="submit">Review publish করুন</button></form>`; return; }
});
document.addEventListener('change', event => {
  const giftForm = event.target.closest('#giftForm, #giftEditForm');
  if (giftForm && (event.target.name === 'giftCategory' || event.target.name === 'giftSubcategory')) {
    const category = giftForm.querySelector('[name="giftCategory"]')?.value || '';
    const subcategory = giftForm.querySelector('[name="giftSubcategory"]')?.value || '';
    if (event.target.name === 'giftCategory') {
      const sub = giftForm.querySelector('[name="giftSubcategory"]');
      if (sub) sub.innerHTML = getSubcategoryOptions(category);
    }
    const allowed = subcategory
      ? new Set(products.filter(product => productMatchesSubcategory(product, category, subcategory)).map(product => Number(product.id)))
      : category
        ? new Set(products.filter(product => productMatchesCategory(product, category)).map(product => Number(product.id)))
        : null;

    if (allowed) {
      giftForm.querySelectorAll('[name="giftProducts"]').forEach(input => {
        const label = input.closest('label');
        const show = allowed.has(Number(input.value));
        if (label) label.hidden = !show;
        if (!show) input.checked = false;
      });
    }
  }

  const orderStatus = event.target.closest('[data-order-status]');
  if (!orderStatus) return;
 const order = orders.find(item => item.id === orderStatus.dataset.orderStatus); if (order) { void handleAdminOrderStatusChange(order, orderStatus); } });
document.addEventListener('input', event => { if (event.target.id === 'adminProductSearch') renderAdminProductList(event.target.value); });
document.addEventListener('submit', event => {
  event.preventDefault(); const form = event.target; const data = Object.fromEntries(new FormData(form));
  if (form.id === 'authForm') { const identifier = data.identifier.toLowerCase().trim(); const isLogin = data.authMode === 'login'; if (data.name) { if (users.some(user => user.email === identifier || user.phone === data.phone)) return showToast('এই ইমেইল বা মোবাইলে অ্যাকাউন্ট আছে'); currentUser = {id:Date.now(),name:data.name,email:identifier.includes('@') ? identifier : '',phone:data.phone,address:data.address || '',password:data.password,role:'customer'}; users.push(currentUser); } else { const found = users.find(user => (user.email === identifier || user.phone === identifier) && user.password === data.password); if (!found) return showToast('ইমেইল/মোবাইল অথবা পাসওয়ার্ড সঠিক নয়'); currentUser = found; } write('laiba_current_user', currentUser); const shouldOpenAdmin = pendingAdmin; pendingAdmin = false; closeModal('authModal'); showToast(`স্বাগতম, ${currentUser.name}`); if (shouldOpenAdmin) { if (currentUser.role === 'admin') renderAdmin(); else showToast('Admin access denied'); } else if (pendingCheckout) { pendingCheckout = false; openCheckout(); } else if (isLogin) { if (currentUser.role === 'admin') renderAdmin(); else openOrders(); } return; }
  if (form.id === 'checkoutForm') { checkoutDraft = {...checkoutDraft, district:data.district || 'ঢাকা', name:data.name, phone:data.phone, address:data.address, payment:data.payment}; return placeOrder(data); }
  if (form.id === 'productForm') { const price = Number(data.price); const old = Number(data.old); products.unshift({id:Date.now(),name:data.name,price,old,discount:old ? `-${Math.round((1 - price / old) * 100)}%` : '',rating:'4.8',category:data.category,stock:Number(data.stock),image:data.image,description:data.description}); saveState(); renderProducts(); renderAdmin(); showToast('নতুন পণ্য প্রকাশিত হয়েছে'); return; }
  if (form.id === 'productEditForm') { const product = products.find(item => item.id === Number(data.id)); if (!product) return showToast('Product পাওয়া যায়নি'); const price = Number(data.price); const old = Number(data.old); if (!data.name?.trim() || !data.category || !Number.isFinite(price) || !Number.isFinite(old) || !Number.isFinite(Number(data.stock)) || !data.image?.trim()) return showToast('Product-এর সব তথ্য পূরণ করুন'); Object.assign(product, {name:data.name.trim(),price,old,discount:old ? `-${Math.round((1 - price / old) * 100)}%` : '',category:data.category,stock:Number(data.stock),image:data.image.trim(),description:data.description || ''}); saveState(); closeModal('ordersModal'); renderProducts(); renderAdmin(); showToast('Product update হয়েছে'); return; }
  if (form.id === 'couponForm') { const code = data.code.toUpperCase().trim(); if (coupons.some(coupon => coupon.code === code)) return showToast('এই coupon আগে থেকেই আছে'); if (data.type === 'percent' && (!Number(data.value) || Number(data.value) > 100)) return showToast('Discount 1 থেকে 100% এর মধ্যে দিন'); coupons.push({code,type:data.type,value:Number(data.value || 0),maxDiscount:Number(data.maxDiscount || 0),minOrder:Number(data.minOrder || 0),expiresAt:data.expiresAt || '',active:true}); saveState(); renderAdmin(); showToast('কুপন সক্রিয় হয়েছে'); return; }
  if (form.id === 'giftForm') { gifts.unshift({id:Date.now(),title:data.title,image:data.image,stock:Number(data.stock),quantity:Number(data.quantity || 1),minQuantity:Math.max(1, Number(data.minQuantity || 1)),expiresAt:data.expiresAt || '',giftCategory:data.giftCategory || '',giftSubcategory:data.giftSubcategory || '',productIds:[...form.querySelectorAll('[name="giftProducts"]:checked')].map(input => Number(input.value)),active:true}); saveState(); renderGifts(); renderAdmin(); showToast('Free gift campaign চালু হয়েছে'); return; }
  if (form.id === 'shippingForm') { shippingSettings = {insideDhaka:Number(data.insideDhaka || 0),outsideDhaka:Number(data.outsideDhaka || 0),freeThreshold:Number(data.freeThreshold || 0)}; saveState(); renderAdmin(); showToast('Shipping settings updated'); return; }
  if (form.id === 'campaignForm') { campaignSettings = {title:data.title,subtitle:data.subtitle,text:data.text,image:data.image,discount:data.discount,productIds:[...form.querySelectorAll('[name="curatedProducts"]:checked')].map(input => Number(input.value)).slice(0, 5)}; saveState(); renderCampaignBanner(); renderProducts(); renderAdmin(); showToast('New arrival updated'); return; }
  if (form.id === 'heroForm') { heroSettings = {tagTop:data.tagTop,tagBottom:data.tagBottom,image:data.image,cardTitle:data.cardTitle,cardOffer:data.cardOffer}; saveState(); renderHero(); renderAdmin(); showToast('Hero banner updated'); return; }
  if (form.id === 'reviewForm') { const order = orders.find(item => item.id === data.orderId); const purchased = order?.userId === currentUser?.id && order.status === 'delivered' && order.items.some(item => item.id === Number(data.productId)); const alreadyReviewed = reviews.some(review => review.orderId === data.orderId && review.productId === Number(data.productId)); if (!purchased) return showToast('পণ্য ডেলিভারি হওয়ার পর review দেওয়া যাবে'); if (alreadyReviewed) return showToast('এই পণ্যে আগে review দেওয়া হয়েছে'); reviews.push({id:Date.now(),orderId:data.orderId,productId:Number(data.productId),userId:currentUser.id,rating:Number(data.rating),comment:data.comment,userName:currentUser.name}); saveState(); closeModal('ordersModal'); showToast('Review publish হয়েছে'); return; }
  if (form.id === 'trackingForm') { const order = orders.find(item => item.id === data.orderId); if (order) { order.courierName = data.courierName; order.bookingNumber = data.bookingNumber; order.trackingUrl = data.trackingUrl; saveState(); closeModal('ordersModal'); renderAdmin(); showToast('Tracking details updated'); } return; }
  if (form.id === 'giftEditForm') { const gift = gifts.find(item => item.id === Number(data.id)); if (gift) { Object.assign(gift, {title:data.title,image:data.image,stock:Number(data.stock),quantity:Number(data.quantity),minQuantity:Math.max(1, Number(data.minQuantity || 1)),expiresAt:data.expiresAt || '',giftCategory:data.giftCategory || '',giftSubcategory:data.giftSubcategory || '',productIds:[...form.querySelectorAll('[name="giftProducts"]:checked')].map(input => Number(input.value)),active:Number(data.stock) > 0}); saveState(); closeModal('ordersModal'); renderGifts(); renderAdmin(); showToast('Gift campaign updated'); } return; }
  if (form.id === 'couponEditForm') { const coupon = coupons.find(item => item.code === data.code); if (coupon) { Object.assign(coupon, {minOrder:Number(data.minOrder || 0),maxDiscount:Number(data.maxDiscount || 0),expiresAt:data.expiresAt || ''}); saveState(); closeModal('ordersModal'); renderAdmin(); showToast('Coupon updated'); } return; }
  if (form.id === 'adEditForm') { const ad = ads.find(item => item.id === Number(data.id)); if (!ad) return showToast('Campaign পাওয়া যায়নি'); if (!data.title?.trim() || !data.text?.trim() || !data.image?.trim()) return showToast('Campaign-এর title, text ও image দিন'); const selectedProductIds = [...form.querySelectorAll('[name="campaignProducts"]:checked')].map(input => Number(input.value)); Object.assign(ad, {title:data.title.trim(),text:data.text.trim(),image:data.image.trim(),link:data.link || '#campaign',expiresAt:data.expiresAt || '',targetCategory:data.targetCategory || '',productIds:selectedProductIds}); saveState(); closeModal('ordersModal'); renderAds(); renderProducts(); renderAdmin(); showToast(`${selectedProductIds.length}টি product সহ campaign updated`); return; }
  if (form.id === 'adForm') { ads.unshift({id:Date.now(),title:data.title,text:data.text,image:data.image,link:data.link || '#campaign',expiresAt:data.expiresAt || '',targetCategory:data.targetCategory || '',productIds:form.querySelectorAll('[name="campaignProducts"]:checked').length ? [...form.querySelectorAll('[name="campaignProducts"]:checked')].map(input => Number(input.value)) : [],active:true}); saveState(); renderAds(); renderProducts(); renderAdmin(); showToast('Ad card publish হয়েছে'); }
});
document.addEventListener('submit', event => { if (event.target.id === 'authForm' && currentUser && event.target.querySelector('[name="district"]')) { const district = new FormData(event.target).get('district'); if (district) { currentUser.district = district; users = users.map(user => user.id === currentUser.id ? currentUser : user); write('laiba_current_user', currentUser); saveState(); } } if (event.target.id === 'checkoutForm' && currentUser) { const district = new FormData(event.target).get('district'); if (district) { currentUser.district = district; const latestOrder = orders[orders.length - 1]; if (latestOrder && latestOrder.userId === currentUser.id) latestOrder.district = district; users = users.map(user => user.id === currentUser.id ? currentUser : user); write('laiba_current_user', currentUser); saveState(); } } });
$('#overlay').addEventListener('click', () => { document.querySelectorAll('.modal').forEach(modal => { modal.hidden = true; }); $('#cartDrawer').classList.remove('open'); activeModal = null; $('#overlay').hidden = true; });

if (!window.__categoryFloatingMenuAutoCloseBound) {
  window.__categoryFloatingMenuAutoCloseBound = true;
  let closeTimer;

  const cancelClose = () => clearTimeout(closeTimer);

  const scheduleClose = () => {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      const menu = document.querySelector('#categoryFloatingSubmenu');
      if (menu) menu.hidden = true;
    }, 220);
  };

  document.addEventListener('pointerover', event => {
    const item = event.target.closest?.('.category-menu-item');
    const menu = event.target.closest?.('#categoryFloatingSubmenu');
    if (item || menu) cancelClose();
  });

  document.addEventListener('pointerout', event => {
    const item = event.target.closest?.('.category-menu-item');
    const menu = event.target.closest?.('#categoryFloatingSubmenu');
    if (!item && !menu) return;

    const next = event.relatedTarget;
    if (
      next &&
      (
        next.closest?.('.category-menu-item') ||
        next.closest?.('#categoryFloatingSubmenu')
      )
    ) return;

    scheduleClose();
  });
}

if (!window.__categoryFloatingMouseGuardBound) {
  window.__categoryFloatingMouseGuardBound = true;

  let closeTimer;

  const keepMenuOpen = () => clearTimeout(closeTimer);

  const closeMenuLater = () => {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      const menu = document.querySelector('#categoryFloatingSubmenu');
      if (menu) {
        menu.hidden = true;
        menu.style.display = 'none';
      }
    }, 220);
  };

  document.addEventListener('mousemove', event => {
    const insideCategory = event.target.closest?.('.category-menu-item');
    const insideMenu = event.target.closest?.('#categoryFloatingSubmenu');

    if (insideCategory || insideMenu) {
      keepMenuOpen();
      return;
    }

    closeMenuLater();
  });
}

/* AUTO SLIDE MULTIPLE CAMPAIGNS */
if (!window.__campaignAutoSliderBound) {
  window.__campaignAutoSliderBound = true;

  const sliderTimers = new WeakMap();

  const setupCampaignSlider = (selector) => {
    document.querySelectorAll(selector).forEach(container => {
      const items = [...container.children].filter(item => item.nodeType === 1);

      if (items.length < 2) {
        const oldTimer = sliderTimers.get(container);
        if (oldTimer) clearInterval(oldTimer);
        sliderTimers.delete(container);
        return;
      }

      if (sliderTimers.has(container)) return;

      container.style.display = 'flex';
      container.style.flexWrap = 'nowrap';
      container.style.overflowX = 'auto';
      container.style.scrollBehavior = 'smooth';
      container.style.scrollSnapType = 'x mandatory';

      items.forEach(item => {
        item.style.flex = '0 0 100%';
        item.style.minWidth = '100%';
        item.style.scrollSnapAlign = 'start';
      });

      const timer = setInterval(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll - 5) {
          container.scrollTo({left: 0, behavior: 'smooth'});
        } else {
          container.scrollBy({
            left: container.clientWidth,
            behavior: 'smooth'
          });
        }
      }, 1500);

      sliderTimers.set(container, timer);
    });
  };

  const refreshCampaignSliders = () => {
    setupCampaignSlider('#adGrid');
    setupCampaignSlider('#giftGrid');
  };

  refreshCampaignSliders();

  const observer = new MutationObserver(refreshCampaignSliders);
  observer.observe(document.body, {childList:true, subtree:true});
}

/* ADMIN TILE -> EDITOR POPUP */
if (!window.__adminTileEditorBound) {
  window.__adminTileEditorBound = true;

  let adminEditorState = null;
  let decorateTimer = null;

  const closeAdminEditor = (restore = true) => {
    if (!adminEditorState) return;

    const {section, placeholder, overlay} = adminEditorState;

    if (
      restore &&
      placeholder?.isConnected &&
      section
    ) {
      section.classList.add('admin-dashboard-tile');
      section.classList.add('is-collapsed');
      section.dataset.adminTileReady = '1';
      placeholder.replaceWith(section);
    }

    overlay?.remove();
    adminEditorState = null;
  };

  const openAdminEditor = section => {
    if (adminEditorState) closeAdminEditor(false);

    const parent = section.parentNode;
    if (!parent) return;

    const placeholder = document.createComment('admin-editor-placeholder');
    parent.insertBefore(placeholder, section);

    const overlay = document.createElement('div');
    overlay.className = 'admin-editor-backdrop';

    const panel = document.createElement('div');
    panel.className = 'admin-editor-panel';

    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'admin-editor-close';
    close.textContent = '×';
    close.setAttribute('data-admin-editor-close', '');

    section.classList.remove('is-collapsed');
    section.classList.add('admin-editor-open');
    section.querySelectorAll('[hidden]').forEach(el => {
      if (el.id === 'adForm') el.hidden = false;
    });

    panel.appendChild(close);
    panel.appendChild(section);
    overlay.appendChild(panel);
    document.body.appendChild(overlay);

    adminEditorState = {section, placeholder, overlay};
  };

  const decorateAdminTiles = () => {
    const root = document.querySelector('#adminContent');
    if (!root) return;

    const sections = root.querySelectorAll(
      ':scope > .admin-section, ' +
      ':scope > .admin-grid > .admin-section, ' +
      ':scope > .admin-card, ' +
      ':scope > .admin-grid > .admin-card'
    );

    sections.forEach(section => {
      if (
        section.classList.contains('admin-top') ||
        section.dataset.adminTileReady === '1'
      ) return;

      section.dataset.adminTileReady = '1';
      section.classList.add('admin-dashboard-tile');
      section.classList.add('is-collapsed');

      section.addEventListener('click', event => {
        if (
          event.target.closest(
            'button,input,textarea,select,label,a,form,[data-admin-toggle]'
          )
        ) return;

        if (section.classList.contains('is-collapsed')) {
          openAdminEditor(section);
        }
      });
    });
  };

  const scheduleDecorate = () => {
    clearTimeout(decorateTimer);
    decorateTimer = setTimeout(() => {
      if (
        adminEditorState &&
        !adminEditorState.placeholder?.isConnected
      ) {
        closeAdminEditor(false);
      }
      decorateAdminTiles();
    }, 0);
  };

  document.addEventListener('click', event => {
    const closeButton = event.target.closest('[data-admin-editor-close]');
    if (closeButton) {
      closeAdminEditor(true);
      return;
    }

    if (
      event.target.classList.contains('admin-editor-backdrop') &&
      adminEditorState
    ) {
      closeAdminEditor(true);
    }
  });

  const observer = new MutationObserver(scheduleDecorate);

  const startObserver = () => {
    const root = document.querySelector('#adminContent');
    if (!root) return;
    observer.disconnect();
    observer.observe(root, {childList:true, subtree:true});
    decorateAdminTiles();
  };

  startObserver();
  window.addEventListener('hashchange', scheduleDecorate);
  window.addEventListener('load', startObserver);
}

/* CATEGORY MANAGEMENT TILE DECORATION */
if (!window.__categoryManagementTileReady) {
  window.__categoryManagementTileReady = true;

  const decorateCategoryManagementTile = () => {
    const section = document.querySelector('#categoryForm')?.closest('.admin-section');
    if (!section) return;

    section.classList.add('admin-card', 'admin-dashboard-tile');

    if (!section.classList.contains('admin-editor-open')) {
      section.classList.add('is-collapsed');
    }

    const heading = section.querySelector('h3');
    if (heading && !section.querySelector('[data-admin-toggle]')) {
}
  };

  const observer = new MutationObserver(decorateCategoryManagementTile);
  observer.observe(document.body, {childList:true, subtree:true});
  decorateCategoryManagementTile();
}

/* STEP 1 — CUSTOMER DASHBOARD */
window.accountOrderFilter = '';

function getCustomerOrders() {
  return currentUser
    ? orders.filter(order => String(order.userId) === String(currentUser.id))
    : [];
}

function getAccountStatusOrders(statuses) {
  const mine = getCustomerOrders();
  return mine.filter(order => statuses.includes(order.status));
}

function getRecentlyViewedProducts() {
  const ids = (read('laiba_recently_viewed', []) || []).map(Number);
  return ids
    .map(id => products.find(product => Number(product.id) === id))
    .filter(Boolean)
    .slice(0, 10);
}

function rememberRecentlyViewed(productId) {
  const id = Number(productId);
  if (!Number.isFinite(id)) return;

  const ids = (read('laiba_recently_viewed', []) || [])
    .map(Number)
    .filter(item => item !== id);

  ids.unshift(id);
  write('laiba_recently_viewed', ids.slice(0, 10));
}

function accountStatusCards() {
  const mine = getCustomerOrders();

  const toShip = mine.filter(order =>
    ['pending','confirmed'].includes(order.status)
  ).length;

  const toReceive = mine.filter(order =>
    order.status === 'shipped'
  ).length;

  const toReview = mine.filter(order =>
    order.status === 'delivered' &&
    order.items?.some(item =>
      !reviews.some(review =>
        review.orderId === order.id &&
        review.productId === Number(item.id)
      )
    )
  ).length;

  const returned = mine.filter(order =>
    ['returned','return_requested'].includes(order.status)
  ).length;

  const cancelled = mine.filter(order =>
    ['cancelled','cancellation','cancellation_requested'].includes(order.status)
  ).length;

  return [
    {key:'all',label:'My Orders',count:mine.length},
    {key:'to-ship',label:'To Ship',count:toShip},
    {key:'to-receive',label:'To Receive',count:toReceive},
    {key:'to-review',label:'To Review',count:toReview},
    {key:'return',label:'Return',count:returned},
    {key:'cancelled',label:'Cancellation',count:cancelled}
  ];
}

function renderCustomerDashboard() {
  if (!currentUser) return renderAuth('login');

  const cards = accountStatusCards();
  const recent = getRecentlyViewedProducts();

  $('#authContent').innerHTML = `
    <div class="customer-dashboard">

      <section class="customer-profile-card">
        <div class="customer-profile-avatar">
          ${escapeHtml((currentUser.name || 'U').charAt(0).toUpperCase())}
        </div>
        <div>
          <p class="eyebrow">MY PROFILE</p>
          <h2>${escapeHtml(currentUser.name || 'Customer')}</h2>
          <p>${escapeHtml(currentUser.email || currentUser.phone || '')}</p>
          <small>${escapeHtml(currentUser.phone || '')}${currentUser.district ? ` · ${escapeHtml(currentUser.district)}` : ''}</small>
        </div>
      </section>

      <div class="customer-dashboard-heading">
        <div>
          <p class="eyebrow">MY DASHBOARD</p>
          <h3>আপনার shopping overview</h3>
        </div>
      </div>

      <div class="customer-status-rail" id="customerStatusRail">
        ${cards.map(card => `
          <button
            type="button"
            class="customer-status-card"
            data-account-filter="${escapeHtml(card.key)}"
          >
            <strong>${card.count}</strong>
            <span>${escapeHtml(card.label)}</span>
          </button>
        `).join('')}
      </div>

      <section class="recently-viewed-section">
        <div class="customer-dashboard-heading">
          <div>
            <p class="eyebrow">RECENTLY VIEWED</p>
            <h3>আপনি যেগুলো দেখেছেন</h3>
          </div>
        </div>

        <div class="recently-viewed-rail" id="recentlyViewedRail">
          ${recent.length
            ? recent.map(product => `
              <article class="recently-viewed-card">
                <div class="recently-viewed-image">
                  <img
                    src="${escapeHtml(primaryProductImage(product))}"
                    alt="${escapeHtml(product.name)}"
                    loading="lazy"
                  >
                </div>
                <div class="recently-viewed-info">
                  <h4>${escapeHtml(product.name)}</h4>
                  <strong>${money(product.price)}</strong>
                </div>
              </article>
            `).join('')
            : '<div class="empty-state">আপনি এখনও কোনো product দেখেননি।</div>'
          }
        </div>
      </section>

      <div class="customer-dashboard-actions">
        <button class="primary-button" data-action="my-orders">আমার অর্ডার</button>
        ${currentUser.role === 'admin'
          ? '<button class="dark-button" data-action="open-admin">অ্যাডমিন প্যানেল</button>'
          : ''}
        <button class="outline-button" data-action="logout">লগআউট</button>
      </div>
    </div>
  `;

  setupCustomerDashboardSlider();
}

function setupCustomerDashboardSlider() {
  const rails = [
    document.querySelector('#customerStatusRail'),
    document.querySelector('#recentlyViewedRail')
  ].filter(Boolean);

  rails.forEach(rail => {
    if (rail.children.length < 2 || rail.dataset.sliderReady === '1') return;

    rail.dataset.sliderReady = '1';
    let direction = 1;

    rail.addEventListener('pointerdown', () => {
      rail.dataset.manual = '1';
      clearInterval(rail._autoSlide);
    });

    rail.addEventListener('pointerup', () => {
      rail.dataset.manual = '0';
      startAutoSlide(rail);
    });

    const startAutoSlide = target => {
      clearInterval(target._autoSlide);

      target._autoSlide = setInterval(() => {
        if (target.dataset.manual === '1') return;

        const step = target.clientWidth * 0.86;
        const max = target.scrollWidth - target.clientWidth;

        if (target.scrollLeft >= max - 5) direction = -1;
        if (target.scrollLeft <= 5) direction = 1;

        target.scrollBy({
          left: direction * step,
          behavior: 'smooth'
        });
      }, 3000);
    };

    startAutoSlide(rail);
  });
}

/* Replace old logged-in account screen */
const originalRenderAuth = renderAuth;
renderAuth = function(mode = 'login') {
  if (currentUser) {
    renderCustomerDashboard();
    return;
  }
  originalRenderAuth(mode);
};

/* Dashboard status filters */
document.addEventListener('click', event => {
  const filterButton = event.target.closest('[data-account-filter]');
  if (!filterButton || !currentUser) return;

  const filter = filterButton.dataset.accountFilter;
  accountOrderFilter = filter === 'all' ? '' : filter;
  renderOrders();
  openModal('ordersModal');
});

/* Track products viewed from any product card */
document.addEventListener('click', event => {
  const card = event.target.closest('.product-card');
  if (!card) return;

  const idSource =
    card.querySelector('[data-add]')?.dataset.add ||
    card.querySelector('[data-buy-now]')?.dataset.buyNow;

  if (idSource) rememberRecentlyViewedProduct(idSource);
});

if (!window.__myOrdersBackBound) {
  window.__myOrdersBackBound = true;

  document.addEventListener('click', event => {
    const back = event.target.closest('[data-action="my-orders-back"]');
    if (!back) return;

    accountOrderFilter = '';
    closeModal('ordersModal');
    renderCustomerDashboard();
  });
}

/* STEP 4 — CUSTOMER ↔ ADMIN MESSAGING */
async function getAdminProfiles() {
  const client = window.laibaSupabase;
  if (!client) return [];

  const result = await client.rpc('get_admin_contact');

  if (result.error) {
    console.error('Admin contact load failed:', result.error);
    return [];
  }

  return (result.data || []).map(admin => ({
    ...admin,
    name: admin.name?.trim() || 'Ziyana Shop Support'
  }));
}

async function getMessagingUserId() {
  const client = window.laibaSupabase;
  if (!client) return null;

  const result = await client.auth.getUser();
  return result.data?.user?.id || null;
}

async function loadMessagesForUser(otherUserId) {
  const client = window.laibaSupabase;
  const userId = await getMessagingUserId();
  if (!client || !userId || !otherUserId) return [];

  const result = await client
    .from('messages')
    .select('*')
    .or(
      `and(sender_id.eq.${userId},recipient_id.eq.${otherUserId}),and(sender_id.eq.${otherUserId},recipient_id.eq.${userId})`
    )
    .order('created_at', {ascending:true});

  if (result.error) {
    showToast(result.error.message || 'Message load হয়নি');
    return [];
  }

  return result.data || [];
}

async function sendMessageToAdmin(body) {
  const client = window.laibaSupabase;
  const userId = await getMessagingUserId();
  if (!client || !userId) return showToast('Message দিতে Supabase email login প্রয়োজন');

  const admins = await getAdminProfiles();
  const admin = admins[0];

  if (!admin) return showToast('Admin account পাওয়া যায়নি');

  const text = String(body || '').trim();
  if (!text) return showToast('Message লিখুন');

  const result = await client.from('messages').insert({
    sender_id: userId,
    recipient_id: admin.id,
    body:text
  });

  if (result.error) return showToast(result.error.message || 'Message পাঠানো যায়নি');

  showToast('Admin-কে message পাঠানো হয়েছে');
  await renderCustomerMessages(admin);
}

async function renderCustomerMessages(admin = null) {
  const box = document.querySelector('#customerMessageBox');
  if (!box) return;

  const admins = admin ? [admin] : await getAdminProfiles();
  const selectedAdmin = admins[0];

  if (!selectedAdmin) {
    box.innerHTML = '<div class="empty-state">Admin contact পাওয়া যায়নি।</div>';
    return;
  }

  const messages = await loadMessagesForUser(selectedAdmin.id);

  await window.laibaSupabase
    ?.rpc('mark_messages_read', {p_sender_id:selectedAdmin.id});

  box.innerHTML = `
    <div class="customer-message-header">
      <div>
        <p class="eyebrow">ADMIN SUPPORT</p>
        <h3>${escapeHtml(selectedAdmin.name || 'Admin')}</h3>
      </div>
      <span>${messages.filter(message => message.sender_id !== currentUser.id && !message.read_at).length ? 'New' : ''}</span>
    </div>

    <div class="customer-message-thread" id="customerMessageThread">
      ${messages.length
        ? messages.map(message => `
          <div class="customer-message ${message.sender_id === currentUser.id ? 'mine' : 'theirs'}">
            <p>${escapeHtml(message.body)}</p>
            <small>${new Date(message.created_at).toLocaleString('bn-BD')}</small>
          </div>
        `).join('')
        : '<div class="empty-state">Admin-কে আপনার প্রশ্ন লিখে পাঠান।</div>'
      }
    </div>

    <form id="customerMessageForm" class="customer-message-form">
      <textarea name="message" rows="2" maxlength="4000" placeholder="Admin-কে message লিখুন..." required></textarea>
      <button class="primary-button" type="submit">Send message</button>
    </form>
  `;
}

async function renderAdminMessages() {
  const box = document.querySelector('#adminMessageBox');
  if (!box) return;

  const client = window.laibaSupabase;
  if (!client || !currentUser?.id) {
    box.innerHTML = '<div class="empty-state">Supabase admin login প্রয়োজন।</div>';
    return;
  }

  const result = await client
    .from('messages')
    .select('sender_id,recipient_id,body,created_at,read_at')
    .order('created_at', {ascending:false});

  if (result.error) {
    box.innerHTML = `<div class="empty-state">${escapeHtml(result.error.message || 'Messages load হয়নি')}</div>`;
    return;
  }

  const rows = result.data || [];
  const customerIds = [...new Set(
    rows
      .map(message => message.sender_id === currentUser.id ? message.recipient_id : message.sender_id)
      .filter(Boolean)
  )];

  const profiles = customerIds.length
    ? (await client.from('profiles').select('id,name,phone').in('id', customerIds)).data || []
    : [];

  const profileMap = new Map(profiles.map(profile => [profile.id, profile]));

  const conversations = customerIds.map(customerId => {
    const customerRows = rows
      .filter(message =>
        (message.sender_id === currentUser.id && message.recipient_id === customerId) ||
        (message.sender_id === customerId && message.recipient_id === currentUser.id)
      )
      .sort((a,b) => new Date(a.created_at) - new Date(b.created_at));

    const last = customerRows[customerRows.length - 1];
    const unread = customerRows.filter(message =>
      message.recipient_id === currentUser.id && !message.read_at
    ).length;

    return {customerId, profile:profileMap.get(customerId), last, unread};
  }).sort((a,b) =>
    new Date(b.last?.created_at || 0) - new Date(a.last?.created_at || 0)
  );

  box.innerHTML = conversations.length
    ? conversations.map(item => `
      <button
        type="button"
        class="admin-message-customer"
        data-admin-message-customer="${escapeHtml(item.customerId)}"
      >
        <span>
          <b>${escapeHtml(item.profile?.name || 'Customer')}</b>
          <small>${escapeHtml(item.profile?.phone || item.profile?.email || '')}</small>
        </span>
        <span>
          ${item.unread ? `<strong>${item.unread}</strong>` : ''}
          <small>${escapeHtml(item.last?.body || '')}</small>
        </span>
      </button>
    `).join('')
    : '<div class="empty-state">এখনও কোনো customer message নেই।</div>';
}

async function openAdminConversation(customerId) {
  const client = window.laibaSupabase;
  if (!client || !customerId || !currentUser?.id) return;

  const profiles = await client
    .from('profiles')
    .select('id,name,phone')
    .eq('id', customerId)
    .limit(1);

  const customer = profiles.data?.[0];
  if (!customer) return showToast('Customer পাওয়া যায়নি');

  const messages = await loadMessagesForUser(customerId);

  const unread = messages.filter(message =>
    message.recipient_id === currentUser.id && !message.read_at
  );

  if (unread.length) {
    await client
      .from('messages')
      .update({read_at:new Date().toISOString()})
      .eq('sender_id', customerId)
      .eq('recipient_id', currentUser.id)
      .is('read_at', null);
  }

  const content = `
    <div class="panel-heading">
      <p class="eyebrow">CUSTOMER MESSAGE</p>
      <h2>${escapeHtml(customer.name || 'Customer')}</h2>
      <p>${escapeHtml(customer.phone || customer.email || '')}</p>
    </div>

    <div class="customer-message-thread admin-thread">
      ${messages.length
        ? messages.map(message => `
          <div class="customer-message ${message.sender_id === currentUser.id ? 'mine' : 'theirs'}">
            <p>${escapeHtml(message.body)}</p>
            <small>${new Date(message.created_at).toLocaleString('bn-BD')}</small>
          </div>
        `).join('')
        : '<div class="empty-state">কোনো message নেই।</div>'
      }
    </div>

    <form id="adminMessageReplyForm" class="customer-message-form">
      <input type="hidden" name="recipientId" value="${escapeHtml(customerId)}">
      <textarea name="message" rows="2" maxlength="4000" placeholder="Customer-কে reply লিখুন..." required></textarea>
      <button class="primary-button" type="submit">Reply পাঠান</button>
    </form>
  `;

  $('#ordersContent').innerHTML = content;
  openModal('ordersModal');
}

async function sendAdminMessage(form) {
  const client = window.laibaSupabase;
  if (!client || !currentUser?.id) return showToast('Supabase admin login প্রয়োজন');

  const data = Object.fromEntries(new FormData(form));
  const recipientId = String(data.recipientId || '').trim();
  const body = String(data.message || '').trim();

  if (!recipientId || !body) return showToast('Message লিখুন');

  const profile = await client
    .from('profiles')
    .select('role')
    .eq('id', recipientId)
    .limit(1);

  if (profile.data?.[0]?.role !== 'customer') {
    return showToast('শুধু customer-কে message পাঠানো যাবে');
  }

  const result = await client.from('messages').insert({
    sender_id: currentUser.id,
    recipient_id: recipientId,
    body
  });

  if (result.error) return showToast(result.error.message || 'Reply পাঠানো যায়নি');

  showToast('Customer-কে reply পাঠানো হয়েছে');
  await openAdminConversation(recipientId);
}

document.addEventListener('submit', event => {
  if (event.target.id === 'customerMessageForm') {
    event.preventDefault();
    void sendMessageToAdmin(new FormData(event.target).get('message'));
  }

  if (event.target.id === 'adminMessageReplyForm') {
    event.preventDefault();
    void sendAdminMessage(event.target);
  }
});

document.addEventListener('click', event => {
  const customerMessageCard = event.target.closest('[data-action="customer-messages"]');
  if (customerMessageCard) {
    event.preventDefault();
    event.stopPropagation();
    const target = document.querySelector('#customerMessageBox');
    if (target) {
      target.scrollIntoView({behavior:'smooth', block:'center'});
      void renderCustomerMessages();
    }
    return;
  }

  const adminCustomer = event.target.closest('[data-admin-message-customer]');
  if (adminCustomer) {
    event.preventDefault();
    event.stopPropagation();
    void openAdminConversation(adminCustomer.dataset.adminMessageCustomer);
  }
});

/* STEP 4 — MESSAGE CARDS + UI INTEGRATION */
async function refreshCustomerMessageSummary() {
  if (!currentUser || currentUser.role === 'admin') return;

  const card = document.querySelector('[data-action="customer-messages"]');
  if (!card) return;

  const admins = await getAdminProfiles();
  const admin = admins[0];
  if (!admin) return;

  const messages = await loadMessagesForUser(admin.id);
  const unread = messages.filter(message =>
    message.recipient_id === currentUser.id && !message.read_at
  ).length;

  const count = card.querySelector('[data-message-count]');
  if (count) {
    count.textContent = unread ? `${unread} new` : 'No new';
  }
}

function injectCustomerMessageCard() {
  if (!currentUser || currentUser.role === 'admin') return;

  const dashboard = document.querySelector('.customer-dashboard');
  if (!dashboard) return;

  if (dashboard.querySelector('[data-action="customer-messages"]')) return;

  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'customer-message-dashboard-card';
  card.setAttribute('data-action', 'customer-messages');

  card.innerHTML = `
    <span class="customer-message-icon">✉</span>
    <span class="customer-message-copy">
      <small>ADMIN SUPPORT</small>
      <strong>Admin Message</strong>
      <em data-message-count>No new</em>
    </span>
    <span class="customer-message-arrow">→</span>
  `;

  const statusRail = dashboard.querySelector('#customerStatusRail');
  if (statusRail?.parentNode) {
    statusRail.parentNode.insertBefore(card, statusRail.nextSibling);
  } else {
    dashboard.prepend(card);
  }

  void refreshCustomerMessageSummary();
}

if (!window.__customerMessageDashboardWrapped) {
  window.__customerMessageDashboardWrapped = true;

  const baseRenderCustomerDashboard = renderCustomerDashboard;

  renderCustomerDashboard = function() {
    baseRenderCustomerDashboard();
    requestAnimationFrame(() => injectCustomerMessageCard());
  };
}

async function openCustomerMessagePanel() {
  if (!currentUser) return openAuth('login');

  const admins = await getAdminProfiles();
  const admin = admins[0];

  if (!admin) {
    return showToast('Admin contact পাওয়া যায়নি');
  }

  $('#ordersContent').innerHTML = `
    <div class="panel-heading">
      <p class="eyebrow">ADMIN SUPPORT</p>
      <h2>${escapeHtml(admin.name || 'Ziyana Shop Support')}</h2>
      <p>আপনার প্রশ্ন বা সমস্যার message এখানে পাঠাতে পারবেন।</p>
    </div>

    <div id="customerMessageBox" class="customer-message-panel">
      <div class="empty-state">Messages loading...</div>
    </div>
  `;

  openModal('ordersModal');
  await renderCustomerMessages(admin);
}

async function openAdminMessagesPanel() {
  const unread = document.querySelector('[data-admin-message-unread]')?.textContent || '0';

  $('#ordersContent').innerHTML = `
    <div class="panel-heading">
      <p class="eyebrow">MESSAGES</p>
      <h2>Customer messages</h2>
      <p>${escapeHtml(unread)} unread message${String(unread) === '1' ? '' : 's'}.</p>
    </div>

    <div class="admin-message-inbox" id="adminMessageBox">
      <div class="empty-state">Messages loading...</div>
    </div>
  `;

  openModal('ordersModal');
  await renderAdminMessages();
}

async function injectAdminMessageCard() {
  const root = document.querySelector('#adminContent');
  if (!root || root.querySelector('[data-admin-message-card]')) return;

  const client = window.laibaSupabase;
  if (!client || !currentUser?.id || currentUser.role !== 'admin') return;

  const result = await client
    .from('messages')
    .select('id,sender_id,recipient_id,read_at')
    .eq('recipient_id', currentUser.id)
    .is('read_at', null);

  const unread = result.error ? 0 : (result.data || []).length;

  const section = document.createElement('section');
  section.className = 'admin-section admin-message-dashboard-card admin-dashboard-tile is-collapsed';
  section.dataset.adminMessageCard = '1';
  section.dataset.adminTileReady = '1';

  section.innerHTML = `
    <h3>Messages</h3>
    <p class="admin-message-card-subtitle">Customer support inbox</p>
    <span class="admin-message-unread" data-admin-message-unread>${unread}</span>
  `;

  root.appendChild(section);
}

if (!window.__adminMessageDashboardWrapped) {
  window.__adminMessageDashboardWrapped = true;

  const baseRenderAdmin = renderAdmin;

  renderAdmin = function() {
    baseRenderAdmin();
    requestAnimationFrame(() => {
      void injectAdminMessageCard();
    });
  };
}

/* Customer message card click */
document.addEventListener('click', event => {
  const card = event.target.closest('[data-action="customer-messages"]');
  if (!card) return;

  event.preventDefault();
  event.stopImmediatePropagation();
  void openCustomerMessagePanel();
}, true);

/* Admin messages card click */
document.addEventListener('click', event => {
  const card = event.target.closest('[data-admin-message-card]');
  if (!card || event.target.closest('button,input,textarea,select,a')) return;

  event.preventDefault();
  event.stopImmediatePropagation();
  void openAdminMessagesPanel();
}, true);

/* Refresh message badges */
if (!window.__messageBadgeRefreshStarted) {
  window.__messageBadgeRefreshStarted = true;

  setInterval(() => {
    if (!currentUser) return;

    if (currentUser.role === 'admin') {
      void injectAdminMessageCard();
    } else {
      void refreshCustomerMessageSummary();
    }
  }, 5000);
}

/* STEP 5 — INCOMPLETE ORDERS */
function isIncompleteOrder(order) {
  return !['delivered', 'cancelled', 'returned'].includes(order.status);
}

function getIncompleteOrders(list = orders) {
  return (list || []).filter(isIncompleteOrder);
}

function injectCustomerIncompleteOrderCard() {
  if (!currentUser || currentUser.role === 'admin') return;

  const dashboard = document.querySelector('.customer-dashboard');
  if (!dashboard || dashboard.querySelector('[data-account-filter="incomplete"]')) return;

  const count = getIncompleteOrders(getCustomerOrders()).length;
  const rail = dashboard.querySelector('#customerStatusRail');
  if (!rail) return;

  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'customer-status-card customer-incomplete-card';
  card.dataset.accountFilter = 'incomplete';

  card.innerHTML = `
    <strong>${count}</strong>
    <span>Incomplete Orders</span>
  `;

  rail.prepend(card);
}

function injectAdminIncompleteOrderCard() {
  if (!currentUser || currentUser.role !== 'admin') return;

  const root = document.querySelector('#adminContent');
  if (!root || root.querySelector('[data-admin-incomplete-orders]')) return;

  const count = getIncompleteOrders(orders).length;

  const card = document.createElement('section');
  card.className = 'admin-section admin-dashboard-tile is-collapsed';
  card.dataset.adminIncompleteOrders = '1';
  card.dataset.adminTileReady = '1';

  card.innerHTML = `
    <h3>Incomplete Orders</h3>
    <p class="admin-message-card-subtitle">
      Pending · Confirmed · Shipped
    </p>
    <span class="admin-message-unread admin-incomplete-count">
      ${count}
    </span>
  `;

  root.appendChild(card);
}

async function openAdminIncompleteOrders() {
  if (!currentUser || currentUser.role !== 'admin') return;

  const incomplete = getIncompleteOrders(orders).slice().reverse();

  $('#ordersContent').innerHTML = `
    <div class="panel-heading">
      <p class="eyebrow">ORDER CONTROL</p>
      <h2>Incomplete Orders</h2>
      <p>${incomplete.length}টি incomplete order বর্তমানে চলছে।</p>
    </div>

    <div class="order-list">
      ${
        incomplete.length
          ? incomplete.map(order => `
              <article class="order-card">
                <div>
                  <b>#${escapeHtml(order.id)} · ${escapeHtml(order.customer?.name || 'Customer')}</b>
                  <small>${escapeHtml(order.createdAt || '')}</small>
                </div>

                <span class="status ${escapeHtml(order.status || '')}">
                  ${escapeHtml(order.statusLabel || order.status || '')}
                </span>

                <strong>${money(order.total)}</strong>

                <p>
                  ${(order.items || []).map(item =>
                    `${escapeHtml(item.name)} × ${item.quantity}`
                  ).join(', ')}
                </p>

                <button
                  type="button"
                  class="outline-button"
                  data-view-order="${escapeHtml(order.id)}"
                >Full details</button>

                <select data-order-status="${escapeHtml(order.id)}">
                  <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
                  <option value="confirmed" ${order.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                  <option value="shipped" ${order.status === 'shipped' ? 'selected' : ''}>Shipped</option>
                  <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                  <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                  <option value="returned" ${order.status === 'returned' ? 'selected' : ''}>Returned</option>
                </select>
              </article>
            `).join('')
          : '<div class="empty-state">কোনো incomplete order নেই।</div>'
      }
    </div>
  `;

  openModal('ordersModal');
}

/* Keep the customer incomplete card after every dashboard render */
if (!window.__customerIncompleteDashboardWrapped) {
  window.__customerIncompleteDashboardWrapped = true;

  const currentCustomerDashboardRenderer = renderCustomerDashboard;

  renderCustomerDashboard = function() {
    currentCustomerDashboardRenderer();
    requestAnimationFrame(() => {
      injectCustomerIncompleteOrderCard();
    });
  };
}

/* Keep the admin incomplete card after every admin render */
if (!window.__adminIncompleteDashboardWrapped) {
  window.__adminIncompleteDashboardWrapped = true;

  const currentAdminRenderer = renderAdmin;

  renderAdmin = function() {
    currentAdminRenderer();
    requestAnimationFrame(() => {
      injectAdminIncompleteOrderCard();
    });
  };
}

/* Open customer incomplete orders */
document.addEventListener('click', event => {
  const card = event.target.closest('[data-account-filter="incomplete"]');
  if (!card || !currentUser || currentUser.role === 'admin') return;

  event.preventDefault();
  event.stopImmediatePropagation();

  accountOrderFilter = 'incomplete';
  renderOrders();
  openModal('ordersModal');
}, true);

/* Open admin incomplete orders */
document.addEventListener('click', event => {
  const card = event.target.closest('[data-admin-incomplete-orders]');
  if (!card || event.target.closest('button,input,textarea,select,a')) return;

  event.preventDefault();
  event.stopImmediatePropagation();
  void openAdminIncompleteOrders();
}, true);

/* Refresh incomplete counts */
if (!window.__incompleteOrderRefreshStarted) {
  window.__incompleteOrderRefreshStarted = true;

  setInterval(() => {
    if (!currentUser) return;

    if (currentUser.role === 'admin') {
      injectAdminIncompleteOrderCard();
    } else {
      injectCustomerIncompleteOrderCard();
    }
  }, 3000);
}


/* TRANSACTIONAL INVENTORY STATUS UPDATE */
async function handleAdminOrderStatusChange(order, select) {
  const client = window.laibaSupabase;

  if (!client || currentUser?.role !== 'admin') {
    if (select) select.value = order?.status || 'pending';
    return showToast('Admin Supabase session প্রয়োজন');
  }

  const cloudId = String(order.cloudId || '');
  if (!cloudId.includes('-')) {
    if (select) select.value = order.status || 'pending';
    return showToast('Order এখনো cloud-এ sync হয়নি');
  }

  const previousStatus = order.status;
  const nextStatus = select.value;

  if (previousStatus === nextStatus) return;

  select.disabled = true;

  const result = await client.rpc('admin_update_order_status', {
    p_order_id:cloudId,
    p_new_status:nextStatus
  });

  select.disabled = false;

  if (result.error) {
    select.value = previousStatus;
    return showToast(result.error.message || 'Order status update হয়নি');
  }

  const updated = result.data || {};

  order.status = updated.status || nextStatus;
  order.statusLabel = updated.status_label || order.statusLabel;
  order.stockDeducted = Boolean(updated.stock_deducted);
  order.stockRestored = Boolean(updated.stock_restored);

  write('laiba_orders', orders);

  /* Refresh authoritative cloud stock/settings + orders. */
  try {
    await loadCloudState();
  } catch (error) {
    console.warn('Cloud inventory refresh failed:', error);
  }

  try {
    await loadCloudOrders();
  } catch (error) {
    console.warn('Cloud order refresh failed:', error);
  }

  renderGifts();
  renderProducts();
  renderAdmin();

  showToast('Order status ও stock update হয়েছে');
}

/* FINAL HEADER ORDERS HANDLER */
(function fixHeaderOrdersButton() {
  const button = document.querySelector('#ordersButton');
  if (!button) return;

  const freshButton = button.cloneNode(true);
  button.replaceWith(freshButton);

  freshButton.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    if (!currentUser) {
      openAuth('login');
      return;
    }

    accountOrderFilter = '';

    const list = currentUser.role === 'admin'
      ? orders
      : getCustomerOrders();

    const title = currentUser.role === 'admin'
      ? 'Orders'
      : 'My Orders';

    $('#ordersContent').innerHTML = `
      <div class="panel-heading">
        <p class="eyebrow">${currentUser.role === 'admin' ? 'ORDER CONTROL' : 'MY ORDERS'}</p>
        <h2>${title}</h2>
        <p>${list.length}টি order পাওয়া গেছে।</p>
      </div>

      ${
        list.length
          ? `<div class="order-list">
              ${list.slice().reverse().map(order => `
                <article class="order-card">
                  <div>
                    <b>Order #${escapeHtml(String(order.id))}</b>
                    <small>${escapeHtml(order.createdAt || '')}</small>
                  </div>

                  <span class="status ${escapeHtml(order.status || '')}">
                    ${escapeHtml(order.statusLabel || order.status || '')}
                  </span>

                  <strong>${money(order.total)}</strong>

                  <p>
                    ${(order.items || []).map(item =>
                      `${escapeHtml(item.name)} × ${item.quantity}`
                    ).join(', ')}
                  </p>

                  ${
                    currentUser.role === 'admin'
                      ? `
                        <button
                          type="button"
                          class="outline-button"
                          data-view-order="${escapeHtml(String(order.id))}"
                        >Full details</button>

                        <select data-order-status="${escapeHtml(String(order.id))}">
                          <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
                          <option value="confirmed" ${order.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                          <option value="shipped" ${order.status === 'shipped' ? 'selected' : ''}>Shipped</option>
                          <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                          <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                          <option value="returned" ${order.status === 'returned' ? 'selected' : ''}>Returned</option>
                        </select>
                      `
                      : ''
                  }

                  ${
                    order.trackingUrl
                      ? `<a class="tracking-button" href="${escapeHtml(order.trackingUrl)}" target="_blank" rel="noopener">Courier tracking খুলুন</a>`
                      : ''
                  }
                </article>
              `).join('')}
            </div>`
          : '<div class="empty-state">এখনও কোনো order নেই।</div>'
      }
    `;

    openModal('ordersModal');
  });
})();

/* HOME INITIAL BOOT */
(function initHomePage() {
  if (window.__ziyanaHomeBooted) return;
  window.__ziyanaHomeBooted = true;

  const renderHome = () => {
    try { renderHero(); } catch (error) { console.warn('Hero render failed:', error); }
    try { renderCategories(); } catch (error) { console.warn('Category render failed:', error); }
    try { renderCampaignBanner(); } catch (error) { console.warn('Campaign banner render failed:', error); }
    try { renderAds(); } catch (error) { console.warn('Campaign cards render failed:', error); }
    try { renderGifts(); } catch (error) { console.warn('Gift render failed:', error); }
    try { renderProducts(); } catch (error) { console.warn('Product sections render failed:', error); }
    try { updateCart(); } catch (error) { console.warn('Cart render failed:', error); }
  };

  renderHome();

  if (window.laibaSupabase) {
    setTimeout(() => {
      void loadCloudState()
        .then(() => renderHome())
        .catch(error => console.warn('Initial cloud state load failed:', error));
    }, 0);
  }
})();


/* FINAL SUPABASE PASSWORD FLOWS */
(function setupPasswordFlows() {
  if (window.__ziyanaPasswordFlowsReady) return;
  window.__ziyanaPasswordFlowsReady = true;

  const client = window.laibaSupabase;

  const resetRedirectUrl = () => {
    const url = new URL(window.location.href);
    url.hash = '';
    url.search = '';
    return url.toString();
  };

  const ensureModal = (id, html) => {
    let modal = document.querySelector(`#${id}`);

    if (!modal) {
      modal = document.createElement('div');
      modal.id = id;
      modal.className = 'modal form-modal';
      modal.hidden = true;
      modal.innerHTML = html;
      document.body.appendChild(modal);
    }

    return modal;
  };

  const openForgotRecovery = () => {
    const modal = ensureModal(
      'passwordRecoveryModal',
      `
        <button type="button" class="modal-close" data-password-modal-close>×</button>

        <div class="panel-heading">
          <p class="eyebrow">PASSWORD RECOVERY</p>
          <h2>নতুন password সেট করুন</h2>
          <p>আপনার নতুন password দুবার লিখুন।</p>
        </div>

        <form id="passwordRecoveryForm" class="stack-form">
          <input
            name="password"
            type="password"
            autocomplete="new-password"
            minlength="6"
            placeholder="নতুন password"
            required
          >

          <input
            name="confirmPassword"
            type="password"
            autocomplete="new-password"
            minlength="6"
            placeholder="নতুন password আবার লিখুন"
            required
          >

          <button class="primary-button" type="submit">
            Password update করুন
          </button>
        </form>
      `
    );

    const close = modal.querySelector('[data-password-modal-close]');
    if (close && !close.dataset.bound) {
      close.dataset.bound = '1';
      close.addEventListener('click', () => closeModal('passwordRecoveryModal'));
    }

    const form = modal.querySelector('#passwordRecoveryForm');

    if (form && !form.dataset.bound) {
      form.dataset.bound = '1';

      form.addEventListener('submit', async event => {
        event.preventDefault();

        if (!client) {
          return showToast('Supabase connection পাওয়া যায়নি');
        }

        const data = Object.fromEntries(new FormData(form));
        const password = String(data.password || '');
        const confirmPassword = String(data.confirmPassword || '');

        if (password.length < 6) {
          return showToast('Password কমপক্ষে 6 characters হতে হবে');
        }

        if (password !== confirmPassword) {
          return showToast('দুইটি password একই নয়');
        }

        const button = form.querySelector('button[type="submit"]');
        if (button) {
          button.disabled = true;
          button.textContent = 'Updating...';
        }

        try {
          const {error} = await client.auth.updateUser({
            password
          });

          if (error) throw new Error(error.message);

          closeModal('passwordRecoveryModal');

          history.replaceState(
            {},
            document.title,
            window.location.pathname
          );

          showToast('Password সফলভাবে পরিবর্তন হয়েছে ✓');

          const sessionResult = await client.auth.getUser();
          const authUser = sessionResult.data?.user;

          if (authUser) {
            const profileResult = await client
              .from('profiles')
              .select('*')
              .eq('id', authUser.id)
              .single();

            const profile = profileResult.data || {};

            currentUser = {
              id: authUser.id,
              name: profile.name || authUser.email || '',
              email: authUser.email || '',
              phone: profile.phone || '',
              address: profile.address || '',
              district: profile.district || '',
              password: '',
              role: profile.role || 'customer'
            };

            write('laiba_current_user', currentUser);

            if (currentUser.role === 'admin') {
              renderAdmin();
            } else {
              renderCustomerDashboard();
            }
          }

        } catch (error) {
          showToast(error.message || 'Password update হয়নি');
        } finally {
          if (button) {
            button.disabled = false;
            button.textContent = 'Password update করুন';
          }
        }
      });
    }

    openModal('passwordRecoveryModal');
  };

  const sendForgotPasswordEmail = async () => {
    if (!client) {
      return showToast('Supabase connection পাওয়া যায়নি');
    }

    const input = document.querySelector('#authForm [name="identifier"]');
    const email = String(input?.value || '').trim().toLowerCase();

    if (!email || !email.includes('@')) {
      return showToast('Forgot Password-এর জন্য আগে email address দিন');
    }

    try {
      const {error} = await client.auth.resetPasswordForEmail(email, {
        redirectTo: resetRedirectUrl()
      });

      if (error) throw new Error(error.message);

      showToast('Password reset email পাঠানো হয়েছে ✓');
    } catch (error) {
      console.error('Password reset email failed:', error);
      showToast(error.message || 'Reset email পাঠানো যায়নি');
    }
  };

  const openChangePassword = () => {
    if (!currentUser) return openAuth('login');

    const modal = ensureModal(
      'changePasswordModal',
      `
        <button type="button" class="modal-close" data-change-password-close>×</button>

        <div class="panel-heading">
          <p class="eyebrow">ACCOUNT SECURITY</p>
          <h2>পাসওয়ার্ড পরিবর্তন</h2>
          <p>Email, current password এবং নতুন password দিন।</p>
        </div>

        <form id="changePasswordForm" class="stack-form">
          <input
            name="email"
            type="email"
            value="${escapeHtml(currentUser.email || '')}"
            autocomplete="username"
            placeholder="Email"
            required
          >

          <input
            name="currentPassword"
            type="password"
            autocomplete="current-password"
            placeholder="Current password"
            required
          >

          <input
            name="newPassword"
            type="password"
            autocomplete="new-password"
            minlength="6"
            placeholder="New password"
            required
          >

          <input
            name="confirmPassword"
            type="password"
            autocomplete="new-password"
            minlength="6"
            placeholder="New password আবার লিখুন"
            required
          >

          <button class="primary-button" type="submit">
            Password পরিবর্তন করুন
          </button>
        </form>
      `
    );

    const close = modal.querySelector('[data-change-password-close]');
    if (close && !close.dataset.bound) {
      close.dataset.bound = '1';
      close.addEventListener('click', () => closeModal('changePasswordModal'));
    }

    const form = modal.querySelector('#changePasswordForm');

    if (form && !form.dataset.bound) {
      form.dataset.bound = '1';

      form.addEventListener('submit', async event => {
        event.preventDefault();

        const data = Object.fromEntries(new FormData(form));

        const email = String(data.email || '').trim().toLowerCase();
        const currentPassword = String(data.currentPassword || '');
        const newPassword = String(data.newPassword || '');
        const confirmPassword = String(data.confirmPassword || '');

        if (!email || !email.includes('@')) {
          return showToast('সঠিক email দিন');
        }

        if (!currentPassword) {
          return showToast('Current password দিন');
        }

        if (newPassword.length < 6) {
          return showToast('New password কমপক্ষে 6 characters হতে হবে');
        }

        if (newPassword !== confirmPassword) {
          return showToast('New password দুটো একই নয়');
        }

        if (currentPassword === newPassword) {
          return showToast('New password আলাদা হতে হবে');
        }

        if (!client) {
          return showToast('Supabase connection পাওয়া যায়নি');
        }

        const button = form.querySelector('button[type="submit"]');

        if (button) {
          button.disabled = true;
          button.textContent = 'Checking...';
        }

        try {
          /*
            Current password verification:
            signInWithPassword confirms that the supplied email +
            current password belong to the authenticated account.
          */
          const signInResult = await client.auth.signInWithPassword({
            email,
            password: currentPassword
          });

          if (signInResult.error) {
            throw new Error('Current password সঠিক নয়');
          }

          if (
            currentUser?.email &&
            email !== String(currentUser.email).toLowerCase()
          ) {
            throw new Error('এই email আপনার account-এর email নয়');
          }

          if (button) button.textContent = 'Updating...';

          const updateResult = await client.auth.updateUser({
            password: newPassword
          });

          if (updateResult.error) {
            throw new Error(updateResult.error.message);
          }

          closeModal('changePasswordModal');

          showToast('Password সফলভাবে পরিবর্তন হয়েছে ✓');

        } catch (error) {
          console.error('Change password failed:', error);
          showToast(error.message || 'Password পরিবর্তন হয়নি');
        } finally {
          if (button) {
            button.disabled = false;
            button.textContent = 'Password পরিবর্তন করুন';
          }
        }
      });
    }

    openModal('changePasswordModal');
  };

  /*
    New login Forgot Password action.
  */
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-action="forgot-password"]');

    if (!button) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    void sendForgotPasswordEmail();
  }, true);

  /*
    Logged-in profile password change.
  */
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-action="change-password"]');

    if (!button) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    openChangePassword();
  }, true);

  /*
    Supabase sends the user back to the application with a
    PASSWORD_RECOVERY auth event after the email link is opened.
  */
  if (client) {
    client.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setTimeout(openForgotRecovery, 0);
      }
    });
  }
})();

/* CUSTOMER DASHBOARD ACTION CLEANUP */
(function normalizeCustomerDashboardActions() {
  if (window.__ziyanaCustomerDashboardActionsReady) return;
  window.__ziyanaCustomerDashboardActionsReady = true;

  function apply() {
    if (!currentUser) return;

    const actions = document.querySelector('.customer-dashboard-actions');
    if (!actions) return;

    const oldOrdersButton = actions.querySelector('[data-action="my-orders"]');
    if (oldOrdersButton) oldOrdersButton.remove();

    if (!actions.querySelector('[data-action="change-password"]')) {
      const passwordButton = document.createElement('button');
      passwordButton.type = 'button';
      passwordButton.className = 'outline-button';
      passwordButton.dataset.action = 'change-password';
      passwordButton.textContent = 'পাসওয়ার্ড পরিবর্তন';

      actions.prepend(passwordButton);
    }
  }

  const original = renderCustomerDashboard;

  renderCustomerDashboard = function() {
    original();
    setTimeout(apply, 0);
  };

  setTimeout(apply, 0);
})();

/* =========================================================
   CHECKOUT AS A REAL PAGE VIEW
   ========================================================= */
(function setupCheckoutPageView() {
  if (window.__ziyanaCheckoutPageReady) return;
  window.__ziyanaCheckoutPageReady = true;

  function ensureCheckoutPage() {
    let page = document.querySelector('#checkoutPage');

    if (!page) {
      page = document.createElement('main');
      page.id = 'checkoutPage';
      page.innerHTML = `
        <div class="checkout-page-shell">
          <div class="checkout-page-topbar">
            <button
              type="button"
              class="checkout-back-button"
              data-checkout-back
            >← শপিংয়ে ফিরে যান</button>

            <div class="checkout-page-brand">
              <span class="brand-mark">Z</span>
              <strong>ziyanashop</strong>
            </div>
          </div>

          <div id="checkoutPageContent"></div>
        </div>
      `;

      document.body.appendChild(page);
    }

    const oldContent = document.querySelector('#checkoutModal #checkoutContent');
    const pageContent = document.querySelector('#checkoutPageContent');

    if (oldContent && pageContent && oldContent.parentElement !== pageContent) {
      pageContent.appendChild(oldContent);
    }

    return page;
  }

  window.closeCheckoutPage = function() {
    const page = document.querySelector('#checkoutPage');

    document.body.classList.remove('checkout-page-active');

    if (page) page.hidden = true;

    window.scrollTo({top:0, behavior:'smooth'});
  };

  document.addEventListener('click', event => {
    const back = event.target.closest('[data-checkout-back]');
    if (!back) return;

    event.preventDefault();
    closeCheckoutPage();
  }, true);

  /*
    Replace the old popup checkout with the page view.
  */
  window.openCheckout = function() {
    if (!cart.length) {
      return showToast('আগে কিছু পণ্য ব্যাগে যোগ করুন');
    }

    const drawer = $('#cartDrawer');
    if (drawer) drawer.classList.remove('open');

    const page = ensureCheckoutPage();

    renderCheckout(captureCheckoutDraft());
    ensureCheckoutRegionField();

    page.hidden = false;
    document.body.classList.add('checkout-page-active');

    document.querySelectorAll('.modal').forEach(modal => {
      modal.hidden = true;
    });

    const overlay = $('#overlay');
    if (overlay) overlay.hidden = true;

    window.scrollTo({top:0, behavior:'instant'});
  };

  /*
    Make the normal closeModal('checkoutModal') return to Home
    when any old code still calls it.
  */
  const originalCloseModal = closeModal;

  window.closeModal = function(id = activeModal) {
    if (id === 'checkoutModal' && document.body.classList.contains('checkout-page-active')) {
      return closeCheckoutPage();
    }

    return originalCloseModal(id);
  };

  /*
    Route any legacy checkout open call to the real page.
  */
  setTimeout(() => {
    ensureCheckoutPage();
  }, 0);
})();

/* CHECKOUT MOBILE + SUMMARY CONTROL HOTFIX V2 */
(function installCheckoutHotfixV2() {
  if (window.__ziyanaCheckoutHotfixV2) return;
  window.__ziyanaCheckoutHotfixV2 = true;

  function isCheckoutPageActive() {
    return Boolean(
      document.body?.classList.contains('checkout-page-active') &&
      document.getElementById('checkoutPage')
    );
  }

  function getCheckoutDraftSafe() {
    try {
      if (typeof captureCheckoutDraft === 'function') {
        return captureCheckoutDraft();
      }
    } catch (error) {
      console.error('Checkout draft capture failed:', error);
    }
    return checkoutDraft;
  }

  function rerenderCheckoutSafe() {
    try {
      renderCheckout(getCheckoutDraftSafe());
    } catch (error) {
      console.error('Checkout re-render failed:', error);
    }

    try {
      if (typeof ensureCheckoutRegionField === 'function') {
        ensureCheckoutRegionField();
      }
    } catch (error) {
      console.error('Checkout region refresh failed:', error);
    }
  }

  function findCartItem(id) {
    if (!Array.isArray(cart)) return null;
    return cart.find(item => String(item.id) === String(id)) || null;
  }

  document.addEventListener('click', function checkoutSummaryControlHotfix(event) {
    if (!isCheckoutPageActive()) return;

    const control = event.target.closest(
      '[data-summary-minus], [data-summary-plus], [data-summary-remove]'
    );

    if (!control) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const id =
      control.getAttribute('data-summary-minus') ||
      control.getAttribute('data-summary-plus') ||
      control.getAttribute('data-summary-remove');

    const item = findCartItem(id);
    if (!item) return;

    if (control.hasAttribute('data-summary-minus')) {
      item.quantity = Math.max(0, Number(item.quantity || 0) - 1);
    } else if (control.hasAttribute('data-summary-plus')) {
      item.quantity = Math.max(0, Number(item.quantity || 0) + 1);
    } else if (control.hasAttribute('data-summary-remove')) {
      item.quantity = 0;
    }

    if (Number(item.quantity || 0) <= 0) {
      const index = cart.indexOf(item);
      if (index >= 0) cart.splice(index, 1);
    }

    try {
      saveState();
    } catch (error) {
      console.error('Checkout cart save failed:', error);
    }

    try {
      updateCart();
    } catch (error) {
      console.error('Cart UI update failed:', error);
    }

    try {
      renderGifts();
    } catch (error) {
      console.error('Gift UI update failed:', error);
    }

    try {
      renderProducts();
    } catch (error) {
      console.error('Product UI update failed:', error);
    }

    if (!cart.length) {
      try {
        if (typeof window.closeCheckoutPage === 'function') {
          window.closeCheckoutPage();
        }
      } catch (error) {
        console.error('Checkout close failed:', error);
      }
      return;
    }

    rerenderCheckoutSafe();
  }, true);
})();




/* PRODUCT DETAIL BUY NOW - DETAILS VIEW ONLY */
(function installProductDetailBuyNow() {
  if (window.__ziyanaBuyNowDetailsOnlyReady) return;
  window.__ziyanaBuyNowDetailsOnlyReady = true;

  function addBuyNowOnlyInsideDetails() {
    const addButtons = Array.from(
      document.querySelectorAll('.modal button, [role="dialog"] button')
    ).filter(button => {
      const text = (button.textContent || '').replace(/\s+/g, ' ').trim();
      return text === 'ব্যাগে যোগ করুন';
    });

    addButtons.forEach(addButton => {
      if (addButton.parentElement?.querySelector('.product-buy-now-button')) return;

      const buyNow = document.createElement('button');
      buyNow.type = 'button';
      buyNow.className = 'primary-button product-buy-now-button';
      buyNow.textContent = 'Buy Now';

      addButton.insertAdjacentElement('afterend', buyNow);

      buyNow.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        addButton.click();

        setTimeout(() => {
          try {
            if (typeof window.openCheckout === 'function') {
              window.openCheckout();
            }
          } catch (error) {
            console.error('Buy Now checkout failed:', error);
          }
        }, 150);
      });
    });

    // Remove any accidental Buy Now buttons outside the details/modal view.
    document
      .querySelectorAll('.product-buy-now-button')
      .forEach(button => {
        const insideDetails =
          button.closest('.modal') ||
          button.closest('[role="dialog"]');

        if (!insideDetails) button.remove();
      });
  }

  addBuyNowOnlyInsideDetails();

  const observer = new MutationObserver(() => {
    addBuyNowOnlyInsideDetails();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();

/* PRODUCT DETAILS BUTTON HOVER - FORCE HOME STYLE */
(function forceProductDetailsButtonHover() {
  if (window.__ziyanaProductDetailsButtonHoverReady) return;
  window.__ziyanaProductDetailsButtonHoverReady = true;

  function styleButton(button) {
    if (!button || button.dataset.homeButtonStyleApplied === '1') return;

    button.dataset.homeButtonStyleApplied = '1';

    const normal = () => {
      button.style.setProperty('background', '#ffffff', 'important');
      button.style.setProperty('color', '#111111', 'important');
      button.style.setProperty('border', '1px solid #111111', 'important');
      button.style.setProperty('box-shadow', 'none', 'important');
    };

    const hover = () => {
      button.style.setProperty('background', '#111111', 'important');
      button.style.setProperty('color', '#ffffff', 'important');
      button.style.setProperty('border', '1px solid #111111', 'important');
      button.style.setProperty('box-shadow', 'none', 'important');
    };

    normal();

    button.addEventListener('mouseenter', hover);
    button.addEventListener('mouseleave', normal);

    button.addEventListener('focus', normal);
    button.addEventListener('blur', normal);
  }

  function scan() {
    document.querySelectorAll('.modal button, [role="dialog"] button').forEach(button => {
      const text = (button.textContent || '').replace(/\s+/g, ' ').trim();

      if (
        text === 'ব্যাগে যোগ করুন' ||
        text === 'Buy Now'
      ) {
        styleButton(button);
      }
    });
  }

  scan();

  new MutationObserver(scan).observe(document.body, {
    childList: true,
    subtree: true
  });
})();

