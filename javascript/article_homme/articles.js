const tu = '/images/tailles/taille_unique.png';
const t36 = '/images/tailles/taille_36.png';
const t37 = '/images/tailles/taille_37.png';
const t38 = '/images/tailles/taille_38.png';
const t39 = '/images/tailles/taille_39.png';
const t40 = '/images/tailles/taille_40.png';
const t41 = '/images/tailles/taille_41.png';
const t42 = '/images/tailles/taille_42.png';
const t43 = '/images/tailles/taille_43.png';
const t44 = '/images/tailles/taille_44.png';
const t45 = '/images/tailles/taille_45.png';
const t46 = '/images/tailles/taille_46.png';
const t48 = '/images/tailles/taille_48.png';
const t50 = '/images/tailles/taille_50.png';
const t52 = '/images/tailles/taille_52.png';
const t54 = '/images/tailles/taille_54.png';
const ts = '/images/tailles/taille_s.png';
const tm = '/images/tailles/taille_m.png';
const tl = '/images/tailles/taille_l.png';
const txl = '/images/tailles/taille_xl.png';
const t2xl = '/images/tailles/taille_2xl.png';
const t3xl = '/images/tailles/taille_3xl.png';

//Jeans - Pantalons
let jean1 = new Article(
    'prêt-à-porter',
    'jean', ['/images/homme/pret-a-porter/jeans/jean1/jean1_main.jpg', '/images/homme/pret-a-porter/jeans/jean1/jean1_1.jpg', '/images/homme/pret-a-porter/jeans/jean1/jean1_2.jpg', '/images/homme/pret-a-porter/jeans/jean1/jean1_3.jpg'],
    'Jean coupe slim',
    'Référence 2274097 / GHG906',
    '59<sup>€99</sup>', [t36, t38, t40, t42, t44, t46, t48, t50, t52, t54],
    'Jean droit taille haute en coton denim extensible. Ouverture par un zip et bouton, denim délavé. 2 poches cavalières devant et 2 poches plaquées au dos. Passants pour ceinture, ceinture ton sur ton à nouer sur la taille. Surpiqûres ton sur ton. Idéal pour un mix de styles',
    'Matière principale : 99% coton, 1% élasthanne</br>Secondaire : 100% coton<br>Température de repassage moyenne / blanchiment interdit',
    '/pages/homme/produits/jean1.html');

let jean2 = new Article(
    'prêt-à-porter',
    'jean', ['/images/homme/pret-a-porter/jeans/jean2/jean2_main.jpg', '/images/homme/pret-a-porter/jeans/jean2/jean2_1.jpg', '/images/homme/pret-a-porter/jeans/jean2/jean2_2.jpg', '/images/homme/pret-a-porter/jeans/jean2/jean2_3.jpg', '/images/homme/pret-a-porter/jeans/jean2/jean2_4.jpg'],
    'Jean coupe droite',
    'Référence 2274087 / GHG908',
    '59<sup>€99</sup>', [t36, t38, t40, t42, t44, t46, t48, t50, t52, t54],
    'Jean denim coupe  regular (droit) 5 poches JACK & JONES. Fermeture boutonnée. Ceinture à passants. Jacron au dos.',
    'Matière : 99% coton, 1% élasthanne</br>Pour l\'entretien, merci de vous référer aux indications figurant sur l\'étiquette du produit',
    '/pages/homme/produits/jean2.html');

let jean3 = new Article(
    'prêt-à-porter',
    'jean', ['/images/homme/pret-a-porter/jeans/jean3/jean3_main.jpg', '/images/homme/pret-a-porter/jeans/jean3/jean3_1.jpg', '/images/homme/pret-a-porter/jeans/jean3/jean3_2.jpg', '/images/homme/pret-a-porter/jeans/jean3/jean3_3.jpg', '/images/homme/pret-a-porter/jeans/jean3/jean3_4.jpg'],
    'Jean en Coolmax',
    'Référence 2273214 / GHD914',
    '49<sup>€99</sup>', [t36, t38, t40, t42, t44, t46, t48, t50, t52, t54],
    'Le denim coolmax allie confort et performance. Il est composé d’une matière moderne qui évacue l’humidité corporelle grâce à sa fibre respirante qui rend le port du jean encore plus attrayant. La matière est très légère et offre la sensation de porter un vrai denim en coton avec un confort exceptionnel.',
    '81% coton, 18% polyester, 1% élasthanne<br>Température de lavage 40° cycle délicat</br>Température de repassage faible / blanchiment interdit<br>Ne pas sécher en tambour',
    '/pages/homme/produits/jean3.html');


//Chemises
let chemise1 = new Article(
    'prêt-à-porter',
    'chemise', ['/images/homme/pret-a-porter/chemises/chemise1/chemise1_main.jpg', '/images/homme/pret-a-porter/chemises/chemise1/chemise1_1.jpg', '/images/homme/pret-a-porter/chemises/chemise1/chemise1_2.jpg', '/images/homme/pret-a-porter/chemises/chemise1/chemise1_3.jpg', '/images/homme/pret-a-porter/chemises/chemise1/chemise1_4.jpg'],
    'Chemise ciel',
    'Référence 2355705 / GHR867',
    '39<sup>€99</sup>', [t36, t38, t40, t42, t44, t46, t48, t50, t52, t54],
    'Manches longues<br>Coupe droite<br>Col classique<br>Pointes du col boutonnées',
    '100% coton</br>Température de lavage 40°<br>Température de repassage moyenne / blanchiment interdit<br>Séchage en tambour faible<br>Pas de nettoyage à sec',
    '/pages/homme/produits/chemise1.html');

let chemise2 = new Article(
    'prêt-à-porter',
    'chemise', ['/images/homme/pret-a-porter/chemises/chemise2/chemise2_main.jpg', '/images/homme/pret-a-porter/chemises/chemise2/chemise2_1.jpg', '/images/homme/pret-a-porter/chemises/chemise2/chemise2_2.jpg', '/images/homme/pret-a-porter/chemises/chemise2/chemise2_3.jpg', '/images/homme/pret-a-porter/chemises/chemise2/chemise2_4.jpg'],
    'Chemise slim pois',
    'Référence 2281751 / GCP897',
    '29<sup>€99</sup>', [t36, t38, t40, t42, t44, t46, t48, t50, t52, t54],
    'Manches longues<br>Coupe droite<br>Col classique<br>Pointes du col boutonnées',
    '100% coton</br>Température de lavage 40°<br>Température de repassage moyenne / blanchiment interdit<br>Séchage en tambour faible<br>Pas de nettoyage à sec',
    '/pages/homme/produits/chemise2.html');

let chemise3 = new Article(
    'prêt-à-porter',
    'chemise', ['/images/homme/pret-a-porter/chemises/chemise3/chemise3_main.jpg', '/images/homme/pret-a-porter/chemises/chemise3/chemise3_1.jpg', '/images/homme/pret-a-porter/chemises/chemise3/chemise3_2.jpg'],
    'Chemise big indigo',
    'Référence 2355705 / GHR867',
    '65<sup>€00</sup>', [t36, t38, t40, t42, t44, t46, t48, t50, t52, t54],
    'Chemise BIG - Indigo<br>Ouverture pressionnée. 2 poches poitrine avec broderies motif éclair ton sur ton en point chaînette.',
    '100% coton</br>Température de lavage 40°<br>Température de repassage moyenne / blanchiment interdit<br>Séchage en tambour faible<br>Pas de nettoyage à sec',
    '/pages/homme/produits/chemise3.html');

//manteaux
let manteau1 = new Article(
    'prêt-à-porter',
    'manteau', ['/images/homme/pret-a-porter/manteaux/manteau1/manteau1_main.jpg', '/images/homme/pret-a-porter/manteaux/manteau1/manteau1_1.jpg', '/images/homme/pret-a-porter/manteaux/manteau1/manteau1_2.jpg', '/images/homme/pret-a-porter/manteaux/manteau1/manteau1_3.jpg'],
    'Doudoune Verveine',
    'Référence 2355705 / GHR867',
    '109<sup>€00</sup>', [t36, t38, t40, t42, t44, t46, t48, t50, t52, t54],
    'Longueur : court<br>Col montant<br>Fermeture zippée<br>Avec capuche',
    '100% polyester</br>Pour l\'entretien, merci de vous référer aux indications figurant sur l\'étiquette du produit.',
    '/pages/homme/produits/manteau1.html');

let manteau2 = new Article(
    'prêt-à-porter',
    'manteau', ['/images/homme/pret-a-porter/manteaux/manteau2/manteau2_main.jpg', '/images/homme/pret-a-porter/manteaux/manteau2/manteau2_1.jpg', '/images/homme/pret-a-porter/manteaux/manteau2/manteau2_2.jpg', '/images/homme/pret-a-porter/manteaux/manteau2/manteau2_3.jpg', '/images/homme/pret-a-porter/manteaux/manteau2/manteau2_4.jpg'],
    'Caban en laine',
    'Référence 2302717 / GBB430',
    '129<sup>€99</sup>', [t36, t38, t40, t42, t44, t46, t48, t50, t52, t54],
    'Longueur : court<br>Col tailleur<br>Fermeture boutonnée',
    'Matière principale : 62% laine, 33% polyester, 3% polyamide, 2% acrylique</br>Pour l\'entretien, merci de vous référer aux indications figurant sur l\'étiquette du produit.',
    '/pages/homme/produits/manteau2.html');

let manteau3 = new Article(
    'prêt-à-porter',
    'manteau', ['/images/homme/pret-a-porter/manteaux/manteau3/manteau3_main.jpg', '/images/homme/pret-a-porter/manteaux/manteau3/manteau3_1.jpg', '/images/homme/pret-a-porter/manteaux/manteau3/manteau3_2.jpg', '/images/homme/pret-a-porter/manteaux/manteau3/manteau3_3.jpg'],
    'Parka à capuche',
    'Référence 2302717 / GBB430',
    '79<sup>€99</sup>', [t36, t38, t40, t42, t44, t46, t48, t50, t52, t54],
    'Longueur : mi-long<br> Col montant<br>Fermeture zippée',
    '100% polyester</br>Pour l\'entretien, merci de vous référer aux indications figurant sur l\'étiquette du produit.',
    '/pages/homme/produits/manteau3.html');

//polos
let polo1 = new Article(
    'prêt-à-porter',
    'polo', ['/images/homme/pret-a-porter/polos/polo1/polo1_main.jpg', '/images/homme/pret-a-porter/polos/polo1/polo1_1.jpg', '/images/homme/pret-a-porter/polos/polo1/polo1_2.jpg', '/images/homme/pret-a-porter/polos/polo1/polo1_3.jpg', '/images/homme/pret-a-porter/polos/polo1/polo1_4.jpg'],
    'Polo marine',
    'Référence 2302717 / GBB430',
    '19<sup>€99</sup>', [ts, tm, tl, txl, t2xl, t3xl],
    'Manches courtes<br>Coupe droite<br>Col polo, chemise',
    '100% coton</br>Température de lavage 40° cycle délicat<br>Température de repassage moyenne / blanchiment interdit<br>Séchage en tambour faible',
    '/pages/homme/produits/polo1.html');

let polo2 = new Article(
    'prêt-à-porter',
    'polo', ['/images/homme/pret-a-porter/polos/polo2/polo2_main.jpg', '/images/homme/pret-a-porter/polos/polo2/polo2_1.jpg', '/images/homme/pret-a-porter/polos/polo2/polo2_2.jpg'],
    'Polo marine',
    'Référence 2302717 / GBB430',
    '19<sup>€99</sup>', [ts, tm, tl, txl, t2xl, t3xl],
    'Manches longues<br>Coupe droite<br>Col polo, chemise',
    '100% coton</br>Température de lavage 40° cycle délicat<br>Température de repassage moyenne / blanchiment interdit<br>Séchage en tambour faible',
    '/pages/homme/produits/polo2.html');

let polo3 = new Article(
    'prêt-à-porter',
    'polo', ['/images/homme/pret-a-porter/polos/polo3/polo3_main.jpg', '/images/homme/pret-a-porter/polos/polo3/polo3_1.jpg', '/images/homme/pret-a-porter/polos/polo3/polo3_2.jpg', '/images/homme/pret-a-porter/polos/polo3/polo3_3.jpg', '/images/homme/pret-a-porter/polos/polo3/polo3_4.jpg'],
    'Polo maille piquée ',
    'Référence 2302717 / GBB430',
    '24<sup>€99</sup>', [ts, tm, tl, txl, t2xl, t3xl],
    'Manches courtes<br>Coupe droite<br>Col polo, chemise',
    '100% coton</br>Température de lavage 40° cycle délicat<br>Température de repassage moyenne / blanchiment interdit<br>Séchage en tambour faible',
    '/pages/homme/produits/polo3.html');


//pulls
let pull1 = new Article(
    'prêt-à-porter',
    'pull', ['/images/homme/pret-a-porter/pulls/pull1/pull1_main.jpg', '/images/homme/pret-a-porter/pulls/pull1/pull1_1.jpg', '/images/homme/pret-a-porter/pulls/pull1/pull1_2.jpg', '/images/homme/pret-a-porter/pulls/pull1/pull1_3.jpg'],
    'Pull maille cotelée',
    'Référence 2302717 / GBB430',
    '29<sup>€99</sup>', [ts, tm, tl, txl, t2xl, t3xl],
    'Manches longues<br>Col montant<br>Fine maille',
    '100% coton</br>Température de lavage 40° cycle délicat<br>Température de repassage moyenne / blanchiment interdit<br>Séchage en tambour faible',
    '/pages/homme/produits/pull1.html');

let pull2 = new Article(
    'prêt-à-porter',
    'pull', ['/images/homme/pret-a-porter/pulls/pull2/pull2_main.jpg', '/images/homme/pret-a-porter/pulls/pull2/pull2_1.jpg', '/images/homme/pret-a-porter/pulls/pull2/pull2_2.jpg', '/images/homme/pret-a-porter/pulls/pull2/pull2_3.jpg', '/images/homme/pret-a-porter/pulls/pull2/pull2_4.jpg'],
    'Pull en coton',
    'Référence 2302717 / GBB430',
    '29<sup>€99</sup>', [ts, tm, tl, txl, t2xl, t3xl],
    'Manches longues<br>Col V<br>Fine maille',
    '100% coton</br>Température de lavage 40° cycle délicat<br>Température de repassage moyenne / blanchiment interdit<br>Séchage en tambour faible',
    '/pages/homme/produits/pull2.html');

let pull3 = new Article(
    'prêt-à-porter',
    'pull', ['/images/homme/pret-a-porter/pulls/pull3/pull3_main.jpg', '/images/homme/pret-a-porter/pulls/pull3/pull3_1.jpg', '/images/homme/pret-a-porter/pulls/pull3/pull3_2.jpg', '/images/homme/pret-a-porter/pulls/pull3/pull3_3.jpg', '/images/homme/pret-a-porter/pulls/pull3/pull3_4.jpg'],
    'Pull côtes Anglaises',
    'Référence 2302717 / GBB430',
    '34<sup>€99</sup>', [ts, tm, tl, txl, t2xl, t3xl],
    'Manches longues<br>Col rond<br>Grosse maille',
    '100% coton</br>Température de lavage 40° cycle délicat<br>Température de repassage moyenne / blanchiment interdit<br>Séchage en tambour faible',
    '/pages/homme/produits/pull3.html');

//Sweats
let sweat1 = new Article(
    'prêt-à-porter',
    'sweat', ['/images/homme/pret-a-porter/sweats/sweat1/sweat1_main.jpg', '/images/homme/pret-a-porter/sweats/sweat1/sweat1_1.jpg', '/images/homme/pret-a-porter/sweats/sweat1/sweat1_2.jpg'],
    'Sweat à capuche',
    'Référence 2302717 / GBB430',
    '29<sup>€99</sup>', [ts, tm, tl, txl, t2xl, t3xl],
    'Poche kangourou<br>Poids: 255-270g/m²',
    '50% coton et 50% polyester pré-rétréci',
    '/pages/homme/produits/sweat1.html');

let sweat2 = new Article(
    'prêt-à-porter',
    'sweat', ['/images/homme/pret-a-porter/sweats/sweat2/sweat2_main.jpg', '/images/homme/pret-a-porter/sweats/sweat2/sweat2_1.jpg', '/images/homme/pret-a-porter/sweats/sweat2/sweat2_2.jpg', '/images/homme/pret-a-porter/sweats/sweat2/sweat2_3.jpg', '/images/homme/pret-a-porter/sweats/sweat2/sweat2_4.jpg'],
    'Sweat zippé à capuche',
    'Référence 2302717 / GBB430',
    '28<sup>€99</sup>', [ts, tm, tl, txl, t2xl, t3xl],
    'Manches longues<br>Fermeture zippée<br>A capuche',
    'Matière principale : 80% coton, 20% polyester<br>Doublure : 100% coton<br>Secondaire : 95% coton, 5% élasthanne<br>Température de lavage 40°',
    '/pages/homme/produits/sweat2.html');

let sweat3 = new Article(
    'prêt-à-porter',
    'sweat', ['/images/homme/pret-a-porter/sweats/sweat3/sweat3_main.jpg', '/images/homme/pret-a-porter/sweats/sweat3/sweat3_1.jpg', '/images/homme/pret-a-porter/sweats/sweat3/sweat3_2.jpg', '/images/homme/pret-a-porter/sweats/sweat3/sweat3_3.jpg', '/images/homme/pret-a-porter/sweats/sweat3/sweat3_4.jpg'],
    'Sweat à capuche imprimé',
    'Référence 2302717 / GBB430',
    '34<sup>€99</sup>', [ts, tm, tl, txl, t2xl, t3xl],
    'Manches longues<br>A enfiler<br>A capuche<br>Motif devant',
    '60% coton, 40% polyester<br>Pour l\'entretien, merci de vous référer aux indications figurant sur l\'étiquette du produit',
    '/pages/homme/produits/sweat3.html');

//T-shirts
let tshirt1 = new Article(
    'prêt-à-porter',
    'tshirt', ['/images/homme/pret-a-porter/tshirts/tshirt1/tshirt1_main.jpg', '/images/homme/pret-a-porter/tshirts/tshirt1/tshirt1_1.jpg', '/images/homme/pret-a-porter/tshirts/tshirt1/tshirt1_2.jpg', '/images/homme/pret-a-porter/tshirts/tshirt1/tshirt1_3.jpg', '/images/homme/pret-a-porter/tshirts/tshirt1/tshirt1_4.jpg'],
    'T-shirt imprimé marron',
    'Référence 2302717 / GBB430',
    '14<sup>€99</sup>', [ts, tm, tl, txl, t2xl, t3xl],
    'Manches courtes<br>Coupe droite<br>Col rond',
    'Matière principale : 100% coton<br>Secondaire : 100% coton<br>Température de lavage 40° cycle délicat<br>Température de repassage moyenne / blanchiment interdit',
    '/pages/homme/produits/tshirt1.html');

let tshirt2 = new Article(
    'prêt-à-porter',
    'tshirt', ['/images/homme/pret-a-porter/tshirts/tshirt2/tshirt2_main.jpg', '/images/homme/pret-a-porter/tshirts/tshirt2/tshirt2_1.jpg', '/images/homme/pret-a-porter/tshirts/tshirt2/tshirt2_2.jpg', '/images/homme/pret-a-porter/tshirts/tshirt2/tshirt2_3.jpg', '/images/homme/pret-a-porter/tshirts/tshirt2/tshirt2_4.jpg'],
    'T-shirt col rond',
    'Référence 2302717 / GBB430',
    '24<sup>€99</sup>', [ts, tm, tl, txl, t2xl, t3xl],
    'Manches courtes<br>Col rond',
    'Matière principale : 100% coton<br>Secondaire : 100% coton<br>Température de lavage 40° cycle délicat<br>Température de repassage moyenne / blanchiment interdit',
    '/pages/homme/produits/tshirt2.html');

let tshirt3 = new Article(
    'prêt-à-porter',
    'tshirt', ['/images/homme/pret-a-porter/tshirts/tshirt3/tshirt3_main.jpg', '/images/homme/pret-a-porter/tshirts/tshirt3/tshirt3_1.jpg', '/images/homme/pret-a-porter/tshirts/tshirt3/tshirt3_2.jpg', '/images/homme/pret-a-porter/tshirts/tshirt3/tshirt3_3.jpg', '/images/homme/pret-a-porter/tshirts/tshirt3/tshirt3_4.jpg'],
    'T-shirt gris',
    'Référence 2302717 / GBB430',
    '19<sup>€99</sup>', [ts, tm, tl, txl, t2xl, t3xl],
    'Manches courtes<br>Col rond',
    'Matière principale : 100% coton<br>Secondaire : 100% coton<br>Température de lavage 40° cycle délicat<br>Température de repassage moyenne / blanchiment interdit',
    '/pages/homme/produits/tshirt3.html');




//Chaussures
let chaussures1 = new Article(
    'accessoires',
    'chaussure', ['/images/homme/accessoires/chaussures/chaussures1/chaussures1_main.jpg', '/images/homme/accessoires/chaussures/chaussures1/chaussures1_1.jpg', '/images/homme/accessoires/chaussures/chaussures1/chaussures1_2.jpg', '/images/homme/accessoires/chaussures/chaussures1/chaussures1_3.jpg', '/images/homme/accessoires/chaussures/chaussures1/chaussures1_4.jpg'],
    'Chuck taylor',
    'Référence 2491390 / GHW256',
    '65<sup>€00</sup>', [t40, t41, t42, t43, t44, t45],
    'Usage sportswear<br>Talon plat<br>Talon plat<br>Hauteur de talon : 1 cm<br>Fermeture : A lacets<br>Finition lisse',
    'Dessus/Tige : 100% toile<br>Doublure : 100% textile<br>Semelle intérieure : 100% textile<br>Semelle extérieure : 100% caoutchouc',
    '/pages/homme/produits/chaussures1.html');

let chaussures2 = new Article(
    'accessoires',
    'chaussure', ['/images/homme/accessoires/chaussures/chaussures2/chaussures2_main.jpg', '/images/homme/accessoires/chaussures/chaussures2/chaussures2_1.jpg', '/images/homme/accessoires/chaussures/chaussures2/chaussures2_2.jpg', '/images/homme/accessoires/chaussures/chaussures2/chaussures2_3.jpg', '/images/homme/accessoires/chaussures/chaussures2/chaussures2_4.jpg'],
    'Baskets cuir marron',
    'Référence 2491390 / GHW256',
    '89<sup>€90</sup>', [t40, t41, t42, t43, t44, t45],
    'Baskets montantes<br>Usage sportswear<br>Talon plat<br>Talon plat<br>Hauteur de talon : 1 cm<br>Fermeture : A lacets<br>Finition lisse',
    'Dessus/Tige : 100% cuir<br>Doublure : 100% textile<br>Semelle intérieure : 100% textile<br>Semelle extérieure : 100% caoutchouc',
    '/pages/homme/produits/chaussures2.html');

let chaussures3 = new Article(
    'accessoires',
    'chaussure', ['/images/homme/accessoires/chaussures/chaussures3/chaussures3_main.jpg', '/images/homme/accessoires/chaussures/chaussures3/chaussures3_1.jpg', '/images/homme/accessoires/chaussures/chaussures3/chaussures3_2.jpg', '/images/homme/accessoires/chaussures/chaussures3/chaussures3_3.jpg'],
    'Baskets Leather',
    'Référence 2491390 / GHW256',
    '99<sup>€90</sup>', [t40, t41, t42, t43, t44, t45],
    'Usage sportswear<br>Talon plat<br>Talon plat<br>Hauteur de talon : 3 cm<br>Fermeture : A lacets<br>Finition lisse',
    'Dessus/Tige : 84% cuir, 16% polyuréthane<br>Doublure : 100% polyester<br>Semelle intérieure : 100% polyester<br>Semelle extérieure : 100% caoutchouc',
    '/pages/homme/produits/chaussures3.html');

//noeuds pap
let noeud1 = new Article(
    'accessoires',
    'noeud', ['/images/homme/accessoires/noeuds/noeud1/noeud1_main.jpg', '/images/homme/accessoires/noeuds/noeud1/noeud1_1.jpg', '/images/homme/accessoires/noeuds/noeud1/noeud1_2.jpg', '/images/homme/accessoires/noeuds/noeud1/noeud1_3.jpg'],
    'Noeud papillon bois',
    'Référence 2491390 / GHW256',
    '24<sup>€90</sup>', [tu],
    'Noeud papillon noué bois design boisé, de la marque Clj Charles Le Jeune. Ensemble comprenant le noeud papillon, la pochette et les boutons de manchette Livré dans un écrin noir Design original très Hipster Dandy Le noeud papillon a le tour de cou qui est réglable',
    'Matière et composition: BOIS',
    '/pages/homme/produits/noeud1.html');

let noeud2 = new Article(
    'accessoires',
    'noeud', ['/images/homme/accessoires/noeuds/noeud2/noeud2_main.jpg', '/images/homme/accessoires/noeuds/noeud2/noeud2_1.jpg'],
    'Noeud papillon navy',
    'Référence 2491390 / GHW256',
    '24<sup>€90</sup>', [tu],
    'Noeud papillon fantaisie<br>Couleurs Dark Navy',
    '100% Laine',
    '/pages/homme/produits/noeud2.html');

let noeud3 = new Article(
    'accessoires',
    'noeud', ['/images/homme/accessoires/noeuds/noeud3/noeud3_main.jpg', '/images/homme/accessoires/noeuds/noeud3/noeud3_1.jpg'],
    'Noeud papillon en métal',
    'Référence 2491390 / GHW256',
    '24<sup>€90</sup>', [tu],
    'Noeud papillon en métal, fabriqué en France.Pour ceux qui aiment afficher leur tempérament et imprimer leur caractère, ce nœud papillon haut de gamme va naturellement devenir un accessoire indispensable. Les adeptes vont l’adorer, les sceptiques vont l’adopter',
    'Composition : Boucle en acier inoxydable, ruban 100% coton',
    '/pages/homme/produits/noeud3.html');

//ceintures
let ceinture1 = new Article(
    'accessoires',
    'ceinture', ['/images/homme/accessoires/ceintures/ceinture1/ceinture1_main.jpg', '/images/homme/accessoires/ceintures/ceinture1/ceinture1_1.jpg'],
    'Ceinture tressée noir',
    'Référence 2491390 / GHW256',
    '19<sup>€90</sup>', [ts, tm, tl, txl],
    'Elégant<br>Durable<br>Extensible<br>Boucle de ceinture carrée',
    'Matière: 100% Polyester',
    '/pages/homme/produits/ceinture1.html');

let ceinture2 = new Article(
    'accessoires',
    'ceinture', ['/images/homme/accessoires/ceintures/ceinture2/ceinture2_main.jpg', '/images/homme/accessoires/ceintures/ceinture2/ceinture2_1.jpg', '/images/homme/accessoires/ceintures/ceinture2/ceinture2_2.jpg'],
    'Ceinture multicolore',
    'Référence 2491390 / GHW256',
    '35<sup>€00</sup>', [ts, tm, tl, txl],
    'Vous aimez allier couleur, originalité et élégance à votre style, la ceinture tressée multicolore est faite pour vous. Inspirée de nos modèles de ceintures tressées élastiques unis, cet accessoire joue avec le relief du tressage chevronné pour mettre en valeur des couleurs tendances et contemporaines.  «La Rotterdam» est une ceinture qui caractérise cette ville moderne et architecturale. Ses couleurs s\'inspirent de ses bâtiments audacieux, de leurs teintes vives et franches et de leurs formes géométriques voire cubiques. ',
    'Composition : 52% élastique et 48% Polypropylène',
    '/pages/homme/produits/ceinture2.html');

let ceinture3 = new Article(
    'accessoires',
    'ceinture', ['/images/homme/accessoires/ceintures/ceinture3/ceinture3_main.jpg', '/images/homme/accessoires/ceintures/ceinture3/ceinture3_1.jpg', '/images/homme/accessoires/ceintures/ceinture3/ceinture3_2.jpg', '/images/homme/accessoires/ceintures/ceinture3/ceinture3_3.jpg'],
    'Ceinture cuir',
    'Référence 2491390 / GHW256',
    '45<sup>€00</sup>', [ts, tm, tl, txl],
    'Ceinture classiques cuir surpiquée, de la marque Robert Charles.',
    'Matière et composition: Cuir<br>Conseils d’entretien: Comme tout accessoire en cuir, il est conseillé de nettoyer le cuir avec un produit nourrissant une fois par an, afin de prévenir les craquelures et garantir la longévité de la ceinture',
    '/pages/homme/produits/ceinture3.html');