export function Attributes() {
  const attributes = [
    {name: "erő", base: 13, added: 0, aging: 0},
    {name: "gyorsaság", base: 11, added: 0, aging: 0},
    {name: "ügyesség", base: 12, added: 0, aging: 0},
    {name: "állóképesség", base: 11, added: 0, aging: 0},
    {name: "egészség", base: 11, added: 0, aging: 0},
    {name: "karizma", base: 10, added: 0, aging: 0},
    {name: "intelligencia", base: 10, added: 0, aging: 0},
    {name: "akaraterő", base: 11, added: 0, aging: 0},
    {name: "asztrál", base: 9, added: 0, aging: 0},
    {name: "érzékelés", base: 12, added: 0, aging: 0},
  ];
  return (
    <section data-id={"tulajdonságok"}>
      <table>
        <thead>
        <tr>
          <td></td>
          <th>kaszt</th>
          <th>elosztás</th>
          <th>öregedés</th>
          <th>összesen</th>
        </tr>
        </thead>
        <tbody>
        {attributes.map(attr => (
          <tr>
            <th>{attr.name}</th>
            <td>{attr.base}</td>
            <td><input type="number" value={attr.added}/></td>
            <td><input type="number" value={attr.aging}/></td>
            <td>{attr.base + attr.added + attr.aging}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </section>
  );
}