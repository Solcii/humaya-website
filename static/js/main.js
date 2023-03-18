// ** ========== Website Data ========== **
const data = {
  menu: [
    { name: "¿Quiénes somos?", link: "#" },
    { name: "Productos", link: "#" },
    { name: "Locales", link: "#" },
    { name: "Contacto", link: "#" },
    { name: "Recetas", link: "#" },
  ],
  slider: {
    title: "Humaya",
    description:
      "Los productos HUMAYA son elaborados desde hace más de 50 años fiel a las tradiciones familiares y sabores caseros, acompañándote en los momentos más importantes de la vida",
    link: {
      anchor: "#about-us",
      content: "Conocenos",
    },
  },
  quality: {
    title: "La mejor calidad para vos",
    advantages: [
      {
        description: "100% orgánico",
        image_name: "static/images/organic.png",
      },
      {
        description: "sin tacc",
        image_name: "static/images/no_tacc.png",
      },
      {
        description: "sin conservantes",
        image_name: "static/images/no_preservatives.png",
      },
    ],
  },
  products: {
    title: "Productos",
    catalogue: [
      {
        name: "Dulce de leche tradicional",
        description:
          "Elaboración artesanal de principio a fin, con un sabor intenso, receta tradicional.",
        presentation: "Presentación en frasco de vidrio de 580gr",
        image_name: "static/images/products/product_1.png",
        nutritional_info: {
          portion: "Cada 100gr contiene:",
          table:[
            {
                name: 'Calorías',
                info: '291Kcal'
            },
            {
                name: 'Proteínas',
                info: '7g'
            },
            {
                name: 'Grasas Totales',
                info: '7g'
            },
            {
                name: 'Carbohidratos',
                info: '50g'
            },
            {
                name: 'Azúcar',
                info: '42g'
            },
            {
                name: 'Sodio',
                info: '30mg'
            }
          ]
        },
        category: "primary",
      },
      {
        name: "Dulce de leche sin azúcar",
        description:
          "Elaboración artesanal para cuidar tu silueta sin renunciar a nada endulzado naturalmente con stevia.",
        presentation: "Presentación en frasco de vidrio de 580gr y 280gr",
        image_name: "static/images/products/product_2.png",
        nutritional_info: {
          portion: "Cada 100gr contiene:",
          table:[
            {
                name: 'Calorías',
                info: '286Kcal'
            },
            {
                name: 'Proteínas',
                info: '7g'
            },
            {
                name: 'Grasas Totales',
                info: '7g'
            },
            {
                name: 'Carbohidratos',
                info: '55g'
            },
            {
                name: 'Azúcar',
                info: '0g'
            },
            {
                name: 'Sodio',
                info: '42mg'
            }
          ]
        },
        category: "primary",
      },
      {
        name: "Dulce Choconutt",
        description:
          "Elaboración artesanal para el capricho dulce, combinación de dulce de leche, chocolate y pasta de avellanas. Una delicia única.",
        presentation: "Presentación en frasco de vidrio de 280gr",
        image_name: "static/images/products/product_3.png",
        nutritional_info: {
          portion: "Cada 100gr contiene:",
          table:[
            {
                name: 'Calorías',
                info: '299Kcal'
            },
            {
                name: 'Proteínas',
                info: '7g'
            },
            {
                name: 'Grasas Totales',
                info: '6g'
            },
            {
                name: 'Carbohidratos',
                info: '57g'
            },
            {
                name: 'Azúcar',
                info: '50g'
            },
            {
                name: 'Sodio',
                info: '137mg'
            }
          ]
        },
        category: "primary",
      },
      {
        name: "Alfajores de maicena",
        description:
          "Alfajores de dulce con coco rallado, relleno con 2cm de pura dulzura. Pudiendo elegir entre dulce de leche tradicional, light o choconutt.",
        presentation: "Presentación en caja de 6 y 12 alfajores.",
        image_name: "static/images/products/product_4.png",
        nutritional_info: {
          portion: "Cada 75gr (1 alfajor) contiene:",
          table:[
            {
                name: 'Calorías',
                info: '279Kcal'
            },
            {
                name: 'Proteínas',
                info: '11g'
            },
            {
                name: 'Grasas Totales',
                info: '15g'
            },
            {
                name: 'Carbohidratos',
                info: '25g'
            },
            {
                name: 'Azúcar',
                info: '90g'
            },
            {
                name: 'Sodio',
                info: '177mg'
            }
          ]
        },
        category: "processed",
      },
    ],
  },
  about_us: {
    title: "Sobre nosotros",
    description:
      "Somos una empresa familiar dedicada desde hace más de 50 años a la elaboración de productos de calidad con sabor a casero.",
    clients: {
        title: "Nuestros clientes",
        clients_list:[
      {
        description: "Paulina Cocina",
        image_name: "static/images/paulina.jpg",
      },
      {
        description: "Maru Botana",
        image_name: "static/images/botana.jpg",
      },
      {
        description: "Damian Betular",
        image_name: "static/images/betular.jpg",
      },
    ]
}
  },
  contact: {
    title: "Contáctanos",
    description:
      "Déjanos tu consulta y nuestro personal se pondrá en contacto a la brevedad:",
  },
  shops: {
    title: "Encontranos en:",
    direction: "Montes de Oca 2356, CABA",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.0392292867527!2d-58.3705213!3d-34.6537122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334aab78be889%3A0xe808082ff7311cac!2sAv.%20Montes%20de%20Oca%202356%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2ses!4v1679095268623!5m2!1ses!2ses",
  },
  recipes: {
    title: "Recetas",
    description:
      "Descubre las mejores recetas de dulce de leche de la mano de Paulina Cocina.",
    link: "https://www.paulinacocina.net/ingrediente/dulce-de-leche",
    recipes_list: [
      {
        name: "Alfajores marplatenses",
        description:
          "Una deliciosa opción para acompañar las meriendas, ese antojo de media noche o compartir con amigos",
        link: "https://www.paulinacocina.net/como-hacer-alfajores-marplatenses-el-mas-alfajor-de-los-alfajores/20395",
        image_name: "static/images/recipes/alfajor_marplatense.jpg",
      },
      {
        name: "Budín de coco y dulce de leche",
        description:
          "La combinación más clásica, simple y deliciosa del mundo, que no falla nunca.",
        link: "https://www.paulinacocina.net/budin-de-coco-y-dulce-de-leche-una-combinacion-creada-por-los-dioses/20455",
        image_name: "static/images/recipes/budin_coco.jpg",
      },
      {
        name: "Torta Marquise",
        description:
          "Un postre hermoso de la cocina francesa, con una textura y un sabor único que solo una torta de chocolate puede regalarnos.",
        link: "https://www.paulinacocina.net/como-hacer-torta-marquise/25229",
        image_name: "static/images/recipes/marquise.jpg",
      },
    ],
  },
};

function buildBaseSection() {
  const secTitle = document.createElement("h2");
  const mainWrapper = document.createElement("div");
  secTitle.classList.add("section-title");
  mainWrapper.classList.add("section-main-wrapper");
  return { secTitle, mainWrapper };
}

function buildCardWithImageAndText(info){
    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardInfo = document.createElement("p");
    cardImg.setAttribute("src", info.image_name);
    cardImg.setAttribute("alt", info.description);
    cardInfo.textContent = info.description;
    card.classList.add("card");
    card.appendChild(cardImg);
    card.appendChild(cardInfo);
    
    return card
}

// ** ========== Menu ========== **
function buildMenu() {
  const containers = document.querySelectorAll(".nav-bar ul");
  containers.forEach((container) => {
    buildMenuElem(container);
  });
}

function buildMenuElem(container) {
  data.menu.forEach((menu) => {
    const menuElem = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = menu.name;
    link.setAttribute("href", menu.link);
    menuElem.appendChild(link);
    container.appendChild(menuElem);
  });
}

// ** ========== Slider ========== **

function buildSlider() {
  const container = document.querySelector("#slider");
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const link = document.createElement("a");
  title.textContent = data.slider.title;
  description.textContent = data.slider.description;
  link.textContent = data.slider.link.content;
  link.setAttribute("href", data.slider.link.anchor);
  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(link);
}

// ** ========== Quality ========== **

function buildQualityBanner() {
  const container = document.querySelector("#quality");
  const { secTitle, mainWrapper } = buildBaseSection();
  secTitle.textContent = data.quality.title;

  data.quality.advantages.forEach((e) => {

    const card = buildCardWithImageAndText(e)
    mainWrapper.appendChild(card);
  });

  container.appendChild(secTitle);
  container.appendChild(mainWrapper);
}

// ** ========== Products ========== **

function buildProductSection() {
  const container = document.querySelector('#products');
  const { secTitle, mainWrapper } = buildBaseSection();
  secTitle.textContent = data.products.title;

  data.products.catalogue.forEach((e, index) => {
    const productBanner = buildProductBanner(e, index);
    mainWrapper.appendChild(productBanner);
  });

  container.appendChild(secTitle);
  container.appendChild(mainWrapper);
}

function buildProductBanner(product, index){
    const banner = document.createElement('div');
    const productImg = document.createElement('img');
    const productInfoWrapper = document.createElement('div');
    const productName = document.createElement('h3');
    const productDesc = document.createElement('p');
    const productPres = document.createElement('p');
    const seeMoreLink = document.createElement('a');
    const nutritionInfo = buildNutritionalInfoTable(product.nutritional_info, index+1);

    banner.classList.add(product.category, 'product-banner');
    if(index % 2 === 0){
        banner.classList.add('even');
    } else{
        banner.classList.add('odd');
    }

    productInfoWrapper.classList.add('product-info');
    productName.classList.add('product-name');
    productDesc.classList.add('product-description');
    productPres.classList.add('product-presentation');
    seeMoreLink.classList.add('link-btn', 'light');

    productImg.setAttribute('src', product.image_name);
    productImg.setAttribute('alt', product.name);
    productName.textContent = product.name;
    productDesc.textContent = product.description;
    productPres.textContent = product.presentation;
    seeMoreLink.textContent = '+ Info';
    seeMoreLink.setAttribute('href', `#nutritional-info-${index+1}`)
    nutritionInfo.style.display = 'none';

    productInfoWrapper.appendChild(productName);
    productInfoWrapper.appendChild(productDesc);
    productInfoWrapper.appendChild(productPres);
    productInfoWrapper.appendChild(seeMoreLink);
    productInfoWrapper.appendChild(nutritionInfo);

    banner.appendChild(productImg);
    banner.appendChild(productInfoWrapper);

    return banner
}

function buildNutritionalInfoTable(productInfo, index){
    const container = document.createElement('div');
    const title = document.createElement('h4');
    const description = document.createElement('p');
    const table = document.createElement('table');

    container.classList.add('nutritional-info');
    container.setAttribute('id', `nutritional-info-${index}`)
    title.textContent = 'Información nutricional:';
    description.textContent = productInfo.portion;

    productInfo.table.forEach((e) =>{
        const row = document.createElement('tr')
        const rowName = document.createElement('th');
        const rowContent = document.createElement('td')

        rowName.textContent = e.name;
        rowContent.textContent = e.info;
        row.appendChild(rowName);
        row.appendChild(rowContent);
        table.appendChild(row);
    });

    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(table);

    return container;
}

// ** ========== About us ========== **

function buildAboutUsInfo(){
    const container = document.querySelector('#about-us');
    const { secTitle, mainWrapper } = buildBaseSection();
    const description = document.createElement('p');
    const clientsBanner = buildClientsBanner(data.about_us.clients);

    secTitle.textContent = data.about_us.title;
    description.textContent = data.about_us.description;

    mainWrapper.appendChild(description);
    mainWrapper.appendChild(clientsBanner);
    container.appendChild(secTitle);
    container.appendChild(mainWrapper);
}

function buildClientsBanner(clientsInfo){
    const banner = document.createElement('div');
    const bannerTitle = document.createElement('h3');
    banner.classList.add('clients-banner');
    bannerTitle.textContent = clientsInfo.title;
    banner.appendChild(bannerTitle);

    clientsInfo.clients_list.forEach((e)=>{
        const card = buildCardWithImageAndText(e);
        banner.appendChild(card);
    })

    return banner;
}

(function renderWebsite() {
  buildMenu();
  buildSlider();
  buildQualityBanner();
  buildProductSection();
  buildAboutUsInfo();
})();
