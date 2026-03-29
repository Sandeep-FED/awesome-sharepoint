import { Card, Badge } from "@fluentui/react-components"
import { OpenRegular } from "@fluentui/react-icons"
import { useReveal } from "../../hooks/useReveal"
import { getCategoryIcon } from "./constants"
import type { CategoryData } from "./types"

export function CategorySection({ category }: { category: CategoryData }) {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className='reveal-target sp-category'>
      <div className='sp-category-header'>
        <div className='sp-category-icon'>{getCategoryIcon(category.id)}</div>
        <div>
          <h3 className='sp-category-title'>{category.title}</h3>
          <p className='sp-category-desc'>{category.description}</p>
        </div>
      </div>
      <div className='sp-card-grid'>
        {category.items.map((item, i) => (
          <a
            key={item.title}
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            className='sp-card-link'
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <Card className='sp-card'>
              <div className='sp-card-top'>
                <Badge appearance='filled' color={item.tagColor} size='small'>
                  {item.tag}
                </Badge>
                <OpenRegular className='sp-card-arrow' />
              </div>
              <div className='sp-card-title'>{item.title}</div>
              <div className='sp-card-desc'>{item.description}</div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  )
}
