import normal from "./light";
import dark from "./dark";

const themes = {
  normal,
  dark,
};

export default function getTheme(theme) {
  return themes[theme];
}
