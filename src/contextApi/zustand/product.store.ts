import { create } from "zustand";

export interface Props {
  products: ProductProps[];
}

export const store = create<Props>(() => ({
  products: [
    {
      imgs: [
        "https://cdn.pixabay.com/photo/2023/07/19/04/56/european-shorthair-8136065_1280.jpg",
      ],
      name: "고양이",
      price: "200000",
      quan: 72,
      id: "111",
    },
    {
      imgs: [
        "https://cdn.pixabay.com/photo/2024/05/08/17/45/animal-8748794_640.jpg",
      ],
      name: "호랑이",
      price: "9000000",
      quan: 3,
      id: "222",
    },
    {
      imgs: [
        "https://cdn.pixabay.com/photo/2012/02/28/00/49/snow-17854_640.jpg",
      ],
      name: "다람쥐",
      price: "500000",
      quan: 60,
      id: "333",
    },
    {
      imgs: [
        "https://cdn.pixabay.com/photo/2023/08/05/15/42/panda-8171354_640.jpg",
      ],
      name: "판다",
      price: "5000000",
      quan: 8,
      id: "444",
    },
    {
      imgs: [
        "https://pixabay.com/ko/photos/%EC%BB%A4%ED%94%BC-%EC%BD%A9-%EC%B9%B4%ED%8E%98-7066308/",
        "https://pixabay.com/ko/photos/%EC%BB%A4%ED%94%BC-%EC%BB%A4%ED%94%BC-%EC%BD%A9-%EB%B0%A9%ED%96%A5-%EA%B5%AC%EC%9A%B4-%EA%B2%83-4591159/",
        "https://pixabay.com/ko/photos/%EC%BB%A4%ED%94%BC-%EC%BD%A9-%EC%BB%A4%ED%94%BC-%EB%B3%B6%EC%9D%80-%EC%BB%A4%ED%94%BC-%EC%BD%A9-6603499/",
        "https://pixabay.com/ko/photos/%EC%BB%A4%ED%94%BC-%EC%BD%A9-%EC%B9%B4%ED%8E%98%EC%9D%B8-%EA%B5%AC%EC%9A%B4-%EA%B2%83-8406187/",
      ],
      name: "커피",
      price: "3000",
      quan: 1,
      id: "555",
    },
    {
      imgs: [
        "https://cdn.pixabay.com/photo/2021/09/11/10/42/camping-6615226_640.jpg",
        "https://pixabay.com/ko/photos/%EB%9D%BC%EB%A9%B4-%EA%B5%AD%EC%88%98-%EC%A0%91%EC%8B%9C-%EC%9D%8C%EC%8B%9D-5579023/",
        "https://cdn.pixabay.com/photo/2021/11/18/11/43/noodles-6806153_640.jpg",
        "https://cdn.pixabay.com/photo/2016/02/20/09/04/food-1211752_640.jpg",
      ],
      name: "라면",
      price: "1000",
      quan: 5,
      id: "666",
    },

    {
      imgs: [
        "https://cdn.pixabay.com/photo/2017/03/30/04/53/yellow-2187234_1280.jpg",
      ],
      name: "연필1",
      price: "10000",
      quan: 1,
      id: "777",
    },
    {
      imgs: [
        "https://cdn.pixabay.com/photo/2019/06/29/05/41/pencil-4305457_640.jpg",
      ],
      name: "연필2",
      price: "20000",
      quan: 2,
      id: "888",
    },
    {
      imgs: [
        "https://cdn.pixabay.com/photo/2020/02/27/21/20/pencil-4885867_640.png",
      ],
      name: "연필3",
      price: "30000",
      quan: 3,
      id: "999",
    },
    {
      imgs: [
        "https://cdn.pixabay.com/photo/2017/11/08/13/09/crayons-2930356_640.jpg",
      ],
      name: "연필4",
      price: "40000",
      quan: 4,
      id: "10101",
    },

    {
      imgs: [
        "https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_640.jpg",
        "https://cdn.pixabay.com/photo/2020/07/11/16/16/jeans-5394561_640.jpg",
        "https://cdn.pixabay.com/photo/2018/03/12/22/15/clothing-3221103_640.jpg",
        "https://cdn.pixabay.com/photo/2021/10/28/14/32/jeans-6749852_640.jpg",
      ],
      name: "의류",
      price: "20000",
      quan: 34,
      id: "123123",
    },
    {
      imgs: [
        "https://cdn.pixabay.com/photo/2016/12/13/03/31/scarf-1903224_640.jpg",
        "https://cdn.pixabay.com/photo/2020/02/07/09/24/handwoven-4826672_640.jpg",
        "https://cdn.pixabay.com/photo/2018/01/14/13/25/shawl-3081823_640.jpg",
        "https://cdn.pixabay.com/photo/2019/01/16/12/59/wool-3935903_640.jpg",
      ],
      name: "목도리",
      price: "10000",
      quan: 64,
      id: "123123312323",
    },
  ],
}));
