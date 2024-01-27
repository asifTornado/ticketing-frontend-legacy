import { createRouter, createWebHashHistory, createWebHistory  } from 'vue-router'

import { useAuthStore } from '../stores/authentication'
import { useMainStore } from '../stores/store'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [

    {
      path:'/ticketing',
      name:'ticketing',
      component:() => import('../views/ticketingMain.vue'),
      children:[


        // {
        //   path: 'power/report',
        //   name:'powerReport',
        //   component: () => import('../views/ticketing/report.vue')
          
        // },


        {
          path: 'power/dashboard',
          name:'powerDashboard',
          component: () => import('../views/ticketing/dashboard.vue')
          
        },


        
        {
          path: 'general/manage',
          name:'generalManage',
          component: () => import("../views/ticketing/general.vue")

        },



      




        {
          path: 'show-user',
          name:'showUser',
          component: () => import("../views/users/user.vue")

        },

    

        {
          path: 'newTicket',
          name:'newTicketing',
          component: () => import('../views/ticketing/newTicket.vue')
          
        },


        {
          path: 'normal',
          name:'normal',
          component: () => import('../views/ticketing/normal.vue')
          
        },
        

    

        {
          path: 'ticketDetails/:id',
          name:'ticketDetails',
          component: () => import('../views/ticketing/ticketDetails.vue')
        },


        {
          path: 'myTickets',
          name:'myTickets',
          component: () => import('../views/ticketing/normal.vue')
        },


       


       




        {
          path: 'profile',
          name:'profile',
          component: () => import('../views/ticketing/profile.vue')
        },


     


     






        {
          path: 'guide',
          name:'guide',
          component: () => import('../views/ticketing/faq.vue')
        },



     

       






        {
          path: 'power/analytics',
          name:'powerAnalytics',
          component: () => import('../views/ticketing/analytics.vue')
        },


       









        
 

    {
      path: 'blog/insertArticle',
      name:'insertArticle',
      component: () => import('../views/blog/insertArticle.vue')
    },


    {
      path: 'blog/knowledge',
      name:'knowledge',
      component: () => import('../views/blog/knowledgeBase.vue')
    },


    {
      path: 'blog/article/:id',
      name:'article',
      component: () => import('../views/blog/article.vue')
    },

 


   


    {
      path: 'systemAdmin/manage',
      name: 'systemAdminManage',
   
      component: () => import('../views/ticketing/systemAdminManage.vue')
    },



  


    

   


    {
      path: 'leader/manage',
      name: 'leaderManage',
    
      component: () => import('../views/ticketing/leaderManage.vue')
    },


    {
      path: 'leader/myTeam',
      name: 'leaderMyTeam',
    
      component: () => import('../views/ticketing/myTeam.vue')
    },

 

    {
      path: 'users',
      name: 'users',
 
      component: () => import('../views/users/main.vue')
    },

    {
      path: 'support/assist',
      name: 'supportAssits',

      component: () => import('../views/ticketing/supportAssist.vue')
    },



  

    {
      path: 'users/update/:id',
      name: 'updateUser',

      component: () => import('../views/users/update.vue')
    },


  
    {
      path: 'admin/users',
      name: 'adminUsers',

      component: () => import('../views/users/main.vue')
    },


    
    {
      path: 'locations',
      name: 'locations',

      component: () => import('../views/locations/main.vue')
    },


    {
      path: 'locations/add',
      name: 'addLocation',

      component: () => import('../views/locations/add.vue'),
      meta: { transition: 'slide-left' },
    },
    {
      path: 'locations/update/:id',
      name: 'updateLocation',

      component: () => import('../views/locations/update.vue')
    },
   
    


   

   

    {
      path: 'teams',
      name: 'teams',

      component: () => import('../views/ticketing/teams.vue')
    },


    {
      path: 'teams/add',
      name: 'teamsAdd',

      component: () => import('../views/ticketing/addTeam.vue')
    },


    {
      path: 'teams/update/:id',
      name: 'teamsUpdate',
     
      component: () => import('../views/ticketing/updateTeam.vue')
    },


    
    

    { path: '/uploads/*/*/', name: 'IgnoreUploads', component: null },




         
      ]
    },



   
   
   
        


       

 
      
    
 
    {
      path: '/login',
      name: 'login',
  
      component: () => import('../views/Login.vue'),
      
    },
    {
      path: '/register',
      name: 'register',
    
      component: () => import('../views/Register.vue')
    },




   


   
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path == 'http://localhost:5000/uploads/*') {

    window.location.href = to.fullPath;
  } else {

    next();
  }
});



router.beforeEach((to, from) => {
  var store = useAuthStore();
  var mainStore = useMainStore();
  var user = store.getUser
  var path = to.path;
  var root = path.split('/').at(1);
  var userTypesWithoutAdmin = ["Approver", "Watcher", "Requester"]
  var adminPaths = ["/admin/allRequests", "/admin/files", "/admin/users", "/admin/users/add", "/admin/users/update", "/admin/workflows", "/admin/workflows/add", "/admin/departments", "/admin/departments/add", "/admin/departments/update", "/admin/groups", "/admin/groups/add", "/admin/groups/update", "/admin"]
  var mutualPaths = ["/makeRequest", "/myRequests"];
  var approverAndAdminPaths = ["/currentRequests", "/signature"]
  var userTypes = ["Admin", "Approver", "Requester", "Watcher", "Master Admin"]
  var adminAndApprover = ["Admin", "Approver"]
  var allWatchers = ["Admin", "Watcher", "Approver"]
  var nonUserPaths = ['/login', '/register']
  var emailPaths = ['/email/currentRequests/view/:id', '/email/myRequests/notRejected/:id', '/email/myRequests/rejected/:id']



  if(!user && root=='email'){
    mainStore.setBounceUrl(path);
    return {path:'/login'}
  }
  

  if(!user && root!='email'){
    if(!nonUserPaths.includes(path)){
      return {path:'/login'}
    }
  }



  




  if(user){

    if(adminPaths.includes(to.path) && user.userType != "Admin"){
      
                         if(user.userType == 'Master Admin'){
                           return {path:'/masterAdmin'}
                         }else{
                           return {path:'/user'}
                         }
    
    }else if(
        mutualPaths.includes(to.path) && !userTypes.includes(user.userType)){
        return {path:'/login'}
    }else if(approverAndAdminPaths.includes(to.path) && !adminAndApprover.includes(user.userType)){
    
                        if(user.userType == "Requester" || user.userType == "Watcher"){
                         return {path: '/user'}
                        }else if(user.userType == "Master Admin"){
                         return {path: '/masterAdmin'}
                        }
    }else if(to.path == "/currentRequests" && !allWatchers.includes(user.userType)){
                         if(userTypesWithoutAdmin.includes(user.userType)){
                         return {path: '/user'}
                         }else if(user.userType == "Master Admin"){
                         return {path: '/masterADmin'}
                         }
        
    }else if(to.path == "/user" && !userTypesWithoutAdmin.includes(user.userType)){
                if(user.userType == 'admin'){
                      return {path:'/admin'}
                }else if(user.userType == 'Master Admin'){
                      return {path:'/masterAdmin'}
                    }
               
    }else if(to.path == '/'){
      if(userTypesWithoutAdmin.includes(user.userType)){
        
        return {path: '/user'}
      }else if(user.userType == "Admin"){
        return {path:'/admin'}
      }else if(user.userType == 'Master Admin'){
        return {path:'/masterAdmin'}
      }
    }else if(to.path == ''){
      if(userTypesWithoutAdmin.includes(user.userType)){
        
        return {path: '/user'}
      }else if(user.userType == "Admin"){
        return {path:'/admin'}
      }else if(user.userType == 'Master Admin'){
        return {path:'/masterAdmin'}
      }
    }else if(nonUserPaths.includes(to.path)){
      if(userTypesWithoutAdmin.includes(user.userType)){
        return {path:'/user'}
      }else if(user.userType == 'Admin'){
        return {path:'/admin'}
      }else if(user.userType == 'Master Admin'){
        return {path:'/masterAdmin'}
      }
    }
      
    
  
  
  }



})

export default router
