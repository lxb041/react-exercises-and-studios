export default function BookList() {
   let pageTitle = "Thriller Books";
   let book1 = "https://m.media-amazon.com/images/I/41GU8szRv3L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51OlibwNbML._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51EVmLiagoL._SX329_BO1,204,203,200_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Toxin" />
         <img src={book2} alt="Harmful Intent (A Medical Thriller)!" />
         <img src={book3} alt="Pandemic" />
      </div>      
   );
}