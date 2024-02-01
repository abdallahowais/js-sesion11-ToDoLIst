let addNewProduct = document.querySelector(".new-product");

addNewProduct.onsubmit =newProduct;
let checkbox = document.querySelector(".myCheckbox");
function newProduct(e) {
  e.preventDefault();
  let Value = "";
  let VlueArray = [];

  Value = document.querySelector(".Value").value;
  VlueArray.push(Value);
  let result = `
   <div class="checkbox ">
   <input type="checkbox" name="" id="" class="myCheckbox">
   <p class="inputName"><span class="">${Value}</span></p>
   </div>
   `;

  document.querySelector(".ValueName").innerHTML+=result;


  let checkboxes = document.querySelectorAll(".myCheckbox");
    for (let i = 0; i < checkboxes.length; i++) {
      checkbox = checkboxes[i];
      checkbox.addEventListener("change", function () { 
         let span =checkbox.closest('.checkbox').querySelector('span');
        if (checkbox.checked) {
          span.classList.add("lineThrow");
        } else {
          span.classList.remove("lineThrow");
        }
      });
    }
 
  
}