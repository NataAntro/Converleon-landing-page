export function restoreSpaRedirect() {
  const { location, history } = window;

  if (location.search[1] !== "/") {
    return;
  }

  const decoded = location.search
    .slice(1)
    .split("&")
    .map((part) => part.replace(/~and~/g, "&"))
    .join("?");

  history.replaceState(null, "", location.pathname.slice(0, -1) + decoded + location.hash);
}
