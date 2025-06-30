import { FaHome } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";


export const links = [
  { icon: <FaHome/>, title: "Anasayfa", path: "/" },
  { icon: <IoCreateOutline />, title: "Oluştur", path: "/ekle" },
  { icon: <FaRegCompass />, title: "Keşfet", path: "/kesfet" },
  { icon: <CiHeart />, title: "Favoriler", path: "/fav" },
  { icon: <CiSettings />, title: "Yardım", path: "/yardim" },
];