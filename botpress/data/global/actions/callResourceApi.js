  const axios = require('axios')

  /**
   * @title Call resource.php to get resource name and link from DB
   * @category Resources
   * @author kgudger
   */
  const callResourceApi = async () => {
    // We call a php file to get the name and link
    let rsrc = temp.rsrce.toLowerCase()
    // rsrc is the search term
    const { data } = await axios.get('http://localhost/request.php?command=getResource&resource=' + rsrc)

    // now we change the returns JSON into an array
    let rData = new Object()
    try {
      // Parse a JSON
      rData = JSON.parse(data)
    } catch (e) {
      // You can read e for more info
      // Let's assume the error is that we already have parsed the payload
      // So just return that
      rData = data
    }
    let oData = '**' + rsrc + '** \n'
    for (const property in rData) {
      if (rData[property]['title'].toString() && rData[property]['link'].toString()) {
        oData += '+ [' + rData[property]['title'].toString() + '](' + rData[property]['link'].toString() + ')\n'
      } else if (rData[property]['link'].toString()) {
        // case where no title, but link exists
        oData += '+ [' + rData[property]['link'].toString() + '](' + rData[property]['link'].toString() + ')\n'
      }
    }

    // We assign the response to the session variable so we can use it later
    session.response = oData
  }

  // Actions are async, so make sure to return a promise
  return callResourceApi()