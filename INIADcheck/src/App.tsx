import { ThemeToggle } from './Thema'
import { Footer } from './fotter'
import { FileInput } from './FileInput'
import { useTimetable } from './hooks/useTimetable'
import { TimetableList } from './components/TimetableList'
import { FreeSlotsDisplay } from './components/FreeSlotsDisplay'

function App() {
  const {
    timetables,
    addTimetable,
    removeTimetable,
    clearAllTimetables,
    findCommonFreeSlots
  } = useTimetable();

  const commonFreeSlots = findCommonFreeSlots();

  return (
    <>
    <div className="min-h-screen bg-base-100">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">INIADcheck</h1>
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <FileInput onFileSelect={addTimetable} />
          
          {timetables.length > 0 && (
            <div className="flex justify-end">
              <button
                onClick={clearAllTimetables}
                className="btn btn-warning btn-sm"
              >
                全て削除
              </button>
            </div>
          )}
          
          <TimetableList
            timetables={timetables}
            onRemove={removeTimetable}
          />
          
          {timetables.length > 1 && (
            <FreeSlotsDisplay freeSlots={commonFreeSlots} />
          )}
        </div>
      </div>
    </div>
    <Footer />

    </>
  )
}

export default App
