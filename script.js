function calculate() 
{
 
  let c = document.getElementsByName("count")[0];
  let p = document.getElementsByName("product")[0];

  let count = parseInt(c.value);
  let price = parseInt(p.value);

  if (isNaN(count) || count < 1) {
        alert('Введите корректное количество');
        return;
    }

  const totalPrice = count * price;

  const result = document.getElementById("result");
  result.textContent = `Стоимость: ${totalPrice}`;

}