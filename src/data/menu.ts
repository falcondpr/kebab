export const MENU_OPTIONS = [
  {
    id: 1,
    name: "Informacion de usuario",
    links: [
      {
        id: 1,
        name: "Post publicados",
        route: "/posts-published",
        icon: "/icons/posts-published-icon.svg",
      },
      {
        id: 2,
        name: "Post guardados",
        route: "/posts-saved",
        icon: "/icons/posts-saved-icon.svg",
      },
    ],
  },
  {
    id: 2,
    name: "Editar perfil",
    links: [
      {
        id: 1,
        name: "Correo electronico",
        route: "/email-address",
        icon: "/icons/email-address-icon.svg",
      },
      {
        id: 2,
        name: "Nombre de usuario",
        route: "/username",
        icon: "/icons/username-icon.svg",
      },
      {
        id: 3,
        name: "Contraseña",
        route: "/password",
        icon: "/icons/password-icon.svg",
      },
    ],
  },
  {
    id: 3,
    name: "Terminos y condiciones",
    links: [
      {
        id: 1,
        name: "Política de Privacidad",
        route: "/politics-privacy",
        icon: "/icons/politics-privacy-icon.svg",
      },
      {
        id: 2,
        name: "Términos y Condiciones",
        route: "/terms-conditions",
        icon: "/icons/terms-conditions-icon.svg",
      },
    ],
  },
];
