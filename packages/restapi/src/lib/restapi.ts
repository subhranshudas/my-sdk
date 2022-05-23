import CONFIG from "@my-sdk/config";

export function restapi(chainId: number): string {
  const config = CONFIG[chainId].API_BASE_URL
  console.log(`we are using now: ${chainId}`, config);
  return 'restapi';
}
