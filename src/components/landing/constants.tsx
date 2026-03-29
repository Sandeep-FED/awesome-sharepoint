import React from "react"
import {
  CodeRegular,
  StarRegular,
  BoxRegular,
  GridRegular,
  DataBarVerticalRegular,
  SettingsRegular,
  BookOpenRegular,
} from "@fluentui/react-icons"

const categoryIconMap: Record<string, React.ReactElement> = {
  "sp-development": <CodeRegular />,
  "api-libraries": <DataBarVerticalRegular />,
  "ui-libraries": <GridRegular />,
  blogs: <BookOpenRegular />,
  tools: <SettingsRegular />,
  samples: <StarRegular />,
}

export function getCategoryIcon(categoryId: string): React.ReactElement {
  return categoryIconMap[categoryId] ?? <BoxRegular />
}

export const stats = [
  { value: "6+", label: "Categories" },
  { value: "16+", label: "Resources" },
  { value: "6+", label: "GitHub Repos" },
  { value: "100%", label: "Free & Open" },
]
