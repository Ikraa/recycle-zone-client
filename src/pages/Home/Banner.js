import React from "react";
import "./Banner.modules.css";
const Banner = () => {
  return (
    <div className="text-center">
      <aside class="responsive-banner first">
        <div class="container-envelope">
          <svg class="cirle-a" height="160" width="160">
            <circle cx="80" cy="80" r="80" />
          </svg>
          <svg class="cirle-b" height="60" width="60">
            <circle cx="30" cy="30" r="30" />
          </svg>
          <svg class="cirle-c" height="600" width="600">
            <circle cx="300" cy="300" r="300" />
          </svg>
          <svg class="cirle-d" height="60" width="60">
            <circle cx="30" cy="30" r="30" />
          </svg>
          <img src="https://i.pinimg.com/originals/f2/d1/f9/f2d1f900f688ddca0765ec8e2d3900e1.png" />
          <div class="col-xs-12">
            <p className="paragraph-tag">
              Live Sites using our WordPress Themes
            </p>
            <a
              target="_blank"
              href="https://www.silocreativo.com/en/showcase/"
              class="more-link"
            >
              Get inspired
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Banner;
