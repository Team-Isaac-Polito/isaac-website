export const systems = [
  {
    number: "01",
    name: "Software",
    note: "Il livello che coordina sensori e movimento.",
    details: [
      ["Sistema operativo", "Ubuntu"],
      ["Middleware", "ROS 2"],
      ["Linguaggi", "Python · C++"],
    ],
  },
  {
    number: "02",
    name: "Elettronica",
    note: "Calcolo a bordo, controllo e comunicazioni.",
    details: [
      ["Computer di bordo", "NVIDIA Jetson Xavier"],
      ["Microcontrollore", "Raspberry Pi Pico"],
      ["Comunicazione", "CAN bus · Wi-Fi · 4G"],
      ["Sensore di profondità", "Intel RealSense D435i"],
      ["Alimentazione", "Batteria Samsung Li-ion"],
    ],
  },
  {
    number: "03",
    name: "Meccanica",
    note: "Una base cingolata e un braccio per l'ispezione.",
    details: [
      ["Trazione", "Cingoli con tensionatore dinamico"],
      ["Motori di trazione", "Pololu 25D"],
      ["Attuazione", "Dynamixel AX-12+"],
      ["Gradi di libertà", "3 tra giunto e braccio"],
    ],
  },
];
