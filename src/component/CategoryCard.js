// import React from "react";
// import "./Category.modules.css";
// const CategoryCard = () => {
//   return (
//     <div className="category-wrapper">
//       {/* <div style={{height:"100vh"}}>

//         </div> */}
//       <div class="category-container">
//         {[...Array(4).keys()].map((item, i) => (
//           <div class="card">
//             <div class="box">
//               <div class="content">
//                 <h2>03</h2>
//                 <h3>Card Three</h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Labore, totam velit? Iure nemo labore inventore?
//                 </p>
//                 <a href="#">Read More</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;
import React from "react";
import "./Category.modules.css";
const CategoryCard = () => {
  return (
    <div class="a-box">
      <div class="img-container">
        <div class="img-inner">
          <div class="inner-skew">
            <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
          </div>
        </div>
      </div>
      <div class="text-container">
        <h3>A blue bird</h3>
        <div>
          This a demo experiment to skew image container. It looks good.
        </div>
        <div className="flex justify-end mt-10">
          <button
            className="py-2 px-4 common-bg text-white font-bold uppercase rounded-[4px]

          "
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
