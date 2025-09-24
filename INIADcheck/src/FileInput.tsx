export function FileInput() {
    return (
        <div className="flex justify-center">
            <div className="card bg-base-200 shadow-xl p-6">
                <div className="card-body items-center">
                    <h2 className="card-title mb-4">ファイルを選択してください</h2>
                    <input type="file" className="file-input file-input-info w-full max-w-xs" />
                </div>
            </div>
        </div>
    )
}