function isGoodProposal(country) {
    const proposition = document.getElementById("country").value
    return country.toLowerCase() === proposition.toLowerCase()
}


function getNextFlag(flag) {
    const id = Math.floor((Math.random() * 254) + 1)
    flag.src = "flags/" + id + ".png"
    return flag
}


function stylizeEndingMessage(element) {
    element.style.backgroundColor = "#425664"
    element.style.color = "white"
    element.style.display = "block"
}


function endingMessage(results, retry, points) {
    document.getElementsByTagName("header")[0].style.opacity = "0.2"
    document.getElementById("proposal").style.opacity = "0.2"
    document.getElementsByTagName("img")[0].style.opacity = "0.2"
    document.getElementById("score").style.opacity = "0.2"

    results.innerHTML = "You got " + points + " out of 5 !"
    stylizeEndingMessage(results)

    retry.innerHTML = "Retry"
    stylizeEndingMessage(retry)
    retry.onclick = function() {window.location.reload()}
}


function main() {
    let flag = document.getElementById("img")
    const countries = {'59': 'Greece', '242': 'Colombia', '102': 'England', '35': 'United States Virgin Islands', '115': 'Iceland', '224': 'Peru', '37': 'Cyprus', '34': 'Antigua and Barbuda', '174': 'Tajikistan', '177': 'Kenya', '213': 'Nicaragua', '132': 'Faroe Islands', '93': 'Northern Mariana Islands', '170': 'Belgium', '195': 'Aruba', '43': 'Kiribati', '230': 'Spain', '9': 'Jersey', '22': 'Guernsey', '1': 'Bulgaria', '165': 'Maldives', '164': 'Central African Republic', '5': 'Eswatini (Swaziland)', '25': 'Chile', '26': 'DR Congo', '155': 'Zambia', '48': 'Ecuador', '80': 'Cuba', '240': 'Northern Ireland', '207': 'Niue', '123': 'Martinique', '29': 'Estonia', '53': 'Japan', '84': 'Sint Maarten', '220': 'Azerbaijan', '95': 'United Kingdom', '105': 'Guinea', '210': 'French Polynesia', '226': 'Turkmenistan', '96': 'Iraq', '49': 'Rwanda', '88': 'Armenia', '235': 'Anguilla', '205': 'Turkey', '91': 'Argentina', '194': 'Kuwait', '75': 'North Korea', '120': 'Papua New Guinea', '121': 'Saudi Arabia', '185': 'Iran', '13': 'Tuvalu', '30': 'Niger', '209': "Côte d'Ivoire (Ivory Coast)", '136': 'Bouvet Island', '143': 'Palau', '218': 'Vietnam', '42': 'Austria', '200': 'Montserrat', '253': 'Brazil', '31': 'Gambia', '157': 'Nigeria', '107': 'Russia', '138': 'Afghanistan', '3': 'Costa Rica', '180': 'Uruguay', '28': 'Romania', '169': 'Albania', '20': 'Pitcairn Islands', '15': 'Saint Martin', '81': 'Wales', '116': 'Dominican Republic', '233': 'Cook Islands', '125': 'Italy', '63': 'Hungary', '57': 'Bolivia', '33': 'Laos', '8': 'Eritrea', '149': 'Paraguay', '112': 'Guyana', '146': 'Norway', '54': 'British Indian Ocean Territory', '134': 'El Salvador', '97': 'Ireland', '39': 'Uzbekistan', '142': 'Svalbard and Jan Mayen', '113': 'Malawi', '227': 'Micronesia', '176': 'São Tomé and Príncipe', '90': 'Canada', '77': 'Seychelles', '103': 'Zimbabwe', '69': 'Belize', '167': 'Gibraltar', '160': 'Mongolia', '32': 'New Zealand', '36': 'Egypt', '199': 'Guinea', '17': 'Saint Pierre and Miquelon', '252': 'Cameroon', '85': 'Hong Kong', '189': 'Bosnia and Herzegovina', '190': 'Slovakia', '161': 'Chad', '211': 'Curaçao', '171': 'Vanuatu', '4': 'Tokelau', '201': 'United States', '16': 'Pakistan', '202': 'Comoros', '55': 'Sri Lanka', '109': 'Vatican City (Holy See)', '152': 'San Marino', '66': 'Brunei', '166': 'China', '98': 'Timor', '231': 'Togo', '101': 'Åland Islands', '241': 'Mauritius', '61': 'Luxembourg', '229': 'Finland', '40': 'Andorra', '204': 'Wallis and Futuna', '19': 'Sudan', '156': 'Switzerland', '159': 'Benin', '118': 'Samoa', '41': 'Honduras', '14': 'Libya', '108': 'Guam', '72': 'Botswana', '64': 'Isle of Man', '114': 'Qatar', '243': 'Barbados', '175': 'Mali', '24': 'Bhutan', '215': 'Uganda', '74': 'Somalia', '47': 'Myanmar', '236': 'Tonga', '246': 'British Virgin Islands', '133': 'Malta', '11': 'Slovenia', '68': 'Saint Kitts and Nevis', '62': 'North Macedonia', '228': 'Portugal', '79': 'United Arab Emirates', '46': 'Lesotho', '145': 'Cocos (Keeling) Islands', '73': 'Turks and Caicos Islands', '129': 'Israel', '106': 'Sierra Leone', '184': 'New Caledonia', '151': 'Liechtenstein', '83': 'Australia', '168': 'Kyrgyzstan', '203': 'United States Minor Outlying Islands', '87': 'Algeria', '117': 'Fiji', '183': 'Christmas Island', '173': 'Poland', '67': 'Sweden', '186': 'Puerto Rico', '248': 'South Georgia', '249': 'Ukraine', '238': 'French Southern and Antarctic Lands', '197': 'Czechia', '6': 'India', '193': 'Saint Lucia', '18': 'South Sudan', '154': 'Solomon Islands', '89': 'Burkina Faso', '153': 'Belarus', '65': 'Mozambique', '217': 'Mexico', '191': 'Singapore', '179': 'South Korea', '237': 'Ethiopia', '56': 'Guadeloupe', '76': 'Serbia', '58': 'Nauru', '78': 'Palestine', '245': 'Republic of the Congo', '163': 'Kazakhstan', '144': 'Jamaica', '7': 'Burundi', '23': 'French Guiana', '140': 'Denmark', '50': 'Cape Verde', '122': 'Bermuda', '225': 'Germany', '60': 'Malaysia', '208': 'Netherlands', '135': 'Panama', '212': 'Mayotte', '141': 'Saint Barthélemy', '250': 'Mauritania', '92': 'Bangladesh', '214': 'Georgia', '244': 'Yemen', '162': 'Greenland', '178': 'Cambodia', '192': 'Ghana', '150': 'Scotland', '2': 'Thailand', '172': 'Angola', '104': 'Macau', '232': 'Grenada', '222': 'Montenegro', '71': 'Djibouti', '111': 'Indonesia', '94': 'Bahrain', '100': 'Réunion', '182': 'Western Sahara', '234': 'Cayman Islands', '188': 'Norfolk Island', '247': 'Equatorial Guinea', '12': 'Saint Vincent and the Grenadines', '198': 'Trinidad and Tobago', '45': 'Tanzania', '206': 'Gabon', '223': 'Venezuela', '137': 'Croatia', '187': 'France', '44': 'Haiti', '148': 'Taiwan', '128': 'Heard Island and McDonald Islands', '239': 'Morocco', '254': 'American Samoa', '147': 'Monaco', '21': 'Kosovo', '38': 'Caribbean Netherlands', '196': 'South Africa', '219': 'Liberia', '221': 'Dominica', '99': 'Saint Helena, Ascension and Tristan da Cunha', '139': 'Marshall Islands', '124': 'Bahamas', '52': 'Lebanon', '82': 'Oman', '130': 'Tunisia', '10': 'Syria', '27': 'Antarctica', '251': 'Namibia', '70': 'Nepal', '216': 'Suriname', '51': 'Senegal', '119': 'Madagascar', '126': 'Latvia', '131': 'Guatemala', '86': 'Moldova', '127': 'Lithuania', '110': 'Falkland Islands', '158': 'Philippines', '181': 'Jordan'}
    const results = document.getElementById("results")
    const retry = document.getElementById("retry")
    const score = document.getElementById("score")

    flag = getNextFlag(flag)

    let nbFlags = 0
    let points = 0
    score.innerHTML = "Score : " + points + "/5"

    document.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            nbFlags++

            // we need to find the country thanks to its id
            const filename = flag.src.split(".")[0]
            const countryPath = filename.split("/")
            const countryId = countryPath[countryPath.length - 1]
            const country = countries[countryId]
            points += isGoodProposal(country)
            score.innerHTML = "Score : " + points + "/5"

            if (nbFlags === 5) {
                endingMessage(results, retry, points)
            }

            document.getElementsByTagName("input")[0].value = ""
            flag = getNextFlag(flag)
        }
    })

}


main()
