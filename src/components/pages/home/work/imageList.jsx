import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: "100%", minHeight: 460 }}
      variant="quilted"
      cols={6}
      rowHeight={160}
    >
      {itemData.map((item) => (
        <ImageListItem
          className="hover"
          sx={{ margin: "10px" }}
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://i12.fotocdn.net/s127/b2aafe77cfab94a0/public_pin_m/2891533319.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://cdni.rbth.com/rbthmedia/images/all/2016/08/12/Must_do_experiences_St_Pete/st_isaac_cathedral_square.jpg",
    title: "Burger",
  },
  {
    img: "https://c1.35photo.pro/photos_temp/sizes/575/2878389_500n.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/736x/62/d4/58/62d45811f4e71dfe09d0f1e283391f49.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://img-fotki.yandex.ru/get/9811/159988157.e/0_fe98f_377308a9_orig",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://i.ytimg.com/vi/NgT5FSzqwSo/maxresdefault.jpg",
    title: "Honey",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://nastanova.com/wp-content/uploads/2019/01/2a56cb214aee24692b3eeaa0008300e7.jpg",
    title: "Basketball",
  },
  {
    img: "https://www.photoforum.ru/f/photo/000/485/485828_70.jpg",
    title: "Fern",
  },
  {
    img: "https://freedesignfile.com/upload/2017/07/World-Cultural-Heritage-St.-Petersburg-Stock-Photo-10.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i11.fotocdn.net/s121/191cb743663eb7f7/public_pin_m/2762807149.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://m1.35photo.pro/photos_temp/sizes/1009/5046252_800n.jpg",
    title: "Sea star",
  },
  {
    img: "https://krot.info/uploads/posts/2021-09/thumbs/1631739742_20-krot-mobi-p-vidi-sankt-peterburga-krasivie-foto-24.jpg",
    title: "Bike",
    cols: 2,
  },
];
