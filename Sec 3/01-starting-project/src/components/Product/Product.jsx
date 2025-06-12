import { genRandomInt } from "../Header/Header.jsx";

const reactDescriptions = "Show Product";

export default function Product() {
  const lsProduct = [1, 2, 3, 4];
  const getProduct = lsProduct[genRandomInt(2)];
  console.log(getProduct);

  return (
    <div>
      <h1>Product: {getProduct}</h1>
    </div>
  );
}

// -------
// export default function Header() {
//   const description = reactDescriptions[genRandomInt(2)];

//   return (
//     <header>
//       <img src={reactImg} alt="Stylized atom" />
//       <h1>React Essentials</h1>
//       <p>
//         {description} React concepts you will need for almost any app you are
//         going to build!
//       </p>
//     </header>
//   );
// }
