
  const firebaseConfig = {
    apiKey: "AIzaSyBPtEbqqXvdljgz5NT2hILFvVg3Ug-XTaw",
    authDomain: "signup-a30cb.firebaseapp.com",
    databaseURL:"https://signup-a30cb.firebaseapp.com",
    projectId: "signup-a30cb",
    storageBucket: "signup-a30cb.appspot.com",
    messagingSenderId: "675734803463",
    appId: "1:675734803463:web:279ad5225e5e63792846a2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
        const auth = firebase.auth();
                
                
                function signUp(){
                    
                    const email = document.getElementById("email");
                    const password = document.getElementById("password");
                    
                    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
                    promise.catch(e => alert(e.message));
                    
                    alert("Signed Up");
                }
                
                
                
                function signIn(){
                    
                    const email = document.getElementById("email");
                    const password = document.getElementById("password");
                    
                    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
                    promise.catch(e => alert(e.message));
                    
                    
                    
                    
                }
                
                
                function signOut(){
                    
                    auth.signOut();
                    alert("Signed Out");
                    
                }
                
                
                
                auth.onAuthStateChanged(function(user){
                    
                    if(user){
                        
                        const email = user.email;
                        alert("Active User " + email);
                        
                        //Take user to a different or home page

                        //is signed in
                        
                    }else{
                        
                        alert("No Active User");
                        //no user is signed in
                    }
                    
                    
                    
                });
	


