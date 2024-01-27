import { defineStore } from "pinia";

export const useNotificationStore = defineStore("notification", {
  state: () => {
    return { 
        notifications: [],
        notificationCheck: null,
        travelNotifications:[],
    };
  },
  actions: {
    setNotifications(value) {
      this.$patch((state)=>{
        state.notifications = value
      })
    },


    setTravelNotifications(value) {
      this.$patch((state)=>{
        state.travelNotifications = value
      })
    },

    setNotificationCheck(value){
        this.$patch((state)=>{
          state.notificationCheck = value
        })
    },

  },
  getters: {
    getNotifications(state){
      return state.notifications;
    },
    getNotificationCheck(state) {
      return state.notificationCheck
    },

    getTravelNotifications(state){
      return state.travelNotifications
    }
  },

  persist: true,
});