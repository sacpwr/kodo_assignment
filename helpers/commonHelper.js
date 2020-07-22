"use strict";

const msg91 = require("msg91")(
  process.env.MSG91_APIKEY,
  process.env.MSG91_SENDER,
  process.env.MSG91_ROUTE
);
const nodemailer = require("nodemailer");
const FUNC = require('../utils/functions')
var fs = require('fs');

/* notification start */
const admin = require("firebase-admin");
const serviceAccount = require(appRoot + '/config/firebase_credentials/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vaayu-a74d4.firebaseio.com"
});
/* notification end */

let YAML = require('yamljs');

exports.responseFormat = function (
  status = true,
  data = {},
  errors = {},
  msg = ""
) {
  return {
    success: status,
    data: data,
    errors: errors,
    message: msg,
  };
};

exports.inviteMailContent = function (data) {
  let html = `

<div style="min-height:100%;margin:0;padding:0;width:100%;background-color:#fafafa">
  <center>
    <table style="border-collapse:collapse;height:100%;margin:0;padding:0;width:100%;background-color:#fafafa" align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">
      <tbody>
      <tr>
        <td style="height:100%;margin:0;padding:0;width:100%;border-top:0" align="center" valign="top">
          <table style="border-collapse:collapse" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody>
            <tr>
              <td style="background-color:#13a89e;border-top:0;border-bottom:0;padding-top:9px;padding-bottom:9px" align="center" valign="top">
                <table style="border-collapse:collapse;max-width:600px!important" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tbody>
                  <tr>
                    <td valign="top">
                      <table style="min-width:100%;border-collapse:collapse" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                        <tr>
                          <td style="padding-top:9px" valign="top">
                            <table style="max-width:390px;border-collapse:collapse" align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                              <tbody>
                              <tr>
                                <td style="padding:0px 18px 9px;color:#ffffff;word-break:break-word;font-family:Helvetica;font-size:12px;line-height:150%;text-align:left" valign="top">
                                  Your Alyte account has been created
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td style="background-color:#ffffff;padding-right:9px;padding-left:9px;padding-top:20px;padding-bottom:0;text-align:center" valign="top">
                <img src="https://mail.google.com/mail/u/0?ui=2&amp;ik=2b2f2ca3fc&amp;attid=0.1&amp;permmsgid=msg-f:1666729200298410213&amp;th=17216960808ec0e5&amp;view=fimg&amp;sz=s0-l75-ft&amp;attbid=ANGjdJ9-OYwcIL-TLdTu3O5H5pAsbzPzrYiOp0TJsxIgGggQ17kn6ZkkFTiENphvxEQ7rTqjfhV9vj78R25Ly5qJapJPFw3Ae8iNSd7l1lnbeRHUz54mMP4eac057sc&amp;disp=emb" data-image-whitelisted="" class="CToWUd a6T" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 549.5px; top: 238px;"><div id=":oa" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" title="Download" role="button" tabindex="0" aria-label="Download attachment logo-dark.png" data-tooltip-class="a1V"><div class="aSK J-J5-Ji aYr"></div></div><div id=":ob" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" title="Add to Drive" role="button" tabindex="0" aria-label="Save attachment to Drive logo-dark.png" data-tooltip-class="a1V"><div class="wtScjd XG J-J5-Ji aYr"><div class="T-aT4"><div></div><div class="T-aT4-JX"></div></div></div></div></div>
                <div style="opacity:0.01" dir="ltr">
                  <div id="m_8308653162390690874:11z" role="button" aria-label="Download attachment ">
                    <div></div>
                  </div>
                </div>
              </td>
            </tr>


  <tr>
    <td style="background-color:#ffffff;border-top:0;border-bottom:0;padding-top:9px;padding-bottom:9px" align="center" valign="top">
      <table style="border-collapse:collapse;max-width:600px!important" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
        <tr>
          <td valign="top">
            <table style="min-width:100%;border-collapse:collapse" border="0" cellpadding="0" cellspacing="0" width="100%">
              <tbody>
              <tr>
                <td style="padding-top:9px" valign="top">
                  <table style="max-width:100%;min-width:100%;border-collapse:collapse" align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                    <tr>
                      <td style="padding-top:0;padding-right:18px;padding-bottom:9px;padding-left:18px;word-break:break-word;color:#202020;font-family:Helvetica;font-size:16px;line-height:150%;text-align:left" valign="top">
                        <h1 style="display:block;margin:0;padding:0;color:#202020;font-family:Helvetica;font-size:26px;font-style:normal;font-weight:bold;line-height:125%;letter-spacing:normal;text-align:left">
                          <span style="font-size:23px">Dear ${data.f_name} ,</span></h1>
                        <div>
                            <p>Welcome to ALYTE! You are now ready to use the ALYTE app</p>
                            <p>Download the ALYTE app <span><a href="http://shorturl.at/tELN6" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://shorturl.at/tELN6&amp;source=gmail&amp;ust=1589618580531000&amp;usg=AFQjCNFiueyThYlylVcPEqBwuPm0ROGBZA">Android</a> <a href="https://tinyurl.com/wxpo9cg" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://tinyurl.com/wxpo9cg&amp;source=gmail&amp;ust=1589618580531000&amp;usg=AFQjCNFiXcNw6-zU7GTszPF2zWzl32kpOQ">iOS</a><span></span></span></p>
                        </div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;- ALYTE Team</div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              </tbody>
            </table>

			</td>
			</tr>
			</tbody>
			</table>
			</td>
			</tr>

			</tbody>
			</table>
			</td>
			</tr>
			</tbody>
			</table>
		</center>
		<div class="yj6qo"></div><div class="adL">
		</div>
	</div>`;

  return html;
};

exports.sendSmsFromClient = async (mobileNumber, msgBody) => {
  return new Promise(function (fulfill, reject) {
    msg91.send(mobileNumber, msgBody, async function (err, response) {
      if (err) {
        return reject({ status: false, msg: err });
      }

      return fulfill({
        status: true,
        msg: { mobileNumber: mobileNumber, response: response },
      });
    });
  });
};

exports.sendEmailFromClient = function (to, subject, htmlBody) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: to,
    subject: subject,
    html: htmlBody,
  };

  return new Promise(function (fulfill, reject) {
    transporter.sendMail(mailOptions, async function (err, info) {
      if (err) {
        return fulfill({ status: false, msg: err });
      }

      return fulfill({
        status: true,
        msg: to + "=> Email sent: " + info.response,
      });
    });
  });
};

exports.checkDateFormat = (dateStr) => {
  //check leap year
  function leapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  }

  //split by -
  let datePart = dateStr.split("-");
  if (datePart.length != 3) {
    throw { msg: "Invalid Date" };
  }
  let day = datePart[0];
  let month = datePart[1];
  let year = datePart[2];

  //year must have 4 length
  if (year.length != 4) {
    throw { msg: "Invalid Date" };
  }

  //month must be between 1 to 12
  if (!(parseInt(month) >= 1 && parseInt(month) <= 12)) {
    throw { msg: "Invalid Date" };
  }

  //leap year feb month days must be between 1 to 29
  if (
    parseInt(month) == 2 &&
    leapYear(year) &&
    !(parseInt(day) <= 29 && parseInt(day) >= 1)
  ) {
    throw { msg: "Invalid Date" };
  }
  //non leap year feb month days must be between 1 to 28
  if (
    parseInt(month) == 2 &&
    !leapYear(year) &&
    !(parseInt(day) <= 28 && parseInt(day) >= 1)
  ) {
    throw { msg: "Invalid Date" };
  }
  //month days check for 1 to 30
  if (
    parseInt(month) != 2 &&
    [4, 6, 9, 11].includes(parseInt(month)) &&
    !(parseInt(day) <= 30 && parseInt(day) >= 1)
  ) {
    throw { msg: "Invalid Date" };
  }
  //month days check for 1 to 31
  if (
    [1, 3, 5, 7, 8, 10, 12].includes(parseInt(month)) &&
    !(parseInt(day) <= 31 && parseInt(day) >= 1)
  ) {
    throw { msg: "Invalid Date" };
  }
};

/**
 * should be in HH:mm:ss and string format
 * @param {*} time
 */
exports.checkTime = (time) => {
  let times = time.split(":");
  if (times.length != 3) {
    throw { msg: "Invalid Time" };
  }
  let hours = +times[0];
  let minutes = +times[1];
  let seconds = +times[2];

  if (!(hours >= 0 && hours < 24)) {
    throw { msg: "Invalid Time" };
  }
  if (!(minutes >= 0 && minutes < 60)) {
    throw { msg: "Invalid Time" };
  }
  if (!(seconds >= 0 && seconds < 60)) {
    throw { msg: "Invalid Time" };
  }
  return true;
};

exports.deleteBackendCreatedFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("File not deleted", err);

        let req = { originalUrl: "deleteBackendCreatedFile", method: "-" };
        FUNC.logSave(req, {}, {}, req.headers, "api_ms", "master_ms deleteBackendCreatedFile error occurred", "FATAL", "api", err)

        throw (err);
      } else {
        console.log("Backend Contract File deleted");
        resolve({
          success: true
        })
      }
    });
  })
}

exports.notifyApp=async (title,msgBody,userId)=>{

  var message = {
    notification: {
      title: title,
      body: msgBody,
      //color: 'rrggbb'
      //icon: "ic_launcher"
    },
    //token: registrationToken
    topic: "techmblrprod_user_"+userId
  };

  // Send a message to the device corresponding to the provided
  // registration token.
  admin.messaging().send(message)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });

}

exports.PushNotificationWorkerNotifyApp=async (request_Type,userId,data)=>{

  // var message = {
  //   ...data,
  //   topic: `${process.env.FCM_TOPIC_PREFIX}_${request_Type}_${userId}`
  // };
  console.log(`${process.env.FCM_TOPIC_PREFIX}_${request_Type}_${userId}`,data)
  // Send a message to the device corresponding to the provided
  // registration token.
  admin.messaging().sendToTopic(`${process.env.FCM_TOPIC_PREFIX}_${request_Type}_${userId}`,data)
    .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });

}

exports.YAMLtoJSON=(yamlStr) => {
	var obj = YAML.parse(yamlStr);
	var jsonStr = JSON.stringify(obj);
	return JSON.parse(jsonStr);
}

exports.JSONtoYAML=(jsonStr) => {
	var obj = JSON.parse(jsonStr);
	var yamlStr = YAML.stringify(obj);
	return yamlStr;
}

exports.resolveNotification = async(notificationId) => {
  try {
    //notificationId = 1466745
    let notifications = await sequelize.query("SELECT * FROM notifications where id = "+notificationId+"", { type: sequelize.QueryTypes.SELECT });
    if(notifications.length > 0){
      if(notifications[0].resolved_status == 0)
      {      
        let notificationUpdate = await models.Notification.update(
        {
          resolvedStatus: 1,
        },
        { where: { id: notificationId }}
        );
      }
      return {successflag : true, msg :notificationId};
    }
    else
    {
      return {successflag : false, msg :"Please enter valid notificationId."}
    }
  } catch (error) {
    console.log('Exception in resolveNotification :'+error);
  }
}