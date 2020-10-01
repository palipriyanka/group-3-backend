function getdata(){
var database = firebase.database();
var userRef = database.ref('users');
userRef.on('value' ,function(snapshot){
    console.log(snapshot.val());
});
}