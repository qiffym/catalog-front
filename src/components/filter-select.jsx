export function FilterSelect() {
  return (
    <select className="select select-bordered w-full max-w-md">
      <option disabled selected>
        <p className="opacity-30">Pilih Filter</p>
      </option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
  )
}
