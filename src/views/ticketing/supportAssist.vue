<template>

    <div class="fixed w-[300px] h-[200px] overflow-y-scroll p-3 flex-col bg-yellow-100" id="tooltip" ref="tooltip" style="display:none; z-index:999">
        <div class="flex flex-row items-end w-full justify-end hover:cursor-pointer sticky top-0 " @click="hideProblemDetails" > <div class="flex flex-col justify-center" style="border-radius: 200%; width:20px; height:20px; background-color: black; padding: 2px;"> <font-awesome-icon icon="fa-solid fa-xmark" class="text-white"/></div></div>
       <div id="text" style="word-wrap: break-word; max-width:100%"></div>
       </div>
    <FilterDrawer />
    <div class=" flex flex-row  ml-[30px]  text-lg  h-[92vh] w-full  bg-[rgb(248,248,248)] " id="app"  >
 
 
     <div class="flex flex-col h-screen customborder  bg-white ml-[20px]   absolute   " id="sidePanel" style="z-index: 999999999999999;"  v-if="this.mainStore.getSidePanelCheck">
 
         <div @click="filter($event, 'all')" ref="all" :class="{selected:selectedItem == 'all', notSelected:selectedItem != 'all'}">
               <div class="flex flex-row  w-full items-center hover:cursor-pointer ">
 
                 <div class="w-1/6 hover:cursor-pointer "><font-awesome-icon icon="fa-solid fa-border-all" class=" hover:cursor-pointer " /></div>
                  <label class=" hover:cursor-pointer text-sm ">All Issues</label>
                 
               </div>
               <label class=" hover:cursor-pointer text-sm">{{ tickets.length }}</label>
          </div>
         
      
          

          <div @click="filter($event, 'unassigned')" ref="unassigned" :class="{selected:selectedItem == 'unassigned', notSelected:selectedItem != 'unassigned'}">
            <div class=" hover:cursor-pointer flex flex-row  w-full items-center">

              <div class=" hover:cursor-pointer w-1/6"><font-awesome-icon icon=" hover:cursor-pointer fa-solid fa-check" /></div>
               <label class=" hover:cursor-pointer text-sm">Unassigned Issues</label>
              
            </div>
            <label class=" hover:cursor-pointer text-sm">{{unassigned.length}}</label>
       </div>



 
          <div @click="filter($event, 'assigned')" ref="assigned" :class="{selected:selectedItem == 'assigned', notSelected:selectedItem != 'assigned'}">
               <div class="flex flex-row hover:cursor-pointer   w-full items-center">
 
                 <div class="w-1/6 hover:cursor-pointer "><font-awesome-icon icon="fa-solid fa-thumbtack hover:cursor-pointer " /></div>
                  <label class=" hover:cursor-pointer text-sm">Issues Assigned To Me</label>
                 
               </div>
               <label class=" hover:cursor-pointer text-sm">{{ assigned.length }}</label>
          </div>
 
 
       
 
        
 
 
          
          <!-- <div @click="filter($event, 'close')" ref="close" :class="{selected:selectedItem == 'close', notSelected:selectedItem != 'close'}">
               <div class="flex flex-row  w-full items-center hover:cursor-pointer ">
 
                 <div class="w-1/6 hover:cursor-pointer "><font-awesome-icon icon="fa-solid fa-file-export"  class=" hover:cursor-pointer " /></div>
                  <label class=" hover:cursor-pointer text-sm">My Close Requests</label>
                 
               </div>
               <label class=" hover:cursor-pointer text-sm" >{{ myCloseRequests.length }}</label>
          </div>
  -->
 
          <div @click="filter($event, 'info')" ref="info"  :class="{selected:selectedItem == 'info', notSelected:selectedItem != 'info'}">
               <div class="flex flex-row  w-full items-center  hover:cursor-pointer ">
 
                 <div class="w-1/6  hover:cursor-pointer "><font-awesome-icon icon="fa-solid fa-question" class=" hover:cursor-pointer " /></div>
                  <label class=" hover:cursor-pointer text-sm">Information Requested By Me</label>
                 
               </div>
               <label class=" hover:cursor-pointer text-sm">{{ infoMe.length }}</label>
          </div>
 
 
 
 
 
 
 
     </div>
 
 <div class="h-[92vh]  bg-[rgb(248,248,248)] flex flex-col w-full mx-2 p-5">
    





    <div class="flex flex-row items-center justify-between "><div class="ml-[400px] mb-[10px] border border-solid border-black text-2xl bg-white p-[10px] font-bold">{{ getSelectedItem() }}</div>
<div class="flex flex-row">  <div @click="downloadExcel" class="p-2 bg-white hover:cursor-pointer border border-solid border-gray-400 rounded-sm mt-2 mb-2 mr-2">
    Download As Excel<font-awesome-icon icon="fa-solid fa-table" class="ml-4"/>
</div>  
<FilterButton/>
<ClearButton/>
</div>
</div>
     <div class="relative overflow-x-auto   mx-2 shadow-md customerborder w-full  max-h-[80vh] overflow-y-scroll">
     <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
         <thead class="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
             <tr>
                 <th scope="col" class="table-header2 px-6 py-3">
                     Issue No.
                 </th>
                 <!-- <th scope="col" class="px-6 py-3 table-header2">
                Priority
                 </th> -->
                 <th scope="col" class="table-header2 px-6 py-3">
                     Req. Date
                 </th>
                 <th scope="col" class="table-header2 px-6 py-3">
                     Status
                 </th>
                 <th scope="col" class="table-header2 px-6 py-3">
                     problem
                 </th>
                 <th scope="col" class="table-header2 px-6 py-3">
                     Requester
                 </th>
                 <th scope="col" class="table-header2 px-6 py-3">
                     Current Handler
                 </th>
             </tr>
         </thead>
         <tbody>
             <tr  class="hover:bg-gray-200 hover:text-black" v-for="(ticket, ticketCounter) in sortedTickets" :key="ticketCounter">
                 <td @click="showDetails(ticket._id)" scope="row" class="cursor-pointer table-row2 px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                     {{ ticket.number }}
                 </td>
                 <!-- <td @click="showDetails(ticket._id)"  scope="row" class=" table-row2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ ticket.priority.priority }}
            </td> -->
                 <td   @click="showDetails(ticket._id)"  class="cursor-pointer table-row2 px-6 py-4">
                     {{ ticket.requestDate }}
                 </td>
                 <td   @click="showDetails(ticket._id)" class="cursor-pointer table-row2 px-6 py-4">
                     {{ticket.status}}
                 </td>
                 <td class="cursor-pointer table-row2 py-3 text-center text-sm overflow-hidden text-ellipsis cursor-pointer whitespace-nowrap max-w-0 text-red-400">
                    <div class=" px-4  items-center underline "  @click="showProblemDetails" >
                        
                        {{ticket.problemDetails}}</div>
                 </td>
                 <td   @click="showDetails(ticket._id)" class="cursor-pointer table-row2 px-6 py-4">
                    {{ticket.raisedBy.empName}}
                 </td>
                 <td  @click="showDetails(ticket._id)"  class="cursor-pointer table-row2 px-6 py-4">
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
                unassigned:[],
                accepted:[],
                filteredTickets:[],
                sort:[ "Priority 6", "Priority 5", "Priority 4", "Priority 3", "Priority 2", "Priority 1"],
                currentPage:1,
                itemsPerPage:10,
                selectedItem:"all",
             }
         },

         computed:{
            sortedTickets(){
                var vm = this;
             var tickets = vm.mainStore.getFilteredTickets
             tickets.sort(vm.comparator)

             var start = (vm.currentPage - 1) * vm.itemsPerPage
             var end = start + vm.itemsPerPage
             return tickets.slice(start, end)
            }

        },
 
 
         created(){
          this.loadTickets()
         },
 
    
         
         methods:{

            handlePageChanged(page){
                this.currentPage = page;

            },


            getSelectedItem(){
               if(this.selectedItem == "all"){
                return "All Issues"
               }else if(this.selectedItem == "accepted"){
                return "Accepted Issues"
               }else if(this.selectedItem == "unassigned"){
                return "Unassigned Issues"
               }else if(this.selectedItem == "assigned"){
                return "Assigned"
               }else if(this.selectedItem == "approval"){
                return "Issues Awaiting Higher Approval"
               }else if(this.selectedItem == "info"){
                return "Issues Seeking Information"
               }else if(this.selectedItem == "close"){
                return "Closed Issues"
               }
            },
            

            comparator(a, b){
     
     var vm = this;
  
     var index1 = vm.sort.indexOf(a.priority)
     var index2 = vm.sort.indexOf(b.priority)

 
     return index1 - index2
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


  
  setRowColor(priority){
        if(priority == 'emergency'){
            return "bg-red-100 hover:bg-red-200"
        }else if(priority == 'high'){
            return "bg-yellow-100 hover:bg-yellow-200"
        }else if(priority == 'normal'){
            return "bg-green-100 hover:bg-green-200"
        }else if(priority == 'medium'){
            return "bg-orange-100 hover:bg-orange-200"
        }else if(priority == null || priority == '' || priority == undefined){
            return "bg-white hover:bg-gray-200 hover:cursor-pointer"
        }
     },
 
 
             filter(event, type){
 
                 var vm = this;
                 var store = this.mainStore
                 var paginate = this.$refs.paginator.onClickHandler

                 vm.selectItem(type)
                 
                 switch(type){
                     case "unassigned":
                         paginate(1);
                         store.setFilteredTickets( vm.unassigned)
                         store.setInitialTickets(vm.unassigned) 
                         break;
                     case "assigned":
                         paginate(1);
                         store.setFilteredTickets(vm.assigned)
                         store.setInitialTickets(vm.assigned)  
                         break;
                     case "accepted":
                     paginate(1);
                         store.setFilteredTickets(vm.accepted)
                         store.setInitialTickets(vm.accepted)  
                         break;
                     case "approval":
                     paginate(1);
                         store.setFilteredTickets(vm.approval)
                         store.setInitialTickets(vm.approval)  
                         break;
                     case "info":
                     paginate(1);
                         store.setFilteredTickets( vm.info)
                         store.setInitialTickets(vm.info) 
                         break;
                     case "close":
                     paginate(1);
                         store.setFilteredTickets(vm.myCloseRequests)
                         store.setInitialTickets(vm.myCloseRequests)  
                         break;
                     case "all":
                     paginate(1);
                         store.setFilteredTickets( vm.tickets)
                         store.setInitialTickets(vm.tickets) 
                         break;
                 }
             },
 
 
             showDetails(id){
                const baseUrl = this.frontUrl
                const componentUrl = "#/ticketing/ticketDetails/" + id;
                const fullPath = baseUrl + componentUrl
    

                    window.open(fullPath, '_blank');
                 },

                 selectItem(item) {
      if (this.selectedItem === item) {
        this.selectedItem = null; 
      } else {
        this.selectedItem = item; 
      }
    },


                 loadTickets(){
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
                vm.tickets = result.data
                vm.filteredTickets = vm.tickets
                this.$refs.paginator.onClickHandler(1)
                vm.mainStore.setTickets(vm.tickets);
                vm.mainStore.setFilteredTickets(vm.filteredTickets)
          
              
                vm.unassigned = vm.tickets.filter((ticket)=>ticket.status != "Rejected" && ticket.assignedTo == null && ticket.status != "Closed Ticket")
                vm.assigned = vm.tickets.filter((ticket)=> ticket.assignedTo && ticket.assignedTo.mailAddress == user.mailAddress && ticket.currentHandler != null && ticket.status != "Closed Ticket")
                vm.approval = vm.tickets.filter((ticket)=>ticket.higherApprover  && ticket.ticketingHead && ticket.currentHandler  && ticket.ticketingHead.mailAddress == user.mailAddress && ticket.currentHandler.mailAddress == ticket.higherApprover.mailAddress)
                // vm.myCloseRequests = vm.tickets.filter((ticket)=>ticket.madeCloseRequest == true && ticket.prevHandler && ticket.prevHandler.mailAddress ==user.mailAddress);
                vm.info = vm.tickets.filter((ticket)=>ticket.ask == true && ticket.ticketingHead && ticket.ticketingHead.mailAddress == user.mailAddress && ticket.prevHandler && ticket.prevHandler.mailAddress == user.mailAddress)
                vm.$toast.clear()
                vm.$toast.success("Data Loaded Successfully")
             }).catch((error)=>{
                 vm.$toast.clear()
            
                 vm.$toast.warning(error)
             })
                 }
         }
     
     
     
     }
     
     
     
     
     </script>
 
 
 <style scoped>
 
 
 .table-header2{
     font-size: 15px;
 }



 
 .table-row2{
     font-size:15px
 }

 #sidePanel div div  label{
   margin-right: 10px;
 }

 table th{
    border-bottom:1px solid gray;
    background-color: lightgray;
 }

 table td {
    border-bottom: 1px solid gray;
 }

 #sidePanel{
    background-color: rgb(230, 230, 230);
 }
 

 #sidePanel div{
   background-color: white;
   margin-bottom: 5px;
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
 
 </style>