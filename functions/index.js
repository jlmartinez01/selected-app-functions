// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.notificacionMensaje = functions.database.ref('/notificationsChat/{id_notification}/')
    .onCreate(async (change, context) => {
      const id_notification = context.params.id_notification;

      console.log(id_notification)
      admin.database().ref('notificationsChat/'+id_notification).on("value", function(snapshot) {
        console.log(snapshot.val());
        admin.messaging().sendToDevice(snapshot.val().notificationToUser.token_dispositivo, snapshot.val().notificationBody);
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

    })
