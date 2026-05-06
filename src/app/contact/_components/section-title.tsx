export function SectionTitle({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>
      {desc && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{desc}</p>
      )}
    </div>
  )
}
