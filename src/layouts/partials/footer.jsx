export function Footer({ className }) {
  return (
    <footer className={`footer footer-center p-4 text-base-content ${className}`}>
      <aside>
        <p className="font-semibold">
          Copyright &copy; {new Date().getFullYear()} - All Right Reserved by Zainu Firdaus Imansyah
        </p>
      </aside>
    </footer>
  )
}
