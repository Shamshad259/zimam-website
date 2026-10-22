// Regenerates public/og/zimam-og.png. First render scripts/og/og.html with headless Chrome:
//   chrome --headless=new --window-size=1200,630 --allow-file-access-from-files --screenshot=scripts/og/raw.png file:///.../scripts/og/og.html
import sharp from "sharp";
await sharp("scripts/og/raw.png").png({ palette: true, quality: 90, compressionLevel: 9 }).toFile("public/og/zimam-og.png");
