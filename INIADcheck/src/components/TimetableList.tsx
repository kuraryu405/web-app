import type { TimetableData } from '../types/Timetable';

interface TimetableListProps {
  timetables: TimetableData[];
  onRemove: (id: string) => void;
}

export function TimetableList({ timetables, onRemove }: TimetableListProps) {
  if (timetables.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        まだ時間割ファイルがアップロードされていません
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">アップロード済みの時間割</h3>
      <div className="grid gap-3">
        {timetables.map((timetable) => (
          <div key={timetable.id} className="card bg-base-200 shadow-sm">
            <div className="card-body py-3 px-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">{timetable.name}</span>
                <button
                  onClick={() => onRemove(timetable.id)}
                  className="btn btn-sm btn-error btn-outline"
                >
                  削除
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
