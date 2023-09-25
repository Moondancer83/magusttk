export function Statistics() {
  return (
    <section data-id={"statisztikák"}>
      <table>
        <thead>
        <tr>
          <td></td>
          <th>Sp</th>
          <th>HM</th>
          <th>érték</th>
          <th>max</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>KÉ</th>
          <td colSpan={2}><input type={"number"} min={0}/></td>
          <th>CALC</th>
          <th>CALC</th>
        </tr>
        <tr>
          <th>TÉ</th>
          <td><input type={"number"} min={0}/></td>
          <td><input type={"number"} min={0}/></td>
          <th>CALC</th>
          <th>CALC</th>
        </tr>
        <tr>
          <th>VÉ</th>
          <td><input type={"number"} min={0} /></td>
          <td><input type={"number"} min={0} /></td>
          <th>CALC</th>
          <th>CALC</th>
        </tr>
        <tr>
          <th>CÉ</th>
          <td><input type={"number"} min={0} /></td>
          <td><input type={"number"} min={0} /></td>
          <th>CALC</th>
          <th>CALC</th>
        </tr>
        <tr>
          <th>Ép</th>
          <td></td>
          <td></td>
          <th>CALC</th>
        </tr>
        <tr>
          <th>Fp</th>
          <td colSpan={2}><input type={"number"} min={0}/></td>
          <th>CALC</th>
          <th>CALC</th>
        </tr>
        <tr>
          <th>Pp</th>
          <td colSpan={2}><input type={"number"} min={0}/></td>
          <th>CALC</th>
          <th>CALC</th>
        </tr>
        <tr>
          <th>Mp</th>
          <td colSpan={2}><input type={"number"} min={0}/></td>
          <th>CALC</th>
          <th>CALC</th>
        </tr>
        <tr>
          <th>Kp</th>
          <td colSpan={2}><input type={"number"} min={0}/></td>
        </tr>
        <tr>
          <th>Lp</th>
          <td colSpan={2}><input type={"number"} min={0} max={9}/></td>
        </tr>
        <tr>
          <th>Kaszt adottságok</th>
          <td colSpan={2}><input type={"number"} min={0}/></td>
        </tr>
        </tbody>
      </table>
    </section>
  );
}