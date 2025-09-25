import type { FreeTimeSlot } from '../types/Timetable';

interface FreeSlotsDisplayProps {
  freeSlots: FreeTimeSlot[];
}

export function FreeSlotsDisplay({ freeSlots }: FreeSlotsDisplayProps) {
  if (freeSlots.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        全員が空いているコマはありません
      </div>
    );
  }

  // 曜日ごとにグループ化
  const slotsByDay = freeSlots.reduce((acc, slot) => {
    if (!acc[slot.day]) {
      acc[slot.day] = [];
    }
    acc[slot.day]!.push(slot);
    return acc;
  }, {} as Record<string, FreeTimeSlot[]>);

  const DAY_ORDER = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">全員が空いているコマ</h3>
      <div className="grid gap-4">
        {DAY_ORDER.map((day) => {
          const daySlots = slotsByDay[day];
          if (!daySlots || daySlots.length === 0) return null;

          return (
            <div key={day} className="card bg-base-200 shadow-sm">
              <div className="card-body py-4 px-6">
                <h4 className="font-semibold text-lg mb-3">{day}</h4>
                <div className="flex flex-wrap gap-2">
                  {daySlots.map((slot) => (
                    <div
                      key={`${slot.day}-${slot.period}`}
                      className="badge badge-primary badge-lg"
                    >
                      {slot.periodName}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
