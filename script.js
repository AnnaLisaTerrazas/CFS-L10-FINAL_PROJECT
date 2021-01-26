function idCard (){
     var firstName= document.getElementById('firstName').value;
     var lastName= document.getElementById('lastName').value;
     var address= document.getElementById('address').value;
     console.log("First Name" + firstName);
     console.log("Last Name" + lastName);
     console.log("Address" + address);
   
   var postFullName= firstName + lastName;
   document.getElementById("postFullName").innerHTML = postFullName;
   var postAddress= address;
   document.getElementById('postAddress').innerHTML = postAddress;
   
     var age =parseInt(document.getElementById('age').value);
     var phoneNumber =parseInt(document.getElementById('phoneNumber').value);
     var postAge=age;
     document.getElementById("postAge").innerHTML = "Age:" + postAge;
     var postPhoneNumber= phoneNumber;
     document.getElementById("postPhoneNumber").innerHTML = "PhoneNumber" + postPhoneNumber;
     numberArray.push("age","phoneNumber");
     console.log("Age" + age);
     console.log("PhoneNumber" + phoneNumber);
     
 }
 var result = LoopingThroughArray();
 idCard();