  /**
   * @title Call
   * @category Tutorial
   * @author Botpress, Inc.
   */
  function getAnswer() {
    let rsrc = temp.srvc
    let oData = ''
    switch (rsrc) {
      case 'video':
      case 'upload':
        oData = 'CTV will play video uploaded by Santa Cruz County Residents at least once. '
        oData += "Here's where you can upload video to CTV "
        oData += '[Upload video here](https://communitytv.org/programming-2/programming/)'
        break
      case 'format':
        oData = 'CTV accepts most all video formats.'
        oData += 'However, for best results, export a high quality compressed .mov file'
        break
      case 'studio':
        oData = 'CTV has a full featured video studio you can rent.'
        oData = 'For full information and to request a rental visit '
        oData += '[CTV Video Studio](https://satellitevideostudio.com/)'
        break
      case 'calendar':
        oData = "If you'd like to submit a slide to play on CTV's community calendar you can do that at this link: "
        oData += '[Community Calendar](https://communitytv.org/cruz/submit-calendar-psa-slide/)'
        break
      case 'PSA':
        oData = "Would you like to participate in CTV's PSA Day? You can sign up here: "
        oData += '[PSA Day Signup](https://communitytv.org/ctv-public-service-announcement-information-form/)'
        break
      case 'channel':
      case 'schedule':
      case 'watch':
        oData = "CTV's channels stream live 24/7 here: "
        oData += '[Watch CTV Here](https://communitytv.org/watch/)'
        break
      case 'equipment':
        oData = "If you'd like to rent equipment, CTV has a large selection of equipment here: "
        oData += '[CTV Equipment Rental Site](https://satellite.communitytv.org/equipment-reservations/)'
        break
      case 'offices':
        oData = "If you'd like to reserve office space or our conference room, you can do that here: "
        oData +=
          '[Satellite Site](https://scdigital.satellitedeskworks.com/simple-reservation/centers/1/types?center=1)'
        oData += ' Or contact us at '
        oData += '[iberry@thesatelliteinc.com](mailto:iberry@thesatelliteinc.com)'
        oData += ' [831-531-2300](tel:+1831-531-2300)'
        break
      case 'podcast':
        oData = "If you'd like to reserve our audio booth, you can do that here: "
        oData +=
          '[Satellite Site](https://scdigital.satellitedeskworks.com/simple-reservation/centers/1/types?center=1)'
        oData += ' Or contact us at '
        oData += '[iberry@thesatelliteinc.com](mailto:iberry@thesatelliteinc.com)'
        oData += ' [831-531-2300](tel:+1831-531-2300)'
        break
      case 'meeting':
        oData = 'Looking for an archived government meeting? CTV has many local meetings here: '
        oData += '[Government Meetings](https://communitytv.org/watch/)'
        break
      case 'located':
        oData = 'CTV is located at 325 Soquel Ave in Santa Cruz. '
        oData +=
          '[CTV Location Map](https://www.google.com/maps/place/325+Soquel+Ave,+Santa+Cruz,+CA+95062/@36.9745621,-122.0229392,17z/data=!3m1!4b1!4m5!3m4!1s0x808e4020d64c8845:0x3b3f84568e220be6!8m2!3d36.9745621!4d-122.0207452)'
        break
      case 'hours':
        oData = 'CTV is open from 9 AM to 5 PM Monday through Friday. Or, '
      case 'job':
      case 'intern':
      case 'contact':
        oData += 'Contact us at '
        oData += '[iberry@thesatelliteinc.com](mailto:iberry@thesatelliteinc.com)'
        oData += ' [831-531-2300](tel:+1831-531-2300)'
        break
      case 'show':
      case 'member':
        oData = 'Would you like to become a member of CTV? You can find out more here: '
        oData += '[CTV Membership Info](https://communitytv.org/become-member-ctv/)'
        break
      case 'RSVP':
        oData = "CTV has a 'Do it yourself' one person studio called the RSVP. Find out more here: "
        oData += '[RSVP Studio](https://communitytv.org/rsvp-really-simple-video-place-diy-video-studio/)'
        break
      case 'privacy':
      case 'policies':
      case 'release':
        oData = "CTV's privacy policy is here: "
        oData += '[Privacy Policy](https://communitytv.org/privacy-policy/)   '
        oData += 'Our Terms and Conditions are here: '
        oData += '[Terms and Conditions](https://communitytv.org/privacy-policy/terms-and-conditions/)'
        oData += " The rest of CTV's documents, including release forms are here: "
        oData += '[CTV Documents](https://communitytv.org/about/ctv-documents/)'
        break
      case 'class':
        oData = 'CTV is not having classes during the pandemic. When we have new classes they will be here: '
        oData += '[CTV Classes](https://communitytv.org/available-classes/more-classes-coming-soon/)'
        break
      case 'frozen':
        oData = "CTV's video channels and streams may occasionally freeze. Please contact us by email here: "
        oData += '[info@communitytv.org](mailto:info@communitytv.org)'
        break
      case 'youth':
        oData =
          'CTV has a youth grant program for qualified nonprofits in Santa Cruz County. You can find out more here: '
        oData += '[Youth Grant](https://communitytv.org/youth-av-grant-guidelines/)'
        break
      case 'board':
        oData = "CTV's Board Of Directors are listed here: "
        oData += '[Board of Directors](https://communitytv.org/ctv-board-directors/)'
        break
      case 'director':
        oData = "CTV's Executive Director is Becca Reed."
        break
      case 'donate':
      default:
        oData = 'Nothing found for ' + rsrc + ', sorry.'
    }
    session.response = oData
  }

  // Actions are async, so make sure to return a promise
  return getAnswer()