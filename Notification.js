var notify = function (title, body) {
    // check for notification compatibility
    if (window.Notification) {
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
        // if the user does not want notifications to come from this domain
        else if (Notification.permission === 'denied') {
            // be silent
            return;
        }
    } else {
        //TODO:show custom Notification board.
    }
}