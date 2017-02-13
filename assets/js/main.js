document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';

}, false);

/*
One Time Password(OTP) is yours to generate now!
Choose the contact below and send the OTP anytime.
*/

$(document).ready(function() {
    var data = {"Users": [
          {"Name": "Jane Doe",
           "Phone": 7954568534},
          {"Name": "Sam Kid",
          "Phone": 9458357454},
          {"Name": "Vikram Chauhan",
          "Phone": 7837489327},
          {"Name": "Ishant Dhawale",
          "Phone": 2582828525},
          {"Name": "Ajit Singh",
          "Phone": 8586632225},
          {"Name": "Puneet Singh",
          "Phone": 9595382625},
          {"Name": "Shubham Devikar",
          "Phone": 2969295299},
           {"Name": "Ashish Shah",
          "Phone": 8456564556},
           {"Name": "Salil Garg",
          "Phone": 7595383456},
           {"Name": "Vinay Tomar",
          "Phone": 9695383456},
          {"Name": "Rishabh Thakur",
          "Phone": 8595383456},
           {"Name": "Himanshu Zutshi",
          "Phone": 8795383456}
  ]};
   
   // console.log(data['Users']);
 $(data['Users']).each(function(index,value) {
      $('#contacts .contacts_list').append(
          '<div class="col-sm-4">'+
            '<h4><a href="contacts.html" class="con_name">'+value['Name']+'</a></h4>'+
          '</div>'
        );

      $('#mess .send_message').append(
          '<div class="col-sm-4">'+
            '<span>'+value['Name']+'</span>'+
          '</div>'
        );
      // console.log(data);
      $('.con_name').click(function() {
          var a = $(this).html();
        $('#intro .contact_name').append(
          
            '<span>'+value['Name']+'</span>'
          
        );
      });
 });


 
});


