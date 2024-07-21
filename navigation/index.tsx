import NoInternet from "../components/noInternet";
import useNetworkInfo from "../hooks/useNetworkInfo";
import useUser from "../hooks/useUser";
import AuthorizedNavigation from "./authorizedNavigation";
import UnAuthorizedNavigation from "./unAuthorizedNavigation";

const Navigation = () => {
  const [isOnline, onPressReload] = useNetworkInfo();
  const { isUserLoggedIn } = useUser();
  if (!isOnline) {
    return <NoInternet onPressReload={onPressReload} />;
  }
  if (isUserLoggedIn) return <AuthorizedNavigation />;

  return <UnAuthorizedNavigation />;
};
export default Navigation;
