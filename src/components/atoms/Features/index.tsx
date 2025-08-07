import React from "react"
import { GrUpgrade } from "react-icons/gr"

interface FeaturesProps {
  mk: string
}
type SpecItem = {
  label: string
  value: string
  upgrade?: boolean
}

type SpecSection = {
  title?: string
  category: string
  items: SpecItem[]
}

export const mk1Specs: SpecSection[] = [
  {
    title: "MK1",
    category: "Informatica",
    items: [
      { label: "Sistema operativo", value: "Ubuntu" },
      { label: "Middleware", value: "ROS2" },
      { label: "Linguaggio", value: "Python, Cpp" },
    ],
  },
  {
    category: "Elettronica",
    items: [
      { label: "Comunicazione", value: "CAN-bus" },
      { label: "Computer di bordo", value: "Jetson Orion" },
      { label: "MCU", value: "Raspberry Pico" },
      { label: "PCB", value: "Protoboard" },
      { label: "Batteria", value: "Samsung Li-ion" },
      { label: "Connettività", value: "WiFi, 4G" },
      { label: "Sensore", value: "Intel RealSense D435i" },
    ],
  },
  {
    category: "Meccanica",
    items: [
      { label: "DOF giunto e braccio", value: "3" },
      {
        label: "Sistema di trazione",
        value: "Cingoli con tensionatore dinamico",
      },
      { label: "Servomotore", value: "Dynamixel AX-12+" },
      { label: "Motori di trazione", value: "Pololu 25D" },
    ],
  },
]

export const mk2Specs: SpecSection[] = [
  {
    title: "MK2",
    category: "Informatica",
    items: [
      { label: "Sistema operativo", value: "Ubuntu" },
      { label: "Middleware", value: "ROS2" },
      { label: "Linguaggio", value: "Python, Cpp" },
    ],
  },
  {
    category: "Elettronica",
    items: [
      { label: "Comunicazione", value: "CAN-bus" },
      { label: "Computer di bordo", value: "Jetson Orion" },
      { label: "MCU", value: "Raspberry Pico" },
      { label: "PCB", value: "Custom made", upgrade: true },
      {
        label: "Sensori",
        value:
          "Intel RealSense D435i (Depth), Adafruit MLX90640 (Thermal), Slamtec RPLidar 40",
        upgrade: true,
      },
      { label: "Protezione sovracorrente", value: "Migliorata", upgrade: true },
      {
        label: "Sicurezza spegnimento remoto",
        value: "Migliorata",
        upgrade: true,
      },
      { label: "Gestione errori LL", value: "Migliorata", upgrade: true },
    ],
  },
  {
    category: "Meccanica",
    items: [
      { label: "DOF giunto", value: "3" },
      { label: "DOF braccio", value: "6", upgrade: true },
      {
        label: "Sistema di trazione",
        value: "Cingoli con tensionatore statico",
      },
      {
        label: "Servomotori",
        value: "Dynamixel XM540-W270-T, Dynamixel XL430-W250-T",
        upgrade: true,
      },
      { label: "Motori di trazione", value: "Pololu 37D", upgrade: true },
    ],
  },
]

const models = [mk1Specs, mk2Specs]

const Features: React.FC<FeaturesProps> = ({ mk }) => {
  const modelSections = models.find((sections) => sections[0].title === mk)

  if (!modelSections) {
    return <div className="text-red-600">No specs found for this model.</div>
  }

  return (
    <div>
      {modelSections.map((section) => (
        <div key={section.category} className="mb-8">
          <h3 className="font-bold text-lg text-teal-700 mb-2">
            {section.category}
          </h3>
          <div className="overflow-x-auto max-w-[400px] mx-auto my-2 shadow-md rounded-xl border border-gray-200 bg-white">
            <table className="min-w-full border-collapse text-left text-sm">
              <tbody>
                {section.items.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-2 font-medium text-gray-900">
                      {row.label}
                    </td>
                    <td className="px-4 py-2 text-gray-700  relative ">
                      {row.value}
                      {row.upgrade && (
                        <GrUpgrade
                          className="absolute right-2 top-2 text-green-600 text-base"
                          title="Upgrade"
                          style={{ minWidth: 18, minHeight: 18 }}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Features
