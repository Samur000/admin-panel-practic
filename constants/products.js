const productsPage = document.querySelector('.products')

class Products {

   render() {
      let htmlCatalog = ''

      CATALOG.forEach(({ id, name, desc, price, img }) => {
         htmlCatalog += `
         <div class="card" style="width: 18rem;">
            <img class="m-1" height="200px" style="object-fit: contain;" src="${img}"
               class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">${name}</h5>
               <span class="card-text">${desc}</span><br>
               <span class="card-price">${price}</span> p
               <div class="buttons d-flex gap-1">
                  <button type="button" onclick="createModal(this)" class="btn btn-primary">Подробнее</button>
                  <button type="button" onclick="deleteCard(this)" class="btn btn-danger">Удалить</button>
                  <button type="button" onclick="editCard(this)" class="btn btn-info text-center"><img src="icons/redact.png" alt=""></button>
               </div>
            </div>
         </div>
         `

      })
      productsPage.innerHTML = htmlCatalog
   }
}

const products = new Products()
products.render()