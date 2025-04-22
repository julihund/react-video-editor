import { IVideo } from "@designcombo/types";

export const VIDEOS = [

  {
    id: "video100",
    details: {
      src: "videos/sample.mp4",
    },
    type: "video",
    preview:
      "https://cdn.designcombo.dev/thumbnails/Happiness-shouldnt-depend.png",
    duration: 17000,
  },
  {
    id: "video1",
    details: { src: "https://cdn.designcombo.dev/videos/demo-video-1.mp4" },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-1.png",
    duration: 17000,
  },
  {
    id: "video2",
    details: { src: "https://cdn.designcombo.dev/videos/demo-video-2.mp4" },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-2.png",
    duration: 25000,
  },
  {
    id: "video3",
    details: { src: "https://cdn.designcombo.dev/videos/demo-video-3.mp4" },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-3.png",
    duration: 20000,
  },
  {
    id: "video4",
    details: { src: "https://cdn.designcombo.dev/videos/demo-video-4.mp4" },
    type: "video",
    preview: "https://cdn.designcombo.dev/thumbnails/demo-video-s-4.png",
    duration: 20000,
  },
  
] as Partial<IVideo>[];
