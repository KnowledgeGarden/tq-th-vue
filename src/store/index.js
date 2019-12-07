import Vue from "vue";
import Vuex from "vuex";
import Api from "@/services/Api";
import config from "@/services/config";

const api = Api();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isFetching: false,
    all_data: [],
    text: [],
    tags: [],
    resources: [],
    users: [],
    groups: []
  },
  getters: {
    all: state => state.all_data,
    text: state => state.text,
    resources: state => state.resources,
    tags: state => state.tags,
    pivot: state => state.pivot,
    users: state => state.users,
    groups: state => state.groups,
    resourcepiv: state => state.resourcepiv,
    userpiv: state => state.userpiv,
    tagpiv: state => state.tagpiv,
    grouppiv: state => state.grouppiv,
  },
  mutations: {
    SET_ISFETCHING(state, bool) {
      Vue.set(state, "isFetching", bool);
    },
    SET_TEXT(state, data) {
      Vue.set(state, "text", data);
    },
    SET_RESOURCES(state, data) {
      Vue.set(state, "resources", data);
    },
    SET_USERS(state, data) {
      Vue.set(state, "users", data);
    },
    SET_GROUPS(state, data) {
      Vue.set(state, "groups", data);
    },
    SET_TAGS(state, data) {
      Vue.set(state, "tags", data);
    },
    SET_PIVOT(state, data) {
      Vue.set(state, "pivot", data);
    },
    SET_RESPIVOT(state, data) {
      Vue.set(state, "resourcepiv", data);
    },
    SET_TAGPIVOT(state, data) {
      Vue.set(state, "tagpiv", data);
    },
    SET_USRPIVOT(state, data) {
      Vue.set(state, "userpiv", data);
    },
    SET_GRPPIVOT(state, data) {
      Vue.set(state, "grouppiv", data);
    },
    
    SET_PRIMARY(state, data) {
      Vue.set(state, "all_data", data);
    }
  },
  actions: {
    FETCH_ALL: async (context, payload) => {
      const { offset, count } = payload;
      const query = `${config.APP_ALL}/${offset}/${count}`;
      console.info("httpService", "getAll", " - query: ", query);
      try {
        context.commit("SET_ISFETCHING", true);
        const data = await api.get(query);
        context.commit("SET_PRIMARY", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("getAll error,", e);
        context.commit("SET_ISFETCHING", false);
      }

    },
    FETCH_TEXT: async (context, payload) => {
      const { term, offset, count } = payload;
      const query = `${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}${config.APP_TEXT}/${term}/${offset}/${count}`;
      console.info("httpService", "getText", " - query: ", query);
      try {
        context.commit("SET_ISFETCHING", true);
        const { data } = await api.get(query);
        context.commit("SET_TEXT", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("FETCH_TEXT error,", e);
        context.commit("SET_ISFETCHING", false);
      }
    },
    FETCH_RESOURCES: async (context, payload) => {
      const { offset, count } = payload;
      const query = `${config.APP_RESOURCES}/${offset}/${count}`;
      console.info("httpService", "start", "getResources", " - query: ", query);
      try {
        context.commit("SET_ISFETCHING", true);
        const { data } = await api.get(query);
        context.commit("SET_RESOURCES", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("FETCH_RESOURCES error,", e);
        context.commit("SET_ISFETCHING", false);
      }
    },
    FETCH_USERS: async (context, payload) => {
      const { offset, count } = payload;
      const query = `${config.APP_USERS}/${offset}/${count}`;
      console.info("httpService", "getUsers", " - query: ", query);
      try {
        context.commit("SET_ISFETCHING", true);
        const { data } = await api.get(query);
        context.commit("SET_USERS", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("FETCH_USERS error,", e);
        context.commit("SET_ISFETCHING", false);
      }
    },
    FETCH_GROUPS: async (context, payload) => {
      const { offset, count } = payload;
      const query = `${config.APP_GROUPS}/${offset}/${count}`;
      console.info("httpService", "getGroups", " - query: ", query);
      try {
        context.commit("SET_ISFETCHING", true);
        const { data } = await api.get(query);
        context.commit("SET_GROUPS", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("FETCH_GROUPS error,", e);
        context.commit("SET_ISFETCHING", false);
      }
    },

    FETCH_TAGS: async (context, payload) => {
      const { offset, count } = payload;
      var query = `${config.APP_TAGS}/${offset}/${count}`;
      console.info("httpService", "FETCH_TAGS", " - query: ", query);
      try {
        context.commit("SET_ISFETCHING", true);
        const { data } = await api.get(query);
        context.commit("SET_TAGS", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("FETCH_TAGS error,", e);
        context.commit("SET_ISFETCHING", false);
      }
    },
    FETCH_GROUP_PIV: async (context, payload) => {
      const {id, offset, count} = payload
      var query = `${config.APP_GRP_PIV}/${id}/${offset}/${count}`;
      console.info('GP', query)
      try {
        context.commit("SET_ISFETCHING", true);
        const { data } = await api.get(query);
        context.commit("SET_GRPPIVOT", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("FETCH_GROUP_PIV error,", e);
        context.commit("SET_ISFETCHING", false);
      }
      return context.getters.grouppiv

    },
    FETCH_USER_PIV: async (context, payload) => {
      const {id, offset, count} = payload
      var query = `${config.APP_USR_PIV}/${id}/${offset}/${count}`;
      try {
        context.commit("SET_ISFETCHING", true);
        const { data } = await api.get(query);
        context.commit("SET_USRPIVOT", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("FETCH_USER_PIV error,", e);
        context.commit("SET_ISFETCHING", false);
      }
      return context.getters.userpiv

    },
    FETCH_RESOURCE_PIV: async (context, payload) => {
      const {id, offset, count} = payload
      //const encodedResource = encodeURIComponent(resource);
      const query = `${config.APP_RES_PIV}/${id}/${offset}/${count}`;
      try {
        context.commit("SET_ISFETCHING", true);
        const { data } = await api.get(query);
        context.commit("SET_RESPIVOT", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("FETCH_USER_PIV error,", e);
        context.commit("SET_ISFETCHING", false);
      }
      return context.getters.resourcepiv

    },
    FETCH_TAG_PIVOT: async (context, payload) => {
      const { id, offset, count } = payload;
      var query = `${config.APP_TAG_PIV}/${id}/${offset}/${count}`;
      console.info('TPQ', query)
      try {
        context.commit("SET_ISFETCHING", true);
        const { data } = await api.get(query);
        console.info('TPQA', data)
        context.commit("SET_TAGPIVOT", data);
        context.commit("SET_ISFETCHING", false);
      } catch (e) {
        console.error("FETCH_TAG_PIVOT error,", e);
        context.commit("SET_ISFETCHING", false);
      }
      return context.getters.tagpiv
    }
  }
});
