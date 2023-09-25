interface GeneralStats {
  name: string
  class: string,
  race: string
  level: number
  age: number
  background: string
}

export function General() {
  const props: GeneralStats = {name: "Ut", class: "gladiátor", race: "ork", level: 1, age: 18, background: ""};

  return (
    <section data-id={"általános"}>
    <table>
      <tbody>
      <tr>
        <th>Név</th>
        <th><input type={"text"} value={props.name} /></th>
      </tr>
      <tr>
        <th>Kaszt</th>
        <th><input type={"text"} value={props.class} /></th>
      </tr>
      <tr>
        <th>Faj</th>
        <th><input type={"text"} value={props.race} /></th>
      </tr>
      <tr>
        <th>Szint</th>
        <th><input type={"number"} min={1} value={props.level} /></th>
      </tr>
      <tr>
        <th>Életkor</th>
        <th><input type={"number"} min={0} value={props.age} /></th>
      </tr>
      <tr>
        <th>Háttér</th>
        <th><input type={"text"} value={props.background} /></th>
      </tr>
      </tbody>
    </table>
    </section>
  );
}