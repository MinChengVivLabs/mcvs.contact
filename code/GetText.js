var console = require('console')

module.exports.function = function getText (contactInfos, addressInfos) {
  var rslt = ""
  rslt = JSON.stringify(contactInfos)
  rslt += '******** phoneInfos = ' + JSON.stringify(contactInfos.phoneInfos)
  rslt += '******** relationshipInfos = ' + JSON.stringify(contactInfos.relationshipInfos)
  rslt += '&&&&&&&& length = ' + contactInfos.relationshipInfos.length
  console.log ("relationshipInfos = ", contactInfos.relationshipInfos)
  return rslt;
  
  // return "hahaha " + contactInfos.length;
  for (let i=0; i<contactInfos.length; i++) {
    // rslt += contactInfos[i].phoneInfos[0].phoneNumber;
    rslt += "name: " + contactInfos[i].nameInfo.structuredName + " phone: " + contactInfos[i].phoneInfos[0].number
    rslt = JSON.stringify(contactInfos[i])
    if (contactInfos[i].addressInfos) {
      rslt += " addressInfos found" // addressInfos
    }
    else {
      rslt += " addressInfos not found"
    }

    // if (contactInfos[i].birthdayInfo)
    //   rslt += " birthdayInfo found!"
    // else if (contactInfos[i].birthdayInfos)
    //   rslt += " birthdayInfos found!"
    // else 
    //   rslt += " none found!"
  }
  return rslt;
}
