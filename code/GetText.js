module.exports.function = function getText (contactInfos) {
  var rslt = ""
  // return "hahaha " + contactInfos.length;
  for (let i=0; i<contactInfos.length; i++) {
    // rslt += contactInfos[i].phoneInfos[0].phoneNumber;
    rslt += "name: " + contactInfos[i].nameInfo.structuredName + " phone: " + contactInfos[i].phoneInfos[0].number
    // phone: " + contactInfos[i].phoneInfos[0].phoneNumber;
  }
  return rslt;
}
