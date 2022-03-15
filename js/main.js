
function table(){
  let resultHTML = '';
  resultHTML += `<table border=1 width=600 height=500>
    <tr>
      <th colspan=4>가계부</th>

    </tr>
    <tr>
      <th>항목</th>
      <th>수입</th>
      <th>지출</th>
      <th>잔액</th>
    </tr>
    <tr>
      <th>용돈</th>
      <td bgcolor=skyblue;> 200,000</td>
      <td></td>
      <td>200,000</td>
    </tr>
    <tr>
      <th>점심값</th>
      <td></td>
      <td bgcolor=#ff5900; style="color:white">5000</td>
      <td>195,00</td>

    </tr>
    <tr>
      <th>책값</th>
      <td></td>
      <td bgcolor=#ff5900; style="color:white">20,000</td>
      <td>175,000</td>

    </tr>
    <tr>
      <th>알바비</th>
      <td bgcolor=skyblue;>100,000</td>
      <td></td>
      <td>275,000</td>

    </tr>
    <tr>
      <th>총 잔액</th>
      <td colspan=3 bgcolor=blue; style="color:white">275,000</td>


    </tr>
  </table>
  </div>`;
  document.getElementById("table").innerHTML = resultHTML;
}

table();
