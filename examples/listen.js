const GPIOPin = require('../src/gpio_pin');

(async () => {
  try {
    let gpio16 = new GPIOPin(16);
    await gpio16.setup(GPIOPin.DIR.IN, GPIOPin.EDGE.BOTH);

    gpio16.listen((status) => {
      console.log('Status is', status);
    });

    setTimeout(() => {
      gpio16.removeListener();
    }, 10000);
  } catch (ex) {
    console.log(ex);
  }
})();
