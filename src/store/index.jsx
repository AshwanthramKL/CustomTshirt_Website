import { proxy } from "valtio";

// Whatever is defined in here can be accessed throughout the entire application
const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "/threejs.png",
});

export default state;
