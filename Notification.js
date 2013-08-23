var notify = function (title, body, error) {
    //Chrome & Safari both support ’webkitNotification’, but Safari(Apple) prefer ‘Notification’.
    if (window.webkitNotifications && navigator.userAgent.indexOf("Chrome") > -1) {
        if (webkitNotifications.checkPermission() == 0) {
            var notification_test = webkitNotifications.createNotification(null, title, body);
             notification_test.onclick = function() {this.cancel();} 
             notification_test.replaceId = 'id' + Math.random();
             notification_test.show();
         } else {
             webkitNotifications.requestPermission(function(){
                notify(title, body);
             });
         }
    } 
    //Safari & other W3C 'Notification' supported Browser such as Firefox.
    else if (window.Notification) {
        // if the user has not been asked to grant or deny notifications from this domain
        if (Notification.permission === 'default') {
            Notification.requestPermission(function() {
                // callback this function once a permission level has been set
                notify(title, body);
            })
        } 
        // if the user has granted permission for this domain to send notifications
        else if (Notification.permission === 'granted') {
            var n = new Notification(title, { 'body': body, 'tag': 'id' + Math.random() });

            // remove the notification from Notification Center when it is clicked
            n.onclick = function() {
                this.close();
            }
        } 
    } else if (error) {
        error();
    }
}
