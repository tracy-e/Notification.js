Notification.js
===============

<script src="/blob/master/Notification.js"></script>
<script>
  function send() {
     notify('Notification.js', 'A Simple Website Notification Tool.', function(){
         alert('Sorry! Your Browser is not support Notification.');
     });  
  }
</script>
<button onclick="send()">Send a Notification</button>
