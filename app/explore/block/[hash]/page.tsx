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

  return (
    <section>
      Block {hash}
      Block Height: 18563263 
      Status: Unfinalized 
      Timestamp: 35 secs ago
      (Nov-13-2023 01:25:35 PM +UTC)
      Proposed On: Block proposed on slot7754826, epoch 242338
      Transactions: 164 transactions and 73 contract internal transactions in this block
      Withdrawals: 16 withdrawals in this block
      Fee Recipient: rsync-builder in 12 secs 
      Block Reward:0.107973529775748252 ETH (0 + 0.878400965533584498 - 0.770427435757836246)
      Total Difficulty: 58,750,003,716,598,352,816,469
      Size: 89,384 bytes Gas
      Used: 13,837,421 (46.12%) -8% Gas Target Gas Limit: 30,000,000 Base Fee
      Per Gas: 0.000000055677097326 ETH (55.677097326 Gwei) Burnt Fees: 🔥
      0.770427435757836246 ETH Extra Data:
    </section>
  );
}
