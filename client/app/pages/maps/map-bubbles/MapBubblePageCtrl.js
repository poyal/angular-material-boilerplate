/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('app.pages.maps')
      .controller('MapBubblePageCtrl', MapBubblePageCtrl);

  /** @ngInject */
  function MapBubblePageCtrl(baConfig, $timeout, layoutPaths) {
    var layoutColors = baConfig.colors;
    var latlong = {};
    latlong.AD = {'latitude': 42.5, 'longitude': 1.5};
    latlong.AE = {'latitude': 24, 'longitude': 54};
    latlong.AF = {'latitude': 33, 'longitude': 65};


    var mapData = [
      {'code': 'AF', 'name': 'Afghanistan', 'value': 32358260, 'color': layoutColors.primaryDark},
      {'code': 'AL', 'name': 'Albania', 'value': 3215988, 'color': layoutColors.warning},
      {'code': 'DZ', 'name': 'Algeria', 'value': 35980193, 'color': layoutColors.danger},
      {'code': 'AO', 'name': 'Angola', 'value': 19618432, 'color': layoutColors.danger},
      {'code': 'AR', 'name': 'Argentina', 'value': 40764561, 'color': layoutColors.success},
      {'code': 'AM', 'name': 'Armenia', 'value': 3100236, 'color': layoutColors.warning},
      {'code': 'AU', 'name': 'Australia', 'value': 22605732, 'color': layoutColors.warningDark},
      {'code': 'AT', 'name': 'Austria', 'value': 8413429, 'color': layoutColors.warning},
      {'code': 'AZ', 'name': 'Azerbaijan', 'value': 9306023, 'color': layoutColors.warning},
      {'code': 'BH', 'name': 'Bahrain', 'value': 1323535, 'color': layoutColors.primaryDark},
      {'code': 'BD', 'name': 'Bangladesh', 'value': 150493658, 'color': layoutColors.primaryDark},
      {'code': 'BY', 'name': 'Belarus', 'value': 9559441, 'color': layoutColors.warning},
      {'code': 'BE', 'name': 'Belgium', 'value': 10754056, 'color': layoutColors.warning},
      {'code': 'BJ', 'name': 'Benin', 'value': 9099922, 'color': layoutColors.danger},
      {'code': 'BT', 'name': 'Bhutan', 'value': 738267, 'color': layoutColors.primaryDark},
      {'code': 'BO', 'name': 'Bolivia', 'value': 10088108, 'color': layoutColors.success},
      {'code': 'BA', 'name': 'Bosnia and Herzegovina', 'value': 3752228, 'color': layoutColors.warning},
      {'code': 'BW', 'name': 'Botswana', 'value': 2030738, 'color': layoutColors.danger},
      {'code': 'BR', 'name': 'Brazil', 'value': 196655014, 'color': layoutColors.success},
      {'code': 'BN', 'name': 'Brunei', 'value': 405938, 'color': layoutColors.primaryDark},
      {'code': 'BG', 'name': 'Bulgaria', 'value': 7446135, 'color': layoutColors.warning},
      {'code': 'BF', 'name': 'Burkina Faso', 'value': 16967845, 'color': layoutColors.danger},
      {'code': 'BI', 'name': 'Burundi', 'value': 8575172, 'color': layoutColors.danger},
      {'code': 'KH', 'name': 'Cambodia', 'value': 14305183, 'color': layoutColors.primaryDark},
      {'code': 'CM', 'name': 'Cameroon', 'value': 20030362, 'color': layoutColors.danger},
      {'code': 'CA', 'name': 'Canada', 'value': 34349561, 'color': layoutColors.primary},
      {'code': 'CV', 'name': 'Cape Verde', 'value': 500585, 'color': layoutColors.danger},
      {'code': 'CF', 'name': 'Central African Rep.', 'value': 4486837, 'color': layoutColors.danger},
      {'code': 'TD', 'name': 'Chad', 'value': 11525496, 'color': layoutColors.danger},
      {'code': 'CL', 'name': 'Chile', 'value': 17269525, 'color': layoutColors.success},
      {'code': 'CN', 'name': 'China', 'value': 1347565324, 'color': layoutColors.primaryDark},
      {'code': 'CO', 'name': 'Colombia', 'value': 46927125, 'color': layoutColors.success},
      {'code': 'KM', 'name': 'Comoros', 'value': 753943, 'color': layoutColors.danger},
      {'code': 'CD', 'name': 'Congo, Dem. Rep.', 'value': 67757577, 'color': layoutColors.danger},
      {'code': 'CG', 'name': 'Congo, Rep.', 'value': 4139748, 'color': layoutColors.danger},
      {'code': 'CR', 'name': 'Costa Rica', 'value': 4726575, 'color': layoutColors.primary},
      {'code': 'CI', 'name': 'Cote d\'Ivoire', 'value': 20152894, 'color': layoutColors.danger},
      {'code': 'HR', 'name': 'Croatia', 'value': 4395560, 'color': layoutColors.warning},
      {'code': 'CU', 'name': 'Cuba', 'value': 11253665, 'color': layoutColors.primary},
      {'code': 'CY', 'name': 'Cyprus', 'value': 1116564, 'color': layoutColors.warning},
      {'code': 'CZ', 'name': 'Czech Rep.', 'value': 10534293, 'color': layoutColors.warning},
      {'code': 'DK', 'name': 'Denmark', 'value': 5572594, 'color': layoutColors.warning},
      {'code': 'DJ', 'name': 'Djibouti', 'value': 905564, 'color': layoutColors.danger},
      {'code': 'DO', 'name': 'Dominican Rep.', 'value': 10056181, 'color': layoutColors.primary},
      {'code': 'EC', 'name': 'Ecuador', 'value': 14666055, 'color': layoutColors.success},
      {'code': 'EG', 'name': 'Egypt', 'value': 82536770, 'color': layoutColors.danger},
      {'code': 'SV', 'name': 'El Salvador', 'value': 6227491, 'color': layoutColors.primary},
      {'code': 'GQ', 'name': 'Equatorial Guinea', 'value': 720213, 'color': layoutColors.danger},
      {'code': 'ER', 'name': 'Eritrea', 'value': 5415280, 'color': layoutColors.danger},
      {'code': 'EE', 'name': 'Estonia', 'value': 1340537, 'color': layoutColors.warning},
      {'code': 'ET', 'name': 'Ethiopia', 'value': 84734262, 'color': layoutColors.danger},
      {'code': 'FJ', 'name': 'Fiji', 'value': 868406, 'color': layoutColors.warningDark},
      {'code': 'FI', 'name': 'Finland', 'value': 5384770, 'color': layoutColors.warning},
      {'code': 'FR', 'name': 'France', 'value': 63125894, 'color': layoutColors.warning},
      {'code': 'GA', 'name': 'Gabon', 'value': 1534262, 'color': layoutColors.danger},
      {'code': 'GM', 'name': 'Gambia', 'value': 1776103, 'color': layoutColors.danger},
      {'code': 'GE', 'name': 'Georgia', 'value': 4329026, 'color': layoutColors.warning},
      {'code': 'DE', 'name': 'Germany', 'value': 82162512, 'color': layoutColors.warning},
      {'code': 'GH', 'name': 'Ghana', 'value': 24965816, 'color': layoutColors.danger},
      {'code': 'GR', 'name': 'Greece', 'value': 11390031, 'color': layoutColors.warning},
      {'code': 'GT', 'name': 'Guatemala', 'value': 14757316, 'color': layoutColors.primary},
      {'code': 'GN', 'name': 'Guinea', 'value': 10221808, 'color': layoutColors.danger},
      {'code': 'GW', 'name': 'Guinea-Bissau', 'value': 1547061, 'color': layoutColors.danger},
      {'code': 'GY', 'name': 'Guyana', 'value': 756040, 'color': layoutColors.success},
      {'code': 'HT', 'name': 'Haiti', 'value': 10123787, 'color': layoutColors.primary},
      {'code': 'HN', 'name': 'Honduras', 'value': 7754687, 'color': layoutColors.primary},
      {'code': 'HK', 'name': 'Hong Kong, China', 'value': 7122187, 'color': layoutColors.primaryDark},
      {'code': 'HU', 'name': 'Hungary', 'value': 9966116, 'color': layoutColors.warning},
      {'code': 'IS', 'name': 'Iceland', 'value': 324366, 'color': layoutColors.warning},
      {'code': 'IN', 'name': 'India', 'value': 1241491960, 'color': layoutColors.primaryDark},
      {'code': 'ID', 'name': 'Indonesia', 'value': 242325638, 'color': layoutColors.primaryDark},
      {'code': 'IR', 'name': 'Iran', 'value': 74798599, 'color': layoutColors.primaryDark},
      {'code': 'IQ', 'name': 'Iraq', 'value': 32664942, 'color': layoutColors.primaryDark},
      {'code': 'IE', 'name': 'Ireland', 'value': 4525802, 'color': layoutColors.warning},
      {'code': 'IL', 'name': 'Israel', 'value': 7562194, 'color': layoutColors.primaryDark},
      {'code': 'IT', 'name': 'Italy', 'value': 60788694, 'color': layoutColors.warning},
      {'code': 'JM', 'name': 'Jamaica', 'value': 2751273, 'color': layoutColors.primary},
      {'code': 'JP', 'name': 'Japan', 'value': 126497241, 'color': layoutColors.primaryDark},
      {'code': 'JO', 'name': 'Jordan', 'value': 6330169, 'color': layoutColors.primaryDark},
      {'code': 'KZ', 'name': 'Kazakhstan', 'value': 16206750, 'color': layoutColors.primaryDark},
      {'code': 'KE', 'name': 'Kenya', 'value': 41609728, 'color': layoutColors.danger},
      {'code': 'KP', 'name': 'Korea, Dem. Rep.', 'value': 24451285, 'color': layoutColors.primaryDark},
      {'code': 'KR', 'name': 'Korea, Rep.', 'value': 48391343, 'color': layoutColors.primaryDark},
      {'code': 'KW', 'name': 'Kuwait', 'value': 2818042, 'color': layoutColors.primaryDark},
      {'code': 'KG', 'name': 'Kyrgyzstan', 'value': 5392580, 'color': layoutColors.primaryDark},
      {'code': 'LA', 'name': 'Laos', 'value': 6288037, 'color': layoutColors.primaryDark},
      {'code': 'LV', 'name': 'Latvia', 'value': 2243142, 'color': layoutColors.warning},
      {'code': 'LB', 'name': 'Lebanon', 'value': 4259405, 'color': layoutColors.primaryDark},
      {'code': 'LS', 'name': 'Lesotho', 'value': 2193843, 'color': layoutColors.danger},
      {'code': 'LR', 'name': 'Liberia', 'value': 4128572, 'color': layoutColors.danger},
      {'code': 'LY', 'name': 'Libya', 'value': 6422772, 'color': layoutColors.danger},
      {'code': 'LT', 'name': 'Lithuania', 'value': 3307481, 'color': layoutColors.warning},
      {'code': 'LU', 'name': 'Luxembourg', 'value': 515941, 'color': layoutColors.warning},
      {'code': 'MK', 'name': 'Macedonia, FYR', 'value': 2063893, 'color': layoutColors.warning},
      {'code': 'MG', 'name': 'Madagascar', 'value': 21315135, 'color': layoutColors.danger},
      {'code': 'MW', 'name': 'Malawi', 'value': 15380888, 'color': layoutColors.danger},
      {'code': 'MY', 'name': 'Malaysia', 'value': 28859154, 'color': layoutColors.primaryDark},
      {'code': 'ML', 'name': 'Mali', 'value': 15839538, 'color': layoutColors.danger},
      {'code': 'MR', 'name': 'Mauritania', 'value': 3541540, 'color': layoutColors.danger},
      {'code': 'MU', 'name': 'Mauritius', 'value': 1306593, 'color': layoutColors.danger},
      {'code': 'MX', 'name': 'Mexico', 'value': 114793341, 'color': layoutColors.primary},
      {'code': 'MD', 'name': 'Moldova', 'value': 3544864, 'color': layoutColors.warning},
      {'code': 'MN', 'name': 'Mongolia', 'value': 2800114, 'color': layoutColors.primaryDark},
      {'code': 'ME', 'name': 'Montenegro', 'value': 632261, 'color': layoutColors.warning},
      {'code': 'MA', 'name': 'Morocco', 'value': 32272974, 'color': layoutColors.danger},
      {'code': 'MZ', 'name': 'Mozambique', 'value': 23929708, 'color': layoutColors.danger},
      {'code': 'MM', 'name': 'Myanmar', 'value': 48336763, 'color': layoutColors.primaryDark},
      {'code': 'NA', 'name': 'Namibia', 'value': 2324004, 'color': layoutColors.danger},
      {'code': 'NP', 'name': 'Nepal', 'value': 30485798, 'color': layoutColors.primaryDark},
      {'code': 'NL', 'name': 'Netherlands', 'value': 16664746, 'color': layoutColors.warning},
      {'code': 'NZ', 'name': 'New Zealand', 'value': 4414509, 'color': layoutColors.warningDark},
      {'code': 'NI', 'name': 'Nicaragua', 'value': 5869859, 'color': layoutColors.primary},
      {'code': 'NE', 'name': 'Niger', 'value': 16068994, 'color': layoutColors.danger},
      {'code': 'NG', 'name': 'Nigeria', 'value': 162470737, 'color': layoutColors.danger},
      {'code': 'NO', 'name': 'Norway', 'value': 4924848, 'color': layoutColors.warning},
      {'code': 'OM', 'name': 'Oman', 'value': 2846145, 'color': layoutColors.primaryDark},
      {'code': 'PK', 'name': 'Pakistan', 'value': 176745364, 'color': layoutColors.primaryDark},
      {'code': 'PA', 'name': 'Panama', 'value': 3571185, 'color': layoutColors.primary},
      {'code': 'PG', 'name': 'Papua New Guinea', 'value': 7013829, 'color': layoutColors.warningDark},
      {'code': 'PY', 'name': 'Paraguay', 'value': 6568290, 'color': layoutColors.success},
      {'code': 'PE', 'name': 'Peru', 'value': 29399817, 'color': layoutColors.success},
      {'code': 'PH', 'name': 'Philippines', 'value': 94852030, 'color': layoutColors.primaryDark},
      {'code': 'PL', 'name': 'Poland', 'value': 38298949, 'color': layoutColors.warning},
      {'code': 'PT', 'name': 'Portugal', 'value': 10689663, 'color': layoutColors.warning},
      {'code': 'PR', 'name': 'Puerto Rico', 'value': 3745526, 'color': layoutColors.primary},
      {'code': 'QA', 'name': 'Qatar', 'value': 1870041, 'color': layoutColors.primaryDark},
      {'code': 'RO', 'name': 'Romania', 'value': 21436495, 'color': layoutColors.warning},
      {'code': 'RU', 'name': 'Russia', 'value': 142835555, 'color': layoutColors.warning},
      {'code': 'RW', 'name': 'Rwanda', 'value': 10942950, 'color': layoutColors.danger},
      {'code': 'SA', 'name': 'Saudi Arabia', 'value': 28082541, 'color': layoutColors.primaryDark},
      {'code': 'SN', 'name': 'Senegal', 'value': 12767556, 'color': layoutColors.danger},
      {'code': 'RS', 'name': 'Serbia', 'value': 9853969, 'color': layoutColors.warning},
      {'code': 'SL', 'name': 'Sierra Leone', 'value': 5997486, 'color': layoutColors.danger},
      {'code': 'SG', 'name': 'Singapore', 'value': 5187933, 'color': layoutColors.primaryDark},
      {'code': 'SK', 'name': 'Slovak Republic', 'value': 5471502, 'color': layoutColors.warning},
      {'code': 'SI', 'name': 'Slovenia', 'value': 2035012, 'color': layoutColors.warning},
      {'code': 'SB', 'name': 'Solomon Islands', 'value': 552267, 'color': layoutColors.warningDark},
      {'code': 'SO', 'name': 'Somalia', 'value': 9556873, 'color': layoutColors.danger},
      {'code': 'ZA', 'name': 'South Africa', 'value': 50459978, 'color': layoutColors.danger},
      {'code': 'ES', 'name': 'Spain', 'value': 46454895, 'color': layoutColors.warning},
      {'code': 'LK', 'name': 'Sri Lanka', 'value': 21045394, 'color': layoutColors.primaryDark},
      {'code': 'SD', 'name': 'Sudan', 'value': 34735288, 'color': layoutColors.danger},
      {'code': 'SR', 'name': 'Suriname', 'value': 529419, 'color': layoutColors.success},
      {'code': 'SZ', 'name': 'Swaziland', 'value': 1203330, 'color': layoutColors.danger},
      {'code': 'SE', 'name': 'Sweden', 'value': 9440747, 'color': layoutColors.warning},
      {'code': 'CH', 'name': 'Switzerland', 'value': 7701690, 'color': layoutColors.warning},
      {'code': 'SY', 'name': 'Syria', 'value': 20766037, 'color': layoutColors.primaryDark},
      {'code': 'TW', 'name': 'Taiwan', 'value': 23072000, 'color': layoutColors.primaryDark},
      {'code': 'TJ', 'name': 'Tajikistan', 'value': 6976958, 'color': layoutColors.primaryDark},
      {'code': 'TZ', 'name': 'Tanzania', 'value': 46218486, 'color': layoutColors.danger},
      {'code': 'TH', 'name': 'Thailand', 'value': 69518555, 'color': layoutColors.primaryDark},
      {'code': 'TG', 'name': 'Togo', 'value': 6154813, 'color': layoutColors.danger},
      {'code': 'TT', 'name': 'Trinidad and Tobago', 'value': 1346350, 'color': layoutColors.primary},
      {'code': 'TN', 'name': 'Tunisia', 'value': 10594057, 'color': layoutColors.danger},
      {'code': 'TR', 'name': 'Turkey', 'value': 73639596, 'color': layoutColors.warning},
      {'code': 'TM', 'name': 'Turkmenistan', 'value': 5105301, 'color': layoutColors.primaryDark},
      {'code': 'UG', 'name': 'Uganda', 'value': 34509205, 'color': layoutColors.danger},
      {'code': 'UA', 'name': 'Ukraine', 'value': 45190180, 'color': layoutColors.warning},
      {'code': 'AE', 'name': 'United Arab Emirates', 'value': 7890924, 'color': layoutColors.primaryDark},
      {'code': 'GB', 'name': 'United Kingdom', 'value': 62417431, 'color': layoutColors.warning},
      {'code': 'US', 'name': 'United States', 'value': 313085380, 'color': layoutColors.primary},
      {'code': 'UY', 'name': 'Uruguay', 'value': 3380008, 'color': layoutColors.success},
      {'code': 'UZ', 'name': 'Uzbekistan', 'value': 27760267, 'color': layoutColors.primaryDark},
      {'code': 'VE', 'name': 'Venezuela', 'value': 29436891, 'color': layoutColors.success},
      {'code': 'PS', 'name': 'West Bank and Gaza', 'value': 4152369, 'color': layoutColors.primaryDark},
      {'code': 'VN', 'name': 'Vietnam', 'value': 88791996, 'color': layoutColors.primaryDark},
      {'code': 'YE', 'name': 'Yemen, Rep.', 'value': 24799880, 'color': layoutColors.primaryDark},
      {'code': 'ZM', 'name': 'Zambia', 'value': 13474959, 'color': layoutColors.danger},
      {'code': 'ZW', 'name': 'Zimbabwe', 'value': 12754378, 'color': layoutColors.danger}
    ];

    var map;
    var minBulletSize = 3;
    var maxBulletSize = 70;
    var min = Infinity;
    var max = -Infinity;

    // get min and max values
    for (var cnt = 0; cnt < mapData.length; cnt++) {
      var item = mapData[cnt].value;
      if (item < min) {
        min = item;
      }
      if (item > max) {
        max = item;
      }
    }

    // build map
    AmCharts.theme = AmCharts.themes.blur;
    map = new AmCharts.AmMap();

    map.addTitle('Population of the World in 2011', 14);
    map.addTitle('source: Gapminder', 11);
    map.areasSettings = {
      unlistedAreasColor: '#000000',
      unlistedAreasAlpha: 0.1
    };
    map.imagesSettings.balloonText = '<span style="font-size:14px;"><b>[[title]]</b>: [[value]]</span>';
    map.pathToImages = layoutPaths.images.amMap;

    var dataProvider = {
      mapVar: AmCharts.maps.worldLow,
      images: []
    };

    // it's better to use circle square to show difference between values, not a radius
    var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
    var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

    // create circle for each country
    for (var i = 0; i < mapData.length; i++) {
      var dataItem = mapData[i];
      var value = dataItem.value;
      // calculate size of a bubble
      var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
      if (square < minSquare) {
        square = minSquare;
      }
      var size = Math.sqrt(square / (Math.PI * 2));
      var id = dataItem.code;

      dataProvider.images.push({
        type: 'circle',
        width: size,
        height: size,
        color: dataItem.color,
        longitude: latlong[id].longitude,
        latitude: latlong[id].latitude,
        title: dataItem.name,
        value: value
      });
    }

    map.dataProvider = dataProvider;
    map.export = {
      enabled: true
    };

    $timeout(function() {
      map.write('map-bubbles');
    }, 100);
  }

})();
