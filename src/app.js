
import page from "../node_modules/page/page.mjs";
import { logout } from "./api/user.js";
import { renderMiddleware } from "./middlewares/render.js";
import { userAuth } from "./middlewares/userAuth.js";
import { allView } from "./views/allView.js";
import { createView } from "./views/createView.js";
import { deleteView } from "./views/deleteView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";

function logoutView(){
    logout();
    page.redirect("/");
}

// ---Middlewares---
page(userAuth)
page(renderMiddleware)

page("/", homeView)

page("/login", loginView)
page("/register", registerView)
page("/logout", logoutView)

// ---Show--- 
page("/showAll", allView)

// ---Crud---
page("/create", createView)
page("/details/:id", detailsView)
page("/delete/:id", deleteView)
page("/edit/:id", editView)

// Addons

page.start()