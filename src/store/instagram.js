import { atom } from "nanostores";

const staticStore = {
  products: [
    {
      id: 1,
      title: "01 POST",
      description:
        "Post com design atraente e alinhado a sua identidade visual",
      line1: "- Criação de conteúdo estratégico",
      line2: "- Criação de Copy / texto",
      line3: "- Criação de legendas atrativas",
      line4: "+ Criação de design profissional",
      price: 24.9,
    },
    {
      id: 2,
      title: "01 CARROSSEL",
      description:
        "Carrossel com design atraente e alinhado a sua identidade visual",
      line1: "- Criação de conteúdo estratégico",
      line2: "- Criação de Copy / texto",
      line3: "- Criação de legendas atrativas",
      line4: "+ Criação de design profissional",
      price: 44.9,
    },
    {
      id: 3,
      title: "PACOTE 10 POSTS",
      description:
        "10 posts com design atraente e alinhado a sua identidade visual",
      line1: "- Criação de conteúdo estratégico",
      line2: "- Criação de Copy / texto",
      line3: "- Criação de legendas atrativas",
      line4: "+ Criação de design profissional",
      price: 199.9,
    },
    {
      id: 4,
      title: "PACOTE 10 CARROSSÉIS",
      description:
        "10 carrosséis com design atraente e alinhado a sua identidade visual",
      line1: "- Criação de conteúdo estratégico",
      line2: "- Criação de Copy / texto",
      line3: "- Criação de legendas atrativas",
      line4: "+ Criação de design profissional",
      price: 399.9,
    },
    {
      id: 5,
      title: "PACOTE SOCIAL MEDIA",
      description:
        "Calendário de conteúdo + 16 posts e 4 carrosséis + 20 legendas",
      line1: "+ Criação de conteúdo estratégico",
      line2: "+ Criação de Copy / texto",
      line3: "+ Criação de legendas atrativas",
      line4: "+ Criação de design profissional",
      price: 997.9,
    },
    {
      id: 6,
      title: "MONTE UM PACOTE 100% PERSONALIZADO",
      description:
        "Fale com um dos nossos especialistas, juntos encontraremos o pacote ideal para você!!",
      line1: "- Criação de conteúdo estratégico",
      line2: "- Criação de Copy / texto",
      line3: "- Criação de legendas atrativas",
      line4: "+ Criação de design profissional",
      price: 1.1,
    },
  ],
};

export const CheckoutStore = atom(staticStore);
