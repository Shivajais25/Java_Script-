const insert = document.querySelector('.insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML =
     `<div class = 'color'>
        <table>
  <tr>
    <th>Key Pressed</th>
    <th>Code</th>
    </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
    </div> `
})