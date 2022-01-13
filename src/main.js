import Navigo from "navigo";
import homepage from "./page/home";
import Header from "./components/header";
import Footer from "./components/footer";
import tuyensinh from "./page/tuyensinh";
import daotao from "./page/daotao";
import tuyendung from "./page/tuyendung";
import goctuyensinh from "./page/goctuyensinh";
import DetailPage from "./page/detail";
import AdminProductPage from "./page/admin/product";
import AdminSignup from "./page/admin/signup";
import AdminSignin from "./page/admin/signin";
import AdminDashboard from "./page/dashboard.js/admin";
import AdminProductEdit from "./page/dashboard.js/productEdit";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#footer").innerHTML = Footer.render();
};
router.on({
    "/": () => {
        // console.log("home page");
        print(homepage.render());
    },
    "/tuyensinh": () => {
        print(tuyensinh.render());
        // console.log("about page");
    },
    "/daotao": () => {
        print(daotao.render());
    },
    "/goctuyensinh": () => {
        print(goctuyensinh.render());
    },
    "/goctuyendung": () => {
        print(tuyendung.render());
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(+id));
    },
    "/admin/product/": () => {
        print(AdminProductPage.render());
    },
    "/admin/signup/": () => {
        print(AdminSignup.render());
    },

    "/admin/signin/": () => {
        print(AdminSignin.render());
    },
    "/admin/dashboard/": () => {
        print(AdminDashboard.render());
    },
    "/admin1/product/:id/edit": ({ data }) => {
        const { id } = data;
        print(AdminProductEdit.render(id));
    },

});
router.resolve();
