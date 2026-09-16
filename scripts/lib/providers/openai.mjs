// Image provider: OpenAI's image model with a transparent background, the creator's key.
export async function generate({ client, key, prompt }) {
  const { pngBase64 } = await client.image({ key, prompt });
  if (!pngBase64) throw new Error("the image model returned no image");
  return Buffer.from(pngBase64, "base64");
}
