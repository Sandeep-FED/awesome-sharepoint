import React from "react"
import {
  CodeRegular,
  StarRegular,
  BoxRegular,
  GridRegular,
  DataBarVerticalRegular,
  SettingsRegular,
  BookOpenRegular,
  PaintBrushRegular,
} from "@fluentui/react-icons"

const categoryIconMap: Record<string, React.ReactElement> = {
  "sp-development": <CodeRegular />,
  "api-libraries": <DataBarVerticalRegular />,
  "ui-libraries": <GridRegular />,
  blogs: <BookOpenRegular />,
  tools: <SettingsRegular />,
  samples: <StarRegular />,
  "design-templates": <PaintBrushRegular />,
}

export function getCategoryIcon(categoryId: string): React.ReactElement {
  return categoryIconMap[categoryId] ?? <BoxRegular />
}
