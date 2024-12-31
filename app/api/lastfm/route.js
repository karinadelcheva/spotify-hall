import { getTopAlbums } from "@/app/lib/topAlbums";
import { getTopTracks } from "@/app/lib/topTracks";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const [topTracks, topAlbums] = await Promise.all([
      getTopTracks(process.env.CLIENT_KEY, "momchino", 10),
      getTopAlbums(process.env.CLIENT_KEY, "momchino", 10),
    ]);

    return NextResponse.json({
      topTracks,
      topAlbums
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
