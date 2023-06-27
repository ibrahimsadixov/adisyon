const cells = document.getElementById("cells");
const list = document.getElementById("list");

window.onload = () => {
    cells.classList.add("clicked")
  const cards = document.querySelector('.cards');

  for (let index = 0; index < 3; index++) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const imageElement = document.createElement('img');
    imageElement.src = 'https://cdn.adisyo.com/mahrezphotos/3550869_47842_20230531034812.jpg?width=200';
    imageElement.classList.add('image');

    const contentElement = document.createElement('div');
    contentElement.classList.add('content');

    const titleElement = document.createElement('p');
    titleElement.classList.add('title');
    titleElement.textContent = 'Mung İzmir Kahvaltı';

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description');
    descriptionElement.textContent = 'Domates, salatalık, yeşil zeytin, siyah zeytin, kahvaltılık ...';

    const priceElement = document.createElement('div');
    priceElement.classList.add('price');
    priceElement.innerHTML = '<b>₺135,00</b>';

    contentElement.appendChild(titleElement);
    contentElement.appendChild(descriptionElement);
    contentElement.appendChild(priceElement);
    cardElement.appendChild(imageElement);
    cardElement.appendChild(contentElement);

    cards.appendChild(cardElement);
  }

  const card = document.querySelectorAll(".card");
  const content = document.querySelectorAll(".content");

  list.addEventListener("click", () => {
    card.forEach(element => {
      element.classList.add("list");
    });
    content.forEach(element => {
      element.classList.add("content-list");
    });
    cards.classList.add("cards-list");
  });

  cells.addEventListener("click", () => {
    
   
    card.forEach(element => {
      element.classList.remove("list");
    });
    cards.classList.remove("cards-list");
  });

  const closer = document.querySelector(".closer");

  card.forEach(element => {
    element.addEventListener("click", () => {
      const enlarged = document.createElement('div');
      enlarged.classList.add('enlarged');
      document.body.appendChild(enlarged);
      


      const closer = document.createElement('div');
      closer.classList.add('closer');
      enlarged.appendChild(closer);
  
      const clonedElement = element.cloneNode(true);
      clonedElement.classList.add("card-clicked");
      const closeBtn = document.createElement('button');
      closeBtn.classList.add('closeButton');
      closeBtn.innerHTML="X"
      clonedElement.appendChild(closeBtn);
      const clonedContent = clonedElement.querySelector('.content');
      clonedContent.classList.add("content-enlarged");
  
      enlarged.appendChild(clonedElement);
  
      closer.addEventListener("click", () => {
        document.body.removeChild(enlarged);
      });
      closeBtn.addEventListener("click", () => {
        document.body.removeChild(enlarged);
      });
    });
  });
  
};

cells.addEventListener("click",()=>{
    cells.classList.add("clicked")
    list.classList.remove("clicked")
})
list.addEventListener("click",()=>{
    cells.classList.remove("clicked")
    list.classList.add("clicked")
})