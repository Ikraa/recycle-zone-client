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
import { useNavigate } from "react-router-dom";
import "./Category.modules.css";
const CategoryCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div class="a-box">
      <div class="img-container">
        <div class="img-inner">
          <div class="inner-skew">
            <img alt="" src={item?.url} />
          </div>
        </div>
      </div>
      <div class="text-container">
        <h3>{item?.name}</h3>
        <div>{item?.desc}</div>
        <div className="flex justify-end mt-10">
          <button
            onClick={() => navigate(`/category/${item?.id}`)}
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
