"use server";

export default async function test() {
  await new Promise((r) => setTimeout(r, 10000));
  return "success";
}
