import { SpecSection } from "@molecules/Projects/index.types"
import React from "react"
import { GrUpgrade } from "react-icons/gr"

interface FeaturesProps {
  specs: SpecSection[]
}

const Features: React.FC<FeaturesProps> = ({ specs }) => {
  if (!specs) {
    return <div className="text-red-600">No specs found for this model.</div>
  }

  return (
    <div>
      {specs.map((section) => (
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
