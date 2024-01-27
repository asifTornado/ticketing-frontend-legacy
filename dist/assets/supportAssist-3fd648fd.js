import{_ as x,f as w,r as v,o as h,c as u,b as c,a as e,t as i,j as f,F as _,g as y,d as k,O as T,P as A}from"./index-d0c9d9c3.js";const C={data(){return{approval:0,assigned:0,my:0,myCloseRequests:[],closeRequestsForMe:[],info:[],reject:[],infoMe:[],tickets:[],unassigned:[],accepted:[],filteredTickets:[]}},created(){this.$toast.info("Loading Data....");var r=this,a=this.authStore.getToken,o=this.authStore.getUser,l=new FormData;l.append("token",a),l.append("user",JSON.stringify(o)),w.post(r.globalUrl+"getTickets",l).then(d=>{r.tickets=d.data.filter(s=>s.raisedBy.mailAddress!=o.mailAddress&&s.status!="Closed Ticket"&&s.assignedTo&&s.assignedTo.mailAddress==o.mailAddress),r.filteredTickets=r.tickets,r.mainStore.setTickets(r.tickets),r.mainStore.setFilteredTickets(r.filteredTickets),r.accepted=r.tickets.filter(s=>s.currentHandler&&s.currentHandler.mailAddress==o.mailAddress&&s.accepted==!0&&s.assigned==!0&&s.assignedTo&&s.assignedTo.mailAddress==o.mailAddress),r.assigned=r.tickets.filter(s=>s.assigned==!0&&s.assignedTo&&s.assignedTo.mailAddress==o.mailAddress&&s.currentHandler!=null&&s.accepted==!1),r.approval=r.tickets.filter(s=>s.higherApprover&&s.ticketingHead&&s.currentHandler&&s.ticketingHead.mailAddress==o.mailAddress&&s.currentHandler.mailAddress==s.higherApprover.mailAddress),r.myCloseRequests=r.tickets.filter(s=>s.madeCloseRequest==!0&&s.prevHandler&&s.prevHandler.mailAddress==o.mailAddress),r.info=r.tickets.filter(s=>s.ask==!0&&s.ticketingHead&&s.ticketingHead.mailAddress==o.mailAddress&&s.prevHandler&&s.prevHandler.mailAddress==o.mailAddress),r.$toast.clear(),r.$toast.success("Data Loaded Successfully")}).catch(d=>{r.$toast.clear(),console.log("this is the error"),r.$toast.warning(d)})},methods:{filter(r,a){var o=this,l=this.mainStore;switch(a){case"unassigned":l.setFilteredTickets(o.unassigned),l.setInitialTickets(o.unassigned);break;case"assigned":l.setFilteredTickets(o.assigned),l.setInitialTickets(o.assigned);break;case"accepted":l.setFilteredTickets(o.accepted),l.setInitialTickets(o.accepted);break;case"approval":l.setFilteredTickets(o.approval),l.setInitialTickets(o.approval);break;case"info":l.setFilteredTickets(o.info),l.setInitialTickets(o.info);break;case"close":l.setFilteredTickets(o.myCloseRequests),l.setInitialTickets(o.myCloseRequests);break;case"all":l.setFilteredTickets(o.tickets),l.setInitialTickets(o.tickets);break}},showDetails(r){const a="/ticketing/ticketDetails/"+r;this.$router.push(a)}}},p=r=>(T("data-v-9c6e43a7"),r=r(),A(),r),F={class:"flex flex-row text-lg h-full w-full bg-[rgb(248,248,248)]",id:"app"},H={class:"flex flex-col h-screen customborder bg-white w-1/6 py-10"},q={class:"flex flex-row w-full items-center hover:cursor-pointer"},D={class:"w-1/6 hover:cursor-pointer"},S=p(()=>e("label",{class:"hover:cursor-pointer"},"All Tickets",-1)),I={class:"hover:cursor-pointer"},R={class:"flex flex-row hover:cursor-pointer w-full items-center"},j={class:"w-1/6 hover:cursor-pointer"},B=p(()=>e("label",{class:"hover:cursor-pointer"},"Tickets Assigned To Me",-1)),N={class:"hover:cursor-pointer"},M={class:"hover:cursor-pointer flex flex-row w-full items-center"},E={class:"hover:cursor-pointer w-1/6"},V=p(()=>e("label",{class:"hover:cursor-pointer"},"Accepted Tickets",-1)),L={class:"hover:cursor-pointer"},U={class:"flex flex-row w-full items-center hover:cursor-pointer"},O={class:"w-1/6 hover:cursor-pointer"},J=p(()=>e("label",{class:"hover:cursor-pointer"},"My Close Requests",-1)),P={class:"hover:cursor-pointer"},z={class:"flex flex-row w-full items-center hover:cursor-pointer"},G={class:"w-1/6 hover:cursor-pointer"},K=p(()=>e("label",{class:"hover:cursor-pointer"},"Information Requested By Me",-1)),Q={class:"hover:cursor-pointer"},W={class:"h-[100vh] bg-[rgb(248,248,248)] flex flex-col w-5/6 mx-2"},X={class:"flex flex-row items-end justify-end"},Y={class:"relative overflow-x-auto mx-2 shadow-md customerborder w-full max-h-[80vh] overflow-y-scroll"},Z={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},$=p(()=>e("thead",{class:"text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"table-header2 px-6 py-3"}," Ticket No. "),e("th",{scope:"col",class:"table-header2 px-6 py-3"}," Req. Date "),e("th",{scope:"col",class:"table-header2 px-6 py-3"}," Status "),e("th",{scope:"col",class:"table-header2 px-6 py-3"}," problem "),e("th",{scope:"col",class:"table-header2 px-6 py-3"}," Requester "),e("th",{scope:"col",class:"table-header2 px-6 py-3"}," Current Handler ")])],-1)),ee=["onClick"],se={scope:"row",class:"table-row2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},re={class:"table-row2 px-6 py-4"},oe={class:"table-row2 px-6 py-4"},te={class:"table-row2 py-3 text-center text-sm overflow-hidden text-ellipsis cursor-pointer whitespace-nowrap max-w-0 text-red-400"},le={class:"table-row2 px-6 py-4"},ae={class:"table-row2 px-6 py-4"};function ie(r,a,o,l,d,s){const m=v("FilterDrawer"),n=v("font-awesome-icon"),b=v("FilterButton");return h(),u(_,null,[c(m),e("div",F,[e("div",H,[e("div",{onClick:a[0]||(a[0]=t=>s.filter(t,"all")),class:"flex flex-row justify-around items-center w-full p-5 hover:cursor-pointer hover:bg-[rgb(237,237,237)] hover:border-r-4 hover:border-solid hover:border-r-emerald-500"},[e("div",q,[e("div",D,[c(n,{icon:"fa-solid fa-border-all",class:"hover:cursor-pointer"})]),S]),e("label",I,i(d.tickets.length),1)]),e("div",{onClick:a[1]||(a[1]=t=>s.filter(t,"assigned")),class:"flex flex-row justify-around w-full p-5 hover:cursor-pointer hover:bg-[rgb(237,237,237)] hover:border-r-4 hover:border-solid hover:border-r-emerald-500"},[e("div",R,[e("div",j,[c(n,{icon:"fa-solid fa-thumbtack hover:cursor-pointer "})]),B]),e("label",N,i(d.assigned.length),1)]),e("div",{onClick:a[2]||(a[2]=t=>s.filter(t,"accepted")),class:"hover:cursor-pointer flex flex-row justify-around w-full p-5 hover:bg-[rgb(237,237,237)] hover:border-r-4 hover:border-solid hover:border-r-emerald-500"},[e("div",M,[e("div",E,[c(n,{icon:" hover:cursor-pointer fa-solid fa-check"})]),V]),e("label",L,i(d.accepted.length),1)]),e("div",{onClick:a[3]||(a[3]=t=>s.filter(t,"close")),class:"flex flex-row justify-around w-full p-5 hover:cursor-pointer hover:bg-[rgb(237,237,237)] hover:border-r-4 hover:border-solid hover:border-r-emerald-500"},[e("div",U,[e("div",O,[c(n,{icon:"fa-solid fa-file-export",class:"hover:cursor-pointer"})]),J]),e("label",P,i(d.myCloseRequests.length),1)]),e("div",{onClick:a[4]||(a[4]=t=>s.filter(t,"info")),class:"flex flex-row justify-around w-full p-5 hover:cursor-pointer hover:bg-[rgb(237,237,237)] hover:border-r-4 hover:border-solid hover:border-r-emerald-500"},[e("div",z,[e("div",G,[c(n,{icon:"fa-solid fa-question",class:"hover:cursor-pointer"})]),K]),e("label",Q,i(d.infoMe.length),1)])]),e("div",W,[e("div",X,[e("div",{onClick:a[5]||(a[5]=(...t)=>this.downloadExcel&&this.downloadExcel(...t)),class:"p-2 bg-white hover:cursor-pointer border border-solid border-gray-400 rounded-sm mt-2 mb-2 mr-2"},[c(n,{icon:"fa-solid fa-table",class:"mr-2"}),f("Download As Excel")]),f(),c(b)]),e("div",Y,[e("table",Z,[$,e("tbody",null,[(h(!0),u(_,null,y(this.mainStore.getFilteredTickets,(t,g)=>(h(),u("tr",{onClick:de=>s.showDetails(t._id),class:"hover:cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700",key:g},[e("th",se,i(t._id),1),e("td",re,i(t.requestDate),1),e("td",oe,i(t.status),1),e("td",te,i(t.problemDetails),1),e("td",le,i(t.raisedBy.empName),1),e("td",ae,[t.currentHandler?(h(),u(_,{key:0},[f(i(t.currentHandler.empName),1)],64)):k("",!0)])],8,ee))),128))])])])])])],64)}const ne=x(C,[["render",ie],["__scopeId","data-v-9c6e43a7"]]);export{ne as default};