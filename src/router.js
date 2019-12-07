import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/search",
      name: "search",
      component: () =>
        import(/* webpackChunkName: "search" */ "./views/Search.vue")    },
    {
      path: "/resources",
      name: "resources",
      component: () =>
        import(/* webpackChunkName: "resources" */ "./views/Resources.vue")
    },
    {
      path: "/resourcepiv/:id",
      name: "resourcepivot",
      component: () =>
        import(/* webpackChunkName: "users" */ "./views/ResourcePivot.vue")
    },
    {
      path: "/users",
      name: "users",
      component: () =>
        import(/* webpackChunkName: "users" */ "./views/Users.vue")
    },
    {
      path: "/userpiv/:id",
      name: "userpivot",
      component: () =>
        import(/* webpackChunkName: "users" */ "./views/UserPivot.vue")
    },

    {
      path: "/groups",
      name: "groups",
      component: () => import(/* webpackChunkName: "tags" */ "./views/Groups.vue")
    },
    {
      path: "/grouppiv/:id",
      name: "grouppivot",
      component: () =>
        import(/* webpackChunkName: "users" */ "./views/GroupPivot.vue")
    },
    {
      path: "/tags",
      name: "tags",
      component: () => import(/* webpackChunkName: "tags" */ "./views/Tags.vue")
    },
    {
      path: "/tagpiv/:id",
      name: "tagpivot",
      component: () =>
        import(/* webpackChunkName: "users" */ "./views/TagPivot.vue")
    },
    {
      path: "/pivot",
      name: "pivot",
      component: () => import(/* webpackChunkName: "tags" */ "./views/Pivot.vue")
    }
  ],
  linkActiveClass: "active"
});
