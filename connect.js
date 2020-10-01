const f_name=document.getElementById("f_name");




const addbtn=document.getElementById("addbtn");

const database=firebase.database();


addbtn.addEventListener('click',(e)=>{
e.preventDefault();
database.ref('/users/'+f_name.value).set({
   first_name:f_name.value

});
});
