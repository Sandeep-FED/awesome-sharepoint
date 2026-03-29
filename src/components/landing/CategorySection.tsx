import { Card, Badge } from "@fluentui/react-components"
import { OpenRegular, LinkRegular } from "@fluentui/react-icons"
import { motion } from "framer-motion"
import {
  fadeUpVariants,
  staggerContainerVariants,
  cardItemVariants,
} from "../../animations/variants"
import { getCategoryIcon } from "./constants"
import type { CategoryData } from "./types"

function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace("www.", "")
  } catch {
    return ""
  }
}

export function CategorySection({ category }: { category: CategoryData }) {
  return (
    <motion.section
      className='max-w-[1200px] mx-auto px-6 pb-14 relative z-1'
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className='sp-category-header'>
        <div className='sp-category-icon'>{getCategoryIcon(category.id)}</div>
        <div>
          <div className='flex items-center gap-2.5'>
            <h3 className='font-grotesk text-lg font-[650] tracking-tight m-0'>{category.title}</h3>
            <span className='font-mono text-[11px] font-semibold px-2 py-0.5 rounded-full bg-linear-to-br from-brand/15 to-brand-green/10 text-brand tracking-wider'>
              {category.items.length}
            </span>
          </div>
          <p className='text-[13px] text-[var(--text-muted)] mt-0.5 mb-0'>{category.description}</p>
        </div>
      </div>
      <motion.div
        className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 max-sm:grid-cols-1 max-sm:gap-3'
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {category.items.map((item) => (
          <motion.a
            key={item.title}
            href={item.url}
            target='_blank'
            rel='noopener noreferrer'
            className='no-underline text-inherit block'
            variants={cardItemVariants}
          >
            <Card className='sp-card'>
              <div className='flex justify-between items-start mb-3.5'>
                <Badge appearance='filled' color={item.tagColor} size='small'>
                  {item.tag}
                </Badge>
                <OpenRegular className='sp-card-arrow' />
              </div>
              <div className='font-grotesk font-[620] text-[15px] tracking-tight mb-2'>{item.title}</div>
              <div className='text-[var(--text-muted)] leading-relaxed text-[13px]'>{item.description}</div>
              <div className='mt-3.5 pt-3 border-t border-[var(--border-subtle)] font-mono text-[11px] text-[var(--text-muted)] opacity-70 flex items-center gap-1.5'>
                <LinkRegular style={{ fontSize: 12 }} />
                {getDomain(item.url)}
              </div>
            </Card>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  )
}
