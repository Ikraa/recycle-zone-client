import React from "react";

const PhotoGallary = () => {
  return (
    <div className="my-6">
      <h1 className="text-center text-xl lg:text-4xl font-bold mt-12 common-text-color uppercase">
        Our Photo Gallary
      </h1>
      <section class="overflow-hidden text-gray-700">
        <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://www.bdstall.com/asset/product-image/giant_162419.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.hermanmiller.group/m/453746169345bd8d/W-DWR_9097_100360310_cloud_chrome_v1_001.png?auto=format&mediaId=06D8B51B-45B2-40D3-98105A3722465747&rect=.0498%2C.3854%2C.6759%2C.521&auto=format&w=1000&q=40"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://thefinancialexpress.com.bd/uploads/1668596506.jpeg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://fastcdn.pro/FileGallery/sermehiranian.com/Posts/3360_SL%20CR.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://www.bproperty.com/blog/wp-content/uploads/2022/01/IMG_9534.jpg"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://www.next.co.uk/nxtcms/resource/blob/5343740/8d8ea70c0a90f86d70e5b9baf3a9178b/herobanner-data.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoGallary;
