import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  // Only allow in development
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not available in production", { status: 403 });
  }

  const { path: pathSegments } = await params;

  // Reconstruct the file path
  // The media_downloads folder is two levels up from web (web is in project root, media_downloads is in project root)
  // Actually, web is j:\PRSMTECH\CLIENT-PROJECTS\Pending\Bozo\web
  // media_downloads is j:\PRSMTECH\CLIENT-PROJECTS\Pending\Bozo\media_downloads
  // So it corresponds to joining '..', 'media_downloads'

  const projectRoot = path.resolve(process.cwd(), "..");
  const mediaDir = path.join(projectRoot, "media_downloads");
  const relativePath = pathSegments.join("/");
  const filePath = path.join(mediaDir, relativePath);

  // Security check: ensure filePath is within mediaDir
  if (!filePath.startsWith(mediaDir)) {
    return new NextResponse("Access denied", { status: 403 });
  }

  try {
    if (!fs.existsSync(filePath)) {
      // Fallback: If specific file not found, try to find any file in the directory if it looks like a directory request?
      // For now, simple 404.
      // Check if there are spaces vs underscores mismatch?
      console.error(`File not found: ${filePath}`);
      return new NextResponse("File not found", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    // mime package might not be installed, use simple lookup or install it.
    // Typescript might complain if 'mime' is not installed.
    // I see 'mime' is not in package.json. I will use a simple map for common image types.

    const ext = path.extname(filePath).toLowerCase();
    let contentType = "application/octet-stream";
    if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
    if (ext === ".png") contentType = "image/png";
    if (ext === ".gif") contentType = "image/gif";
    if (ext === ".webp") contentType = "image/webp";
    if (ext === ".mp4") contentType = "video/mp4";

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Error serving local file:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
