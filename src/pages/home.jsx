import { Card } from '../components/card'
import Container from '../components/container'

export default function Home() {
  return (
    <Container className="min-h-screen">
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </Container>
  )
}
