import home from "./routes/home";
import auth from "./routes/auth";
import members from "./routes/members";

const routes = {
  '/': home,
  '/auth': auth,
  '/members': members
}

export default routes;