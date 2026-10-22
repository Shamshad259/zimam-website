// Real site photos only, taken from the company profile (pp. 13-19) and stored in
// public/images/profile/site/. Categories are based on what each photo shows;
// reassign `category` if a photo belongs elsewhere. Add new photos from assets/photos here.
export type GalleryCategory = "electrical" | "elv-telecom" | "mechanical" | "civil";

export interface GalleryItem {
  src: string;
  width: number;
  height: number;
  category: GalleryCategory;
}

export const galleryItems: GalleryItem[] = [
  { src: "/images/profile/site/site-p13-01.webp", width: 1200, height: 1600, category: "electrical" },
  { src: "/images/profile/site/site-p13-02.webp", width: 1600, height: 1200, category: "electrical" },
  { src: "/images/profile/site/site-p13-03.webp", width: 1200, height: 1600, category: "electrical" },
  { src: "/images/profile/site/site-p13-04.webp", width: 1200, height: 1600, category: "elv-telecom" },
  { src: "/images/profile/site/site-p13-05.webp", width: 1200, height: 1600, category: "civil" },
  { src: "/images/profile/site/site-p13-06.webp", width: 1200, height: 1600, category: "electrical" },
  { src: "/images/profile/site/site-p13-07.webp", width: 1200, height: 1600, category: "civil" },
  { src: "/images/profile/site/site-p13-08.webp", width: 1200, height: 1600, category: "electrical" },
  { src: "/images/profile/site/site-p13-09.webp", width: 1200, height: 1600, category: "elv-telecom" },
  { src: "/images/profile/site/site-p14-01.webp", width: 1600, height: 1200, category: "mechanical" },
  { src: "/images/profile/site/site-p14-02.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p14-03.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p14-04.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p14-05.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p14-06.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p14-07.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p14-08.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p14-09.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p14-10.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p15-01.webp", width: 722, height: 1600, category: "mechanical" },
  { src: "/images/profile/site/site-p15-02.webp", width: 577, height: 1280, category: "mechanical" },
  { src: "/images/profile/site/site-p15-03.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p15-04.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p15-05.webp", width: 722, height: 1600, category: "mechanical" },
  { src: "/images/profile/site/site-p15-06.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p16-01.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p16-02.webp", width: 520, height: 1156, category: "civil" },
  { src: "/images/profile/site/site-p16-03.webp", width: 520, height: 1156, category: "civil" },
  { src: "/images/profile/site/site-p16-04.webp", width: 722, height: 1600, category: "mechanical" },
  { src: "/images/profile/site/site-p16-05.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p16-06.webp", width: 1156, height: 520, category: "mechanical" },
  { src: "/images/profile/site/site-p16-07.webp", width: 520, height: 1156, category: "mechanical" },
  { src: "/images/profile/site/site-p16-08.webp", width: 1156, height: 520, category: "mechanical" },
  { src: "/images/profile/site/site-p16-09.webp", width: 577, height: 1280, category: "mechanical" },
  { src: "/images/profile/site/site-p17-01.webp", width: 1200, height: 1600, category: "electrical" },
  { src: "/images/profile/site/site-p17-02.webp", width: 1600, height: 1200, category: "civil" },
  { src: "/images/profile/site/site-p17-03.webp", width: 942, height: 1064, category: "civil" },
  { src: "/images/profile/site/site-p17-04.webp", width: 1600, height: 1200, category: "electrical" },
  { src: "/images/profile/site/site-p17-05.webp", width: 1200, height: 1600, category: "mechanical" },
  { src: "/images/profile/site/site-p17-06.webp", width: 1200, height: 1600, category: "electrical" },
  { src: "/images/profile/site/site-p17-07.webp", width: 1200, height: 1600, category: "electrical" },
  { src: "/images/profile/site/site-p17-08.webp", width: 1391, height: 1043, category: "mechanical" },
  { src: "/images/profile/site/site-p18-01.webp", width: 1391, height: 1043, category: "mechanical" },
  { src: "/images/profile/site/site-p18-02.webp", width: 912, height: 1159, category: "civil" },
  { src: "/images/profile/site/site-p18-03.webp", width: 720, height: 1600, category: "civil" },
  { src: "/images/profile/site/site-p18-04.webp", width: 1600, height: 1168, category: "civil" },
  { src: "/images/profile/site/site-p18-05.webp", width: 1001, height: 1043, category: "civil" },
  { src: "/images/profile/site/site-p18-06.webp", width: 576, height: 1280, category: "civil" },
  { src: "/images/profile/site/site-p18-07.webp", width: 1600, height: 1200, category: "civil" },
  { src: "/images/profile/site/site-p18-08.webp", width: 1200, height: 1600, category: "electrical" },
  { src: "/images/profile/site/site-p18-09.webp", width: 720, height: 1600, category: "civil" },
  { src: "/images/profile/site/site-p19-01.webp", width: 1280, height: 576, category: "civil" },
  { src: "/images/profile/site/site-p19-02.webp", width: 450, height: 296, category: "electrical" },
  { src: "/images/profile/site/site-p19-03.webp", width: 576, height: 1024, category: "elv-telecom" },
  { src: "/images/profile/site/site-p19-04.webp", width: 576, height: 1280, category: "civil" },
  { src: "/images/profile/site/site-p19-05.webp", width: 1000, height: 640, category: "electrical" },
  { src: "/images/profile/site/site-p19-06.webp", width: 1448, height: 1086, category: "civil" },
  { src: "/images/profile/site/site-p19-07.webp", width: 1086, height: 1448, category: "elv-telecom" },
  { src: "/images/profile/site/site-p19-08.webp", width: 1086, height: 1448, category: "elv-telecom" },
  { src: "/images/profile/site/site-p19-09.webp", width: 1059, height: 1043, category: "civil" },
];
