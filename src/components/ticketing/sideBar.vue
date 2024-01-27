<template>

<div class="flex flex-col justify-between w-[50px] bg-[rgb(2,54,61)]  h-full  no-print " style="z-index: 999; position: fixed ;">
    <div><template v-if="userType == 'leader'" >
 
    <div @click="clickedTab($event, 'item1', '/ticketing/newTicket')" :class="{selectedTab: selectedItem == 'item1', unselectedTab:selectedItem != 'item1'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
      <div class="absolute  right-[-90px] top-[12px] p-3 bg-gray-600 text-white" style="visibility:hidden;">Raise Issue</div> 
      <font-awesome-icon icon="fa-solid fa-ticket" size="2x" class=" hover:cursor-pointer"/>
    </div>
        <div @click="clickedTab($event, 'item2', '/ticketing/myTickets')" :class="{selectedTab: selectedItem == 'item2', unselectedTab:selectedItem != 'item2'}"  @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
         <div class="  absolute right-[-85px] top-[12px] p-3 bg-gray-600 text-white" style="visibility: hidden; z-index: 9999999999999999999999999999;">My Issues</div> 
         <font-awesome-icon icon="fa-solid fa-clipboard-list" size="2x" class=" hover:cursor-pointer"/>
    </div>
    <div @click="clickedTab($event, 'item3', '/ticketing/leader/manage')" :class="{selectedTab: selectedItem == 'item3', unselectedTab:selectedItem != 'item3'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
      <div class="  absolute right-[-112px] top-[12px] p-3 bg-gray-600 text-white" style="visibility: hidden; z-index: 9999999999999999999999999999">Manage Issues</div>  
      <font-awesome-icon icon="fa-solid fa-people-roof" size="2x" class=" hover:cursor-pointer"/>
    </div>

    <div @click="clickedTab($event, 'item4', '/ticketing/leader/myTeam')" :class="{selectedTab: selectedItem == 'item4', unselectedTab:selectedItem != 'item4'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
      <div class="  absolute right-[-78px] top-[12px] p-3 bg-gray-600 text-white" style="visibility: hidden; z-index: 9999999999999999999999999999">My Team</div>  
      <font-awesome-icon icon="fa-solid fa-people-group" size="2x" class=" hover:cursor-pointer"/>
    </div>

    
 <div @click="clickedTab($event, 'item8', '/ticketing/power/dashboard')" :class="{selectedTab: selectedItem == 'item8', unselectedTab:selectedItem != 'item8'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
  <div  class=" absolute right-[-85px] top-[12px] p-3 bg-gray-600 text-white" style="z-index:9999999999999999; visibility:hidden">Dashboard</div>  
  <font-awesome-icon icon="fa-solid fa-gauge-high" size="2x" class=" hover:cursor-pointer"/>
</div>
</template>
<template v-if="userType == 'support'">
       
   <div @click="clickedTab($event, 'item1', '/ticketing/newTicket')" :class="{selectedTab: selectedItem == 'item1', unselectedTab:selectedItem != 'item1'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
      <div class="  absolute right-[-90px] top-[12px] p-3 bg-gray-600 text-white"  style="visibility: hidden;  z-index: 9999999999999999999999999999;">Raise Issue</div>  
      <font-awesome-icon icon="fa-solid fa-ticket" size="2x" class=" hover:cursor-pointer"/>
    </div>
        <div @click="clickedTab($event, 'item2', '/ticketing/myTickets')" :class="{selectedTab: selectedItem == 'item2', unselectedTab:selectedItem != 'item2'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
         <div class="  absolute right-[-82px] top-[12px] p-3 bg-gray-600 text-white"  style="visibility: hidden; z-index: 9999999999999999999999999999;">My Issues</div> 
         <font-awesome-icon icon="fa-solid fa-clipboard-list" size="2x" class=" hover:cursor-pointer"/>
    </div>
    <div @click="clickedTab($event, 'item3', '/ticketing/support/assist')" :class="{selectedTab: selectedItem == 'item3', unselectedTab:selectedItem != 'item3'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
      <div class="  absolute right-[-53px] top-[12px] p-3 bg-gray-600 text-white"  style="visibility: hidden; z-index: 9999999999999999999999999999;">Assist</div> 
   <div class="relative"><div style="position: absolute; bottom: -10px; right:-4px" class="bg-red-600 text-white flex flex-col justify-center items-center w-[14px] font-bold text-lg">{{assigned.length}}</div>      <font-awesome-icon icon="fa-solid fa-headset" size="2x" class=" hover:cursor-pointer"/></div>
    </div>


</template>
<template v-else-if="userType == 'normal'">
    <div @click="clickedTab($event, 'item1', '/ticketing/newTicket')" :class="{selectedTab: selectedItem == 'item1', unselectedTab:selectedItem != 'item1'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
      <div class="  absolute right-[-92px] top-[12px] p-3 bg-gray-600 text-white"  style="visibility: hidden; z-index: 9999999999999999999999999999;">Raise Issue</div>   
      <font-awesome-icon icon="fa-solid fa-ticket" size="2x" class=" hover:cursor-pointer"/>
    </div>
        <div @click="clickedTab($event, 'item2', '/ticketing/myTickets')" :class="{selectedTab: selectedItem == 'item2', unselectedTab:selectedItem != 'item2'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
         <div class="  absolute right-[-85px] top-[12px] p-3 bg-gray-600 text-white"  style="visibility: hidden; z-index: 9999999999999999999999999999;">My Issues</div> 
         <font-awesome-icon icon="fa-solid fa-clipboard-list" size="2x" class=" hover:cursor-pointer"/>
    </div>


   

</template>

<template v-else-if="userType == 'power'">
  
    <div @click="clickedTab($event, 'item1', '/ticketing/power/tickets')" :class="{selectedTab: selectedItem == 'item1', unselectedTab:selectedItem != 'item1'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
      <div style="z-index: 999; visibility: hidden; " class=" absolute right-[-63px] top-[12px] p-3 bg-gray-600 text-white">Issues</div>  
      <font-awesome-icon icon="fa-solid fa-ticket-alt" size="2x" class=" hover:cursor-pointer"/>
    </div>
        <div @click="clickedTab($event, 'item2', '/ticketing/power/analytics')" :class="{selectedTab: selectedItem == 'item2', unselectedTab:selectedItem != 'item2'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
         <div  class="o absolute right-[-75px] top-[12px] p-3 bg-gray-600 text-white" style="visibility: hidden; z-index:9999999999999999">Analytics</div>  
         <font-awesome-icon icon="fa-solid fa-chart-bar" size="2x" class=" hover:cursor-pointer"/>
    </div>
    <div @click="clickedTab($event, 'item3', '/ticketing/users')" :class="{selectedTab: selectedItem == 'item3', unselectedTab:selectedItem != 'item3'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
      <div class=" absolute left-[54px] p-3 bg-gray-600 text-white"  style="visibility: hidden; z-index: 9999999999999;" >Users</div>  
      <font-awesome-icon icon="fa-solid fa-user" size="2x" class=" hover:cursor-pointer"/>
    </div>

</template>

<template v-else-if="userType == 'departmentPower'">
  <div @click="clickedTab($event, 'item1', '/ticketing/myTickets')" :class="{selectedTab: selectedItem == 'item1', unselectedTab:selectedItem != 'item1'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
    <div style="z-index: 999; visibility: hidden; " class=" absolute right-[-85px] top-[12px] p-3 bg-gray-600 text-white">My Issues</div> 
    <font-awesome-icon icon="fa-solid fa-clipboard-list" size="2x" class=" hover:cursor-pointer"/>
</div>
    <div @click="clickedTab($event, 'item2', '/ticketing/departmentPowerUser/tickets')" :class="{selectedTab: selectedItem == 'item2', unselectedTab:selectedItem != 'item2'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
      <div style="z-index: 999; visibility: hidden; " class=" absolute right-[-63px] top-[12px] p-3 bg-gray-600 text-white">Issues</div>  
      <font-awesome-icon icon="fa-solid fa-ticket-alt" size="2x" class=" hover:cursor-pointer"/>
    </div>
        <div @click="clickedTab($event, 'item3', '/ticketing/departmentPowerUser/analytics')" :class="{selectedTab: selectedItem == 'item3', unselectedTab:selectedItem != 'item3'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
          <div style="z-index: 999; visibility: hidden; "  class="o absolute right-[-75px] top-[12px] p-3 bg-gray-600 text-white">Analytics</div>  
          <font-awesome-icon icon="fa-solid fa-chart-bar" size="2x" class=" hover:cursor-pointer"/>
    </div>

</template>


<template v-if="userType == 'admin'">
        <div @click="clickedTab($event, 'item1', '/ticketing/newTicket')" :class="{selectedTab: selectedItem == 'item1', unselectedTab:selectedItem != 'item1'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
         <div class=" absolute right-[-90px] top-[12px] p-3 bg-gray-600 text-white" style="z-index:9999999999999999; visibility:hidden">Raise Issue</div>  
         <font-awesome-icon icon="fa-solid fa-ticket" size="x" class=" hover:cursor-pointer"/>
    </div>
        <div @click="clickedTab($event, 'item2', '/ticketing/myTickets')" :class="{selectedTab: selectedItem == 'item2', unselectedTab:selectedItem != 'item2'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
         <div class=" absolute right-[-85px] top-[12px] p-3 bg-gray-600 text-white" style="z-index:9999999999999999; visibility:hidden">My Issues</div> 
         <font-awesome-icon icon="fa-solid fa-clipboard-list" size="x" class=" hover:cursor-pointer"/>
    </div>
    <div @click="clickedTab($event, 'item3', '/ticketing/systemAdmin/manage')" :class="{selectedTab: selectedItem == 'item3', unselectedTab:selectedItem != 'item3'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
      <div class=" absolute right-[-112px] top-[12px] p-3 bg-gray-600 text-white" style="z-index:9999999999999999; visibility:hidden">Manage Issues</div>  
      <font-awesome-icon icon="fa-solid fa-people-roof" size="x" class=" hover:cursor-pointer"/> 
     
    </div>
    <div @click="clickedTab($event, 'item4', '/ticketing/users')" :class="{selectedTab: selectedItem == 'item4', unselectedTab:selectedItem != 'item4'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
      <div class=" absolute right-[-105px] top-[12px] p-3 bg-gray-600 text-white" style="z-index:9999999999999999; visibility:hidden">Manage Users</div>  
      <font-awesome-icon icon="fa-solid fa-user" size="x" class=" hover:cursor-pointer"/>
    </div>
    <div @click="clickedTab($event, 'item5', '/ticketing/teams')" :class="{selectedTab: selectedItem == 'item5', unselectedTab:selectedItem != 'item5'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
      <div class=" absolute right-[-120px] top-[12px] p-3 bg-gray-600 text-white" style="z-index:9999999999999999; visibility:hidden">Manage Services</div>   
      <font-awesome-icon icon="fa-solid fa-user-group" size="x" class=" hover:cursor-pointer"/>
    </div>

    <div @click="clickedTab($event, 'item6', '/ticketing/locations')" :class="{selectedTab: selectedItem == 'item6', unselectedTab:selectedItem != 'item6'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
      <div class=" absolute right-[-128px] top-[12px] p-3 bg-gray-600 text-white" style="z-index:9999999999999999; visibility:hidden">Manage Locations</div>   
      <font-awesome-icon icon="fa-solid fa-map" size="x" class=" hover:cursor-pointer"/>
    </div>

    <div @click="clickedTab($event, 'item7', '/ticketing/power/analytics')" :class="{selectedTab: selectedItem == 'item7', unselectedTab:selectedItem != 'item7'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
      <div  class="o absolute right-[-75px] top-[12px] p-3 bg-gray-600 text-white" style="z-index:9999999999999999; visibility:hidden">Analytics</div>  
      <font-awesome-icon icon="fa-solid fa-chart-bar" size="x" class=" hover:cursor-pointer"/>
 </div>


 
 <div @click="clickedTab($event, 'item8', '/ticketing/power/dashboard')" :class="{selectedTab: selectedItem == 'item8', unselectedTab:selectedItem != 'item8'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
  <div  class=" absolute right-[-85px] top-[12px] p-3 bg-gray-600 text-white" style="z-index:9999999999999999; visibility:hidden">Dashboard</div>  
  <font-awesome-icon icon="fa-solid fa-gauge-high" size="x" class=" hover:cursor-pointer"/>
</div>


</template>





<template v-if="userType == 'tLeader'">
        <div @click="clickedTab($event, 'item1', '/ticketing/newTicket')" :class="{selectedTab: selectedItem == 'item1', unselectedTab:selectedItem != 'item1'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
         <div class=" absolute right-[-90px] top-[12px] p-3 bg-gray-600 text-white">Raise Issue</div>  
         <font-awesome-icon icon="fa-solid fa-ticket" size="2x" class=" hover:cursor-pointer"/>
    </div>
        <div @click="clickedTab($event, 'item2', '/ticketing/myTickets')" :class="{selectedTab: selectedItem == 'item2', unselectedTab:selectedItem != 'item2'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
         <div class=" absolute right-[-85px] top-[12px] p-3 bg-gray-600 text-white">My Issues</div> 
         <font-awesome-icon icon="fa-solid fa-clipboard-list" size="2x" class=" hover:cursor-pointer"/>
    </div>
    <div @click="clickedTab($event, 'item3', '/ticketing/temporary-leader/manage')" :class="{selectedTab: selectedItem == 'item3', unselectedTab:selectedItem != 'item3'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
       <font-awesome-icon icon="fa-solid fa-people-roof" size="2x" class=" hover:cursor-pointer"/>
    </div>
  
</template>



<template v-if="userType == 'Ticket Manager (General)'">


<div @click="clickedTab($event, 'item3', '/ticketing/general/manage')" :class="{selectedTab: selectedItem == 'item3', unselectedTab:selectedItem != 'item3'}" @mouseenter="showToolTip($event)" @mouseleave="hideToolTip($event)">
  <div class=" absolute right-[-112px] top-[12px] p-3 bg-gray-600 text-white" style="z-index:9999999999999999; visibility:hidden">Manage Issues</div>  
  <font-awesome-icon icon="fa-solid fa-people-roof" size="2x" class=" hover:cursor-pointer"/> 
 
</div>



</template>

<template v-if="this.authStore.getUser.userType != 'admin'">
  <div @click="this.mainStore.toggleSidePanel()" class="unselectedTab" v-if="this.mainStore.getSidePanelCheck == true">
  <div class="  absolute right-[-90px] top-[12px] p-3 bg-gray-600 text-white"  style="visibility: hidden;  z-index: 9999999999999999999999999999;">Raise Issue</div>  
  <font-awesome-icon icon="fa-solid fa-angles-left" size="2x" class=" hover:cursor-pointer"/>
</div>
<div @click="this.mainStore.toggleSidePanel()" class="unselectedTab" v-if="this.mainStore.getSidePanelCheck == false">
  <div class="  absolute right-[-90px] top-[12px] p-3 bg-gray-600 text-white"  style="visibility: hidden;  z-index: 9999999999999999999999999999;">Raise Issue</div>  
  <font-awesome-icon icon="fa-solid fa-angles-right" size="2x" class=" hover:cursor-pointer"/>
</div>
</template>
<template v-else>
  <div @click="this.mainStore.toggleSidePanel()" class="unselectedTab" v-if="this.mainStore.getSidePanelCheck == true">
  <div class="  absolute right-[-90px] top-[12px] p-3 bg-gray-600 text-white"  style="visibility: hidden;  z-index: 9999999999999999999999999999;">Raise Issue</div>  
  <font-awesome-icon icon="fa-solid fa-angles-left" size="x" class=" hover:cursor-pointer"/>
</div>
<div @click="this.mainStore.toggleSidePanel()" class="unselectedTab" v-if="this.mainStore.getSidePanelCheck == false">
  <div class="  absolute right-[-90px] top-[12px] p-3 bg-gray-600 text-white"  style="visibility: hidden;  z-index: 9999999999999999999999999999;">Raise Issue</div>  
  <font-awesome-icon icon="fa-solid fa-angles-right" size="x" class=" hover:cursor-pointer"/>
</div>
</template>
</div>


</div>


</template>


<script>
import axios from 'axios'

export default{
    data(){
        return {
               userType:"",
               selectedItem:null,
               assigned:[]
         
        }
    },

    created(){
        this.userType = this.authStore.getUser.userType
        var tickets = this.mainStore.getTickets
        var user = this.authStore.getUser
        this.loadTickets()
        
    },

    methods:{
      clickedTab(event, item, route){
           
          this.selectItem(item);
          
          this.$router.push(route)
      },

      selectItem(item) {
      if (this.selectedItem === item) {
        this.selectedItem = null; 
      } else {
        this.selectedItem = item; 
      }
    },

      showToolTip(event){
             var elem = event.target;
             var tooltip = elem.querySelector("div");
  
             
             tooltip.style.visibility = "visible";
      },

      hideToolTip(event){
        var elem = event.target;
             var tooltip = elem.querySelector("div");

             tooltip.style.visibility = "hidden"
      },


      

      loadTickets(){
                 
                    var vm = this;
                    var token = this.authStore.getToken
                    var user = this.authStore.getUser


                    axios.get(vm.globalUrl + "getMailTickets").then((result)=>{


                      var data = new FormData();
                    data.append("token", token);
                    data.append("user", JSON.stringify(user));
                   axios.post(vm.globalUrl + 'getTickets2', data, {
                       headers: {
                      'Authorization': `Bearer ${token}`,

                        }
}).then((result)=>{
              
            
          
          
              
              
                vm.assigned = result.data.filter((ticket)=> ticket.assignedTo && ticket.assignedTo.mailAddress == user.mailAddress && ticket.currentHandler != null && ticket.status != "Closed Ticket")
               
             }).catch((error)=>{
                 vm.$toast.clear()
            
                 vm.$toast.warning(error)
             })

                    }).catch((error)=>console.log(error))
                
                 }

      
    }
 
}


</script>


<style scoped>
.unselectedTab{
  display:flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  justify-items: center;
  padding:20px;
  color:rgb(129,154,157);

}

.unselectedTab:hover{
   cursor: pointer;
   background-color: rgb(47,170,187);
   color:white;
}

.selectedTab{
  display:flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  justify-items: center;
  padding:20px;
  color:white;
  background-color: rgb(47,170,187);
}

</style>