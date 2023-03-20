function createModal(btn) {
   const cardBody = btn.closest('.card-body')
   const cardTitle = cardBody.querySelector('.card-title')
   const cardText = cardBody.querySelector('.card-text')
   const cardImg = cardBody.previousElementSibling
   const cardImgSrc = cardImg.getAttribute('src')

   const html = `
      <button type="button" class="btn-close btn-close-white"></button>
      <h2>Товар: ${cardTitle.innerHTML}</h2>
      <p>Описание товара: ${cardText.innerHTML}</p>
      <img src="${cardImgSrc}"></img>
   `

   const modalBody = document.createElement('div')
   modalBody.classList.add('modal-body')
   modalBody.innerHTML = html
   cardBody.append(modalBody)

   const closeBtn = modalBody.querySelector('button')
   closeBtn.addEventListener('click', () => {
      modalBody.remove()
   })
}

function deleteCard(btn) {
   const card = btn.closest('.card')
   card.remove()
}

function editCard(btn) {
   const card = btn.closest('.card')
   btn.outerHTML = '<button type="button" onclick="saveEdit(this)" class="btn btn-info text-center"><img src="icons/ok.png" alt=""></button>'
   const title = card.querySelector('.card-title')
   const text = card.querySelector('.card-text')
   const price = card.querySelector('.card-price')
   
   title.outerHTML = `<input class="title-input" value="${title.innerHTML}">`
   text.outerHTML = `<input class="text-input" value="${text.innerHTML}">`
   price.outerHTML = `<input class="price-input" value="${price.innerHTML}">`
}

function saveEdit(btn) {
   const card = btn.closest('.card')
   btn.outerHTML = '<button type="button" onclick="editCard(this)" class="btn btn-info text-center"><img src="icons/redact.png" alt=""></button>'
   const title = card.querySelector('.title-input')
   const text = card.querySelector('.text-input')
   const price = card.querySelector('.price-input')
   
   title.outerHTML = `<h5 class="card-title">${title.value}</h5>`
   text.outerHTML = `<span class="card-text">${text.value}</span>`
   price.outerHTML = `<span class="card-price">${price.value}</span>`
}