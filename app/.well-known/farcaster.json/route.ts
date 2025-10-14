const ROOT_URL = "https://missing-thus-204.app.ohara.ai";

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
    header:
      "eyJmaWQiOjEwNDI2MDgsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgyZTE5QmIxRmU4RThFNTNDMzM4NWRFQ0NDNTk1MTNiN0IwNmY0NTg0In0",
    payload: "eyJkb21haW4iOiJmcmFtZXJ1bm5lci52ZXJjZWwuYXBwIn0",
    signature:
      "LCstDaYGPx1RlXh0KoA5s4ehVeWwZlyTG/vtVL83YsQLa4NbMjR4WEhX1LEq0fK6Z8iCtWshIDFqUemqpQMzVRw=",
  },

  baseBuilder: {
    allowedAddresses: ["0x9b7A41f74d62595232b01C7FD1fB71C5A007Cab1"],
  },

  miniapp: {
    version: "1",
    name: "Frame Runner",
    subtitle: "A Farcaster Frame Arcade Game",
    description:
      "An endless runner game playable directly inside Farcaster Frames.",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "games",
    tags: ["arcade", "runner", "frame", "farcaster", "miniapp"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`,
    tagline: "Run, jump, and survive inside a Frame.",
    ogTitle: "Frame Runner – Farcaster Mini Game",
    ogDescription:
      "Play Frame Runner directly in your Farcaster feed and compete for the leaderboard.",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },

return NextResponse.json(manifest);
}
