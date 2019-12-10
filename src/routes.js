import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history", // Use browser history
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("./componentes/Courses"),
        },
        {
            path: "/courses",
            name: "Courses",
            component: () => import("./componentes/Courses")
        },
        {
            path: "/courses/:idCli",
            name: "Course Details",
            component: () => import("./componentes/Course")
        }
    ]
});

export default router;