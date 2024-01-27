<template>


<div class="flex flex-col w-full items-center justify-center h-screen p-[20px]">

<div class="flex flex-col w-[400px] h-screen  p-[20px]" v-for="(department, departmentCounter) in departments">
<div class="flex flex-col w-full border border-solid border-black mb-[10px]" v-for="(member, memberCounter) in department.subordinates">
    <div class="flex flex-row w-full bg-black text-white p-3">{{member.user.empName}}</div>
    <div class="flex flex-col w-full">   
        <div class="flex flex-row w-full p-[8px]">
            <div class="flex flex-row w-1/2 justify-center items-center">Currently Assigned</div>
            <div class="flex flex-row w-1/2 justify-center items-center">{{getAssigned(member.user)}}</div>
        </div>
    </div>


</div>


</div>





</div>





</template>



<script>
import axios from 'axios';

export default{
    data(){
        return {
         tickets:[],
         departments:[]
        }
    },

    created(){
   
        var vm = this;
        vm.$toast.info("Loading Data")
       var user = this.authStore.getUser;

       var data = new FormData();

       data.append("user", JSON.stringify(user));

       axios.post(vm.globalUrl + "getDepartmentsAndTickets", data).then((result)=>{
        console.log("these are the my team data")
        console.log(result.data)
        vm.tickets =result.data.tickets;
        vm.departments = result.data.departments;
        vm.$toast.clear()
        vm.$toast.success("Data Loaded")

       }).catch((error)=>{
        vm.$toast.warning(error)
       })
    },

    methods:{

        getAssigned(user){
            var tickets = this.tickets.filter((ticket)=>ticket.currentHandler && ticket.status == "Assigned" && ticket.currentHandler.empName == user.empName)
            var length = tickets.length
            return length
        }
    }
}



</script>