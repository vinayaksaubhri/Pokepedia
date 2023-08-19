import NoInternet from "../components/noInternet";
import useNetworkInfo from "../hooks/useNetworkInfo";
import AuthorizedNavigation from "./authorizedNavigation";
import UnAuthorizedNavigation from "./unAuthorizedNavigation";

const user = true;

const Navigation = () => {
  const [isOnline, onPressReload] = useNetworkInfo();
  if (!isOnline) {
    return <NoInternet onPressReload={onPressReload} />;
  }
  if (user) return <AuthorizedNavigation />;

  return <UnAuthorizedNavigation />;
};
export default Navigation;
