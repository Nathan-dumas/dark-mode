import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(val) {
  const [dark, setDark] = useLocalStorage("dark", val);

  return [dark, setDark];
}
