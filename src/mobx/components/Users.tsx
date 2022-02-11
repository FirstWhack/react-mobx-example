import { observer } from "mobx-react";
import * as React from "react";
import { APIStoreContext } from "../store/apiStore";

export default observer(() => {
  const APIStore = React.useContext(APIStoreContext);

  const { users } = APIStore;
  return (
    <div>
      <h1>Users (simple lazy fetch): </h1>
      <table>
        {users.map(({ name, id, username }) => {
          return (
            <tr>
              <td>{name}</td>
              <td>{id}</td>
              <td>{username}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
});
