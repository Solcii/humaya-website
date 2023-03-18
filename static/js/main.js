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
    }
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
        image_name: "static/images\no_tacc.png",
      },
      {
        description: "sin conservantes",
        image_name: "static/images\no_preservatives.png",
      },
    ],
  },
  products: {
    title: "Productos",
    catalogue: {
      primary: [
        {
          name: "Dulce de leche tradicional",
          description:
            "Elaboración artesanal de principio a fin, con un sabor intenso, receta tradicional.",
          presentation: "Presentación en frasco de vidrio de 580gr",
          image_name: "static/images/products/product_1.png",
          nutritional_info: {
            portion: "Cada 100gr contiene:",
            calories: "291Kcal",
            proteines: "7g",
            total_fat: "7g",
            carbos: "50g",
            sugar: "42g",
            sodium: "30mg",
          },
        },
        {
          name: "Dulce de leche sin azúcar",
          description:
            "Elaboración artesanal para cuidar tu silueta sin renunciar a nada endulzado naturalmente con stevia.",
          presentation: "Presentación en frasco de vidrio de 580gr y 280gr",
          image_name: "static/images/products/product_2.png",
          nutritional_info: {
            portion: "Cada 100gr contiene:",
            calories: "286Kcal",
            proteines: "7g",
            total_fat: "7g",
            carbos: "55g",
            sugar: "0g",
            sodium: "42mg",
          },
        },
        {
          name: "Dulce Choconutt",
          description:
            "Elaboración artesanal para el capricho dulce, combinación de dulce de leche, chocolate y pasta de avellanas. Una delicia única.",
          presentation: "Presentación en frasco de vidrio de 280gr",
          image_name: "static/images/products/product_3.png",
          nutritional_info: {
            portion: "Cada 100gr contiene:",
            calories: "299Kcal",
            proteines: "7g",
            total_fat: "6g",
            carbos: "57g",
            sugar: "50g",
            sodium: "137mg",
          },
        },
      ],
      processed: [
        {
          name: "Alfajores de maicena",
          description:
            "Alfajores de dulce con coco rallado, relleno con 2cm de pura dulzura. Pudiendo elegir entre dulce de leche tradicional, light o choconutt.",
          presentation: "Presentación en caja de 6 y 12 alfajores.",
          image_name: "static/images/products/product_4.png",
          nutritional_info: {
            portion: "Cada 75gr (1 alfajor) contiene:",
            calories: "279Kcal",
            proteines: "11g",
            total_fat: "15g",
            carbos: "25g",
            sugar: "90g",
            sodium: "177mg",
          },
        },
      ],
    },
  },
  about_us: {
    title: "Sobre nosotros",
    description:
      "Somos una empresa familiar dedicada desde hace más de 50 años a la elaboración de productos de calidad con sabor a casero.",
    clients: [
      {
        name: "Paulina Cocina",
        image_name: "static/images/paulina.jpg",
      },
      {
        name: "Maru Botana",
        image_name: "static/images/botana.jpg",
      },
      {
        name: "Damian Betular",
        image_name: "static/images/betular.jpg",
      },
    ],
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
        image_name: "static/images\recipes/alfajor_marplatense.jpg",
      },
      {
        name: "Budín de coco y dulce de leche",
        description:
          "La combinación más clásica, simple y deliciosa del mundo, que no falla nunca.",
        link: "https://www.paulinacocina.net/budin-de-coco-y-dulce-de-leche-una-combinacion-creada-por-los-dioses/20455",
        image_name: "static/images\recipes/budin_coco.jpg",
      },
      {
        name: "Torta Marquise",
        description:
          "Un postre hermoso de la cocina francesa, con una textura y un sabor único que solo una torta de chocolate puede regalarnos.",
        link: "https://www.paulinacocina.net/como-hacer-torta-marquise/25229",
        image_name: "static/images\recipes/marquise.jpg",
      },
    ],
  },
};

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
  link.setAttribute('href', data.slider.link.anchor);
  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(link);
}

(function renderWebsite() {
  buildMenu();
  buildSlider()
})();
