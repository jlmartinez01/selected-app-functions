// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.notificacionMensaje = functions.database.ref('/messages/{usu_local}/{usu_no_local}')
    .onUpdate(async (change, context) => {
      const usu_local = context.params.usu_local;
      const usu_no_local = context.params.usu_no_local;

      const payload = {
        notification: {
          title: 'You have a new follower!',
          body: `is now following you.`,
        }
      };

      admin.messaging().sendToDevice('fP8byLGN2pw:APA91bF_72Gfx5SsFAeWiEgrKbStTjTuSVN4sJJgT6h4fBwL7XIUa-R1piz7oyUbsnZP_0Mz5ve6QAEkNPybKSNaGJp_gKbczUjJxwk9sHtSg1eCsh0Susq_iQD-gYMV4E1m5xmdm8mp', payload);



    })
