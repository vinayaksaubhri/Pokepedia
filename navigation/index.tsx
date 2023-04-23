import AuthorizedNavigation from "./authorizedNavigation";
import UnAuthorizedNavigation from "./unAuthorizedNavigation";

const user = true;

const Navigation = () => {
  if (user) return <AuthorizedNavigation />;

  return <UnAuthorizedNavigation />;
};
export default Navigation;
