import CONFIG from "@dasubh/sdk-config";

export function restapi(chainId: number): string {
  const url = CONFIG[chainId].API_BASE_URL;
  console.log('we are now calling: ', url);
  return 'restapi';
}
