import { useState, useCallback } from 'react';
import type { Timetable, TimetableData, FreeTimeSlot } from '../types/Timetable';

const DAY_NAMES = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
const PERIOD_NAMES = ['1限', '2限', '3限', '4限', '5限', '6限'];

export function useTimetable() {
  const [timetables, setTimetables] = useState<TimetableData[]>([]);

  const addTimetable = useCallback((file: File) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target?.result as string) as Timetable;
        const newTimetable: TimetableData = {
          id: Date.now().toString(),
          name: file.name.replace('.json', ''),
          data: jsonData
        };
        
        setTimetables(prev => [...prev, newTimetable]);
      } catch (error) {
        console.error('JSONファイルの読み込みに失敗しました:', error);
        alert('JSONファイルの読み込みに失敗しました。正しい形式のファイルを選択してください。');
      }
    };
    
    reader.readAsText(file);
  }, []);

  const removeTimetable = useCallback((id: string) => {
    setTimetables(prev => prev.filter(t => t.id !== id));
  }, []);

  const clearAllTimetables = useCallback(() => {
    setTimetables([]);
  }, []);

  const findCommonFreeSlots = useCallback((): FreeTimeSlot[] => {
    if (timetables.length === 0) return [];

    const commonFreeSlots: FreeTimeSlot[] = [];

    // 1限から5限まで（6限以降は除外）
    for (let period = 1; period <= 5; period++) {
      for (let dayIndex = 0; dayIndex < DAY_NAMES.length; dayIndex++) {
        const day = DAY_NAMES[dayIndex]!;
        
        // 全員がその時間に空いているかチェック
        const isEveryoneFree = timetables.every(timetable => {
          const periodData = timetable.data[period.toString()];
          if (!periodData || periodData.length <= dayIndex) return false;
          return periodData[dayIndex] === ''; // 空文字列が空きコマ
        });

        if (isEveryoneFree) {
          commonFreeSlots.push({
            day,
            period,
            periodName: PERIOD_NAMES[period - 1] || `${period}限`
          });
        }
      }
    }

    return commonFreeSlots;
  }, [timetables]);

  return {
    timetables,
    addTimetable,
    removeTimetable,
    clearAllTimetables,
    findCommonFreeSlots
  };
}
