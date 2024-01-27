<template>
<FilterDrawer/>
        
<div class="fixed w-[300px] h-[200px] overflow-y-scroll p-3 flex-col bg-yellow-100" id="tooltip" ref="tooltip" style="display:none; z-index: 99999999;">
         <div class="flex flex-row items-end w-full justify-end hover:cursor-pointer sticky top-0 " @click="hideProblemDetails" > <div class="flex flex-col justify-center" style="border-radius: 200%; width:20px; height:20px; background-color: black; padding: 2px;"> <font-awesome-icon icon="fa-solid fa-xmark" class="text-white"/></div></div>
        <div id="text" style="word-wrap: break-word; max-width:100%"></div>
        </div>

    
    
<div class=" flex flex-row   text-lg  h-[92vh] w-full ml-[30px]  bg-[rgb(248,248,248)]  " id="app"  >


<div ref="sidePanel" class="flex flex-col h-[92vh] customborder absolute  bg-white ml-[20px]     py-10" style="z-index:99999999999999999999999999999999999999999"   v-if="this.mainStore.getSidePanelCheck" id="sidePanel" >

    <div @click="filter($event, 'my')" ref="my" :class="{selected:selectedItem == 'my', notSelected:selectedItem != 'my'}">
        <div class="flex flex-row  w-full items-center hover:cursor-pointer ">

            <div class="w-1/6 hover:cursor-pointer "><font-awesome-icon icon="fa-solid fa-file-export" class=" hover:cursor-pointer " /></div>
             <label class=" hover:cursor-pointer text-sm">Issues Raised By Me</label>
            
          </div>
          <label class=" hover:cursor-pointer text-sm ">{{ my.length }}</label>
         
     </div>
    
     <div @click="filter($event, 'approval')" ref="approval" :class="{selected:selectedItem == 'approval', notSelected:selectedItem != 'approval'}">
          <div class="flex flex-row  w-full items-center hover:cursor-pointer ">

            <div class="w-1/6 hover:cursor-pointer "><font-awesome-icon icon="fa-solid fa-thumbs-up" class=" hover:cursor-pointer " /></div>
             <label class=" hover:cursor-pointer  text-sm ">Issues Requiring My Approval</label>
            
          </div>
          <label class=" hover:cursor-pointer text-sm  ">{{ approval.length }}</label>
     </div>


     <!-- <div @click="filter($event, 'close')" ref="close" :class="{selected:selectedItem == 'close', notSelected:selectedItem != 'close'}">
          <div class="flex flex-row hover:cursor-pointer   w-full items-center">

            <div class="w-1/6 hover:cursor-pointer "><font-awesome-icon icon="fa-solid fa-file-import" class=" hover:cursor-pointer " /></div>
             <label class=" hover:cursor-pointer  text-sm ">Closed Requests For Me</label>
            
          </div>
          <label class=" hover:cursor-pointer  text-sm ">{{ closeRequestsForMe.length }}</label>
     </div> -->


     <div @click="filter($event, 'info')" ref="info" :class="{selected:selectedItem == 'info', notSelected:selectedItem != 'info'}">
          <div class=" hover:cursor-pointer flex flex-row  w-full items-center">

            <div class=" hover:cursor-pointer w-1/6"><font-awesome-icon icon=" hover:cursor-pointer fa-solid fa-info" /></div>
             <label class=" hover:cursor-pointer text-sm  ">Information Requested From Me</label>
            
          </div>
          <label class=" hover:cursor-pointer  text-sm ">{{ infoMe.length }}</label>
     </div>

     <div @click="filter($event, 'closedTickets')" ref="closedTickets" :class="{selected:selectedItem == 'closedTickets', notSelected:selectedItem != 'closedTickets'}">
        <div class=" hover:cursor-pointer flex flex-row  w-full items-center">

          <div class=" hover:cursor-pointer w-1/6"><font-awesome-icon icon=" hover:cursor-pointer fa-solid fa-quote-left" /></div>
           <label class=" hover:cursor-pointer  text-sm ">My Closed Issues</label>
          
        </div>
        <label class=" hover:cursor-pointer  text-sm ">{{ closedTickets.length }}</label>
   </div>


     <div @click="filter($event, 'mention')" ref="mention" :class="{selected:selectedItem == 'mention', notSelected:selectedItem != 'mention'}">
          <div class=" hover:cursor-pointer flex flex-row  w-full items-center">

            <div class=" hover:cursor-pointer w-1/6"><font-awesome-icon icon=" hover:cursor-pointer fa-solid fa-quote-left" /></div>
             <label class=" hover:cursor-pointer  text-sm ">Mentions</label>
            
          </div>
          <label class=" hover:cursor-pointer  text-sm ">{{ mentions.length }}</label>
     </div>


     












</div>



<div class="h-[92vh]  bg-[rgb(248,248,248)]  flex flex-col w-full mx-2 p-5">
    <div class="flex flex-row items-center justify-between  mb-2 ">
        
        <div class="ml-[400px] text-2xl font-bold border border-solid border-gray-400 p-3 bg-white">{{ getSelectedItem() }}</div>
<div class="flex flex-row">        <div @click="this.downloadExcel" class="p-2 bg-white hover:cursor-pointer border border-solid border-gray-400 rounded-sm mt-2 mb-2 mr-2">Download As Excel<font-awesome-icon icon="fa-solid fa-table" class="ml-2"/></div> 
  <FilterButton/>
  <ClearButton/>
  </div>
    
    </div>
    
    <div class="  relative overflow-x-auto    shadow-md customerborder w-full  max-h-[80vh] overflow-y-scroll  ">




    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 table-header2" style="z-index:1dxxd;">
        <tr>
            <th scope="col" class="px-6 py-3 table-header2" style="z-index: 1;">
                Issue No.
            </th>
       
            <th scope="col" class="px-6 py-3 table-header2">
                Req. Date
            </th>
            <th scope="col" class="px-6 py-3 table-header2">
                Status
            </th>
            <th scope="col" class="px-6 py-3 table-header2">
                problem
            </th>
            <th scope="col" class="px-6 py-3 table-header2">
                Requester
            </th>
            <th scope="col" class="px-6 py-3 table-header2">
                Current Handler
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="hover:bg-gray-200 hover:text-black"  v-for="(ticket, ticketCounter) in sortedTickets" :key="ticketCounter">
            <td @click="showDetails(ticket._id)"  scope="row" class=" table-row2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                {{ ticket.number }}
            </td>
    
            <td @click="showDetails(ticket._id)"  class=" table-row2 px-6 py-4">
                {{ ticket.requestDate }}
            </td>
            <td  @click="showDetails(ticket._id)" class=" table-row2 px-6 py-4">
                {{ticket.status}}
            </td>
            <td @click="showProblemDetails($event)"  class=" table-row2 table-row2 py-3 text-center text-sm overflow-hidden text-ellipsis cursor-pointer whitespace-nowrap max-w-0 text-red-400">
                <div class="flex flex-row justify-center items-center underline">
                   
                    {{ticket.problemDetails}}</div>
            </td>
            <td @click="showDetails(ticket._id)"  class=" table-row2 px-6 py-4">
               {{ticket.raisedBy.empName}}
            </td>
            <td @click="showDetails(ticket._id)"  class=" table-row2 px-6 py-4">
               <template v-if="ticket.currentHandler">{{ ticket.currentHandler.empName }}</template> 
               <template  v-else>Not Available Yet</template> 
            </td>
        </tr>
       
      
     
    </tbody>
</table>
</div>

<Pagination @page-Changed="handlePageChanged" :items="this.mainStore.getFilteredTickets.length" :itemsPerPage="itemsPerPage" ref="paginator"/>

</div>




</div>


    
    
    
    </template>
    
    
    <script >

    import axios from 'axios'
    
    
    export default{
        data(){
            return {
               approval:0,
               assigned:0,
               my:0,
               myCloseRequests:[],
               closeRequestsForMe:[],
               info:[],
               reject:[],
               infoMe:[],
               tickets:[],
               filteredTickets:[],
               sort:[ "Priority 6", "Priority 5", "Priority 4", "Priority 3", "Priority 2", "Priority 1"],
               mentions:[],
               selectedItem:"my",
               sidePanelCheck:true,
               closedTickets:[]
            }
        },

        computed:{
            sortedTickets(){
                var vm = this;
             var tickets = vm.mainStore.getFilteredTickets
             tickets.sort(vm.comparator)

             return tickets
            }

        },


        created(){
       
            this.$toast.info("Loading Data....")
            var vm = this;
            var token = this.authStore.getToken
            var user = this.authStore.getUser
            var data = new FormData();
            data.append("token", token);
            data.append("user", JSON.stringify(user));
            axios.post(vm.globalUrl + 'getTickets2', data, {
  headers: {
    'Authorization': `Bearer ${token}`,
  
  }
}).then((result)=>{

    console.log("these are the resultant tickets")
    console.log(result)
 
               vm.tickets = result.data.filter((ticket)=>ticket.raisedBy.mailAddress == user.mailAddress)
               vm.filteredTickets = vm.tickets
               vm.mainStore.setTickets(vm.tickets)
               vm.mainStore.setFilteredTickets(vm.tickets)
               
               
               vm.mentions = result.data.filter((ticket)=>{
                if(ticket.mentions){
                    for(var mention of ticket.mentions){
                        
                       if(mention == user.empName){
                        return true
                       }
                    }
                }
               })


               vm.approval = result.data.filter((ticket)=>ticket.currentHandler  && ticket.currentHandler.mailAddress == user.mailAddress && ( ticket.status == 'Ticket Submitted - Seeking Additional Approval'  || ticket.status == "Ticket Submitted - Seeking Department Head's Approval"));
               vm.closeRequestsForMe = vm.tickets.filter((ticket)=>ticket.currentHandler && ticket.currentHandler && ticket.currentHandler.mailAddress == user.mailAddress && ticket.madeCloseRequest == true);
               vm.my = vm.tickets.filter((ticket)=> ticket.raisedBy.mailAddress == user.mailAddress );
               vm.infoMe = result.data.filter((ticket)=>ticket.currentHandler &&  ticket.currentHandler.mailAddress == user.mailAddress && ticket.status == "Open (Seeking Information...)");
               vm.reject = vm.tickets.filter((ticket)=>!ticket.currentHandler && ticket.raisedBy.mailAddress == user.mailAddress && ticket.beenRejected == true)
               vm.closedTickets = vm.tickets.filter((ticket)=>ticket.raisedBy.mailAddress == user.mailAddress && ticket.status == "Closed Ticket")
               vm.$toast.clear()
               vm.$toast.success("Data Loaded Successfully")
            }).catch((error)=>{
                vm.$toast.clear()
     
                vm.$toast.warning(error)
            })


  
        },


        methods:{

            handlePageChanged(page){
                this.currentPage = page;

            },
         
            sidePanelToggle(){
                 if(this.$refs.sidePanel.style.width == "200px"){
                    this.$refs.sidePanel.style.width = "0px"
                    
                 }else{
                    this.$refs.sidePanel.style.width = "200px"
                 }
            },


            selectItem(item) {
      if (this.selectedItem === item) {
        this.selectedItem = null; 
      } else {
        this.selectedItem = item; 
      }
    },
            comparator(a, b){
     
     var vm = this;

     var index1 = vm.sort.indexOf(a.priority)
     var index2 = vm.sort.indexOf(b.priority)

 
     return index1 - index2
  },

  getSelectedItem(){
     if(this.selectedItem == 'my'){
        return "My Issues"
     }else if(this.selectedItem == "close"){
        return "Close Requests For Me"
     }else if(this.selectedItem == "info"){
        return "Information Requested From Me"
     }else if(this.selectedItem == "approval"){
        return "Issues Requiring My Approval"
     }else if(this.selectedItem == "mention"){
        return "Issues Where I Am Mentioned"
     }else if(this.selectedItem == "closedTickets"){
        return "My Closed Issues"
     }
  },

  setRowColor(priority){
        if(priority == 'emergency'){
            return "bg-red-100 hover:bg-red-200 hover:cursor-pointer"
        }else if(priority == 'high'){
            return "bg-yellow-100 hover:bg-yellow-200 hover:cursor-pointer"
        }else if(priority == 'normal'){
            return "bg-green-100 hover:bg-green-200 hover:cursor-pointer"
        }else if(priority == 'medium'){
            return "bg-orange-100 hover:bg-orange-200 hover:cursor-pointer"
        }else if(priority == null || priority == '' || priority == undefined || priority == 1 || priority == 2 || priority == 3 || priority == 4 || priority == 5){
            return "bg-white hover:bg-gray-200 hover:cursor-pointer"
        }
     },
            filter(event, type){

var vm = this;

vm.selectItem(type);

switch(type){
    case "my":
      
        vm.mainStore.setFilteredTickets(vm.my) 
        vm.mainStore.setInitialTickets(vm.my)
        break;
    case "close":
        vm.mainStore.setFilteredTickets(vm.closeRequestsForMe) 
        vm.mainStore.setInitialTickets(vm.closeRequestsForMe)
        
        break;
    case "info":
        vm.mainStore.setFilteredTickets(vm.infoMe)
        vm.mainStore.setInitialTickets(vm.infoMe)
        break;
    case "approval":
        vm.mainStore.setFilteredTickets(vm.approval)
        vm.mainStore.setInitialTickets(vm.approval)
        break;
    case "mention":
        vm.mainStore.setFilteredTickets(vm.mentions)
        vm.mainStore.setInitialTickets(vm.mentions)
        break;
    case "closedTickets":
        vm.mainStore.setFilteredTickets(vm.closedTickets)
        vm.mainStore.setInitialTickets(vm.closedTickets)
        break;

}
},


showDetails(id){
    const baseUrl = this.frontUrl
                const componentUrl = "#/ticketing/ticketDetails/" + id;
                const fullPath = baseUrl + componentUrl
    

                    window.open(fullPath, '_blank');
},


showProblemDetails(event){

        var cell = event.target
        var rect = cell.getBoundingClientRect();
    
        const topOffset = rect.top + window.scrollY;
        const leftOffset = rect.left + window.scrollX;

       var tooltip = this.$refs.tooltip
       var textElem = tooltip.querySelector('#text')
        textElem.innerText = cell.innerText

       tooltip.style.border = '2px solid black'
       tooltip.style.top = topOffset - 40 + 'px';
       tooltip.style.left = leftOffset - 40 + 'px';
       tooltip.style.display = 'block'
      
       
     
     },
    
     hideProblemDetails(event){
        var tooltip = this.$refs.tooltip
      
    
       tooltip.style.top = 'px';
       tooltip.style.left = '100px';   
       tooltip.style.display = 'none'
     },
        }
    
    
    
    }
    
    
    
    
    </script>

    <style scoped>

.table-header2{
    font-size: 15px;
}


 #sidePanel div div  label{
   margin-right: 10px;
 }

 .selected{
    display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1.25rem; 
  cursor: default;
  background-color: transparent;
  border: none;

  background-color: rgb(237, 237, 237);
  border-right-width: 0.25rem; 
  border-right-style: solid;   
  border-right-color: #10B981;


 }



 .notSelected{
    display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1.25rem; 
  cursor: default;
  background-color: transparent;
  border: none;

 }

 .notSelected:hover{
    cursor: pointer;
  background-color: rgb(237, 237, 237);
  border-right-width: 0.25rem; 
  border-right-style: solid;   
  border-right-color: #10B981;

 }

 table th{
    border-bottom:1px solid rgb(184, 181, 181);
    background-color: lightgray;
 }

 table td {
    border-bottom: 1px solid gray;
 }

 #sidePanel{
    background-color: rgb(230, 230, 230);
    padding:4px
 }
 

 #sidePanel div{
   background-color: white;
   margin-bottom: 5px;
 }


 tbody tr td:hover{
  cursor: pointer;
 }
 


    </style>`