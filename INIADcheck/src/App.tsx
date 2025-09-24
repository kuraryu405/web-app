import { ThemeToggle } from './Thema'
import { Footer } from './fotter'
function App() {
  {/* ここに書く関数を入れる */}

  return (
    <>
    <div className="min-h-screen bg-base-100">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">INIADcheck</h1>
        <ThemeToggle />
      </div>
    </div>
    <Footer />

    </>
  )
}

export default App
