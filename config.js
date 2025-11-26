/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: "Nguyễn Vân  ",
  brideName: "Văn Bảo ",

  weddingDate: "11/30/2025  16:00:00",
  location: "Ba Vì, Hà Nội, Vietnam",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/Yao4hLBSpHeJmNTk8",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11666.904072314326!2d105.2808115147952!3d21.15216149985819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31348a99d97bb735%3A0xf4fbb6e05bacffd0!2zNTcyWCtWUDYsIEJhIFbDrCwgSMOgIE7hu5lpLCBWaWV0bmFt!5e1!3m2!1sen!2s!4v1764164279515!5m2!1sen!2s",

  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/S9iVswT1Amk",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
    {src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: " Văn bảo",
      parents: "Bố: Nguyễn Văn Bằng<br>Mẹ: Nguyễn Thị Hiền",
      address: "Địa chỉ: Thôn Cổ Châu, xã Thư Lâm, Thành phố Hà Nội	"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Nguyễn Vân ",
      parents: "Bố: Nguyễn Thanh Hảo<br>Mẹ: Nguyễn Thị Mỵ",
      address: "Địa chỉ: Thôn 4, xã Bất Bạt, Thành phố Hà Nội "
    }
  },
};
