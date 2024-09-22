import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { IoMdBookmark } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

export default function ArticleDetail({ thumbnail, title, description }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(30);
  const [isLiked, setIsLiked] = useState(false);
  const [bookmarkCount, setBookmarkCount] = useState(30);

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => {
      if (!prev) {
        setBookmarkCount(bookmarkCount + 1);
      } else {
        setBookmarkCount(bookmarkCount - 1);
      }
      return !prev;
    });
  };

  const handleLikeClick = () => {
    setIsLiked((prev) => {
      if (prev) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
      return !prev;
    });
  };
  return (
    <div className="container mt-[110px] ml-[20px] ">
      <div className="flex   ">
        <img
          src="https://th.bing.com/th/id/OIP.zoM7exeeiIqIWZHm8_KGlgHaHa?pid=ImgDet&w=190&h=190&c=7&dpr=1.9"
          alt="User Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-bold">Michael Alford</h2>
          <p className="text-gray-500">
            Published in Live View • 12 min read • Mar 5, 2024
          </p>
        </div>
      </div>
      <h1 className="text-4xl font-bold mt-8 mb-4">{title}</h1>

      <div className=" flex  clear-left">
        <img
          src={thumbnail}
          alt="Beautiful landscape"
          className="w-[200px] h-auto mb-8"
        />
        <p className="text-[16px] text-balance mt-[40px]">
          {description} Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Vitae sed veniam magni, velit corporis dolorum nemo dicta
          voluptatum atque, explicabo quia ea vero placeat repellat adipisci nam
          aliquam consequuntur beatae?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ex veritatis ut, nemo nihil consequatur, facilis
          enim exercitationem at expedita explicabo aliquam fugiat repudiandae
          nostrum natus sapiente atque earum hic? Laudantium. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Provident, inventore
          distinctio rerum perspiciatis libero aperiam minus voluptas ducimus
          nostrum eligendi facilis quia dignissimos earum sed perferendis
          architecto, excepturi, iusto cumque?Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Expedita ipsum at itaque, saepe dolorem
          tempore dignissimos ullam totam possimus pariatur minima, consequatur
          et quibusdam neque. Minus dicta ipsum tenetur cupiditate! Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Dolorum, consequatur
          quidem. Distinctio nostrum facilis tempora delectus quos ullam
          expedita quia, officia culpa aliquam incidunt pariatur qui rem libero,
          autem hic? Vel perferendis cupiditate soluta quod quam similique quia
          nulla molestias nisi. Dicta, dolore incidunt magnam, necessitatibus
          magni quae veniam modi et praesentium culpa autem, consequuntur minima
          sed iure aliquam ipsum. Magnam, fuga culpa? Doloremque, quos suscipit
          tempore molestiae odio illum inventore voluptatum iure beatae
          perspiciatis alias maiores a labore accusantium laborum ab
          voluptatibus quibusdam! Dolorem reiciendis amet vero aut porro? Illo
          enim modi facere vel soluta reiciendis rem atque! Dolore tempora iure
          eius fugiat, dolorem impedit ab temporibus. Asperiores velit quae
          doloremque quo tempora ex animi amet, excepturi voluptatem molestias?
          Laudantium voluptate ratione maxime laborum minima corporis dolorum
          nam rem, quaerat assumenda libero natus deserunt illum accusantium
          labore, veritatis eaque maiores unde. Reiciendis quis unde illum ad
          repellendus delectus et? Tempore minima molestiae hic fugiat ducimus
          odit commodi ratione rem error nisi debitis veniam illum, voluptatibus
          aut beatae voluptas cupiditate eveniet odio. Repudiandae voluptatem
          cumque perspiciatis nostrum ducimus, odio iusto! Explicabo quis
          blanditiis nemo vel libero exercitationem illo cumque excepturi,
          corporis ipsa fugiat repellat nam odit eius aspernatur accusamus est
          dolor voluptatibus eum nihil quia facere optio ullam! Minima,
          accusamus? Odit aliquam corporis reprehenderit in voluptatibus, quo,
          beatae hic sit ducimus quam rem modi soluta sunt adipisci ipsum veniam
          dolor quisquam. Molestias fugit aliquid minima similique ipsam est sed
          voluptates! Cupiditate aut, deleniti dolorem porro doloremque ipsam
          minus at voluptatem consequatur similique a incidunt error laboriosam
          qui nobis totam voluptates soluta assumenda culpa quod? Velit
          asperiores rem dignissimos doloremque amet! Consequatur illo omnis
          officia impedit repudiandae. Aliquid nisi iste eius debitis velit
          neque expedita rem quis dolorem. Rem molestias iusto, labore beatae
          corrupti optio, deserunt quaerat quam facere odio pariatur.
          Perferendis autem inventore officia consectetur rem placeat laborum
          assumenda temporibus id possimus blanditiis deleniti, voluptas
          officiis ducimus veniam fugiat sapiente fuga dolore! Voluptate
          consequatur quo earum deserunt dolores inventore iusto? Magnam vero in
          facere consequuntur libero est atque dolores nostrum id itaque? Saepe
          alias velit vero. Asperiores, at explicabo hic rem voluptatibus maxime
          labore dolores soluta? Quia fugiat voluptatem adipisci! Consequuntur,
          minus sapiente! Mollitia voluptatem quam sed sequi voluptate, commodi
          at blanditiis asperiores? Earum nostrum neque maiores nisi, autem
          distinctio mollitia possimus illo voluptatibus nihil eum, ipsum
          facilis recusandae corporis. Quam animi cupiditate architecto esse! Ea
          fuga unde quae consectetur laudantium nisi! Est delectus cupiditate ea
          ab cum sequi reprehenderit dolore provident? Unde nesciunt pariatur
          architecto soluta odit sed nobis. Ad, deleniti quidem animi beatae,
          fuga, perspiciatis reprehenderit voluptas tempore nulla magni maxime
          voluptatibus. Qui amet molestias doloremque, eaque vero, voluptates
          unde enim, necessitatibus delectus quas consequatur corrupti
          voluptatem est. Quia sunt, incidunt, cupiditate delectus commodi
          dolore optio unde placeat atque reiciendis ad laboriosam molestiae id
          laudantium aperiam nesciunt beatae distinctio totam nobis iste.
          Officiis ullam fuga blanditiis sed excepturi! Eum corrupti est, itaque
          enim aliquam quaerat atque accusantium? Magnam culpa fugit ea non
          
        </p>
      </div>

      <div className="flex w-[120px] m-8 justify-between">
        <button
          onClick={handleLikeClick}
          className="text-[24px] flex items-center transition-transform duration-200 hover:scale-110"
        >
          {isLiked ? (
            <FaHeart className="mr-4" />
          ) : (
            <FaRegHeart className="mr-4" />
          )}
          <span className="text-[16px]">{likes}</span>
        </button>
        <button
          onClick={handleBookmarkClick}
          className="text-[24px] flex items-center transition-transform duration-200 hover:scale-110"
        >
          {isBookmarked ? (
            <IoMdBookmark className="mr-2" />
          ) : (
            <CiBookmark className="mr-2 text-gray-500" />
          )}
          <span className="text-[16px]">{bookmarkCount}</span>{" "}
          {/* Display the bookmark count */}
        </button>
      </div>
    </div>
  );
}
