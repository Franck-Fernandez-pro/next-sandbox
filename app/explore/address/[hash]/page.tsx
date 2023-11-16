export default async function Page({
  params: { hash },
}: {
  params: { hash: string };
}) {
  // const response = await axiosInfura.post('', {
  //   jsonrpc: '2.0',
  //   id: 1,
  //   method: 'eth_getBlockByNumber',
  //   params: ['latest', true],
  // });

  return <section>Transaction {hash}</section>;
}
