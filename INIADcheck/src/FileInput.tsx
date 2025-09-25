interface FileInputProps {
  onFileSelect: (file: File) => void;
}

export function FileInput({ onFileSelect }: FileInputProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        if (file.type === 'application/json' || file.name.endsWith('.json')) {
          onFileSelect(file);
        } else {
          alert('JSONファイルのみアップロード可能です。');
        }
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-200 shadow-xl p-6">
        <div className="card-body items-center">
          <h2 className="card-title mb-4">時間割JSONファイルをアップロード</h2>
          <input
            type="file"
            className="file-input file-input-info w-full max-w-xs"
            accept=".json,application/json"
            multiple
            onChange={handleFileChange}
          />
          <p className="text-sm text-gray-500 mt-2">
            複数のJSONファイルを同時に選択できます
          </p>
        </div>
      </div>
    </div>
  );
}