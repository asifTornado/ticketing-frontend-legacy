import{_ as V,f as y,r as k,o as n,c,a as t,w as p,h as w,Z as U,b as v,F as x,g as _,d as L,v as D,t as S}from"./index-d0c9d9c3.js";const j={data(){return{department:null,hasServices:!1,usersList:[],users:[],subordinates:[],services:[],serviceSubordinateList:[],leader:null,leadersList:[],subordinatesList:[],head:null,serviceLeadersList:[],serviceSubordinatesUserList:[],serviceDetailList:[],details:[]}},created(){this.getUsers()},methods:{insertDepartment(){var e=this,l;if(e.hasServices){e.head=e.users.filter(r=>r.mailAddress==e.head)[0],e.services=e.services.map((r,i)=>(r.subordinates=e.serviceSubordinateList[i],r.details=e.serviceDetailList[i],r));for(var a=0;a<e.services.length;a++){var u=e.users.filter(r=>r.mailAddress==e.services[a].serviceLeader)[0];e.services[a].serviceLeader=u;for(var s=0;s<e.services[a].subordinates.length;s++){var d=e.users.filter(r=>r.mailAddress==e.services[a].subordinates[s].user)[0];e.services[a].subordinates[s].user=d}}l={name:e.department,services:e.services,hasServices:e.hasServices,leader:e.leader,head:e.head}}else e.subordinates=e.subordinates.map(r=>{var i=e.users.filter(o=>o.mailAddress==r.user);return{user:i[0],rank:r.rank}}),e.leader=e.users.filter(r=>r.mailAddress==e.leader)[0],e.head=e.users.filter(r=>r.mailAddress==e.head)[0],l={name:e.department,subordinates:e.subordinates,hasServices:e.hasServices,leader:e.leader,head:e.head,details:e.details};console.log(l);var b=this.authStore.getToken,f=new FormData;f.append("token",b),f.append("team",JSON.stringify(l)),y.post(e.globalUrl+"createTeam",f).then(r=>{r.data==!0&&e.$router.push("/ticketing/systemAdmin")}).catch(r=>{e.$toast.warning(r)})},addSubordinate(){var e=this,l={user:null,rank:e.subordinates.length+2};e.subordinates.push(l)},addDetail(){var e=this,l={label:"",input:null};e.details.push(l)},deleteSubordinate(e,l){this.subordinates.splice(l,1)},deleteDetail(e,l){this.details.splice(l,1)},addService(){var e=this,l={serviceName:null,subordinates:[],serviceLeader:null,details:[]};e.serviceSubordinateList.push([]),e.serviceDetailList.push([]),e.services.push(l)},addServiceSubordinate(e,l){console.log("from inside service subordinate"+l);var a=this,u={user:null,rank:a.services[l].subordinates.length+2};a.serviceSubordinateList[l].push(u)},addServiceDetail(e,l){var a=this,u={label:"",input:null};a.serviceDetailList[l].push(u)},deleteServiceSubordinate(e,l,a){var u=this;u.serviceSubordinateList[a].splice(l,1)},deleteServiceDetail(e,l,a){var u=this;u.serviceDetailList[a].splice(l,1)},deleteService(e,l){var a=this;a.services.splice(l,1)},getUsers(){var e=this,l=this.authStore.getToken,a=new FormData;a.append("token",l),y.post(e.globalUrl+"getUsers",a).then(u=>{e.users=u.data,e.usersList=e.users.map(s=>s.mailAddress),e.leadersList=e.users.filter(s=>s.userType=="leader").map(s=>s.mailAddress),e.subordinatesList=e.users.filter(s=>s.userType=="support").map(s=>s.mailAddress)}).catch(u=>{e.$toast.warning(u)})}}},A={class:"h-screen w-full",id:"app"},N={class:"h-20 bg-gray-100 w-full flex flex-row justify-between p-2 items-center"},T={class:"flex flex-row justify-center items-center"},C=t("label",{for:"hasServices"},"Has Different Services",-1),z={key:0,id:"body",class:"h-24 w-full flex flex-col"},E={class:"flex flex-row items-center justify-start mt-10 ml-10"},F=t("label",{for:"",class:"mr-10 text-lg"},"Select Team Leader",-1),B={class:"w-1/4"},H=t("label",{for:"",class:"mr-10 ml-20 text-lg"},"Select Department Head",-1),M={class:"w-1/4"},R={class:"flex flex-col h-auto rounded-md p-[50px] mt-10 justify-center items-center bg-gray-100"},J={class:"flex flex-row w-3/4 mr-10"},O=t("label",{for:"",class:""},"Select Subordinate",-1),Z={class:"flex flex-row justify-center items-center"},q=t("label",{for:"",class:"mr-2"},"Select Rank",-1),G=["onUpdate:modelValue"],I={class:"p-2"},K={class:"flex flex-col h-auto rounded-md p-[50px] mt-10 justify-center items-center bg-gray-100"},P={class:"flex flex-row justify-center items-center w-full"},Q={for:"",class:"mr-2"},W=["onUpdate:modelValue"],X={class:"flex flex-row items-center w-full justify-end mr-10"},Y={key:1,class:"h-full"},$={class:"flex flex-row ml-10 mt-4"},ee=t("label",{for:"",class:"mr-10 text-lg"},"Select Department Head",-1),se={class:"w-1/3"},te={class:"h-20 bg-gray-100 w-full flex flex-row justify-between p-2 items-center"},le=["onUpdate:modelValue"],re={class:"flex flex-row items-center justify-start w-full"},ie=t("label",{for:"",class:"mr-10 text-lg"},"Select Team Leader",-1),oe={class:"w-1/3"},ae={class:"flex flex-col h-full w-full justify-center items-center mt-10"},de={class:"flex flex-row w-3/4 mr-10"},ne=t("label",{for:"",class:""},"Select Subordinate",-1),ce={class:"flex flex-row justify-center items-center"},ue=t("label",{for:"",class:"mr-2"},"Select Rank",-1),me=["onUpdate:modelValue"],ve=["value"],he=["onClick"],fe={class:"flex flex-col w-full justify-center items-center mt-10"},be={class:"flex flex-row justify-center items-center w-full"},pe={for:"",class:"mr-2"},xe=["onUpdate:modelValue"],_e=["onClick"],we={class:"flex flex-row justify-center items-center"},Se={class:"flex flex-row items-center w-full justify-end mr-10"};function ge(e,l,a,u,s,d){const b=k("vss"),f=k("font-awesome-icon");return n(),c("div",A,[t("div",N,[p(t("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=r=>s.department=r),placeholder:"Enter Department Name",class:"text-2xl p-4 ml-10 w-[500px] rounded-md border border-solid border-gray-600 h-12"},null,512),[[w,s.department]]),t("div",T,[C,p(t("input",{type:"checkbox","onUpdate:modelValue":l[1]||(l[1]=r=>s.hasServices=r),name:"hasServices",id:"hasServices",class:"h-9 w-16 border border-solid border-gray-600"},null,512),[[U,s.hasServices]])])]),s.hasServices?L("",!0):(n(),c("div",z,[t("div",E,[F,t("div",B,[v(b,{options:s.leadersList,searchable:!0,modelValue:s.leader,"onUpdate:modelValue":l[2]||(l[2]=r=>s.leader=r)},null,8,["options","modelValue"])]),H,t("div",M,[v(b,{options:s.leadersList,searchable:!0,modelValue:s.head,"onUpdate:modelValue":l[3]||(l[3]=r=>s.head=r)},null,8,["options","modelValue"])])]),t("div",R,[(n(!0),c(x,null,_(s.subordinates,(r,i)=>(n(),c("div",{key:i,class:"flex flex-row w-full justify-center items-center mt-10"},[t("div",J,[O,v(b,{options:s.subordinatesList,searchable:!0,modelValue:s.subordinates[i].user,"onUpdate:modelValue":o=>s.subordinates[i].user=o},null,8,["options","modelValue","onUpdate:modelValue"])]),t("div",Z,[q,p(t("select",{class:"h-12 w-12 border border-solid border-gray-200","onUpdate:modelValue":o=>s.subordinates[i].rank=o},[(n(!0),c(x,null,_(s.subordinates.length,(o,m)=>(n(),c("option",I,S(m+2),1))),256))],8,G),[[D,s.subordinates[i].rank]]),t("div",null,[v(f,{icon:"fa-solid fa-trash",size:"2x",class:"hover:cursor-pointer ml-10 text-rose-500",onClick:o=>d.deleteSubordinate(o,i)},null,8,["onClick"])])])]))),128)),t("div",{class:"hover:cursor-pointer h-auto w-auto my-10 bg-blue-500 text-lg font-bold text-white p-5 rounded-md",onClick:l[4]||(l[4]=(...r)=>d.addSubordinate&&d.addSubordinate(...r))},"Add Subordinate")]),t("div",K,[(n(!0),c(x,null,_(s.details,(r,i)=>(n(),c("div",{key:i,class:"flex flex-row w-full justify-center items-center mt-10"},[t("div",P,[t("label",Q,"Detail "+S(i+1)+" Name:",1),p(t("input",{class:"h-12 w-3/4 border border-solid border-gray-200","onUpdate:modelValue":o=>s.details[i].label=o},null,8,W),[[w,s.details[i].label]]),t("div",null,[v(f,{icon:"fa-solid fa-trash",size:"2x",class:"ml-10 text-rose-500 hover:cursor-pointer",onClick:o=>d.deleteDetail(o,i)},null,8,["onClick"])])])]))),128)),t("div",{class:"h-auto w-auto my-10 bg-amber-500 text-lg font-bold text-white p-5 rounded-md",onClick:l[5]||(l[5]=(...r)=>d.addDetail&&d.addDetail(...r))},"Add Extra Detail"),t("div",X,[t("div",{onClick:l[6]||(l[6]=(...r)=>d.insertDepartment&&d.insertDepartment(...r)),class:"h-auto w-auto p-6 mr-10 mb-10 rounded-md bg-blue-600 text-white font-bold text-lg hover:cursor-pointer"},"Create Team")])])])),s.hasServices?(n(),c("div",Y,[t("div",$,[ee,t("div",se,[v(b,{options:s.leadersList,searchable:!0,modelValue:s.head,"onUpdate:modelValue":l[7]||(l[7]=r=>s.head=r)},null,8,["options","modelValue"])])]),(n(!0),c(x,null,_(s.services,(r,i)=>(n(),c("div",{class:"flex flex-col h-auto rounded-md p-[50px] mt-4 justify-center items-center bg-gray-100",key:i},[t("div",te,[p(t("input",{type:"text","onUpdate:modelValue":o=>s.services[i].serviceName=o,placeholder:"Enter Service Name",class:"text-2xl p-4 ml-10 w-[500px] rounded-md border border-solid border-gray-600 h-12"},null,8,le),[[w,s.services[i].serviceName]]),v(f,{icon:"fa-solid fa-trash",class:"hover:cursor-pointer text-red-500 hover:cursor-pointer",onClick:o=>d.deleteService(o,i),size:"3x"},null,8,["onClick"])]),t("div",re,[ie,t("div",oe,[v(b,{options:s.leadersList,searchable:!0,modelValue:s.services[i].serviceLeader,"onUpdate:modelValue":o=>s.services[i].serviceLeader=o},null,8,["options","modelValue","onUpdate:modelValue"])])]),t("div",ae,[(n(!0),c(x,null,_(s.serviceSubordinateList[i],(o,m)=>(n(),c("div",{key:m,class:"flex flex-row w-full justify-center items-center mt-10"},[t("div",de,[ne,v(b,{options:s.subordinatesList,searchable:!0,modelValue:s.serviceSubordinateList[i][m].user,"onUpdate:modelValue":h=>s.serviceSubordinateList[i][m].user=h},null,8,["options","modelValue","onUpdate:modelValue"])]),t("div",ce,[ue,p(t("select",{class:"h-12 w-12 border border-solid border-gray-200","onUpdate:modelValue":h=>s.serviceSubordinateList[i][m].rank=h},[(n(!0),c(x,null,_(s.serviceSubordinateList[i].length,(h,g)=>(n(),c("option",{key:g,class:"p-2",value:g+2},S(g+2),9,ve))),128))],8,me),[[D,s.serviceSubordinateList[i][m].rank]]),t("div",null,[v(f,{icon:"fa-solid fa-trash",size:"2x",class:"hover:cursor-pointer ml-10 text-rose-500",onClick:h=>d.deleteServiceSubordinate(h,m,i)},null,8,["onClick"])])])]))),128)),t("div",{class:"hover:cursor-pointer h-auto w-auto mt-10 bg-blue-500 text-md font-bold text-white p-3 rounded-md",onClick:o=>d.addServiceSubordinate(o,i)},"Add Subordinate",8,he)]),t("div",fe,[(n(!0),c(x,null,_(s.serviceDetailList[i],(o,m)=>(n(),c("div",{key:m,class:"flex flex-row w-full justify-center items-center mt-10"},[t("div",be,[t("label",pe,"Detail "+S(m+1)+" Name",1),p(t("input",{class:"h-12 w-3/4 border border-solid border-gray-200","onUpdate:modelValue":h=>s.serviceDetailList[i][m].label=h},null,8,xe),[[w,s.serviceDetailList[i][m].label]]),t("div",null,[v(f,{icon:"fa-solid fa-trash",size:"2x",class:"hover:cursor-pointer ml-10 text-rose-500",onClick:h=>d.deleteServiceDetail(h,m,i)},null,8,["onClick"])])])]))),128)),t("div",{class:"hover:cursor-pointer h-auto w-auto mt-10 bg-amber-500 text-md font-bold text-white p-3 rounded-md",onClick:o=>d.addServiceDetail(o,i)},"Add Extra Detail",8,_e)])]))),128)),t("div",we,[t("div",{class:"hover:cursor-pointer h-auto w-auto my-10 bg-emerald-500 text-2xl font-bold text-white p-5 rounded-md",onClick:l[8]||(l[8]=(...r)=>d.addService&&d.addService(...r))},"Add Service")]),t("div",Se,[t("div",{onClick:l[9]||(l[9]=(...r)=>d.insertDepartment&&d.insertDepartment(...r)),class:"h-auto w-auto p-6 mr-10 mb-10 rounded-md bg-blue-600 text-white font-bold text-lg hover:cursor-pointer"},"Create Team")])])):L("",!0)])}const ke=V(j,[["render",ge]]);export{ke as default};