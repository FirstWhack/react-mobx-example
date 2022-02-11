import * as React from "react";
import { observer } from "mobx-react";
import { CoinStoreContext } from "../store/websocketStore";
import { JsonToTable } from "react-json-to-table";

export default observer(() => {
  const CoinStore = React.useContext(CoinStoreContext);

  const { coins } = CoinStore;
  return (
    <div>
      <h1>Coins (websocket): </h1>
      <JsonToTable
        json={Object.keys(coins)
          .sort()
          .reduce((obj, key) => {
            obj[key] = coins[key];
            return obj;
          }, {} as { [key: string]: string })}
      />
    </div>
  );
});
