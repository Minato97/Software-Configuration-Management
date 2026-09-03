const React = require('react');
const ReactDOMServer = require('react-dom/server');
const sharp = require('sharp');
const fs = require('fs');
const fa = require('react-icons/fa');
const fa6 = require('react-icons/fa6');
const md = require('react-icons/md');

const OUT = __dirname + '/icons';
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

// name -> [library component, color hex]
const jobs = {
  seedling:      [fa.FaSeedling, '95D5B2'],
  seedling_white:[fa.FaSeedling, 'FFFFFF'],
  globe:         [fa.FaGlobeAmericas, 'FFFFFF'],
  bullseye:      [fa.FaBullseye, 'FFFFFF'],
  check:         [fa.FaCheckCircle, '1B4332'],
  times:         [fa.FaTimesCircle, '7F5539'],
  microchip:     [fa.FaMicrochip, 'FFFFFF'],
  server:        [fa.FaServer, 'FFFFFF'],
  database:      [fa.FaDatabase, 'FFFFFF'],
  desktop:       [fa.FaDesktop, 'FFFFFF'],
  robot:         [fa.FaRobot, 'FFFFFF'],
  thermometer:   [fa.FaThermometerHalf, 'FFFFFF'],
  wind:          [fa.FaWind, 'FFFFFF'],
  cloud_rain:    [fa.FaCloudRain, 'FFFFFF'],
  sun:           [fa.FaSun, 'FFFFFF'],
  flask:         [fa.FaFlask, 'FFFFFF'],
  usertie:       [fa.FaUserTie, 'FFFFFF'],
  code:          [fa.FaCode, 'FFFFFF'],
  paintbrush:    [fa.FaPaintBrush, 'FFFFFF'],
  brain:         [fa.FaBrain, 'FFFFFF'],
  toolbox:       [fa.FaToolbox, 'FFFFFF'],
  calendar:      [fa.FaCalendarAlt, 'FFFFFF'],
  moneybill:     [fa.FaMoneyBillWave, 'FFFFFF'],
  comments:      [fa.FaComments, 'FFFFFF'],
  network:       [fa.FaNetworkWired, 'FFFFFF'],
  shield:        [fa.FaShieldAlt, 'FFFFFF'],
  leaf:          [fa.FaLeaf, '1B4332'],
  raspberrypi:   [fa.FaRaspberryPi, 'FFFFFF'],
  wifi:          [fa.FaWifi, 'FFFFFF'],
  chart:         [fa.FaChartLine, 'FFFFFF'],
  laptopcode:    [fa.FaLaptopCode, 'FFFFFF'],
  pencilruler:   [fa.FaPencilRuler, 'FFFFFF'],
  hourglass:     [fa.FaHourglassHalf, 'FFFFFF'],
};

(async () => {
  for (const [name, [Comp, color]] of Object.entries(jobs)) {
    const svg = ReactDOMServer.renderToStaticMarkup(
      React.createElement(Comp, { color: `#${color}`, size: 256 })
    );
    const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 512 512">${svg.replace(/<svg[^>]*>|<\/svg>/g,'')}</svg>`;
    await sharp(Buffer.from(fullSvg)).resize(256,256).png().toFile(`${OUT}/${name}.png`);
    console.log('wrote', name);
  }
})();
