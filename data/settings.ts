import SettingsStore from "../assets/icons/settings-store.svg";
import SettingsBookmark from "../assets/icons/settings-bookmark.svg";
import SettingsEmail from "../assets/icons/settings-email.svg";
import SettingsUser from "../assets/icons/settings-user.svg";
import SettingsPassword from "../assets/icons/settings-key.svg";
import SettingsDocument from "../assets/icons/settings-document.svg";
import SettingsPolitics from "../assets/icons/settings-politics.svg";

export const settingsInfoUser = [
  {
    id: "1",
    text: "Post publicados",
    icon: SettingsStore,
  },
  {
    id: "2",
    text: "Post guardados",
    icon: SettingsBookmark,
  },
];

export const settingsInfoProfile = [
  {
    id: "1",
    text: "Correo electronico",
    icon: SettingsEmail,
  },
  {
    id: "2",
    text: "Nombre de usuario",
    icon: SettingsUser,
  },
  {
    id: "3",
    text: "Contraseña",
    icon: SettingsPassword,
  },
];

export const settingsInfoTerms = [
  {
    id: "1",
    text: "Política de Privacidad",
    icon: SettingsPolitics,
  },
  {
    id: "2",
    text: "Términos y Condiciones",
    icon: SettingsDocument,
  },
];
