const translations = {
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navProducts: "Products",
    navFactory: "Factory",
    navTeam: "Our Team",
    navService: "Our Service",
    navCareer: "Careers",
    navFaq: "FAQ",
    navNews: "News",
    navContact: "Contact Us",

    phoneWhatsapp1: "Phone/WhatsApp (NG)",
    phoneWhatsapp2: "Phone/WhatsApp (CN)",
    email: "Email",
    address: "Address",
    wechat: "WeChat",
    sendMessage: "Send Message",
    allRightsReserved: "All Rights Reserved © 2026 House Plus Africa"
  },

  es: {
    navHome: "Inicio",
    navAbout: "Sobre Nosotros",
    navProducts: "Productos",
    navFactory: "Fábrica",
    navTeam: "Nuestro Equipo",
    navService: "Nuestro Servicio",
    navCareer: "Carreras",
    navFaq: "Preguntas Frecuentes",
    navNews: "Noticias",
    navContact: "Contáctanos",

    phoneWhatsapp1: "Teléfono/WhatsApp (NG)",
    phoneWhatsapp2: "Teléfono/WhatsApp (CN)",
    email: "Correo",
    address: "Dirección",
    wechat: "WeChat",
    sendMessage: "Enviar Mensaje",
    allRightsReserved: "Todos los derechos reservados © 2026 House Plus Africa"
  },

  fr: {
    navHome: "Accueil",
    navAbout: "À Propos",
    navProducts: "Produits",
    navFactory: "Usine",
    navTeam: "Notre Équipe",
    navService: "Notre Service",
    navCareer: "Carrières",
    navFaq: "FAQ",
    navNews: "Nouvelles",
    navContact: "Contactez-Nous",

    phoneWhatsapp1: "Téléphone/WhatsApp (NG)",
    phoneWhatsapp2: "Téléphone/WhatsApp (CN)",
    email: "E-mail",
    address: "Adresse",
    wechat: "WeChat",
    sendMessage: "Envoyer un Message",
    allRightsReserved: "Tous droits réservés © 2026 House Plus Africa"
  },

  zh: {
    navHome: "首页",
    navAbout: "关于我们",
    navProducts: "产品",
    navFactory: "工厂",
    navTeam: "我们的团队",
    navService: "服务",
    navCareer: "招聘",
    navFaq: "常见问题",
    navNews: "新闻",
    navContact: "联系我们",

    phoneWhatsapp1: "电话/WhatsApp（尼日利亚）",
    phoneWhatsapp2: "电话/WhatsApp（中国）",
    email: "邮箱",
    address: "地址",
    wechat: "微信",
    sendMessage: "发送消息",
    allRightsReserved: "版权所有 © 2026 House Plus Africa"
  }
};

let currentLang = "en";

function switchLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-lang-key]").forEach(el => {
    const key = el.getAttribute("data-lang-key");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

function toggleChat() {
  const box = document.getElementById("chatBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

window.onload = function () {
  switchLanguage("en");
};
