import { useState, useEffect } from "react";

function LatihanHooks() {
  const [nilai, setNilai] = useState(0);
  const umur = 0;

  useEffect(() => {
    console.log(nilai); // ini akan di jalankan pertama di render dan ketika componentdiUpdate
  }, [nilai]); //mata
  return (
    <div>
      {nilai}
      <div>
        <button onClick={() => setNilai(nilai + 1)}>Tambah</button>
      </div>
    </div>
  );
}

export default LatihanHooks;
